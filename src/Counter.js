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

    render(){
        return(
            <div>
                {/* <Decrementor decrease={this.decrement.bind(this)}/> */}
                <Incrementor increase={this.increment}/>
                <CounterDisplay current={this.state.current}/>
                <Decrementor decrease={this.decrement}/>
            </div>
        );
    }
}

export default Counter;