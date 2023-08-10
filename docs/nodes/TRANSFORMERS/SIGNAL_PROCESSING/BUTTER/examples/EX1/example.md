---
title: BUTTER
description: In this example, the BASIC_OSCILLATOR node generates a signal that is 10 seconds long and has a sample rate of 50. The generated signal is a sawtooth with a starting frequency of 1. The result is then sent to the BUTTER node that filters out all frequencies above 5 with a filter_order of 4.
keyword: [Python, Transform, Signal processing, Butterworth filter transformer, Signal processing in Python, Data filtering with Butterworth, Python filter calculations, Streamline data analysis, Signal processing transformations, Butterworth filter design, Python data manipulation, Accurate data insights, Signal filtering using Butterworth]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/TRANSFORMERS/SIGNAL_PROCESSING/BUTTER/examples/EX1/output.jpeg
---

In this example, the `BASIC_OSCILLATOR` node generates a signal that is 10 seconds long and has a sample rate of 50. The generated signal is a `sawtooth` with a starting frequency of 1.

The result is then sent to the `BUTTER` node that filters out all frequencies above 5 with a `filter_order` of 4. Since we want the lower frequencies to pass through, the `lowpass` option is selected for the `btype` parameter.