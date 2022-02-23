const link1 = "https://api.b7web.com.br/cinema/"
const link2 = "https://jsonplaceholder.typicode.com/posts"

export const api={
    getPosts: async() => {
        const res = await fetch(link1)
        const json = await res.json()
        return json
    },
    setPosts: async(title, body)=>{
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
          return json
    }
}