import React, { Component } from 'react';


class CryptoList extends Component {

    render() {

        // console.log(this.props.cryptoList)
        const cryptoList = this.props.cryptoList;

      return (
          <ul>
                {cryptoList.map(rate => //mapowanie cryptoList - rozwija się nasza lista
                    <li key={rate.currency} >Last rate: <span className={rate.class}>
                    {rate.last} {rate.icon}</span> > <strong>{rate.currency}</strong><span>[{rate.symbol}]</span>
                    </li>
                )}
            </ul>
      );
    }
  }

  export default CryptoList;


 
