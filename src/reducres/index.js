import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

function counter(state = initialState, action){
    const {counters} = state;
    const {index} = action;

    const select = counters[index];
    const nextCounters = [...counters];

    switch (action.type) {
        case types.CREATE:

            return {
                counters: counters.concat({
                    color: action.color,
                    number: 0
                })
            };
        case types.REMOVE:
            return {
                counters: counters.splice(0, counters.length -1)
            };

        case types.INCREMENT:

            nextCounters[action.index] = {
                ...select,
                number: select.number+1
            };
            return {
                counters: nextCounters
            };

        case types.DECREMENT:

            nextCounters[action.index] = {
                ...select,
                number: select.number-1
            };
            return {
                counters: nextCounters
            };

        case types.SET_COLOR:

            nextCounters[action.index] = {
                ...select,
                color: action.color
            };
            return {
                counters: nextCounters
            };

        default:
            return state;

    }
}

export default counter;