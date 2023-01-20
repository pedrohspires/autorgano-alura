import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Categoria from './components/Categoria';

function App() {
  const categorias = [
    {
      nome: "Sedan",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Hatch",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "SUV",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Vans e utilitários",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7R8"
    },
    {
      nome: "Esportivo",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "Picape",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    }
  ];
  const carrosTemp = [
    {
      nome: "Elantra",
      preco: "63.000",
      imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2017/01/chr5632-e1579101977639.jpg?quality=70&strip=info",
      categoria: categorias[0].nome
    },
    {
      nome: "Civic",
      preco: "107.200",
      imagem: "https://s2.glbimg.com/8AsyIQCc2_sNbOsJXNUPQI87qYw=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/U/M/0AQABNTsW6kmItO0mGaQ/sem-titulo.jpg",
      categoria: categorias[0].nome
    },
    {
      nome: "Virtus",
      preco: "96.000",
      imagem: "https://img0.icarros.com/dbimg/galeriaimgmodelo/2/135409_1.webp",
      categoria: categorias[0].nome
    },
    {
      nome: "Corolla",
      preco: "148.290",
      imagem: "https://img2.icarros.com/dbimg/imgmodelo/4/468_16.webp",
      categoria: categorias[0].nome
    },
    {
      nome: "Golf",
      preco: "207.291",
      imagem: "https://cdn.motor1.com/images/mgl/XxZyk/s3/manhart-vw-golf-gti-290.jpg",
      categoria: categorias[1].nome
    },
    {
      nome: "HB20",
      preco: "79.290",
      imagem: "https://img1.icarros.com/dbimg/imgmodelo/4/2398_12.webp",
      categoria: categorias[1].nome
    },
    {
      nome: "Dodge Journey",
      preco: "122.445",
      imagem: "https://img0.icarros.com/dbimg/galeriaimgmodelo/2/126061_1.webp",
      categoria: categorias[2].nome
    },
  ]

  const [carros, setCarros] = useState(carrosTemp);

  const aoNovoCarro = (carro) => {
    setCarros([...carros, carro]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoCarroCadastrado={aoNovoCarro}
        categorias={categorias.map(categoria => categoria.nome)}
      />
      {categorias.map(
        categoria => <Categoria 
                  key={categoria.nome} 
                  nome={categoria.nome} 
                  corPrimaria={categoria.corPrimaria} 
                  corSecundaria={categoria.corSecundaria} 
                  carros={carros.filter(carro => carro.categoria === categoria.nome)}
                />)
      }
      <Rodape />
    </div>
  );
}

export default App;
