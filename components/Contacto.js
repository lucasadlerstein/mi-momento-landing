import React from 'react';
import styled from '@emotion/styled';

const Sub = styled.p`
    font-size: 3.5rem;
    font-family: 'Oregano';
    font-weight: bold;
    margin-bottom: 0;
`;

const BotonTexto = styled.p`
    font-size: 2.5rem;
    font-family: 'Oregano';
    color: var(--colorGrisOscuro);
`;

const ImagenBoton = styled.img`
    margin: 2rem;
    max-width: 12rem;
`;

const Contacto = () => {
    return (
        <div className="py-10r container text-center" id="contacto">
            <h2 className="font-weight-bold">¡Hablemos!</h2>
            <Sub>Contactame como te sea más comodo.</Sub>
            <div className="row mt-5">
                <div className="col-xs-12 col-md-6">
                    <a href="https://wa.me/5491161409865" target="_blank">
                        <ImagenBoton src="img/whatsapp.png" alt="Contactame por WhatsApp" />
                    </a>
                    <a>
                        <BotonTexto>WhatsApp<br/>+54 9 11 6140 9865</BotonTexto>
                    </a>
                </div>
                <div className="col-xs-12 col-md-6">
                    <a href="mailto:sandragiser@gmail.com" target="_blank">
                        <ImagenBoton src="img/email.png" alt="Contactame por Email" />
                    </a>
                    <a>
                        <BotonTexto>Email<br/>sandragiser@gmail.com</BotonTexto>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Contacto;