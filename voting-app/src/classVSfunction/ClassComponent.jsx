import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    nome: "Fábio",
  };

  handleChange = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>O meu nome é: {this.state.nome}</h1>
        <input
          type="text"
          value={this.state.nome}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
