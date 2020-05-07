import React, { Component } from 'react';

export default class ComponenteComClasse extends Component {

    render(){
      return  <h1>{ this.props.valor || 'Padrao' }</h1>
    }

}