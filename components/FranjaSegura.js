import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.div`
    background-color: var(--colorRosa);
`;

const Titulo = styled.p`
    font-size: 5rem;
    text-transform: uppercase;
    font-family: 'Oregano';
    font-weight: bold;
`;

const Sub = styled.p`
    font-size: 3.5rem;
    font-family: 'Oregano';
    font-weight: bold;
    margin-bottom: 0;
`;

const FranjaSegura = () => {
    return (
        <Fondo className="py-10r text-center">
            <div className="container">
                <Titulo>¿No estás segura de que necesitás</Titulo>
                <Sub>o cuál es tu tratamiento ideal?</Sub>
            </div>
        </Fondo>
    );
}
 
export default FranjaSegura;