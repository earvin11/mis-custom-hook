import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);

    // state es igual a lo que venga en el argumento de useState
    //En este caso un objeto con una data vacia, cargando data(loading true) y sin errores
    // setState es la funcion para cambiar el state 
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {

        return () => {
            isMounted.current = false;
        }

    }, [])

    // Hook para escuchar cada vez que el segundo argumento[url] cambie
    useEffect( () => {

        //Cuando se dispare la peticion nuevamente por cambio del url reinicia nuevamente el state
        setState({ data: null, loading: true, error: null });

        // Realiza la peticion fetch, pasa la resp que traiga a json
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if( isMounted.current ) {
                    // Modifica el state con los siguientes datos
                    setState({
                        error: null,
                        loading: false,
                        data
                    });
                }

            });

    }, [url])

    return state;

}