import React, { Component } from 'react';
import './App.css';
import Input from "./components/input";
import Buttons from "./components/buttons";
import List from "./components/list";
import { connect } from "react-redux";
import {getItems} from "./actions";
import GetService from "./helpers/getService";


class App extends Component {

    getServ = new GetService();

  componentDidMount() {
      this.getServ.getAllItems('items').then(data => {
          console.log(data);
          this.props.getItemsAction(data);
      })


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
        getItemsAction: (items) => dispatch(getItems(items))
    }
}

export default connect(null, mapDispatchToProps)(App);
