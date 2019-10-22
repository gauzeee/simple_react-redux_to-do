import React from "react";
import { connect } from "react-redux";
import {changeCompleted} from "../actions";

class ListItem extends React.Component {

  completed = e => {
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