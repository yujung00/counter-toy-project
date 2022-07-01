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