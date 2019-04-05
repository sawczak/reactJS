import React, { Component } from "react";

class Step extends Component {

         render() {
            

            return (
                <div className="step-header">
                    <h2>Krok</h2>
                    <input ref={(data) => { this._inputStep = data} } onChange={this.updateStep} type="number" />
                </div>
            );
        }
    } 
    



export default Step;
