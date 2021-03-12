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
                        <UnTaller titulo={"Libera tu cuello y espalda alta"} descripcion={`En este taller aprenderás Todo lo que está BIEN para tu cuello.
                        Posturas de autoelongación activa de la Técnica de Stretching global activo.
                        Como poner en práctica las PAUSAS ACTIVAS durante tu día.
                        Cuales son las posiciones en las cuales no debes estar NUNCA.
                        Como organizar tu espacio de trabajo y de ocio para no provocarte dolores de cuello y cabeza.
                        También te enseñaré ejercicios simples para aliviar rapidamente esos dolores, si te aparecen.`} />
                    </div>
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller titulo={`Libera tu zona lumbar y pelvis`} descripcion={`Sabías que si tu pelvis está rígida el resto de tu cuerpo no podrá moverse normalmente?
En este taller aprenderás posturas de autoelongación activas y globales basadas en la técnica de R.P.G.  Reeducación Postural Global.
Te enseñaré tambien como desbloquear y acomodar tu pelvis para evitar dolores.
Y también aprenderás que posiciones adoptar cotidianamente en tu espacio de trabajo y en tu casa. 
Nunca más una LUMBALGIA.`} />
                    </div>
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller titulo={"Taller POST PARTO"} descripcion={`Ya sos mamá, estás ocupada las 24 hs, pero tu cuerpo requiere de tu atención y cuidado también.
Este Taller consta de 3 encuentros de 2 horas cada uno.
Aprenderás Posturas de alivio y Autoelongación de tu espalda alta y baja. Cervical, Dorsal y Lumbar
Posturas ideales para amamantar a tu bebé y no provocarte dolores.
Tendremos charlas con una puericultora que te orientará.
Porque si Vos estás bien, también tu Bebé lo estará.`} />
                    </div>
                    <div className="col-xs-12 col-lg-6 text-center mx-auto">
                        <UnTaller titulo={"Fortalece tu SUELO PÉLVICO, EVITA INCONTINENCIAS Y DOLORES LUMBARES"} descripcion={`En este taller  aprenderás a activar los músculos correctos del abdomen bajo para evitar  incontinencia urinaria de urgencia. 
 Porque toser,correr, estornudar, levantar un peso, reír, provocan presiones en la cavidad abdomino-pélvica y te provocan momentos indeseables.  
Necesitas fortalecer esa zona  en diferentes posturas. Tonificar toda la musculatura del suelo pélvico, la faja abdominal, la postura y el cuerpo en general. `} />
                    </div>
                </div>
            </div>
        </Fondo>

    );
}
 
export default Talleres;