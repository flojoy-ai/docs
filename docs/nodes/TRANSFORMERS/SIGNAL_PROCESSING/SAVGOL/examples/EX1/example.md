---
title: SAVGOL
description: In this example, to clean up the signal, the SAVGOL node is used with a window_length of 20 and a poly_order of 3, which smoothens out the noisy signal.
keyword: [Python, Transform, Signal processing, Savitzky-Golay filter transformer, Signal processing in Python, Data smoothing with SavGol, Python filter calculations, Streamline data analysis, Signal processing transformations, Savitzky-Golay filter design, Python data manipulation, Accurate data insights, Data smoothing using SavGol]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/SAVGOL/examples/EX1/output.jpeg
---

In this example, the `BASIC_OSCILLATOR` node generates a sine wave that has a sample rate of 30Hz over 2 seconds.

The output is then added to the `RAND` node, which accepts input from the `LINSPACE` node to generate an array of 60 random numbers over 2 seconds. The result is a noisy signal resembling a sine wave.

To clean up the signal, the `SAVGOL` node is used with a `window_length` of 20 and a `poly_order` of 3, which smoothens out the noisy signal.