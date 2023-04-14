import Jogo from '../Jogo'
import './Plataforma.css'

const Plataforma = (props) => {
    return (
        (props.jogos.length > 0) ? <section className='jogo' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='card__jogos'>
                {props.jogos.map(jogo => <Jogo nome={jogo.nomeJogo} estiloJogo={jogo.estiloJogo} plataforma={jogo.plataforma} imagem={jogo.imagem} /> )}
            </div>
        </section>
        : ''
    )
}

export default Plataforma