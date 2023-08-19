import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Quickstart() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
        <div style={{ width: 730, height: 330 }}>
          <a href="nodes/AI_ML/PREDICT_TIME_SERIES/PROPHET_PREDICT/">
            <h2 style={{ position: 'absolute' }}>Predictive maintenance</h2>
            <ThemedImage
              alt="Predictive maintenance"
              sources={{
                light:
                  'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/prophet_lite_htglx4.jpg',
                dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/prophet_dark_jppt52.jpg',
              }}
            />
          </a>
        </div>

        <div style={{ width: 730, height: 330 }}>
          <a href="nodes/AI_ML/IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2/">
            <h2 style={{ position: 'absolute' }}>GPT image labeling</h2>
            <ThemedImage
              alt="GPT image captioning"
              sources={{
                light:
                  'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/nlp_gpt_lite_l1ynxu.jpg',
                dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/nlp_gpt_dark_bvr0kk.jpg',
              }}
            />
          </a>
        </div>

        <div style={{ width: 730, height: 330 }}>
          <a href="nodes/VISUALIZERS/PLOTLY/SURFACE3D/">
            <h2 style={{ position: 'absolute' }}>Data visualization</h2>
            <ThemedImage
              alt="Data visualization"
              sources={{
                light:
                  'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692132113/carousel/3d_surf_lite_swvvzg.jpg',
                dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692132113/carousel/3d_surf_dark_mm8igp.jpg',
              }}
            />
          </a>
        </div>

        <div style={{ width: 730, height: 330 }}>
          <a href="nodes/TRANSFORMERS/SIGNAL_PROCESSING/FIR/">
            <h2 style={{ position: 'absolute' }}>Signal processing</h2>
            <ThemedImage
              alt="Signal processing"
              sources={{
                light:
                  'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/fir_lite_qad7px.jpg',
                dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/fir_dark_rbfg8g.jpg',
              }}
            />
          </a>
        </div>

        <div style={{ width: 730, height: 330 }}>
          <a href="nodes/AI_ML/REGRESSION/LEAST_SQUARES/">
            <h2 style={{ position: 'absolute' }}>Least squares</h2>
            <ThemedImage
              alt="Least squares"
              sources={{
                light:
                  'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/regressions_lite_hydm25.jpg',
                dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/regressions_dark_bo4cvx.jpg',
              }}
            />
          </a>
        </div>

        <div style={{ width: 730, height: 330 }}>
          <a href="=nodes/AI_ML/CLASSIFICATION/ONE_HOT_ENCODING/">
            <h2 style={{ position: 'absolute' }}>One-hot encoding</h2>
            <ThemedImage
              alt="One-hot encoding"
              sources={{
                light:
                  'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133019/carousel/hot_encoding_lite_pgrbfp.jpg',
                dark: 'https://res.cloudinary.com/dhopxs1y3/image/upload/v1692133018/carousel/hot_encoding_dark_kjlfls.jpg',
              }}
            />
          </a>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Quickstart;
