import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.div`
    background-color: var(--colorVerde);
`;

const Logos = styled.div`
    text-align: center;
    @media (min-width: 768px){
        text-align: right;
    }
`;

const Logo = styled.a`
    margin: 0 1rem;
    &:hover img {
        transform: rotate(-360deg);
    }
    img {
        transition: all .5s ease;
        max-width: 4rem;
    }
`;

const Nombre = styled.p`
    font-size: 2.5rem;
    font-family: 'Oregano';
    font-weight: bold;
    margin-bottom: 0;
`;

const ItemPuesto = styled(Nombre)`
    font-size: 2rem;
    color: var(--colorGrisClaro); 
`;

const Footer = () => {
    return (
        <Fondo className="py-5r">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-8 mb-mob-3 text-center-mob">
                        <Nombre>Sandra Guelman Giser</Nombre>
                        <ItemPuesto>Kinesióloga</ItemPuesto>
                        <ItemPuesto>Stretching Global Activo</ItemPuesto>
                        <ItemPuesto>R.P.G. - Reeducación Postural Global</ItemPuesto>
                        <ItemPuesto>Universidad de Buenos Aires</ItemPuesto>
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Logos>
                            <Logo href="#" target="_blank">
                                <img src="img/logo-facebook.png" alt="Facebook Movimiento Sin Dolor"/>
                            </Logo>
                            <Logo href="#" target="_blank">
                                <img src="img/logo-instagram.png" alt="Instagram Movimiento Sin Dolor"/>
                            </Logo>
                            <Logo href="#" target="_blank">
                                <img src="img/logo-whatsapp.png" alt="WhatsApp Movimiento Sin Dolor"/>
                            </Logo>
                            <Logo href="#" target="_blank">
                                <img src="img/logo-email.png" alt="Email Movimiento Sin Dolor"/>
                            </Logo>
                        </Logos>
                    </div>
                </div>
            </div>
        </Fondo>
    );
}
 
export default Footer;