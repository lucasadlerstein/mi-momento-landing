import React from 'react'
import styled from '@emotion/styled';

const Fondo = styled.div`
    background-image: url('img/fondo-banner-black.jpg') ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 75vh;
    
    position: relative;
    @media (min-width: 768px){
        background-attachment: fixed;
    }
`;

const Texto = styled.h1`
    color: white;
    text-align: center;
    font-size: 5rem;
    margin: 0;
    font-family: 'GlacialIndifference';
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media (max-width: 540px){
        font-size: 4rem;
        width: 80%;
    }
`;

const Banner = () => {
    return (
        <Fondo>
            <div className="container">
                <Texto>
                    30 años ayudando a mujeres como vos a mejorar sus dolores y postura
                </Texto>
            </div>
        </Fondo>
    );
}
 
export default Banner;