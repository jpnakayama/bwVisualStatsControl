import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [equipe, setEquipe] = useState('')
  
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.handleAtletaCadastrado({
      nome,
      numero,
      equipe
    })

    setNome('')
    setNumero('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio={false}
          label="Nome"
          placeholder="Nome do atleta"
          valor={nome}
          aoAlterar={valor => setNome(valor)}
          />
        <CampoTexto
          obrigatorio={true}
          label="Número"
          placeholder="n° do atleta"
          valor={numero}
          aoAlterar={valor => setNumero(valor)}
          />
        <ListaSuspensa
          obrigatorio={true}
          label="Equipe"
          itens={props.nomeEquipe}
          valor={equipe}
          aoAlterar={valor => setEquipe(valor)}
        />
        <Botao>Incluir</Botao>
      </form>
    </section>
  )
}

export default Formulario