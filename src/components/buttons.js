import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';

class Buttons extends Component {
    render() {
        const {addItem, hideItems} = this.props;
        return (
            <div className='buttons'>
                <button onClick={hideItems} className='btn _yellow'>Hide completed</button>
                <button onClick={addItem} className='btn'>Add new</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
         state
    }
};

export default connect(mapStateToProps, actions)(Buttons);