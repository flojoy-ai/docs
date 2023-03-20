---
sidebar_position: 1
id: tutorial
title: Signal processing example
---

In this page, we will go through a fully functional example of a digital signal processing application. In reality, the signal and timing will come from hardware inputs to Flojoy, but for now we simply simulate a noisy digital signal. 

:::info
This complete example is given in the example directory as `FIR.txt`. It is recommended you follow along in your instance of Flojoy to develop intuition for the program.
:::

:::caution
This tutorial assumes a reasonable working knowledge of signal processing ideas, and does not go in-depth into the physics of windowing, filtering, etc. We focus solely herein on the application of signal processing techniques to a real-life example with Flojoy.

:::

### Generating a noisy signal

To this aim, let's first create a noisy signal. We start with a `linspace` node to define a range of times defining $t\in[0,400)\text{ ms}$. We can then connect this node's output to our primary signal generator, the `SINE` node. 

For this example, we define our primary signal at frequency ~30 Hz, and we'll add 4 other sinusoidal signals at smaller amplitudes, at different frequencies, and at different phases relative to the primary signal. 

:::tip
To define each parameter of the sinusoidal functions, it's easier to use the `CTRLS` tab, where you can add Numeric Nodes to change all of the parameters in one place. 
:::

The signal we want to generate is the following:
$$
\begin{align*}
x(t) &= \overbrace{\cos(2\pi t / 2)}^\text{primary signal}\\
     &+ 0.2\sin(2\pi t \cdot 2.5 + 0.1)  \\
     &+ 0.2\sin(2\pi t\cdot 15.3) \\
     &+ 0.1\sin(2\pi t \cdot 16.7 + 0.1) \\
     &+ \underbrace{0.1\sin(2\pi t \cdot 23.45+0.8)}_\text{noise @ 4 different $f$, $A$, $\varphi$}
\end{align*}$$

Now that we have our `LINSPACE` node, we need to now create 5 different waveforms with the `SINE` node. We can specify all the frequencies, amplitudes, and phases with the `CTRLS` tab. 

![image](/img/FIR_signal_generation.png)
*A screenshot from the debug tab of Flojoy with the signal generation for the FIR example. We've connected the output of the `LINSPACE` node to the 5 `SINE` nodes to create a noisy signal*

To finalize our signal, we now need to add them together. To do this, we need 4 `ADD` nodes, and then we are ready to process!

![image](/img/FIR_total_signal.png)
*The total noisy signal viewed in the debug tab of Flojoy*


### Digital signal processing

Since our frequencies are relatively low (less than 1 kHz), we are going to design a low-pass filter to allow us to get our pure cosine signal.

For this, we will use the builtin `FIR` node. We've defined the sample rate of this node to be 100 Hz (again, can be changed in the CTRLS tab). Now, we need to impose the width of our filter (how many frequencies relative to the mean do we allow to pass?). Convention is that we define this width relative to the [Nyquist rate](https://en.wikipedia.org/wiki/Nyquist_rate). 

Lastly, to compute the order and Kaiser parameters for this filter, we need to specify how much we want to attenuate the band of frequencies above our specified width, called the ripple attenuation in dB, $\mathcal{R}$. In other words, we need to specify an upper bound for the deviation of the magnitude of the frequency response of the filter from what we want. For example, defining our frequencies $\nu$ relative to the Nyquist rate, we can show for $A(\nu)$ being the real frequency response of the filter and $D(\nu)$ being the desired response:

$$
\left|A(\nu)-D(\nu)\right| < 10^{-\mathcal{R}/20}
$$

We can now compute the order and Kaiser parameters for the filter with `scipy.signal.kaiserord`. After specifying our cutoff frequency, here 10 Hz, we're ready to create the coefficients (taps) of the finite impulse response filter, done easily with `scipy.signal.firwin`.

Now having the taps that entirely define our low pass filter, we create our filtered signal with `scipy.signal.lfilter`. 
<p float="left" style={{textAlign: 'center'}}>
  <img src="/img/FIR_freq_response.png" width="600" />
</p>

*This is the frequency response of the FIR filter for this example, with sample rate 100 Hz, transition width of 5 Hz, stop band attentuation of 60 dB, and a cutoff frequency of 10 Hz.*


### Processing the signal with `FIR` in Flojoy

Connecting all of the pieces together, we can now create an instance of the `FIR` node in Flojoy, connecting first the input signal from the final of the addition nodes. We then connect the times from the linspace node so that we correctly reference the amplitude of the signal for a given time. Connecting the output of `FIR` to a visualize node, we can now finish our application. 

<p float="left" style={{textAlign: 'center'}}>
  <img src="/img/FIR_noisy_signal.png" width="400" />
  <img src="/img/FIR_clean_signal.png" width="400" /> 
</p>

*Left: The noisy signal passed as input to the `FIR` node. Right: the cleaned signal passed by the `FIR` node, rendered in the `LINE` visualizer node.*

![image](/img/FIR_complete_app.png)
*The complete FIR signal processing example in Flojoy.*
#### Congratualtions! You've just completed the digital signal processing example.