import React, { Component } from "react";
import { connect } from "react-redux";
import {addItem, removeItem} from "../actions";
import shortid from 'shortid';



class Buttons extends Component {
    addItem = () => {
      const text = this.props.itemsReducer.inputVal;
      const newItem = {text, id: shortid.generate(), completed: false};
      this.props.addItemAction(newItem);
    };

    hideCompleted = () => {
        this.props.itemsReducer.items.filter( item => {
            if(item && !item.completed) {
                return item;
            } else {
                if(item) this.props.removeItemAction(item.id);
            }
        });
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
        removeItemAction: (id) => dispatch(removeItem(id))
    }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
