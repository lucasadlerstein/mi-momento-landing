import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.div`
    text-align: center;
`;

const Texto = styled.p`
    font-size: 3rem;
    font-family: 'GlacialIndifference';
    margin: 4rem 0;
`;

const ConsultasIndividuales = () => {
    return (
        <Fondo className="py-10r" id="sesiones">
            <div className="container">
                <h2>Consultas online individuales</h2>
                <Texto>
                    Desde la comodidad y seguridad de tu casa.<br/>
                    No esperes a que tus dolores aumenten,<br/>
                    a que tus articulaciones se deterioren o que tus postura empeore.
                </Texto>
                <a href="https://wa.me/5491161409865" className="btn btn-rosa font-glacial">Consultar por WhatsApp</a>
            </div>
        </Fondo>
    );
}
 
export default ConsultasIndividuales;