import Atleta from '../Atleta'
import './Equipes.css'

const Equipes = (props) => {
  return (
    props.atletas.length > 0 && 
    <section className='equipes' style={{ backgroundColor: props.corFundo }}>
      <h3 style={{ borderColor: props.corDestaque }}>{props.nome}</h3>
      <div className='atletas'>
        {props.atletas.map(atleta => <Atleta key={atleta.numero} corFundo={props.corDestaque} nome={atleta.nome} numero={atleta.numero} />)}
      </div>
    </section>
  )
}

export default Equipes