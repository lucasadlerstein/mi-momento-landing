import React from 'react';
import styled from '@emotion/styled';
import UnTaller from './UnTaller';

const Fondo = styled.div`
    background-color: var(--colorVerde);
    text-align: center;
`;

const Subtitulo = styled.h5`
    font-size: 2.5rem;
    font-weight: normal;
    font-family: 'GlacialIndifference';
    margin-bottom: 5rem;
    strong {
        font-weight: bold;
    }
`;

const Talleres = () => {
    return (
        <Fondo className="py-10r" id="talleres">
            <div className="container">
                <h2>Talleres</h2>
                <Subtitulo>Espacios para vos, este es <strong>tu momento.</strong></Subtitulo>
                <div className="row">
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller />
                    </div>
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller />
                    </div>
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller />
                    </div>
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller />
                    </div>
                </div>
            </div>
        </Fondo>

    );
}
 
export default Talleres;