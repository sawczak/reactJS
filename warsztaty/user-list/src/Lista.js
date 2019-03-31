import React, { Component } from 'react';
import './Lista.css';

//tworzymy nowy momponent, który póżniej dołączamy do UserList pod button
class Lista extends Component {
    render() {
        // console.log(this.props.users)

        const users = this.props.users;
        const onRemove = this.props.onRemove; // przekazanie do rodzica dlatego tworzymy props

        return (
            <ul>
                {users.map(user => //mapowanie userów - rozwija się nasza lista
                    <li key={user.id} onClick={() => onRemove(user.id)}>{user.name}</li> //funkcja na onClick, rodzic musi usunac konkretny element z tablicy
                )}
            </ul>
        )
    }
}

export default Lista;

//przekazujemy tablicę pętlą jako props przez console.log spr wyżej



