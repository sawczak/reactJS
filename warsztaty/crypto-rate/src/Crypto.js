import React, { Component } from 'react';
import CryptoList from './CryptoList';
import axios from 'axios';



class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoList: []
        }
    }

    fetchData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
            //   .then(res => this.setState({ contacts: res.data 

            .then(response => {

                //robimy destrukturyzację objektu do tablicy
                let cryptoList = [];
                let oldCryptoList = this.state.cryptoList; //pobieramy tablice do zmiennej, to jest stara wersja old

                for (let key in response.data) { //nowa wersja response.data
                    let newRate = { //nowa waluta
                        currency: key,
                        last: response.data[key].last,
                        symbol: response.data[key].symbol
                    }

                    //w starej bazie wyszukujemy obiekt, ktorego nazwa waluty pasuje nowej nazwie waluty - wyszukujemy dla $ dolar ze starej bazy
                    let oldRate = oldCryptoList.find(oldRate => oldRate.currency === newRate.currency); // robimy wyszukiwaniepo starej bazie po stworzeniu nowej zmiennej
                    //stary obiekt === nowemu obiektemu, jeśli bedzie tru to zwróci nam nowy obiekt, metoda find służy do filtrowania (wyszukuje obiekt, a nie pobiera) podobnie filtr


                    // console.log(oldRate);

                    if (oldRate !== undefined) {
                        if (newRate.last > oldRate.last) {
                            newRate.class = 'green' //klucz w obiekcie dlatego class a nie className
                            newRate.icon = String.fromCharCode(8593);
                        } else if (newRate.last < oldRate.last) {
                            newRate.class = 'red'
                            newRate.icon = String.fromCharCode(8595);
                        } else if (newRate.last === oldRate.last) {
                            newRate.class = 'blue'
                            newRate.icon = String.fromCharCode(8596);
                        } else {
                            newRate.class = 'blue'
                            newRate.icon = String.fromCharCode(8596);
                        }
                    }


                    cryptoList.push(newRate);
                }
                // console.log(cryptoList);
                this.setState({ cryptoList });

            })
    }

    componentDidMount() {
        this.fetchData();
        setInterval(() => {
            if (this.inputValue.value === '') {
                this.fetchData()
            }
        }, 5000)
    }

    onFilter = () => {
        // console.log(this.inputValue.value);
        let filter = this.inputValue.value.trim().toUpperCase();
        let filteredCryptoList = this.state.cryptoList;

        filteredCryptoList = filteredCryptoList.filter(rate => {  //sprawdza po każdej literce include
            return rate.currency.includes(filter);
        });  //tablica ma być równa zmiennej filter, wartości
        

        this.setState({ cryptoList: filteredCryptoList });
    }

    render() {
        return (
            <div className="Crypto-header">
                <h1>Crypto Rate</h1>
                <input type="text" placeholder="Filter"
                    ref={input => this.inputValue = input}
                    onChange={this.onFilter}
                />
                <CryptoList cryptoList={this.state.cryptoList} />
            </div>
        );
    }
}


export default Crypto;

//key - nazwa waluty