import React, { Component } from 'react';
import './App.css';
import './UserList.css';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
     <div className="App">
     <UserList />
      </div>
      
    );
  }
}

export default App;
