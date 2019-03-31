import React, { Component } from 'react';
import Lista from './Lista';

class UserList extends Component {
  //inicjujemy (dodajemy) state w kompotencie, lokalna baza danych 
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      user: ''
    }
  }

  onValueChange = (e) => {
    let userL = e.target.value;
    this.setState({ user: userL });
  }

  addUser = () => {

    let userList = this.state.list;
    let user = {
      name: this.state.user,
      id: Date.now()
    }

    userList.push(user); //zostawiam tylko user bo odwołuję się do zmiennej

    // userList.push(this.state.user);

    this.setState({ list: userList, user: '' }); // user:'' dzięki temu znika tekst po wpisaniu do inputu   //reset inputa, po każdym kliknięciu pole input sie czyści

    console.log(this.state)
  }

  /* tworzymy element potomny 'Hello Roman' */

  removeUser = (id) => {
    // console.log(userName); przy removeUser = (userName)
    let userList = this.state.list.filter(user => user.id !== id);
    this.setState({ list: userList }) //zabdejtowanie stanu, zmieniamy state rodzica

  }

  onUserSearche = () => {
    let userL = this.state.userL
    this.setState({ user: userL });
  }


  render() {
    return (
      <div className="UserList">
        <h1>User's List</h1>
        <input type="text" value={this.state.user} onChange={e => this.onValueChange(e)} placeholder="Enter name" />
        <input type="text" value={this.state.user} onChange={e => this.onUserSearche(e)} placeholder="Search user" />
        <button type="submit" onClick={this.addUser} value="Submit">Add User</button>
        <Lista users={this.state.list}
          onRemove={this.removeUser} //przekazujemy metodę dziecku removeUser
        />

      </div>
    );
  }
}

export default UserList;

//ref={input => this.inputValue = input} - zamiast e => this.
//console.log(this.inputValue)
