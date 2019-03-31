//komponent klasowy - stworze swoja jedna klasę, ktora rozszerza komponent reaktowy
import React, {Component} from "react";
import ButtonsPanel from "./ButtonsPanel";
import "./Counter.css"
// import Step from "./Step";

//komponent klasowy musi miec jedna metodę np. render



class Counter extends Component {
    constructor(props) {
        super(props);  //super - kluczowe słówko
        this.state = {
            counterValue: this.props.initValue,
        }

        //ręczne zbindowanie bo napisane jest w ES5, ES5 nie binduje this
        // this.kliknijMnie = this.kliknijMnie.bind(this);
    }
//setState musi cos zwracac

changeValue = () => {
    this.setState((prevValue) => {
        return(
            {
                counterValue: parseInt(prevValue.counterValue) + 1,
            }
        )
    })
}

counterHalfInit

resetCounter = (flag) => {

    if (flag === 0) {
        this.setState ({
            counterValue: 0,
        });
        
    }else if (flag === 1) {
        this.setState ({
            counterValue: this.props.initValue,
        })
        
    }
    // console.log('resetCounter METHOD of Counter');
}




/* druga wersja
    changeValue = () => {
        this.setState({
            counterValue: parseInt(this.state.counterValue) + 1,
        }
            // console.log('klika');
        )
    }
 */

/*     //drugie rozwiązanie
    changeValue = () => {
        //wpisać zrzut
        this.setState({
            counterValue: parseInt(this.state.counterValue) + 1,
        }
            // console.log('klika');
        )
    } */
/* kliknijMnie = () => {
    console.log('kliknij mnie ' + this.state.counterValue);
} */

    render() {
        return (
            <div className="counter">
                Licznik
        {/* - {this.props.initValue} */}
                <span className="value">
                    {this.state.counterValue}
                </span>
                <ButtonsPanel changeCounterValue={this.changeValue} 
                resetCounterValue={this.resetCounter} />

                {/* <button onClick={this.kliknijMnie}>Kliknij mnie</button> */}

                {/* <button onClick={this.changeValue}>
                    Add 1 */}
            {/* </button> */}
                {/* {this.props.imie} */}
                {/* z app do nowego komponentu: do Counter do nowego komponentu */}
            </div>


        )
    }
}

// let step = this._inputStep.value;

export default Counter;

/* import React from "react";

//komponent funkcyjny, który ma za zadanie tylko wyświetlać
const Counter = () => { //Counter - komponent
    return(
        <div className="counter">Licznik</div>
    )
}

export default Counter //abysmy w innych plikach mogli zaimportowac ten dokument - zgoda na export pliku

 */

