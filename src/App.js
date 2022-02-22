import React, { useState } from "react";
import "./App.css"
import Card from "./components/Card";

export default function App() {

  const link = "https://api.b7web.com.br/cinema/"
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)


  /*Função normal:
    function loadMovies(e) {
      e.preventDefault()
      fetch(link)
        .then(res => res.json())
        .then(res => setMovies(res))}*/

  async function asyncLoadMovies(e) {
    e.preventDefault()
    try{
      setLoading(true)
      const res = await fetch(link)
      const mvs = await res.json()
      setLoading(false)
      setMovies(mvs)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div>
      <h1 className="text-center">Praticas do curso b7 web</h1>
      <h2>Requisições:</h2>
      <p>Requisições são formas de solicitar o acesso aos dados de um link, api ou banco de dados. existem varios tipos de requisições mas os mais famosos são: GET, POST, PUT e DELETE.</p>

      <h3>GET:</h3>
      <p>A requisição do tipo GET apenas retorna os dados.</p>
      <p>O exemplo a seguir acessa os filmes de uma api e os retorna para serem manipulados pelo programador</p>
      <p>Total de filmes: {movies.length}</p>
      <button className="btn btn-primary" onClick={asyncLoadMovies}>Carregar filmes</button>
      <h3 className="text-center">Filmes em cartaz</h3>
      {loading && <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>}
      <Card movies={movies} />
    </div>
  );
}
