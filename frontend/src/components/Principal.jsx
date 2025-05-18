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
      alert("Faça o login para ter acesso ao conteúdo.");
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

  const Renderizar = () => {
    return (
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {listaVeiculos.map((veiculo, index) => (
          <li key={index} className="list-none p-4 border rounded shadow text-center bg-white">
            <p className="text-gray-800 font-medium space-y-1">
              <div><img src={veiculo.imagem} alt="img_veiculo"/></div>
              <div><strong>Modelo:</strong> {veiculo.modelo}</div>
              <div><strong>Marca:</strong> {veiculo.marca}</div>
              <div><strong>Cor:</strong> {veiculo.cor}</div>
              <div><strong>Preço:</strong> R$ {veiculo.preco.toFixed(2)}</div>
              {tipo === "vendedor" && (
                <>
                  <div><strong>Preço PCD:</strong> R$ {(veiculo.preco * 0.8).toFixed(2)}</div>
                  <div><strong>Preço Taxista:</strong> R$ {(veiculo.preco * 0.7).toFixed(2)}</div>
                  <div><strong>Preço Cliente da Casa:</strong> R$ {(veiculo.preco * 0.6).toFixed(2)}</div>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    );
  };
return (
  <div className="min-h-screen p-6">
    <Renderizar/>
  </div>
);
}