//
import React, {Component} from 'react';
import Decrementor from './Decrementor';
import Incrementor from './Incrementor';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
    render(){
        const {decrement, current, increment} = this.props;
        return(
            <div>
                <Incrementor increase={increment}/>
                <CounterDisplay current={current}/>
                <Decrementor decrease={decrement}/>
            </div>
        );
    }
}

export default Counter;