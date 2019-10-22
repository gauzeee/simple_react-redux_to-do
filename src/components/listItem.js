import React from "react";
import { connect } from "react-redux";
import {changeCompleted} from "../actions";
import GetService from '../helpers/getService';

class ListItem extends React.Component {

  completed = e => {
    GetService.patchItem({
      text: this.props.text,
      id: this.props.id,
      completed: !this.props.completed
    });
    this.props.changeCompletedAction(this.props.id);
  };

  render() {
    const { text } = this.props;
    return <li className={this.props.className} onClick={this.completed}>{text}</li>;
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
   return {
     changeCompletedAction: (id) => dispatch(changeCompleted(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);