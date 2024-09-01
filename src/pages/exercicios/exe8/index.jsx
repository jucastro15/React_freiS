import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Temperatura() {

    const [temperatura, setTemperatura] = useState(0)
    const [situacao, setSituacao] = useState(0)


    function converter() {

        if (temperatura >= 41) {
            setSituacao(`Hipertermia`)
        }

        else if (temperatura >= 39.6 && temperatura < 41) {
            setSituacao(`Febre Alta`)
        }

        else if (temperatura >= 37.6 && temperatura < 39.6) {
            setSituacao(`Febre`)
        }

        else if (temperatura >= 36 && temperatura < 37.6) {
            setSituacao(`Normal`)
        }

        else {
            setSituacao(`Hipotermia`)
        }



    }

    return (
        <div className='pagina-ex8 pagina'>
            <Cabecalho />

            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>

                <h1>Exercício 08 - Situação temperatura</h1>


            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em javascript que a partir da temperatura,<b> avalie a situação </b>da pessoa conforme a tabela. Ao final, apresente a classificação</p>
            </section>



            <section className='ex'>
                <div className='tempes'>
                    <img src="/assets/images/temperatura.webp" alt="" />
                </div>
                <div className='card'>
                    <h2>Qual a sua temperatura</h2>
                    <input type="text" value={temperatura} onChange={e => setTemperatura(e.target.value)} />

                    <div>
                        <button onClick={converter} >Executar</button>
                    </div>


                </div>
                <h3>Situacao para a sua temperatura é {situacao} </h3>
            </section>
        </div>
    )
}