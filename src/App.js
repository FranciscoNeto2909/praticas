import React, { useState } from "react";
import Button from "./components/Button";

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
      <ul>
        { showList && list.map((pessoa) => (
          <li>{pessoa}</li>
        ))}
      </ul>
    </div>
  );
}
