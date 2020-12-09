import React from 'react';
import styled from '@emotion/styled';

const Imagen = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 100%; 
    object-fit: cover;
    transition: all .3s ease;
    &:hover {
        transform: rotate(-10deg);
    }
`;
const Fondo = styled.div`
    background-color: #f8f9fa;
    width: 100%;
    -webkit-box-shadow: -2px 3px 19px 0px rgba(0,0,0,0.34);
-moz-box-shadow: -2px 3px 19px 0px rgba(0,0,0,0.34);
box-shadow: -2px 3px 19px 0px rgba(0,0,0,0.34);

`;

const Navegacion = () => {
    return (
        <Fondo className="sticky-nav">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '1.5rem 0'}}>
                    <a className="navbar-brand" href="/">
                        <Imagen src="img/fondo-banner.jpg" alt="Logo Mi Momento" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#talleres">Talleres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sesiones">Sesiones online</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Fondo>
    );
}
 
export default Navegacion;