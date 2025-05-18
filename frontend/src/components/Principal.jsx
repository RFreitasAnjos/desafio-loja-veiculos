import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Principal(){

    const [listaVeiculos, setListaVeiculos] = useState([]);
    let dadosLogin = JSON.parse(sessionStorage.getItem('login')) || []; 
    const navigate = useNavigate();

    let tipo = "";
    useEffect(() => {
    if(dadosLogin == false){
      navigate('/login');
      alert("vc precisa estar logado");
    }else{
      tipo = dadosLogin[0].tipoConta;
    }
  }, []);

    

    
    useEffect(() => {
    fetch('veiculos.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListaVeiculos(data);
      });
  }, []);

  function Renderizar(){
    if(tipo == "vendedor"){
      const lista = listaVeiculos.map(veiculo =>
    <li style={{"text-align": "center", "list-style-type": "none"}}>
      <p>
        <b> nome: {veiculo.nome} |</b>
        <b> placa: {veiculo.modelo} |</b>
        <b> preço: {veiculo.preco} |</b>
        <b> preço pcd: {veiculo.preco*0.8} |</b>
        <b> preço taxista: {veiculo.preco*0.7} |</b>
        <b> preço cliente da casa: {veiculo.preco*0.6} </b>
      </p>
    </li>
  );
  return lista
    }else if("cliente"){

      const lista = listaVeiculos.map(veiculo =>
    <li style={{"text-align": "center", "list-style-type": "none"}}>
      <p>
        <b> nome: {veiculo.nome} |</b>
        <b> placa: {veiculo.modelo} |</b>
        <b> cor: {veiculo.cor} |</b>
        <b> preço: {veiculo.preco} </b>
      </p>
    </li>
      );
      return lista
    }
  }
    return (
    <>
  
      <h1 style={{"text-align": "center"}}>veiculos</h1>
        <ul><Renderizar/></ul>
    </>
    );
};