import Carro from '../Carro';
import './Categoria.css';

const Categoria = (props) => {
  const { id, nome } = props;
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
        <input onChange={event => props.aoMudarCor(event.target.value, id)} value={props.corPrimaria} type="color" className='input-cor' />
        <h3 style={ cssNome }>{nome}</h3>
        <div className='carros'>
          {props.carros.map(carro => 
            <Carro 
              corDeFundo={props.corPrimaria}
              key={carro.id}
              id={carro.id}
              nome={carro.nome}
              favorito={carro.favorito}
              preco={carro.preco}
              imagem={carro.imagem}
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
            />
          )}
        </div>
      </section>
    : ''
  );
}

export default Categoria;