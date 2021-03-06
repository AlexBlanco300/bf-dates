import React, { useEffect } from 'react';
// import piper from './assets/images/piper.jpg';
// import smart from './assets/images/smart.jpg';
// import papas from './assets/images/papas.jpg';
// import canelazos from './assets/images/canelazos.png';
// import caca from './assets/images/caca.jfif';

// const datesImages = require.context('./assets/images', true );



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
                    <p></p>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p></p>
                    <p>⋆ Ir la pirer paiper picsa.</p>
                    <p>⋆ Jugar en los jueguitos y ganar muchos tickets.</p>
                    <p>⋆ Obvio microbio unas ricas pizzas.</p>
                    <div>
                        <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/piper.jpg" width="60%" className="imgCita" alt="imagen de Date"/>
                    </div>
                </div>
            )

        case cita === '2':
            return (
                <div className="divCita2 animate__animated animate__bounceInUp animate__faster">
                    <h3>SMART FIFI</h3>
                    <p></p>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p></p>
                    <p>⋆ Conocer el Smart más codiciado de la ciudad.</p>
                    <p>⋆ Unas papitas con queso con su chesquito.</p>
                    <p>⋆ Unas retas de Mario Kart de postre.</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/smart.jpg" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )
            
        case cita === '3':
            return (
                <div className="divCita3 animate__animated animate__bounceInUp animate__faster">
                    <h3>PLAN PAPAS</h3>
                    <p></p>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p></p>
                    <p>⋆ Comer papas fritas con queso.</p>
                    <p>⋆ Con puré de papa.</p>
                    <p>⋆ Papitas Sabritas.</p>
                    <p>⋆ Con kechu.</p>
                    <p>⋆ Ver un mini documental sobre papas fritas.</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/papas.jpg" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )

        case cita === '4':
            return (
                <div className="divCita4 animate__animated animate__bounceInUp animate__faster">
                    <h3>COMBO CANELAZO</h3>
                    <p></p>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p></p>
                    <p>⋆ Echarnos unos buenos Canelazos Cajeta Baitz Domino's.</p>
                    <p>⋆ Acompañados de una buena película de Marvel.</p>
                    <p>⋆ Un besío en el cachetío.</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/canelazos.png" width="80%" className="imgCita" alt="imagen de Date"/>
                </div>
            )

        case cita === '5':
            return (
                <div className="divCita5 animate__animated animate__bounceInUp animate__faster">
                    <h3>COMBO C.A.C.A.</h3>
                    <p></p>
                    <h4>¿Qué te ofrece esta Date?</h4>
                    <p></p>
                    <p>⋆ Recitar CACA (Clientes Adoran Comer Aquí ).</p>
                    <p>⋆ Ver la peli de Bob Esponja.</p>
                    <p>⋆ Echarnos una rica Cangreburguer de algún Crustáceo Cascarudo de la ciudad.</p>
                    <img src="https://raw.githubusercontent.com/AlexBlanco300/bf-dates/main/cangreburger.jpg" width="80%" className="imgCita" alt="imagen de Date"/>
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
