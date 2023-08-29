---
title: IFFT
description: In this example, the FFT node that contains the raw data, passes to the IFFT node, which performs the inverse fourier transformation, changing the basis from the frequency domain back into the time domain.
keyword: [Python, Transform, Signal processing, IFFT transformer, Python Inverse Fast Fourier Transform, Signal processing with IFFT, Python frequency analysis, Streamline data analysis, Signal processing transformations, IFFT calculation in Python, Python data manipulation, Accurate data insights, Inverse frequency analysis using IFFT]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/IFFT/examples/EX1/output.jpeg
---

In this example, the `LINSPACE` node generates an array of 600 samples, which is the `step` value.
The sample rate in this case is 800, so the `end` parameter is samples/sample_rate = 0.75.

The generated array is then passed to two `SINE` nodes. One generates a sine wave of 50hz with an amplitude of 1, and the other generates a sine wave of 80hz with an amplitude of 0.5.

The sine wave is then passed down to three different nodes, inlcuding the `LINE` node, which displays how the wave looks, and two `FFT` nodes. For the one `FFT` node, the `display` option is set to true, and then passed to another `LINE` node, to display the signal in the frequency domain. 
For the other `FFT` node, the `display` option is set to false in order to preserve the raw data, which is not used for displaying.

Finally, the `FFT` node that contains the raw data, passes to the `IFFT` node, which performs the inverse fourier transformation, changing the basis from the frequency domain back into the time domain. Since no modification is made (although this could have been done), the produced signal is the same as the original.