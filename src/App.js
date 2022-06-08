import React, { useState } from "react";
import "./App.css"
import Card from "./components/card/Card";
import PostForm from "./components/form/PostForm";
import Loading from "./components/loading/Loading";
import { api } from "./Api";
export default function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  
  async function asyncLoadMovies(e) {
    e.preventDefault()
    try {
      setLoading(true)
      const res  = await api.getMovies()
      setLoading(false)
      setMovies(res)
      console.log(typeof movies)
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
     const json = api.setPosts(title, body)
      console.log(json)
      alert("Veja o resultado no console")
    } else {
      alert("Insira os dados")
    }
  }
  return (
    <div>
      <h1 className="text-center">Praticas de requisições</h1>
      <h2>Requisições com fetch:</h2>
      <p>Requisições são formas de solicitar o acesso aos dados de um link, api ou banco de dados. existem varios tipos de requisições com por exemplo GET, POST, PUT e DELETE.</p>
      <h3>GET:</h3>
      <p>A requisição do tipo GET retorna os dados.</p>
      <p>O exemplo a seguir acessa os filmes de uma api e os retorna para serem manipulados pelo programador</p>
      <p>Total de filmes: {movies.length}</p>
      <button className="btn btn-primary" onClick={asyncLoadMovies}>Carregar filmes</button>
      <h3 className="text-center">Filmes em cartaz</h3>
      <Loading load={loading}/>
      <Card movies={movies} />
      <h3>POST:</h3>
      <p>A requisição do tipo POST envia os dados passados no segundo parametro da função para a api. Os dados devem ser passados em um objeto devem conter o metodos e ter os dados passado no atributo body.</p>
      <p>O exemplo a seguir insere dados na api</p>
      <PostForm title={title} body={body} handleAddTitle={handleAddTitle} handleAddBody={handleAddBody} handleAddPost={handleAddPost}/>
    </div>
  );
}
