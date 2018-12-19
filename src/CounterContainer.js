import React, {Component} from 'react';
import Decrementor from './Decrementor';
import Incrementor from './Incrementor';
import CounterDisplay from './CounterDisplay';
import Counter from './Counter';

class CounterContainer extends Component{
    constructor() {
        super();
        this.state = { current: 42 };
    }
    increment = () => {
        this.setState(
            {current : this.state.current + 1}
        );
    }
    decrement = () => {
        this.setState(
            {current : this.state.current - 1}
        ); //Without the fat arrow you need to bind, see below
    } 

    // decrement() {
    //     this.setState(
    //         {current : this.state.current - 1}
    //     ); //Without the fat arrow you need to bind, see below
    // } 

    //All other pieces now are presentation
    //Core logic is in Counter
    render(){
        return(
            <Counter
                decrement={this.decrement}
                increment={this.increment}
                current={this.state.current}
                />
        );
    }
}

export default CounterContainer;