import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta'

const ListaRecetas = () => {

    //Extraigo las recetas desde el Context
    const { recetas } = useContext(RecetasContext);

    // si el objeto llega vacio no se ejecuta nada
    if(Object.keys(recetas).length === 0 ) return null;

    //console.log(recetas);

    return ( 
        <div className="row mt-5">
            {recetas.map(receta => (
                <Receta 
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
     );
}
 
export default ListaRecetas;