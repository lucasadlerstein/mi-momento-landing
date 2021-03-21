import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.div`
    background-color: var(--colorRosa);
`;

const Imagen = styled.img`
    border-radius: 100%;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    transition: all .3s ease;
    &:hover {
        transform: rotate(-10deg);
    }
`;

const Texto = styled.h5`
    font-size: 2.5rem;
    margin-top: 4rem;
    color: white;
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: 'Oregano';
`;

const Mom = () => {
    return (
        <>
            <Fondo className="py-10r">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xs-12 col-lg-4 mb-mob-3">
                            <Imagen src="img/sesiones-individuales-online.jpg" alt="Sesiones y consultas individuales online o presencial" />
                            <Texto>
                                Sesiones y consultas<br/>Individuales<br/>Online<br/>o presencial
                            </Texto>
                        </div>  
                        <div className="col-xs-12 col-lg-4 mb-mob-3" >
                            <Imagen src="img/sesiones-grupales-presenciales.jpg" alt="Talleres grupales online o presencial" />
                            <Texto>
                                Talleres grupales<br/>Online<br/>O presencial
                            </Texto>
                        </div>  
                        <div className="col-xs-12 col-lg-4 mb-mob-3">
                            <Imagen src="img/charlas-online-gratuitas.jpg" alt="Charlas online gratutias para mujeres!" />
                            <Texto>
                                Charlas online<br/>Gratuitas<br/>Para mujeres
                            </Texto>
                        </div>  
                    </div>
                </div>
            </Fondo>
        </>
    );
}
 
export default Mom;