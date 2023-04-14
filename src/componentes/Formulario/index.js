import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nomeJogo, setNomeJogo] = useState('')
    const [estiloJogo, setEstiloJogo] = useState('')
    const [imagem, setImagem] = useState('')
    const [plataforma, setPlataforma] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogoCadastrado({
            nomeJogo,
            estiloJogo,
            imagem,
            plataforma
        })
        setNomeJogo('')
        setEstiloJogo('')
        setImagem('')
        setPlataforma('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Jogo" 
                    placeholder="Digite o nome do jogo"
                    valor={nomeJogo}
                    aoAlterado={valor => setNomeJogo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Estilo do Jogo"
                    placeholder="Digite o estilo do jogo"
                    valor={estiloJogo}
                    aoAlterado={valor => setEstiloJogo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Anexe a imagem do jogo"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Plataforma" 
                    itens={props.plataformas}
                    valor={plataforma}
                    aoAlterado={valor => setPlataforma(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )}

export default Formulario