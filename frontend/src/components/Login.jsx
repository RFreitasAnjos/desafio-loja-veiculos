import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
      const [email, setEmail] = useState('');
      const [senha, setSenha] = useState('');
      const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
    fetch('clientes.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListaClientes(data);
      });
  }, []);
      const navigate = useNavigate();
      
    
      function Verificacao(e){
        e.preventDefault();
        let login = listaClientes.filter(cliente => cliente.email === email && cliente.senha === senha);
        if(login.length>0){
          let dadosLogin = JSON.parse(sessionStorage.getItem('login')) || []; 
            if(dadosLogin){
              dadosLogin = [];
            }
          dadosLogin.push(login[0]); 
          sessionStorage.setItem('login', JSON.stringify(dadosLogin));
        
          navigate('/principal');
        }else{
          alert("email ou senha incorretos");
        }
        
      }

    return(
      <>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex flex-col p-6 rounded-lg shadow-lg w-full max-w-md hover:shadow-slate-700'>
          <div className=''>
            <h2 className='text-2xl font-semibold text-center text-blue-700 mb-6'>Login</h2>
          </div>

          <div className='flex justify-center'>
            <form className='w-full max-w-sm hover:shadow-slate-400' onSubmit = {Verificacao}>
              <div className='mb-4'>
                <input className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='login' type="email" onChange={(e)=> setEmail(e.target.value)} required/>
              </div>
              <div className='mb-6'>
                <input className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='passowrd' type="password" onChange={(e)=> setSenha(e.target.value)} required/>
              </div>
              <div className='mb-4'>
                <button className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300' type="submit">Logar</button>
              </div>
            </form>
         </div>
        </div>
      </div>
      </>
      
    );
  }