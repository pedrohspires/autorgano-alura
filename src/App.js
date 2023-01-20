import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Categoria from './components/Categoria';

function App() {
  const [carros, setCarros] = useState([]);
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
