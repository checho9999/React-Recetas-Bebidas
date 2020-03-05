import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext'

const Formulario = () => {

    //Definimos el state de la busqueda para actualizarla desde el input del usuario
    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })

    //Accedemos al Provider
    const { categorias } = useContext(CategoriasContext);
    //console.log(categorias);

    //Actulizamos el state en base a lo ingresado desde el input por el usuario
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;