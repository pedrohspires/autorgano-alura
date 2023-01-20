import Carro from '../Carro';
import './Categoria.css';

const Categoria = (props) => {
  const { nome } = props;
  const cssSection = {
    backgroundColor: props.corSecundaria
  }
  const cssNome = {
    borderColor: props.corPrimaria
  }

  return (
    props.carros.length > 0 
    ?
      <section className='categoria' style={ cssSection }>
        <h3 style={ cssNome }>{nome}</h3>
        <div className='carros'>
          {props.carros.map(carro => 
            <Carro 
              corDeFundo={props.corPrimaria}
              key={carro.nome}
              nome={carro.nome}
              preco={carro.preco}
              imagem={carro.imagem}
            />
          )}
        </div>
      </section>
    : ''
  );
}

export default Categoria;