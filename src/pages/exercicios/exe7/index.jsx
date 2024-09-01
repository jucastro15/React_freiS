import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Primarias() {

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [cor, setCor] = useState(false)

    function Cor() {

        const coresPrimarias = ['vermelho', 'amarelo', 'azul'];
        const coresValidas = coresPrimarias.includes(cor1.toLowerCase()) && coresPrimarias.includes(cor2.toLowerCase());

        setCor(coresValidas);
        setCor1('')
        setCor2('')



    }

    return (
        <div className='pagina-ex7 pagina'>

            <Cabecalho />
            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>

                <h1>Exercício 07 - Cores Primarias</h1>


            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em Javascript para <b>verificar</b> se duas cores são primarias.</p>
            </section>

            <section className='ex'>

                <div className='card'>
                    <h2>Informe uma cor</h2>
                    <input type="text" value={cor1} onChange={e => setCor1(e.target.value)} />
                    <h2>Informe outra cor</h2>
                    <input type="text" value={cor2} onChange={e => setCor2(e.target.value)} />

                    <div>
                        <button onClick={Cor} >Executar</button>
                    </div>


                </div>
                <h3>As duas cores são primarias? {cor ? 'true':'false'} </h3>
            </section>

        </div>
    )
}