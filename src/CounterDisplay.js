import React, {Component} from 'react';

class CounterDisplay extends Component{
    render(){
        const {current} = this.props;
        return(
            <div>
                {/* {this.props.current} */}
                {current}
                5
            </div>
        );
    }
}

export default CounterDisplay;