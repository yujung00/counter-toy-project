import React from "react";
import PropTypes from 'prop-types';

import './CounterList.css';
import Counter from "./Counter";
import {List} from 'immutable';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map((counter, index) => {
        return <Counter
            key={index}
            index={index}
            {...counter.toJS()}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        />
    });

    return (
        <div className="CounterList">
            {counterList}
        </div>
    )
}

CounterList.propTypes = {
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: console.warn('onIncrement not defined'),
    onDecrement: console.warn('onDecrement not defined'),
    onSetColor: console.warn('onSetColor not defined'),
};

export  default CounterList;