import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({aoColaboradorCadastrado, times}) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          label="Nome" 
          placeholder="Digite seu nome" 
          obrigatorio={true} 
          valor={nome} 
          aoAlterar={valor => setNome(valor)} 
        />

        <CampoTexto 
          label="Cargo" 
          placeholder="Digite seu cargo"
          obrigatorio={true}
          valor={cargo} 
          aoAlterar={valor => setCargo(valor)} 
        />

        <CampoTexto 
          label="Imagem" 
          placeholder="Informe o endereço da imagem"
          obrigatorio={false}
          valor={imagem} 
          aoAlterar={valor => setImagem(valor)} 
        />

        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={times}
          valor={time} 
          aoAlterar={valor => setTime(valor)} 
        />

        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;