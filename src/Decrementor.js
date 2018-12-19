import React, {Component} from 'react';

// class Decrementor extends Component{
    // render(){
        //This is now stateless
        const Decrementor = (props) => {
            const {decrease} = props;
            return(
                <button onClick={decrease}>
                    --
                </button>
            );
        }
    // }
// }

export default Decrementor;