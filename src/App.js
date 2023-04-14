import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Plataforma from './componentes/Plataforma';

function App() {

  const plataformas = [

    {
      nome: 'PC',
      corPrimaria: '#57c278',
      corSecundaria: 'rgb(156 116 246 / 50%)'
    },

    {
      nome: 'XBOX',
      corPrimaria: '#82cffa',
      corSecundaria: 'rgb(0 205 27 / 50%)'
    },

    {
      nome: 'PLAYSTATION',
      corPrimaria: '#e06b69',
      corSecundaria: 'rgb(0 90 246 / 50%)'
    },

    {
      nome: 'NINTENDO',
      corPrimaria: '#FFba05',
      corSecundaria: 'rgb(246 0 0 / 50%)'
    },

    {
      nome: 'MOBILE',
      corPrimaria: '#ff8a29',
      corSecundaria: 'rgb(246 233 46 / 50%)'
    }

  ]

  const [jogos, setJogos] = useState([ ])

  const aoNovoJogoAdicionado = (jogo) => {
    console.log(jogo)
    setJogos([...jogos, jogo])
  }

  return (
    <div className="App">
     <Banner />
     <Formulario plataformas={plataformas.map(plataforma => plataforma.nome)} aoJogoCadastrado={jogo => aoNovoJogoAdicionado(jogo)}/>
     {plataformas.map(plataforma => <Plataforma 
     key={plataforma.nome}
     nome={plataforma.nome}
     corPrimaria={plataforma.corPrimaria}
     corSecundaria={plataforma.corSecundaria}
     jogos = {jogos.filter(filtro => filtro.plataforma === plataforma.nome)}
     />)}
    </div>
  );
}

export default App;