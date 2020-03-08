import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategoriasProvider from './context/CategoriasContext'
import ListaRecetas from './components/ListaRecetas';
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext';

/* Lo mas importante para los Provider es el orden...es decir, el primero < que aparece debe ser el ultimo /> en el arbol */
/* Es decir, si tengo los provider A y B, el A va a estar primero y cuarto, y el B segundo y tercero en el orden de arriba hacia abajo */

function App() {
  return (
    <CategoriasProvider>

      <RecetasProvider>

        <ModalProvider>

          <Header />

          <div className='container mt-5'>
          
            <div className='row'>
              <Formulario />
            </div>
  
            <ListaRecetas />

          </div>    

        </ModalProvider>

      </RecetasProvider>
      
    </CategoriasProvider>
  );
}

export default App;
