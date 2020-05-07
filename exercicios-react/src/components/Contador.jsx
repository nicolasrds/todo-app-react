import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    numero: this.props.numero || 0,
    passo: this.props.passo || 1
  }

  Inc = () =>{
   this.setState({numero: this.state.numero + this.state.passo});
  }

  Dec = () =>{
    this.setState({numero: this.state.numero - this.state.passo});
   }


  render(){ 
    return (
      <div>
      <h2>Numero: {this.state.numero}</h2>
      <button onClick={this.Inc}>Inc</button>
      <button onClick={this.Dec}>Dec</button>
      </div>
    )
  }
}