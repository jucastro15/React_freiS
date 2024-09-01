import Cabecalho from '../../../components/cabecalho'
import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nota() {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const [tpp, setTpp] = useState(0)
    const [passou, setPassou] = useState(false)

    function Tpp() {
      
        const nota1 = Number(n1) ;
        const nota2 = Number(n2) ;
        const nota3 = Number(n3) ;

        const Media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

       setPassou(Media >= 6)

       
        setTpp(Media);
        setN1(0);
        setN2(0);
        setN3(0);
    }

    return (
        <div className='pagina-ex5 pagina'>
            <Cabecalho />
            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>
                <h1>Exercício 05 - Situação do Aluno</h1>
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em Javascript para <b>verificar</b> se um aluno passou ou não,baseado em 3 notas , considerando que nota média para passar é 6 </p>
            </section>

            <section className='ex'>
                <div className='card'>
                    <div className='conteudo'>
                        <div className='qtd'>
                            <h2>Nota 01</h2>
                            <input type="text" value={n1} onChange={e => setN1(e.target.value)} />
                        </div>
                        <div className='qtd'>
                            <h2>Nota 02</h2>
                            <input type="text" value={n2} onChange={e => setN2(e.target.value)} />
                        </div>
                        <div className='qtd'>
                            <h2>Nota 03</h2>
                            <input type="text" value={n3} onChange={e => setN3(e.target.value)} />
                        </div>    
                    </div>

                    <div>
                        <button onClick={Tpp}>Executar</button>
                    </div>
                </div>

                <h3>A média do Aluno é {tpp}</h3>
                <h3>Aluno passou? {passou ? 'true': 'false'}</h3>
            </section>
        </div>
    )
}
