import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({aoCarroCadastrado, categorias}) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    aoCarroCadastrado({
      nome: nome,
      preco: preco,
      imagem: imagem,
      categoria: categoria
    });
    setNome("");
    setPreco("");
    setImagem("");
    setCategoria("");
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do carro</h2>
        <CampoTexto 
          label="Nome" 
          placeholder="Digite o nome do carro" 
          obrigatorio={true} 
          valor={nome} 
          aoAlterar={valor => setNome(valor)} 
        />

        <CampoTexto 
          label="Preço" 
          placeholder="Digite o preço do carro"
          obrigatorio={true}
          valor={preco} 
          aoAlterar={valor => setPreco(valor)} 
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
          label="Categoria" 
          itens={categorias}
          valor={categoria} 
          aoAlterar={valor => setCategoria(valor)} 
        />

        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;