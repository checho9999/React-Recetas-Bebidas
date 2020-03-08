import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//Creamos el context para que pueda ser utilizado en otros componentes
export const ModalContext = createContext();

//Provider para definir el state y las funciones
const ModalProvider = ( props ) => {

    //Definimos el state que sera actualizado desde la Receta para obtener el id de la misma
    const [ idreceta, guardarIdReceta ] = useState(null);

    //Definimos el state del Provider para actualizar los datos de las recetas provenientes desde la API
    const [ informacion, guardarReceta ] = useState({});

    //Definimos y ejecutamos el llamado a la API 
    useEffect( () => {

        const obtenerReceta = async () => {

            //La primera vez no hay nada
            if (!idreceta) return;

            //definimos la url para acceder a la API
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            //Llamamos a la API
            const resultado = await axios.get(url);
 
            //actualizamos el state
            guardarReceta(resultado.data.drinks[0]);

        }

        obtenerReceta();

    }, [ idreceta ]);

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;