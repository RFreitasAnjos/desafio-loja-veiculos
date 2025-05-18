import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
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
    <header className='bg-gradient-to-r from-blue-100 via-white to-blue-100'>
    <Router>
      <nav className='bg-transparent flex flex-row gap-10 justify-center'>
        <Link className='bg-blue-200 p-2 text-center rounded hover:bg-grandient-to-r from-blue-400 via-slate-400 to-blue-300' to="/login">Login</Link>
        <Link className='bg-blue-200 p-2 text-center rounded hover:bg-grandient-to-r from-blue-400 via-slate-400 to-blue-300' to="/perfil">Perfil</Link>
        <Link className='bg-blue-200 p-2 text-center rounded hover:bg-grandient-to-r from-blue-400 via-slate-400 to-blue-300' to="/principal">Principal</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path="/perfil" element={<Perfil />}/>
        <Route  initial path="/login" element={<Login />}/>
        <Route path="error" element={<Pagina404 />}/>
        <Route path="/principal" element={<Principal/>}/>
      </Routes>
    </Router>

    </header>
    </>
    );
};