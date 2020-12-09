import React from 'react';
import styled from '@emotion/styled';

const Etapa = styled.div`
    max-width: 60rem;
    margin: 5rem auto;
    h5 {
        font-size: 4rem;
        text-transform: uppercase;
        font-family: 'GlacialIndifference';
    }
    p {
        font-size: 2.3rem;
        margin: 2rem auto;
        font-family: 'GlacialIndifference';
        span {
            font-size: 1.8rem;
        }
    }
`;

const Eleccion = styled.div`
    .e-titulo {
        text-transform: uppercase;
        font-size: 2.2rem;
        font-weight: bold;
        margin-bottom: 0;
    }
    p {
        font-size: 2rem;
        margin-top: 1rem;
    }

`;

const ComoLoHacemos = () => {
    return (
        <div className="py-10r container text-center">
            <h2 className="texto-rosa mb-5">¿Cómo lo hacemos?</h2>
            <Etapa>
                <h5>1. Estudios</h5>
                <p>
                    Me mandas por mail, tus estudios de imágenes,
                    como radiografías, espinogramas, resonancias
                    y si tienes algún otro estudio médico.
                    Si cuentas con un diagnóstico médico, muchísimo mejor.
                    Yo los evalúo antes de tu primer entrevista conmigo.<br />
                    <span>
                        Si no tienes nada de todo esto, podemos comenzar con la entrevista inicial y luego tratar de determinar si necesitamos estudios y como los puedes realizar.
                    </span>
                </p>
            </Etapa>
            <Etapa>
                <h5>2. Entrevista</h5>
                <p>
                    Luego realizamos una entrevista online o
                    presencial en la que charlamos de tus dolencias,
                    evaluamos tu postura y proponemos un
                    plan de tratamiento a seguir.                
                </p>
            </Etapa>
            <Etapa style={{maxWidth: '100%'}}>
                <h5>3. Decidimos juntas</h5>
                <div className="row mt-5">
                    <div className="col-xs-12 col-lg-4">
                        <Eleccion>
                            <p className="e-titulo">Talleres Online</p>
                            <p>Conmigo, horarios del grupo.<br/>Online y más económico.</p>
                        </Eleccion>
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Eleccion>
                            <p className="e-titulo">Tratamiento Individual</p>
                            <p>
                                Conmigo, horarios según<br/>
                                tu conveniencia<br/>
                                y con el asesoramiento<br/>
                                totalmente personalizado<br/>
                                y adaptado a tus requerimientos.<br/>
                                Online o presencial.</p>
                        </Eleccion>
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Eleccion>
                            <p className="e-titulo">Talleres Grupales</p>
                            <p>
                                Conmigo, horarios del grupo.<br/>
                                Encuentros temáticos y especificos.<br/>
                                De 4 a 6 horas de duración.<br/>
                            </p>
                        </Eleccion>
                    </div>
                </div>
            </Etapa>
        </div>
    );
}
 
export default ComoLoHacemos;