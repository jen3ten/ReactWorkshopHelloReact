import React, {Component} from 'react';

class Incrementor extends Component{
    render(){
        const {increase} = this.props;
        //const {increase} = this.props.increase; <==same thing
        return(
            <button onClick={increase}>
                ++
            </button>
        );
    }
}

export default Incrementor; 