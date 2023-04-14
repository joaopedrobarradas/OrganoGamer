import './Jogo.css'

const Jogo = (props) => {
    return (<div className='jogador'>
        <div className='cabecalho'>
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h4>{props.estiloJogo}</h4>
            <h5>{props.plataforma}</h5>
        </div>
    </div>)
}


export default Jogo