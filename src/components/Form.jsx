import React, { useState } from "react";

export default function Form({ dispatch }) {
    const [invalid, setInvalid] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const validate = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")

    function handleAddForm() {
        if (validate.test(email)) {
            dispatch({
                type: "ADDUSER",
                payload: {
                    name,
                    email
                }
            })
            setInvalid(false)

        } else {
            setInvalid(true)
        }
    }

    return (
        <div className="col-sm-7 col-md-5 col-lg-4 border p-3 rounded m-auto">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} autoComplete="off" />
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" />
            {invalid && <div>Digite um email valido!</div>}
            <label htmlFor="pass" className="form-label">Senha</label>
            <input type="password" id="pass" className="form-control" value={pass} onChange={e => setPass(e.target.value)} />
            <button className="btn btn-primary mt-2" onClick={handleAddForm}>Enviar</button>
        </div>
    )
}