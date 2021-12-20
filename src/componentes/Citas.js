import React, { useEffect } from 'react'
import { useFormHook } from '../hook/useFormHook';
import { CitasOpciones } from './CitasOpciones';


export const Citas = () => {

    const [formValores, controlDelCambioInput] = useFormHook({
        cita: ''
    });

    const { cita } = formValores;

    const controlDelCambioSubmit = (e) => {
        e.preventDefault();

        console.log(cita);
    }

    useEffect(() => {
        console.log('Componente de citas Montado')
        return () => {
            console.log('Componente de citas Desmontado')
        }
    }, [])

    return (
        <>
        <form onSubmit={ controlDelCambioSubmit }>
            <div className="divSelectCitaTit animate__animated animate__fadeIn animate__faster">
                <p className="centerText">Tienes 5 citas disponibles mi Amorcito!</p>
            </div><br/>
                <input
                        type="tel"
                        name="cita"
                        className="input form-control centerTexSelect inputSelectCita animate__animated animate__headShake"
                        placeholder="♥"
                        autoComplete="off"
                        value={ cita }
                        onChange={ controlDelCambioInput }
                        min="1"
                        max="5"
                        maxLength="1"
                />
                
        </form><br/>

        <CitasOpciones cita={ cita }/>

        </>
    )
}
