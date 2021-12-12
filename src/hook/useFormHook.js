import { useState } from "react";

export const useFormHook = ( initialState = {} ) => {

    const [valoresForm, setValoresForm] = useState(initialState);

    const controlDelCambioInput = ({ target }) => {

        setValoresForm({
            ...valoresForm,
            [ target.name ] : target.value 
        });
    };

    return [ valoresForm, controlDelCambioInput ];


}
