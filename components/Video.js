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

const VideoDiv = styled.div`
    width: 350px;
    height: 410px;
    overflow: hidden;
    &:focus {
        outline: none;
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
                        <a href="https://wa.me/5491161409865" className="btn btn-rosa text-white mt-4 mb-mob-3">más información</a>
                    </div>
                    {/* <div className="col-xs-12 col-md-5 text-center"> */}
                        {/* <video style={{width: 'auto', height: '410px', maxWidth: '30rem'}} className="border border-dark" controls>
                            <source src="/img/soy-sandra-giser.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}

                        {/* <iframe width="100%" style={{height: '100%'}} src="https://www.youtube.com/embed/LCqkbEFx-RM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
 
export default Video;