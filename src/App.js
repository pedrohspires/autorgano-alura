import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Categoria from './components/Categoria';

function App() {
  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      nome: "Sedan",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      id: uuidv4(),
      nome: "Hatch",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      id: uuidv4(),
      nome: "SUV",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      id: uuidv4(),
      nome: "Vans e utilitários",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7R8"
    },
    {
      id: uuidv4(),
      nome: "Esportivo",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      id: uuidv4(),
      nome: "Picape",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    }
  ]);
  const [carros, setCarros] = useState([
    {
      id: uuidv4(),
      nome: "Elantra",
      favorito: false,
      preco: "63.000",
      imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2017/01/chr5632-e1579101977639.jpg?quality=70&strip=info",
      categoria: "Sedan"
    },
    {
      id: uuidv4(),
      nome: "Civic",
      favorito: false,
      preco: "107.200",
      imagem: "https://s2.glbimg.com/8AsyIQCc2_sNbOsJXNUPQI87qYw=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/U/M/0AQABNTsW6kmItO0mGaQ/sem-titulo.jpg",
      categoria: "Sedan"
    },
    {
      id: uuidv4(),
      nome: "Virtus",
      favorito: false,
      preco: "96.000",
      imagem: "https://img0.icarros.com/dbimg/galeriaimgmodelo/2/135409_1.webp",
      categoria: "Sedan"
    },
    {
      id: uuidv4(),
      nome: "Corolla",
      favorito: false,
      preco: "148.290",
      imagem: "https://img2.icarros.com/dbimg/imgmodelo/4/468_16.webp",
      categoria: "Sedan"
    },
    {
      id: uuidv4(),
      nome: "Golf",
      favorito: false,
      preco: "207.291",
      imagem: "https://cdn.motor1.com/images/mgl/XxZyk/s3/manhart-vw-golf-gti-290.jpg",
      categoria: "Hatch"
    },
    {
      id: uuidv4(),
      nome: "HB20",
      favorito: false,
      preco: "79.290",
      imagem: "https://img1.icarros.com/dbimg/imgmodelo/4/2398_12.webp",
      categoria: "Hatch"
    },
    {
      id: uuidv4(),
      nome: "Dodge Journey",
      favorito: false,
      preco: "122.445",
      imagem: "https://img0.icarros.com/dbimg/galeriaimgmodelo/2/126061_1.webp",
      categoria: "SUV"
    },
  ]);

  const aoNovoCarro = (carro) => {
    setCarros([...carros, carro]);
  }

  const aoDeletarCarro = (id) => {
    setCarros(carros.filter(carro => carro.id !== id));
  }

  const aoMudarCorTime = (cor, id) => {
    setCategorias(categorias.map(categoria => {
      if(categoria.id === id)
        categoria.corPrimaria = cor;

      return categoria;
    }));
  }

  const aoNovaCategoria = (novaCategoria) => {
    setCategorias([ 
      ...categorias, 
      { 
        ...novaCategoria, 
        id: uuidv4() 
      } 
    ]);
  }

  const aoFavoritar = (id) => {
    setCarros(carros.map(carro => {
      if(carro.id === id)
        carro.favorito = !carro.favorito

      return carro;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoCarroCadastrado={aoNovoCarro}
        aoCategoriaCadatrada={aoNovaCategoria}
        categorias={categorias.map(categoria => categoria.nome)}
      />
      {categorias.map(categoria => 
          <Categoria 
            key={categoria.id}
            id={categoria.id} 
            nome={categoria.nome} 
            corPrimaria={categoria.corPrimaria} 
            corSecundaria={categoria.corSecundaria} 
            carros={carros.filter(carro => carro.categoria === categoria.nome)}
            aoDeletar={aoDeletarCarro}
            aoMudarCor={aoMudarCorTime}
            aoFavoritar={aoFavoritar}
          />
      )}
      <Rodape />
    </div>
  );
}

export default App;
