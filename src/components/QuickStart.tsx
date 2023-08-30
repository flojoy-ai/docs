import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useMediaQuery } from '../hooks/useMediaQuery';

type CarouselItem = {
  title: string;
  link: string;
  image: {
    alt: string;
    darkMobile: string;
    dark: string;
    lightMobile: string;
    light: string;
  };
};

const carouselData = [
  {
    title: 'Predictive maintenance',
    link: 'nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/',
    image: {
      alt: 'Predictive maintenance',
      darkMobile:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1693367638/carousel/Predictive_Maintenance_x5gldi.png',
      dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/prophet_dark_jppt52.jpg',
      lightMobile: '',
      light:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/prophet_lite_htglx4.jpg',
    },
  },
  {
    title: 'GPT image labeling',
    link: 'nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/',
    image: {
      alt: 'GPT image captioning',
      darkMobile:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1693367638/carousel/GPT_Image_Labeling_pde6q2.png',
      dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/nlp_gpt_dark_bvr0kk.jpg',
      lightMobile: '',
      light:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/nlp_gpt_lite_l1ynxu.jpg',
    },
  },
  {
    title: 'Data visualization',
    link: 'nodes/VISUALIZERS/PLOTLY/SURFACE3D/',
    image: {
      alt: 'Data visualization',
      darkMobile:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1693367638/carousel/Data_Visualization_nzjrli.png',
      dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692132113/carousel/3d_surf_dark_mm8igp.jpg',
      lightMobile: '',
      light:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692132113/carousel/3d_surf_lite_swvvzg.jpg',
    },
  },
  {
    title: 'Signal processing',
    link: 'nodes/TRANSFORMERS/SIGNAL_PROCESSING/FIR/',
    image: {
      alt: 'Signal processing',
      darkMobile:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1693367638/carousel/Signal_Processing_evavau.png',
      dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/fir_dark_rbfg8g.jpg',
      lightMobile: '',
      light:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/fir_lite_qad7px.jpg',
    },
  },
  {
    title: 'Least squares',
    link: 'nodes/AI_ML/REGRESSION/LEAST_SQUARES/',
    image: {
      alt: 'Least squares',
      darkMobile:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1693367638/carousel/Least_Squares_tuhow1.png',
      dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/regressions_dark_bo4cvx.jpg',
      lightMobile: '',
      light:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/regressions_lite_hydm25.jpg',
    },
  },
  {
    title: 'One-hot encoding',
    link: 'nodes/AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/',
    image: {
      alt: 'One-hot encoding',
      darkMobile:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1693367638/carousel/One-hot_Encoding_ccisv0.png',
      dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/hot_encoding_dark_kjlfls.jpg',
      lightMobile: '',
      light:
        'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/hot_encoding_lite_pgrbfp.jpg',
    },
  },
];

function Quickstart() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const large = useMediaQuery(640);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {carouselData.map(item => (
          <div style={{ width: large ? 730 : 256, height: large ? 330 : 540 }}>
            <a href={item.link}>
              {large && (
                <h2 className="absolute text-lg sm:text-xl">{item.title}</h2>
              )}
              <ThemedImage
                alt={item.image.alt}
                sources={{
                  light: large ? item.image.light : item.image.lightMobile,
                  dark: large ? item.image.dark : item.image.darkMobile,
                }}
              />
            </a>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Quickstart;
