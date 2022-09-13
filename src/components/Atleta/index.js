import Stats from '../Stats'
import './Atleta.css'

const Atleta = (props) => {
  
  return (
    <div className='atleta'>
      <div className='cabecalho' style={{ backgroundColor: props.corFundo}}>
        <h3>{props.numero}</h3>
      </div>
      <div className='rodape'>
        <h4>{props.nome}</h4>
        <Stats campo='Pts'/>
        <Stats campo='Reb'/>
        <Stats campo='Ast'/>
      </div>
    </div>
  )
}

export default Atleta