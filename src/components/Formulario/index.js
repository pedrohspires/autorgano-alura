import './Formulario.css';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';

const Formulario = ({aoCarroCadastrado, aoCategoriaCadatrada, categorias}) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [corCategoria, setCorCategoria] = useState("");

  const aoSalvarCarro = (event) => {
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

  const aoSalvarCategoria = (event) => {
    event.preventDefault();
    aoCategoriaCadatrada({
      nome: nomeCategoria,
      corPrimaria: corCategoria,
      corSecundaria: hexToRgba(corCategoria, 0.6)
    });
    setNomeCategoria("");
    setCorCategoria("");
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvarCarro}>
        <h2>Preencha os dados para criar o card do carro</h2>
        <Campo 
          label="Nome" 
          placeholder="Digite o nome do carro" 
          obrigatorio={true} 
          valor={nome} 
          aoAlterar={valor => setNome(valor)} 
        />

        <Campo 
          label="Preço" 
          placeholder="Digite o preço do carro"
          obrigatorio={true}
          valor={preco} 
          aoAlterar={valor => setPreco(valor)} 
        />

        <Campo 
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
      <form onSubmit={aoSalvarCategoria}>
        <h2>Preencha os dados para criar uma nova categoria</h2>
        <Campo 
          label="Categoria" 
          placeholder="Digite o nome da categoria" 
          obrigatorio={true} 
          valor={nomeCategoria}
          aoAlterar={valor => setNomeCategoria(valor)} 
        />

        <Campo 
          type="color"
          label="Cor" 
          placeholder="Digite a cor da categoria"
          obrigatorio={true}
          valor={corCategoria} 
          aoAlterar={valor => setCorCategoria(valor)} 
        />

        <Botao>
          Criar nova categoria
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;