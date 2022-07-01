import React, {Component} from "react";
import Counter from "../components/Counter";
import ContactContainer from "../components/ContactContainer";
import Buttons from "../components/Button";
import CounterListContainer from "../components/CounterListContainer";

import { connect } from 'react-redux';
import * as actions from '../actions';
import {getRandomColor} from "../utils";
import Immutable from 'immutable';

class App extends Component {
    render() {
        const {onCreate, onRemove} = this.props;


        //immutable test

        var Map = Immutable.Map;
        var fromJS = Immutable.fromJS;

        var data1 = fromJS({
            a: 1,
            b: 2,
            c: {
                d: 3,
                e: 4,
                f: 5
            }
        })
        var data = Map({
            a: 1,
            b: 2,
            c: Map({
                d: 3,
                e: 4,
                f: 5
            })
        });
/*
        const newData = data.set('a', 4)
            .setIn(['c', 'd'], 10)
            .setIn(['c', 'e'], 10)*/

        var newData = data.merge({ a: 10, b: 10 })

        const List = Immutable.List;
        var list = List([
            Map({value: 1}),
            Map({value: 2})
        ])


        const newList = list.update(1,
            item => item.set('value', item.get('value') * 5)
        );
        console.dir(newList.getIn([1, 'value']));
        console.dir(list.getIn([0, 'value']));




        return (
            <div className="App">
                <Buttons onCreate={onCreate} onRemove={onRemove}/>
                <CounterListContainer/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);