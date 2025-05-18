import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Perfil(){
    let dadosLogin = JSON.parse(sessionStorage.getItem('login')) || []; 
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        if(dadosLogin == false){
      navigate('/login');
      alert("vc precisa estar logado");
    }else{
      setTipo(dadosLogin[0].tipoConta);
      setEmail(dadosLogin[0].email);
      setSenha(dadosLogin[0].senha);
      setNome(dadosLogin[0].nome);
    }
      }, []);
    

    function Deslogar(){
        sessionStorage.clear();
        navigate('/login');
    }

    return(
    <>
    <div className='grid grid-cols-1'>
      <div className=''>
        <h1 className=''>usuario dados</h1>
      </div>  
      <div className=''>
        <p>nome: {nome}</p>

        <p>email: {email}</p>

        <p>senha : {senha}</p>

        <p>tipo da conta : {tipo}</p>
      </div>
      <div className=''>
        <button onClick={Deslogar}>deslogar</button>
      </div>
    </div>
    </>
    
    );
    
}