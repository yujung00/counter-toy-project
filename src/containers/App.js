import React, {Component} from "react";
import Buttons from "../components/Button";
import CounterListContainer from "../components/CounterListContainer";

import { connect } from 'react-redux';
import * as actions from '../modules';
import {getRandomColor} from "../utils";
import immutable from 'immutable';

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