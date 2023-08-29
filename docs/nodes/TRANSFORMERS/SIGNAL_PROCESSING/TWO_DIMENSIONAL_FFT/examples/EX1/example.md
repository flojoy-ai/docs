---
title: TWO_DIMENSIONAL_FFT
description: In this example, the SKIMAGE node provides an astronaut image in RGB scale. The image is then passed down to the TWO_DIMENSIONAL_FFT node where discrete fourier transform is applied across all pixels in the image. 
keyword: [Python, Transform, Signal processing, Two-dimensional FFT transformer, Signal processing in Python, Data analysis with 2D FFT, Python frequency analysis, Streamline data analysis, Signal processing transformations, 2D FFT calculation in Python, Python data manipulation, Accurate data insights, Frequency analysis using 2D FFT]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/TWO_DIMENSIONAL_FFT/examples/EX1/output.jpeg
---

In this example, the `SKIMAGE` node provides an astronaut image in RGB scale.

The image is then passed down to the `TWO_DIMENSIONAL_FFT` node where discrete fourier transform is applied across all pixels in the image. 
Note that since the image is in RGB, the DFT can only be applied to one color channel or the grayscale version of the original image. 
In this example, DFT is applied to the red channel.