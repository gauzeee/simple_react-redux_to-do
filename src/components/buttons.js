import React, { Component } from "react";
import { connect } from "react-redux";
import {addItem, hideItems} from "../actions";
import shortid from 'shortid';
import GetService from '../helpers/getService';


class Buttons extends Component {
    addItem = () => {
      const text = this.props.itemsReducer.inputVal;
      const newItem = {text, id: shortid.generate(), completed: false};
      GetService.postItem(newItem);
      this.props.addItemAction(newItem);
    };

    hideCompleted = () => {
        const items = this.props.itemsReducer.items.filter( item => {
            if(item && !item.completed) {
                return item;
            } else {
                GetService.removeItem(item.id);
            }
        });
        this.props.hideCompletedAction(items);
    };

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
        hideCompletedAction: (items) => dispatch(hideItems(items))
    }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
