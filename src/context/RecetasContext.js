import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creamos el context para que pueda ser utilizado en otros componentes
export const RecetasContext = createContext();

//Provider para definir el state y las funciones
const RecetasProvider = ( props ) => {

    //Definimos el state del Provider para actualizar la recetas provenientes desde la API
    const [ recetas, guardarRecetas ] = useState([]);

    //Definimos el state que sera actualizado desde el Formulario para obtener el criterio de busqueda
    const [ busqueda, buscarRecetas ] = useState({
        nombre: '',
        categoria: ''
    });

    //Definimos el state que sera actualizado desde el Formulario saber si hay que realizar la consulta o no
    const [ consultar, guardarConsultar ] = useState(false);

    //Extraemos los datos del criterio de busqueda del usuario obtenimos desde el input del Formulario
    const { nombre, categoria } = busqueda;

    //Definimos y ejecutamos el llamado a la API 
    useEffect(() => {

        //Realizamos la busqueda solo si se submitio el Formulario
        if (consultar) {

            //Esto lo agrego yo...Reseteamos el valor a false porque ya se mando la busqueda desde el formulario
            guardarConsultar(false);

            const obtenerRecetas = async () => {

                //definimos la url para acceder a la API
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
    
                //Llamamos a la API
                const resultado = await axios.get(url);
                
                //actualizamos el state
                guardarRecetas(resultado.data.drinks);
                //console.log(resultado.data.drinks);
            }

            obtenerRecetas();
        }

    }, [ busqueda, categoria, consultar, nombre ]); //categoria, consultar y nombre los agregue por warning

    return ( 
        <RecetasContext.Provider
            value={{  
                recetas,              
                buscarRecetas,
                guardarConsultar 
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}

export default RecetasProvider;