import { useState } from "react";
import Form from "./components/Form";
import Users from "./reducer/Users";

export default function App() {
  const [state, dispatch] = Users();
  const [adm, setAdm] = useState(false)
  return (
    <>
    <h1 className="text-center mb-5">Cadastro de usuários</h1>
      <Form dispatch={dispatch}/>
      { adm &&
          state.map((user, i)=>(
          <div key={i} className="border border-2 border-primary mt-3 p-2 rounded col-5">
            <h3 className="text-center cap">{user.name}</h3>
            <p className="text-center">{user.email}</p>
          </div>
          ))
      }
      <button onClick={()=>setAdm(true)}>Adm</button>
    </>
  );
}
