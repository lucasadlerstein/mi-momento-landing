import React from 'react';
import styled from '@emotion/styled';

const Texto = styled.p`
    color: var(--colorRosa);
    font-size: 4.5rem;
    font-family: 'GlacialIndifference';
    margin-top: 0;
    @media (max-width: 540px){
        font-size: 3rem;
        text-align: center;
    }
`;

const Video = () => {
    return (
        <div className="py-10r">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-7 text-center-mob">
                        <Texto>
                            Porque te entiendo,<br />
                            porque soy como vos,<br />
                            porque tengo la experiencia,<br />
                            te quiero conocer y ayudar. 
                        </Texto>
                        <a href="#" className="btn btn-rosa text-white mt-4 mb-mob-3 ">más información</a>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <iframe width="100%" style={{height: '100%'}} src="https://www.youtube.com/embed/LCqkbEFx-RM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Video;