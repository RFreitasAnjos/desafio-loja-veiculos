import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Perfil(){

    let dadosLogin = JSON.parse(sessionStorage.getItem('login')) || []; 
    const navigate = useNavigate();

      let nome = "";
      let email = "";
      let senha = "";
      let tipo = "";
    useEffect(() => {
        if(dadosLogin == false){
      navigate('/login');
      alert("vc precisa estar logado");
    }else{
      nome = dadosLogin[0].nome;
      email = dadosLogin[0].email;
      senha = dadosLogin[0].senha;
      tipo = dadosLogin[0].tipoConta;
    }
      }, []);
    

    function Deslogar(){
        sessionStorage.clear();
        navigate('/login');
    }

    return(

    <>
    <h1>usuario dados</h1>

        <p>nome: {nome}</p>

        <p>email: {email}</p>

        <p>senha : {senha}</p>

        <p>tipo da conta : {tipo}</p>

        <button onClick={Deslogar}>deslogar</button>
    </>
    
    );
    
}