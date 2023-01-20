import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Carro.css';

const Carro = ({ id, nome, favorito, preco, imagem, corDeFundo, aoDeletar, aoFavoritar }) => {
  const favoritar = () => {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  }

  return (
    <div className='carro'>
      <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{ nome }</h4>
        <h5>R$ { preco }</h5>
        <div className='favoritar'>
          { favorito ? <AiFillHeart {...propsFavorito} color='#ff0000' /> : <AiOutlineHeart {...propsFavorito} /> }
        </div>
      </div>
    </div>
  );
}

export default Carro;