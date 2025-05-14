import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from "./components/Login";
import Perfil from "./components/Perfil";
import Principal from "./components/Principal";

function Pagina404() {
  return <h1 style={{"text-align": "center"}}>Erro 404 - Página não encontrada</h1>;
}


export default function App(){
//<Route path="/principal" element={<Principal/>}/>
    return (
    <>
    <header>
    <Router>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/perfil">Perfil</Link> | <Link to="/principal">Principal</Link>
      </nav>
      <Routes>
        <Route path="/perfil" element={<Perfil />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Pagina404 />}/>
        <Route path="/principal" element={<Principal/>}/>
      </Routes>
    </Router>

    </header>
    </>
    );
};