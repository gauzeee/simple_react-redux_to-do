import React from "react";
import { connect } from "react-redux";
import { patchItem} from "../actions";

class ListItem extends React.Component {
  completed = e => {
    console.log(this.props.completed)
    this.props.patchItemAction({
      text: this.props.text,
      id: this.props.id,
      completed: !this.props.completed
    });
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
     patchItemAction: (item) => dispatch(patchItem(item))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);