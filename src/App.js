import React, { useState } from "react";
import Button from "./components/Button";
import List from "./components/listas/List";

export default function App() {
  const list = ["João", "Maria", "Carol", "Antônio"]

  const [showList, setShowList] = useState(false)

  const handleShowList = () => {
    setShowList(true)
  }
  const handleHideList = () => {
    setShowList(false)
  }
  return (
    <div>
      <h1>Praticas do curso b7 web</h1>
      <Button eventClick={handleShowList} text="Mostrar lista"/>
      <Button eventClick={handleHideList} text="esconder lista"/>
      <List list={list} showList={showList}/>
    </div>
  );
  //Observação: Ao renderizar listas o valor sera retornado automaticamente se passado em um parenteses ao invez de chaves.
}
