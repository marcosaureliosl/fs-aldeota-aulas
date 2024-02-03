import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Contatos from "./Contatos";
import Home from "./Home";
import Sobre from './Sobre';

function App() {

  return (
    <>

        <button>
          <Link to="/home">
            Home
          </Link> 
        </button>
        <button>
          <Link to="/contatos">
            Contatos
          </Link> 
        </button>
        <button>
          <Link to="/sobre">
            sobre
          </Link> 
        </button>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contatos' element={<Contatos/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
        
    </>
  )
}

export default App
