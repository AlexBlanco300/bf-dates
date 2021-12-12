import React, { useEffect } from 'react';
// import piper from '../imagenes/comboPiper1.jpg';
import smart from '../imagenes/smartFifi1.jpg';
import papas from '../imagenes/papas4.jpg';
import canelazos from '../imagenes/canelazos1.png';
import caca from '../imagenes/caca1.jfif';

export const CitasOpciones = ( {cita} ) => {

    useEffect(() => {
        console.log('Componente de 5 opciones montado')
        return () => {
            console.log('Componente de 5 opciones Desmontado')
        }
    }, []);

    switch (true) {
        case cita === '1':
            return (
                <div className="divCita1 animate__animated animate__bounceInUp animate__faster">
                    <h3>COMBO PIPER</h3>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p>⋆ Ir la pirer paiper picsa</p>
                    <p>⋆ Jugar en los jueguitos y ganar muchos tickets</p>
                    <p>⋆ Obvio microbio unas ricas pizzas</p>
                    <div>
                        <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/ce95393a23a97709044f0a81a39e157bc1635364/src/imagenes/comboPiper1.jpg" width="60%" className="imgCita" alt="imagen de Date"/>
                    </div>
                </div>
            )

        case cita === '2':
            return (
                <div className="divCita2 animate__animated animate__bounceInUp animate__faster">
                    <h3>SMART FIFI</h3>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p>⋆ Conocer el Smart más codiciado de la ciudad</p>
                    <p>⋆ Unas papitas con queso con su chesquito</p>
                    <p>⋆ Unas retas de Mario Kart de postre</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/src/imagenes/smartFifi1.jpg" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )
            
        case cita === '3':
            return (
                <div className="divCita3 animate__animated animate__bounceInUp animate__faster">
                    <h3>PLAN PAPAS</h3>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p>⋆ Comer papas fritas con queso</p>
                    <p>⋆ Con puré de papa</p>
                    <p>⋆ Papitas Sabritas</p>
                    <p>⋆ Con kechu</p>
                    <p>⋆ Ver un mini documental sobre papas fritas</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/src/imagenes/papas4.jpg" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )

        case cita === '4':
            return (
                <div className="divCita4 animate__animated animate__bounceInUp animate__faster">
                    <h3>COMBO CANELAZO</h3>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p>⋆ Echarnos unos buenos Canelazos Cajeta Baitz Domino's</p>
                    <p>⋆ Acompañados de una buena película de Marvel</p>
                    <p>⋆ Un besío en el cachetío</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/src/imagenes/canelazos1.png" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )

        case cita === '5':
            return (
                <div className="divCita5 animate__animated animate__bounceInUp animate__faster">
                    <h3>COMBO C.A.C.A.</h3>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p>⋆ Recitar CACA (Clientes Adoran Comer Aquí )</p>
                    <p>⋆ Ver la peli de Bob Esponja</p>
                    <p>⋆ Echarnos una rica Cangreburguer de algún Crustáceo Cascarudo de la ciudad</p>
                    <img src="https://i.pinimg.com/originals/d9/6a/1d/d96a1d3e6315ed8e92c892fdd769f9b1.jpg" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )
    
        default:
            return (
                <div className="divDefault animate__animated animate__fadeIn animate__faster">
                    <p className="textDefault">Escribe en el recuadro de arriba el numerito(1-5) de la que deseas conocer.</p>
                </div>
            )
    }

}
