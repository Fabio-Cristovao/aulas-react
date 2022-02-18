import React, { useState } from "react";

export default function FuncComponent() {

  const [nome, setNome] = useState('Manuel');

  const handleChange = (e) => {
    setNome(e.target.value)
  }
  return (
  <>
    <h1>O meu nome é: {nome} </h1>
    <input type="text" 
    value={nome}
    onChange={handleChange}/>
    
  </>)
}
