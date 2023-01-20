import './Carro.css';

const Carro = ({ nome, preco, imagem, corDeFundo }) => {
  return (
    <div className='carro'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{ nome }</h4>
        <h5>R$ { preco }</h5>
      </div>
    </div>
  );
}

export default Carro;