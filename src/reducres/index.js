import * as types from '../actions/ActionTypes';
import {Map, List} from 'immutable';

const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})

/*const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};*/

function counter(state = initialState, action){
    const counters = state.get('counters');
    const {index, color} = action;

    switch (action.type) {
        case types.CREATE:

            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })))

            /*return {
                counters: counters.concat({
                    color: action.color,
                    number: 0
                })
            };*/
        case types.REMOVE:
            return state.set('counters', counters.pop());
            /*return {
                counters: counters.splice(0, counters.length -1)
            };*/

        case types.INCREMENT:

            return state.set('counters', counters.update(
                index,
                (counter) => counter.set('number', counter.get('number')+1)
            ));

            /*nextCounters[action.index] = {
                ...select,
                number: select.number+1
            };
            return {
                counters: nextCounters
            };*/

        case types.DECREMENT:

            return state.set('counters', counters.update(
                index,
                (counter) => counter.set('number', counter.get('number')-1)
            ));

            /*nextCounters[action.index] = {
                ...select,
                number: select.number-1
            };
            return {
                counters: nextCounters
            };*/

        case types.SET_COLOR:
            return state.set('counters', counters.update(
                index,
                (counter) => counter.set('color', color)
            ));

            /*nextCounters[action.index] = {
                ...select,
                color: action.color
            };
            return {
                counters: nextCounters
            };*/

        default:
            return state;

    }
}

export default counter;