import React, { Component } from "react";
import "./ButtonsPanel.css";

class ButtonsPanel extends Component {

    /* clickAddButton = () => {
        // console.log("Click Add Button");
        this.props.changeCounterValue();
    } */

    resetOrReinitCounter = (flag) => {
        // console.log('resetOrReinitCounter METHODE of ButtonsPanel');
        // console.log(flag);
        // przekazywanie parametru do góry
        this.props.resetCounterValue(flag);
    }

   /*  nazwaMojejMetody = () => {

    } */

    render() {
        return (
            <div className="buttons-panel">
                {/* na skróty trzeba usunac clickButton wyzej} */}
                <button onClick={this.props.changeCounterValue}>Ad 1</button>
                {/* // <button onClick={this.clickAddButton}>Ad 1</button>  */}
                {/* wersja z buttonClick powyżej */}
                <button onClick={() => { this.resetOrReinitCounter(0) } }>Reset</button>
                <button onClick={() => { this.resetOrReinitCounter(1) } }>ReInit</button>
                

                {/* <button onClick={() => { this.nazwaMojejMetody() } }>Re2Init</button> */}
                {/* <button onClick={function () { this.resetOrReinitCounter(1) } }>ReInit</button> */}
            </div>
        )
    }
}


export default ButtonsPanel;