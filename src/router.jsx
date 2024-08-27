import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Cupom from './pages/exercicios/exe1';
import Conversao from './pages/exercicios/exe2';
import TotalQtd from './pages/exercicios/exe3';
import Livro from './pages/exercicios/exe4';
import Nota from './pages/exercicios/exe5';
import Salario from './pages/exercicios/exe6';
import Primarias from './pages/exercicios/exe7';
import Temperatura from './pages/exercicios/exe8';
import Sorvete from './pages/exercicios/exe9';
import Tabuada from './pages/exercicios/exe11';
import Imc from './pages/exercicios/exe10';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/ex1' element={<Cupom />} />
                <Route path='/ex2' element={<Conversao />} />
                <Route path='/ex3' element={<TotalQtd />} />
                <Route path='/ex4' element={<Livro />} />
                <Route path='/ex5' element={<Nota />} />
                <Route path='/ex6' element={<Salario/>} />
                <Route path='/ex7' element={<Primarias/>} />
                <Route path='/ex8' element={<Temperatura/>} />
                <Route path='/ex9' element={<Sorvete />} />
                <Route path='/ex10' element={<Imc />} />
                <Route path='/ex11' element={<Tabuada />} />
                <Route path='/sobre' element={<Sobre />} />
               

            </Routes>
        </BrowserRouter>
    );
}
