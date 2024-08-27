import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Tabuada() {
    const [numero, setNumero] = useState('')
    const [situacao, setSituacao] = useState([])

    function calcularTabuada() {
       
        const numeroInt = Number(numero)

       
        let tabuada = []
        for (let i = 1; i <= 10; i++) {
            tabuada.push(`${numeroInt} X ${i} = ${numeroInt * i}`)
        }

        
        setSituacao(tabuada)
        setNumero('') 
    }
    
    return (
        <div className='pagina-ex11 pagina'>
            <Cabecalho />

            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="Voltar" />
                </Link>
                <h1>Exercício 11 - Tabuada</h1>
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em <b>Javascript</b> que <b>calcule a tabuada de um número fornecido.</b></p>
            </section>

            <section className='ex'>
                <div className='card'>
                    <h2>Informe o número</h2>
                    <input type="text" value={numero} onChange={e => setNumero(e.target.value)}/>
                    <div>
                        <button onClick={calcularTabuada}>Executar</button>
                    </div>
                </div>

                <div className='ali'>
                    {situacao.map((item, pos) => (
                        <h3 key={pos}>{item}</h3>
                    ))}
                </div>
            </section>
        </div>
    )
}
