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
                <div className="col-xs-12 col-md-4">
                    <a href="#" target="_blank">
                        <ImagenBoton src="img/whatsapp.png" alt="Contactame por WhatsApp" />
                    </a>
                    <a>
                        <BotonTexto>WhatsApp<br/>+54 9 11 2222 2222</BotonTexto>
                    </a>
                </div>
                <div className="col-xs-12 col-md-4">
                    <a href="#" target="_blank">
                        <ImagenBoton src="img/email.png" alt="Contactame por Email" />
                    </a>
                    <a>
                        <BotonTexto>Email<br/>sandra@movimientosindolor.com</BotonTexto>
                    </a>
                </div>
                <div className="col-xs-12 col-md-4">
                    <a href="#" target="_blank">
                        <ImagenBoton src="img/telefono.png" alt="Contactame por Telefono" />
                    </a>
                    <a>
                        <BotonTexto>Teléfono<br/>+54 9 11 2222 2222</BotonTexto>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Contacto;