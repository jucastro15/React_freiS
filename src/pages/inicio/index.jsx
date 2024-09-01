
import Cabecalho from '../../components/cabecalho'
import Exesdiv from '../../components/exesdiv'
import './index.scss'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho />


            <section>
                <h1 className=' tr'>Escolha um treino...</h1>


                <div className='exercicios'>

                    <Exesdiv
                        Link='/ex1'
                        h2='Cupom de desconto'
                        h3='Exercício 1'
                        color='#FFCE37'
                    />

                    <Exesdiv
                        Link='/ex2'
                        h2='Converter Kg/gramas'
                        h3='Exercício 2'
                        color='#B3FF37'
                    />


                    <Exesdiv
                        Link='/ex3'
                        h2='Valor total por quantidade'
                        h3='Exercício 3'
                        color='#37FFF3'
                    />

                    <Exesdiv
                        Link='/ex4'
                        h2='Tempo por Pagina'
                        h3='Exercício 4'
                        color='#ff37cd'
                    />


                </div>


            </section>

            <section>


                <div className='exercicios'>

                    <Exesdiv
                        Link='/ex5'
                        h2='Situação do Aluno'
                        h3='Exercício 5'
                        color='#b00d0d'
                    />

                    <Exesdiv
                        Link='/ex6'
                        h2='Calculo de Salario liquido'
                        h3='Exercício 6'
                        color='#078807'
                    />


                    <Exesdiv
                        Link='/ex7'
                        h2='Cores Primarias'
                        h3='Exercício 7'
                        color='#150c97'
                    />

                    <Exesdiv
                        Link='/ex8'
                        h2='Situação temperatura'
                        h3='Exercício 8'
                        color='#7401a1'
                    />


                </div>


            </section>


            <section>


                <div className='exercicios'>

                    <Exesdiv
                        Link='/ex9'
                        h2='Sorveteria'
                        h3='Exercício 9'
                        color='#D0D0D0'
                    />


                    <Exesdiv
                        Link='/ex10'
                        h2='Imc'
                        h3='Exercício 10'
                        color='#E44F9C'
                    />

                    <Exesdiv
                        Link='/ex11'
                        h2='Tabuada'
                        h3='Exercício 11'
                        color='#ff4800'
                    />

                    <Exesdiv
                        Link='/ex12'
                        h2='Comparador de pessoas'
                        h3='Exercício 12'
                        color='#000'
                    />

                </div>


            </section>
        </div>
    )
}