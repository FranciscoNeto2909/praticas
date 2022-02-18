import React from "react";

export default function Listas({ list, showList }) {
    return (
        <ul className="mt-3">
            {showList && list.map((pessoa, index) => (
                <li key={index} className="my-2">
                    <strong>Nome:</strong> {pessoa.name} 
                    <br /> 
                    <strong>Idade:</strong> {pessoa.age}
                </li>
            ))}
        </ul>
    );
    //Observação: Ao renderizar listas o valor sera retornado automaticamente se passado em um parenteses ao invez de chaves.
}