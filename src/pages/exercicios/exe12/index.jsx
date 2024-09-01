import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../../components/cabecalho';
import { Link } from 'react-router-dom';

export default function ComparadorPessoas() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [listaPessoas, setListaPessoas] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const [estatisticas, setEstatisticas] = useState({
        maisVelho: "",
        mulherMaisJovem: "",
        mediaIdade: 0,
        homensMaisDe30: 0,
        mulheresMenosDe18: 0
    });

    function addPessoa() {
        if (nome !== '' && idade !== '' && sexo !== '') {
            const novaPessoa = { nome, idade: Number(idade), sexo };

            let novaListaPessoas;
            if (editIndex === -1) {
                novaListaPessoas = [...listaPessoas, novaPessoa];
            } else {
                novaListaPessoas = listaPessoas.map((pessoa, item) => {
                    if (item === editIndex) {
                        return novaPessoa;
                    } else {
                        return pessoa;
                    }
                });

                setEditIndex(-1);
            }

            setListaPessoas(novaListaPessoas);


            let maior = -Infinity;
            let menor = Infinity;
            let nm = "";
            let nmn = "";
            let outro = 0;
            let outro1 = 0;
            let soma = 0;

            for (let i = 0; i < novaListaPessoas.length; i++) {
                const pessoa = novaListaPessoas[i];
                soma += pessoa.idade;

                if (pessoa.idade > maior) {
                    maior = pessoa.idade;
                    nm = pessoa.nome;
                }

                if (pessoa.sexo === 'Feminino' && pessoa.idade < menor) {
                    menor = pessoa.idade;
                    nmn = pessoa.nome;
                }

                if (pessoa.sexo === 'Masculino' && pessoa.idade > 30) {
                    outro++;
                }

                if (pessoa.sexo === 'Feminino' && pessoa.idade < 18) {
                    outro1++;
                }
            }

            let media = soma / novaListaPessoas.length;

            setEstatisticas({
                maisVelho: nm,
                mulherMaisJovem: nmn,
                mediaIdade: media.toFixed(2),
                homensMaisDe30: outro,
                mulheresMenosDe18: outro1
            });

            setNome('');
            setIdade('');
            setSexo('');
        }
    }

    function remove(pos) {
        const updatedList = [...listaPessoas];
        updatedList.splice(pos, 1);
        setListaPessoas(updatedList);
    }

    function alterarDados(pos) {
        const pessoa = listaPessoas[pos];
        setNome(pessoa.nome);
        setIdade(pessoa.idade);
        setSexo(pessoa.sexo);
        setEditIndex(pos);
    }

    return (
        <div className='pagina-ex12 pagina'>
            <Cabecalho />

            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>
                <h1>Exercício 12 - Comparador de Pessoas</h1>
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas e calcule as estatísticas.</p>
            </section>

            <section className='ex'>
                <div className='lado' >
                    <div className='card'>
                        <div className='l'>
                            <div className='c'>
                                <h2>Nome</h2>
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div className='c'>
                                <h2>Idade</h2>
                                <input type="text" value={idade} onChange={e => setIdade(e.target.value)} />
                            </div>
                            <div className='sexo'>
                                <h2>Sexo</h2>
                                <div className='se'>
                                    <div>
                                        <input type='radio' name='gpo' value="Masculino" onChange={e => setSexo(e.target.value)} checked={sexo === 'Masculino'} /> Masculino
                                    </div>
                                    <div>
                                        <input type='radio' name='gpo' value="Feminino" onChange={e => setSexo(e.target.value)} checked={sexo === 'Feminino'} /> Feminino
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='bu'>
                            <button onClick={addPessoa}>Executar</button>
                        </div>
                    </div>

                    <section className='estatisticas'>

                        <p>Pessoa mais velha: {estatisticas.maisVelho}</p>
                        <p>Mulher mais jovem: {estatisticas.mulherMaisJovem}</p>
                        <p>Média de idade: {estatisticas.mediaIdade}</p>
                        <p>Homens com mais de 30: {estatisticas.homensMaisDe30}</p>
                        <p>Mulheres com menos de 18: {estatisticas.mulheresMenosDe18}</p>
                    </section>
                </div>
                <div className='lista'>
                    <div className='hr'>
                        <h2>Pessoas</h2>
                        <hr />
                    </div>

                    {listaPessoas.map((item, pos) => (
                        <div className='plano' key={pos}>
                            <div className=' tit'>
                                <h1>{item.nome}</h1>
                                <h2>{item.idade} anos</h2>
                            </div>

                            <p>{item.sexo}</p>

                            <div className='titulo'>
                                <button className='a ' onClick={() => alterarDados(pos)}>Editar</button>
                                <button className='b' onClick={() => remove(pos)}>Apagar</button>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
