import { useState } from "react";
import Banner from "./components/Banner";
import Equipes from "./components/Equipes";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {
  
  const equipes = [
    /*{
      nome:'Escolha a equipe',
      corFundo:'#FFF',
      corDestaque:'#FFF'
    },*/
    {
      nome:'Blue Wings',
      corFundo:'#E8F8FF',
      corDestaque:'#47AAC0'
    },
    {
      nome:'Adversário',
      corFundo:'#FFFFFF',
      corDestaque:'#F2F2F2'
    },
  ]
  
  const [atletas, setAtletas] = useState([])
  const handleNovoAtleta = (atleta) => {
    setAtletas([...atletas, atleta])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeEquipe={equipes.map(equipe => equipe.nome)} handleAtletaCadastrado={atleta => handleNovoAtleta(atleta)}/>
      {equipes.map(equipe => <Equipes 
      key={equipe.nome} 
      nome={equipe.nome} 
      corDestaque={equipe.corDestaque} 
      corFundo={equipe.corFundo}
      atletas={atletas.filter(atleta => atleta.equipe === equipe.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
