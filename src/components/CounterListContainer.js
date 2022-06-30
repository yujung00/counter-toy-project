import * as actions from '../actions';
import {connect} from 'react-redux';
import {getRandomColor} from "../utils";
import CounterList from "./CounterList";

const mapStateToProps = (state) => {

    return {
        counters: state.counters
    };
};

const mapDispatchToProps = (dispatch) => ({
   onIncrement: (index) => {
       console.dir(index)
       return dispatch(actions.increment(index));
   },
   onDecrement: (index) => dispatch(actions.decrement(index)),
   onSetColor: (index) => {
       const color = getRandomColor();
       console.dir(`index :: :${index}`)
       dispatch(actions.setColor({index, color}));
   }
});

const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterListContainer;

