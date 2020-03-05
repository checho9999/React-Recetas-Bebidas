  
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creamos el context para que pueda ser utilizado en otros componentes
export const CategoriasContext = createContext();

//Provider para definir el state y las funciones
const CategoriasProvider = ( props ) => {

    //Definimos el state del Provider para actualizar la categorias provenientes desde la API
    const [ categorias, guardarCategorias ] = useState([]);

    //Definimos y ejecutamos el llamado a la API 
    useEffect(() => {

        const obtenerCategorias = async () => {

            //definimos la url para acceder a la API
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            //Llamamos a la API
            const categorias = await axios.get(url);

            //actualizamos el state
            guardarCategorias(categorias.data.drinks);

        }

        obtenerCategorias();

    }, []);

    return (

        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>

    )
}

export default CategoriasProvider;