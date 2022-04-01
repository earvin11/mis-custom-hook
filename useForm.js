import { useState } from "react";

export const useForm = ( initialState = {} ) => {

    // Crea un estado en el que value sera el initalState recibido en el argumento 
    //de la funcion y setValues la funcion para mutar los values
    const [values, setValues] = useState(initialState);

    // Metodo para hacer reset al input, estableciendo el value en el value inicial nuevamente
    const reset = () => {
        setValues( initialState );
    }

    // En esta funcion se recibe la data desestructurada y solo tendra el target
    const handleInputChange = ({ target }) => {
        setValues({
            ...values, // Lo que anteriormente haya tenido values, y en caso de que haya cambios,
            [target.name]: target.value // define una pripiedad con el nombre de lo que este en target.name, y su valor sera lo que este en target.value
        });
    }

    return [ values, handleInputChange, reset ];

}