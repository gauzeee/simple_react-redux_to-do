import React, {Component} from 'react';
import { connect } from "react-redux";
import {updateInput} from '../actions'


class Input extends Component {

    updateInputValue = (e) => {
        const text = e.target.value;
        this.props.updateInputAction(text)
    }


    render() {
        return (
            <div className='input-wrapp'>
                <input className='input' type="text" placeholder='Enter a new todo item' value={this.props.itemsReducer.inputVal} onChange={this.updateInputValue}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputAction: text => dispatch(updateInput(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);