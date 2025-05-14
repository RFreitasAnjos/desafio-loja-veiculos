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
        <form onSubmit = {Verificacao}>
          <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" onChange={(e)=> setSenha(e.target.value)}/>
    
          <button type="submit">Logar</button>
        </form>
      </>
      
    );
  }