
import axios from "axios"
const link1 = "https://api.b7web.com.br/cinema/"
const link2 = "https://jsonplaceholder.typicode.com/posts"

export const api = {
  getMovies: async () => {
    const json = await axios.get(link1)
    return await json.data
  },
  setPosts: async (title, body) => {
    const json = axios.post(link2, {
      title, body
    })
    return json
  }
}