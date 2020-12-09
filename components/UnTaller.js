import React from 'react';
import styled from '@emotion/styled';

const Taller = styled.div`
    border: 1px solid black;
    margin: 0 auto 4rem;
    width: 90%;
    max-width: 40rem;
    overflow: hidden;
    text-align: center;
    padding-bottom: 4rem;
`;

const Imagen = styled.img`
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
    transition: all .3s ease;  
    
    &:hover {
        transform: scale(1.1);
    }
`;

const Titulo = styled.h5`
    font-size: 2.5rem;
    margin: 3rem auto;
    text-transform: uppercase;
    width: 80%;
    font-family: 'Oregano';
    font-weight: bold;
`;

const Descripcion = styled.p`
    color: #646464;
    width: 80%;
    font-size: 2rem;
    margin: 3rem auto 4rem;
    font-family: 'GlacialIndifference';
`;

const UnTaller = () => {
    return (
        <Taller>
            <Imagen src="img/fondo-banner.jpg" alt="Esto es un taller" />
            <Titulo>Libera tu cuello<br /> y espalda alta</Titulo>
            <Descripcion>
                ¿Sentís que no podes hacer nada más cuando estás dolorida?
                ¿Sentís que no podes hacer nada más cuando estás dolorida?
            </Descripcion>
            <a href="#" className="btn btn-rosa text-black font-glacial">MÁS INFO</a>
        </Taller>
    );
}
 
export default UnTaller;