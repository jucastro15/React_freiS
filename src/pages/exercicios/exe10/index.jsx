import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'

export default function Imc() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [listaImc, setListaImc] = useState([])
    const [imc, setImc] = useState('')
    const [edit, setEdit] = useState(-1)

    function addImc() {
        if (peso === 0 || altura === 0) return;

        const i = peso / (altura * altura)
        let s = ''

        if (i >= 40) {
            s = `Altura: ${altura} | Peso: ${peso} | Situação: Obesidade Grau |||`
        } else if (i >= 35 && i <= 39.9) {
            s = `Altura: ${altura} | Peso: ${peso} | Situação: Obesidade Grau ||`
        } else if (i >= 30 && i <= 34.9) {
            s = `Altura: ${altura} | Peso: ${peso} | Situação: Obesidade Grau |`
        } else if (i >= 25 && i <= 29.9) {
            s = `Altura: ${altura} | Peso: ${peso} | Situação: Sobrepeso`
        } else if (i >= 18.5 && i <= 24.9) {
            s = `Altura: ${altura} | Peso: ${peso} | Situação: Peso Normal`
        } else if (i < 18.5) {
            s = `Altura: ${altura} | Peso: ${peso} | Situação: Abaixo do Peso`
        }

        if (edit === -1) {
            setListaImc([...listaImc, s])
        } else {
            const updatedList = [...listaImc]
            updatedList[edit] = s
            setListaImc(updatedList)
            setEdit(-1)
        }

        setImc(s)
        setAltura(0)
        setPeso(0)
    }
    function remove(pos) {

        listaImc.splice(pos, 1)

        setListaImc([...listaImc])

    }
    function editing(pos) {
        const item = listaImc[pos].split('|')
        const alturaItem = parseFloat(item[1].split(':')[1].trim())
        const pesoItem = parseFloat(item[0].split(':')[1].trim())

        setAltura(alturaItem)
        setPeso(pesoItem)
        setEdit(pos)
    }

    function tA(e) {
        if (e.key === 'Enter') {
            addImc()
        }
    }

    return (
        <div className='pagina-ex10 pagina'>
            <Cabecalho />

            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>

                <h1>Exercício 10 - Imc</h1>


            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa,  <b>calcule o IMC</b> e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
            </section>

            <section className='ex'>

                <div className='card'>
                    <div className='l'>
                        <div className='c'>
                            <h2>Altura</h2> <input type="text" value={altura} onChange=
                                {e => setAltura(e.target.value)} />
                        </div>
                        <div className='c'>
                            <h2>Peso</h2>
                            <input type="text" value={peso} onChange={e => setPeso(e.target.value)} />
                        </div>
                    </div>
                    <div className='bu'>
                        <button onClick={addImc} >Executar</button>
                    </div>


                </div>

                <ul>
                    {listaImc.map((i, pos) => (
                        <li key={pos}>
                            <li className='linha-b'> {i}
                                <img className='edit' onClick={() => editing(pos)} src="/assets/images/edit.png" alt="" />
                            </li>
                            <li className='bot'>
                                <button onClick={remove}><img src="/assets/images/image.png" alt="" /></button>
                            </li>
                        </li>
                    ))}
                </ul>

            </section>
        </div>
    )
}
