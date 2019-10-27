import React, { Component } from 'react';
import './App.css';
import Input from "./components/input";
import Buttons from "./components/buttons";
import List from "./components/list";
import { connect } from "react-redux";
import {getItems} from "./actions";
import GetService from "./helpers/getService";


class App extends Component {

  componentDidMount() {
      this.props.getItemsAction();
  }

    render() {
    return (
      <div className='container'>
        <List/>
        <Input/>
        <Buttons/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getItemsAction: () => dispatch(getItems())
    }
}

export default connect(null, mapDispatchToProps)(App);
