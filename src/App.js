import React, { useState } from "react";
import "./App.css"
import Card from "./components/Card";

export default function App() {

  const link1 = "https://api.b7web.com.br/cinema/"
  const link2 = "https://jsonplaceholder.typicode.com/posts"
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")


  /*Função normal:
    function loadMovies(e) {
      e.preventDefault()
      fetch(link1)
        .then(res => res.json())
        .then(res => setMovies(res))}*/

  async function asyncLoadMovies(e) {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(link1)
      const mvs = await res.json()
      setLoading(false)
      setMovies(mvs)
    } catch (e) {
      console.log(e)
    }
  }
  function handleAddTitle(e) {
    setTitle(e.target.value)
  }
  function handleAddBody(e) {
    setBody(e.target.value)
  }
  async function handleAddPost(e) {
    e.preventDefault()
    if (title && body) {
      const res = await fetch(link2, {
        method: "POST",
        body: JSON.stringify(
          {
            title: title,
            body: body,
            userId: 1
          }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = res.json()
      console.log(json)
      alert("Veja o resultado no console")
    } else {
      alert("Insira od dados")
    }
  }
  return (
    <div>
      <h1 className="text-center">Praticas do curso b7 web</h1>
      <h2>Requisições com fetch:</h2>
      <p>Requisições são formas de solicitar o acesso aos dados de um link, api ou banco de dados. existem varios tipos de requisições mas os mais famosos são: GET, POST, PUT e DELETE.</p>

      <h3>GET:</h3>
      <p>A requisição do tipo GET retorna os dados.</p>
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
      <h3>POST:</h3>
      <p>A requisição do tipo POST envia os dados passados no segundo parametro da função para a api. Os dados devem ser passados em um objeto devem conter o metodos e ter os dados passado no atributo body.</p>
      <p>O exemplo a seguir insere dados na api</p>
      <form className="form  border container-sm p-3">
        <label className="form-label">Titulo</label>
        <input type="text" className="form-control" value={title} onChange={handleAddTitle} />
        <label className="form-label">Corpo</label>
        <input type="text" className="form-control" value={body} onChange={handleAddBody} />
        <button className="btn btn-primary mt-2" onClick={handleAddPost}>Adicionar</button>
      </form>

    </div>
  );
}
