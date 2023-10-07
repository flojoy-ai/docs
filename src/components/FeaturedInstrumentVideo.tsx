import React from 'react';

type FeaturedInstrumentVideoProps = {
  videoID: string;
};

export default function FeaturedInstrumentVideo({ videoID }: FeaturedInstrumentVideoProps) {

    let VIDEO_URL = "https://www.youtube.com/embed/xvFZjo5PgG0?si=oXQsWInrLBlhAoCB&mute=1";
    let VIDEO_HERO = "Video not found 😔"

    switch (videoID) {
        case 'TEKTRONIX_OSCILLOSCOPE':
            VIDEO_URL = "https://www.youtube.com/embed/NqPW7pG3NZs?si=P374jJmZNKatbExq";
            VIDEO_HERO = "Measuring signal width and phase"            
            break;         
    }    

    return (
        <div className = 'mb-20'>
            <h3>{`${VIDEO_HERO}`}</h3>
            <iframe 
                width="560"
                height="315"
                src={VIDEO_URL}
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>            
            </iframe>
        </div>
    );
}
