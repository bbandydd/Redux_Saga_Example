import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import counterAction from '../redux/counter/counterAction';

@connect(
    state => ({
        count: state.counterReducer
    }),
    dispatch => ({
        counterAction: bindActionCreators(counterAction, dispatch)
    })
)
export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, counterAction } = this.props;

        return (
            <div>
                <p>Click: {count} times</p>
                <div> 
                    <button onClick={() => counterAction.increment()}>
                        +
                    </button>
                    <button onClick={() => counterAction.decrement()}>
                        -
                    </button>
                    <button onClick={() => counterAction.incrementIfOdd()}>
                        Increment If Odd
                    </button>
                    <button onClick={() => counterAction.incrementAsync()}>
                        Increment Async
                    </button>
                </div>
            </div>
        )
    }
}