import React, { useState } from "react";
import Button from "./components/button";
import List from "./components/listas/List";
import {Container} from "./components/styled";

export default function App() {
  const list = [
    {
      name: "João",
      age: 19
    },
    {
      name: "Maria",
      age: 12
    },
    {
      name: "Antôno",
      age: 29
    }
    , {
      name: "Carol",
      age: 23
    },
    {
      name: "Neto",
      age: 20
    }]

  const [showList, setShowList] = useState(false)

  const handleShowList = () => {
    setShowList(!showList)
  }
 
  return (
    <div>
      <h1 className="text-center">Praticas do curso b7 web</h1>
      <h2>Lista de participantes</h2>
      <Button eventClick={handleShowList} text={showList ? "Esconder lista" : "Mostrar lista" }/>
      <List list={list} showList={showList} />
      <Container>
        <div><a href="self">Inicio</a></div>
        <div><a href="self">Jogos</a></div>
        <div><a href="self">gamePlays</a></div>
        <div><a href="self">Lives</a></div>
        <div><a href="self">Sobre</a></div>
      </Container>
    </div>
  );
  //Observação: Ao renderizar listas o valor sera retornado automaticamente se passado em um parenteses ao invez de chaves.
}
