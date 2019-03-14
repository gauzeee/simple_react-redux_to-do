import React, { Component } from 'react';
import './App.css';
import Input from "./components/input";
import Buttons from "./components/buttons";
import List from "./components/list";


class App extends Component {
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

export default App;
