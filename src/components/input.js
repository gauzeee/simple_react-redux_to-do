import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <div className='input-wrapp'>
                <input className='input' type="text" placeholder='Enter a new todo item'/>
            </div>
        );
    }
}

export default Input;