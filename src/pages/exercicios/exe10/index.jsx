import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../../components/cabecalho';
import { Link } from 'react-router-dom';

export default function Imc() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [listaImc, setListaImc] = useState([]);
    const [edit, setEdit] = useState(-1);

    function addImc() {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum === 0 || pesoNum === 0) return;

        const i = pesoNum / (alturaNum * alturaNum);
        let situacao;

        if (i >= 40) {
            situacao = `Altura: ${alturaNum} | Peso: ${pesoNum} | Situação: Obesidade Grau III |||`;
        } else if (i >= 35 && i <= 39.9) {
            situacao = `Altura: ${alturaNum} | Peso: ${pesoNum} | Situação: Obesidade Grau II ||`;
        } else if (i >= 30 && i <= 34.9) {
            situacao = `Altura: ${alturaNum} | Peso: ${pesoNum} | Situação: Obesidade Grau I |`;
        } else if (i >= 25 && i <= 29.9) {
            situacao = `Altura: ${alturaNum} | Peso: ${pesoNum} | Situação: Sobrepeso`;
        } else if (i >= 18.5 && i <= 24.9) {
            situacao = `Altura: ${alturaNum} | Peso: ${pesoNum} | Situação: Peso Normal`;
        } else if (i < 18.5) {
            situacao = `Altura: ${alturaNum} | Peso: ${pesoNum} | Situação: Abaixo do Peso`;
        }

        const newImc = { altura: alturaNum, peso: pesoNum, situacao };

        if (edit === -1) {
            setListaImc([...listaImc, newImc]);
        } else {
            const updatedList = [...listaImc];
            updatedList[edit] = newImc;
            setListaImc(updatedList);
            setEdit(-1);
        }

        setAltura('');
        setPeso('');
    }

    function remove(pos) {
        const updatedList = [...listaImc];
        updatedList.splice(pos, 1);
        setListaImc(updatedList);
    }

    function editing(pos) {
        const item = listaImc[pos];
        setAltura(item.altura);
        setPeso(item.peso);
        setEdit(pos);
    }

    function tA(e) {
        if (e.key === 'Enter') {
            addImc();
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
                <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, <b>calcule o IMC</b> e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>
            </section>

            <section className='ex'>
                <div className='card'>
                    <div className='l'>
                        <div className='c'>
                            <h2>Altura</h2>
                            <input
                                type="number"
                                step="0.01"
                                value={altura}
                                onChange={e => setAltura(e.target.value)}
                                onKeyDown={tA}
                            />
                        </div>
                        <div className='c'>
                            <h2>Peso</h2>
                            <input
                                type="number"
                                step="0.1"
                                value={peso}
                                onChange={e => setPeso(e.target.value)}
                                onKeyDown={tA}
                            />
                        </div>
                    </div>
                    <div className='bu'>
                        <button onClick={addImc}>Executar</button>
                    </div>
                </div>

                <ul>
                    {listaImc.map((i, pos) => (
                        <li key={pos}>
                            <div className='linha-b'>{i.situacao}
                                <img
                                    className='edit'
                                    onClick={() => editing(pos)}
                                    src="/assets/images/edit.png"
                                    alt=""
                                />
                            </div>
                            <div className='bot'>
                                <button onClick={() => remove(pos)}>
                                    <img src="/assets/images/image.png" alt="" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
