import axios from 'axios'
import {  useEffect, useState } from "react"

const Home = () => {

  const [posts, setPosts] = useState([])

  async function buscarPosts() {
    const resposta = await axios.get('https://jsonplaceholder.typicode.com/posts')

    setPosts(resposta.data)
  }
    useEffect(() => {
      buscarPosts()
    }, [])
  
  return (
    <ul>
      {
        posts.map(post => <li key={post.id}> <h4>{post.title}</h4> <p>{post.body}</p></li>)
      }
    </ul>
  ); 
}

export default Home
