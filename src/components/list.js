import React from "react";
import ListItem from "./listItem";
import { connect } from "react-redux";

class List extends React.Component {
  renderItems(arr) {
    if (arr && arr.length > 0) {
      return arr.map((item, index) => {
        return <ListItem id={item ? item.id : null} key={index} text={item ? item.text : ''} className={item && item.completed ? 'list-item _completed' : 'list-item'} />;
      })
    } else {
      return <span>No todos!</span>;
    }
  }

  render() {
    return (
      <ul className="list">
        {this.renderItems(this.props.state.itemsReducer.items)}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};



export default connect(mapStateToProps)(List);
