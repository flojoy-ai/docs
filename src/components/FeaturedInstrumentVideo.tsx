import React from 'react';

type FeaturedInstrumentVideoProps = {
  category: string;
  manufacturer: string;
};

export default function FeaturedInstrumentVideo({ category, manufacturer }: FeaturedInstrumentVideoProps) {

    let VIDEO_URL = "https://www.youtube.com/embed/xvFZjo5PgG0?si=oXQsWInrLBlhAoCB&mute=1";
    let VIDEO_HERO = "NOT FOUND"

    switch (category) {
        case 'OSCILLOSCOPES':
            VIDEO_URL = "https://www.youtube.com/embed/NqPW7pG3NZs?si=P374jJmZNKatbExq";
            VIDEO_HERO = "Measure signal width and phase"            
            break;
    }

    if (VIDEO_HERO == ''){
        return (<></>);
    }

    return (
        <div className = 'mb-20 mt-20'>
            <h2>Demo: {`${VIDEO_HERO}`}</h2>
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
