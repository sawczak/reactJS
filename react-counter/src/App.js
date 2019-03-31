import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
/*     let imie = "Iza";
    let wiek = 28;
    let miesiace = wiek * 12; */
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Licznik w ReactJS</h1>
        </header>
        <Counter initValue="10" />
        <Counter initValue="20" />
        <Counter initValue="108"/>
      </div>
    );
  }
}


export default App;
