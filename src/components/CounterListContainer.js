import * as actions from '../modules';
import {connect} from 'react-redux';
import {getRandomColor} from "../utils";
import CounterList from "./CounterList";

const mapStateToProps = (state) => {

    return {
        counters: state.get('counters')
    };
};

const mapDispatchToProps = (dispatch) => ({
   onIncrement: (index) => {
       return dispatch(actions.increment(index));
   },
   onDecrement: (index) => dispatch(actions.decrement(index)),
   onSetColor: (index) => {
       const color = getRandomColor();
       dispatch(actions.setColor({index, color}));
   }
});

const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterListContainer;

