import React, { Component } from "react";
import { connect } from "react-redux";
import {addItem, hideItems} from "../actions";
import shortid from 'shortid';


class Buttons extends Component {
    addItem = () => {
      const text = this.props.itemsReducer.inputVal;
      this.props.addItemAction({text, id: shortid.generate()});
    };

    hideCompleted = () => {
        this.props.hideCompletedAction();
    }

    componentDidMount() {
        document.onkeyup = (e) => {
            if (e.key === 'Enter') {
                this.addItem();
            }
                }
    }

    render() {
    return (
      <div className="buttons">
        <button onClick={this.hideCompleted} className="btn _yellow">
          Hide completed
        </button>
        <button onClick={this.addItem} className="btn">
          Add new
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => {
    return {
        addItemAction: text => dispatch(addItem(text)),
        hideCompletedAction: () => dispatch(hideItems())
    }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
