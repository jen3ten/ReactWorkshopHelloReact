import React, {Component} from 'react';
import Decrementor from './Decrementor';
import Incrementor from './Incrementor';
import CounterDisplay from './CounterDisplay';

class Counter extends Component{
    constructor() {
        super();
        this.state = { current: 42 };
    }
    increment = () => {
        this.setState(
            {current : this.state.current + 1}
        );
    }
    decrement() {
        this.setState(
            {current : this.state.current - 1}
        ); //Without the fat arrow you need to bind, see below
    } 
    render(){
        return(
            <div>
                <Decrementor decrease={this.decrement.bind(this)}/>
                <CounterDisplay current={this.state.current}/>
                <Incrementor increase={this.increment}/>
            </div>
        );
    }
}

export default Counter;