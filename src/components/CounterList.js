import React from "react";
import PropTypes from 'prop-types';

import './CounterList.css';
import Counter from "./Counter";

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    console.dir(counters)


    const counterList = counters.map((counter, index) => {
        return <Counter
            key={index}
            index={index}
            {...counter}
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
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
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