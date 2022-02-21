import React, { useState } from "react";
import "./App.css"
export default function App() {

  const link = "https://api.b7web.com.br/cinema/"
  const [movies,setMovies] = useState([])
  function loadMovies(e) {
    e.preventDefault()
    fetch(link)
      .then(res => res.json())
      .then(res => setMovies(res))
  }
  return (
    <div>
      <h1 className="text-center">Praticas do curso b7 web</h1>
      <h2>Requisições:</h2>
      <p>Requisições são formas de solicitar o acesso aos dados de um link, api ou banco de dados. existem varios tipos de requisições mas os mais famosos são: GET, POST, PUT e DELETE.</p>

      <h3>GET:</h3>
      <p>A requisição do tipo GET apenas retorna os dados.</p>
      <p>O exemplo a seguir acessa os filmes de uma api e os retorna para serem manipulados pelo programador</p>
      <div>
        <p>Total de filmes: {movies.length}</p>
        <button className="btn btn-primary" onClick={loadMovies}>Carregar filmes</button>
        <div className="row">
          {movies.map((movie,index)=>(
            <div className="card col-5 m-2" key={index}>
                <img src={movie.avatar} alt="movie" className="rounded card-img my-2"/>
                <h4 className="card-title text-center">{movie.titulo}</h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
