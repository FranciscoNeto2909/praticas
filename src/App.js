import React, { useState } from "react";
import usePeapleList from "./reducer/PepleList";

export default function App() {
  const[state, dispatch] =  usePeapleList()
  const[name, setName] = useState('')
  function handleAddName(e){
    setName(e.target.value)
    return name
  }
  function handleAddPeaple(){
    if(name){
      dispatch({
        type:"ADD",
        payload:{
          name:name
        }
      })
      setName("")
    }else{
      alert("Digite seu nome")
    }
  }
  const handleRemovePeaple = (id) => {
    dispatch({
      type:'DEL',
      payload:{id}
    })
  }
  function handleOrdenatePeaple(){
    dispatch({
      type:'ORDER'
    })
    console.log(state)
  }
  return (
    <>
      <div>
        <p>Nomes:</p>
        <ul>
          {state.map((pessoa, i) =>(
            <li key={i} className="my-2 captalize">{pessoa.name}
            <button onClick={()=>{handleRemovePeaple(pessoa.id)}} className="btn btn-sm btn-primary ms-2">Remover</button></li>
          ))}
        </ul>
      </div>

      <form>
        <label>Nome</label>
        <input type="text" value={name} onChange={handleAddName}/>
      </form>
      <button onClick={handleAddPeaple} className="btn btn-primary mt-2 me-2">Adicionar</button>
      <button onClick={handleOrdenatePeaple} className="btn btn-primary mt-2">Ordenar</button>
    </>
  );
}
