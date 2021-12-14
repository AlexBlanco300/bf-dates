import React, { useEffect } from 'react'
import { useFormHook } from '../hook/useFormHook';
import { Citas } from './Citas';

export const Formulario = () => {

    useEffect(() => {
        
        setTimeout(() => {
            alert('Hola Preciosa ♥ para poder ver tus Dates escribe Tu nombre y el Mío como se muestra en los rectangulitos');
        }, 3000);

    }, [])
    
    
    const [formValores, controlDelCambioInput] = useFormHook({
        name1: '',
        name2: ''
    });

    const { name1, name2 } = formValores;

    const controlDelCambioSubmit = (e) => {
        e.preventDefault();

        alert('( ˘ ³˘)♥(ꈍᴗꈍ)');
    }
    
    return (
        <>
            <form onSubmit={ controlDelCambioSubmit }>
                <div className="divParrNom animate__animated animate__fadeIn">
                    <h2 className="centerText">Nombres de los Boyfriends!</h2>
                </div><br />
                
                <div className="div animate__animated animate__fadeInLeft animate__faster">
                    <input
                        type="text"
                        name="name1"
                        className="input form-control InputNombresNovios animate__animated"
                        placeholder="GirlFriend (Alejandra)"
                        autoComplete="off"
                        value={ name1 }
                        onChange={ controlDelCambioInput }
                        maxLength="9"
                    />
                </div><br/>
                <div className="div animate__animated animate__fadeInRight animate__faster">
                    <input
                        type="text"
                        name="name2"
                        className="input form-control InputNombresNovios"
                        placeholder="BoyFriend (Alejandro)"
                        autoComplete="off"
                        value={ name2 }
                        onChange={ controlDelCambioInput }
                        maxLength="9"
                    />
                </div><br/>
                <button type="text" className="btn btn-primary centerBtn animate__animated animate__fadeIn" >
                    Kissito
                </button><br/>
    
            </form>

            { name1 === "Alejandra" && name2 === "Alejandro" && < Citas /> }
        </>
    )
}
