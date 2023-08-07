---
title: BASIC_OSCILLATOR
description: A straightforward way to generate signals, with sample rate and the time in seconds as parameters. Particularly useful with signal processing applications, as the sample rate is commonly used.
keywords: [Python, Python-based simulations, Basic oscillator generator, Dynamic analysis techniques, Oscillator modeling, Simulation documentation,Simulation tools, Python oscillator examples, Oscillation simulations, Interactive oscillator models]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SIMULATIONS/BASIC_OSCILLATOR/examples/EX1/output.jpeg
---

In this example, `BASIC_OSCILLATOR` node generates a sine wave with a frequency of 1Hz and an amplitude of 3 for
10 seconds with a sample rate of 400Hz. 

The same output can be generated with `LINSPACE` and `SINE` nodes combined. 
`SINE` would have the same parameters, but for `LINSPACE`, the `start` parameter will be 0, `end` is the time, which is 10 in this case, 
and `step` is the total samples, which is sample_rate * time in this case.