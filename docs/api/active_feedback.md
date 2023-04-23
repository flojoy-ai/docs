---
sidebar_position: 1
id: active_feedback
title: Active feedback loop
---


In this section, we will go over the basics of an active feedback control loop.

:::caution
 It will require a detailed knowledge of transfer functions, and is not for beginner users!
:::

In typical systems that require feedback control, there are a few components that are involved:

- The setpoint: this is the value to which you want the system to be driven. Its units will depend on the physical system (eg. average displacement of a mass on a spring, the resonant frequency of some cavity, etc.)
- The amplifier: this is what does the controlling, or instigates changes to the system of interest. It can make various smart decisions based on the history of the system, as well as other external factors.
- The system itself: for our simple case, this will be a dummy system (to be explained), but in real life, this will be the input from a measurement device querying the current state of the system you're interested in.
- The measurement device: in reality, it is the same device used to probe the state of the system before the application of the driving signal.
  - It will also incorporate some real-life noise, whether that be from the measurement technique itself, real uncertainty in the measurement quantity, or in digital-to-analog (or vice versa) conversion for example.
<p float="left" style={{textAlign: 'center', justifyItems: 'center'}}>
  <img src="/img/active_feedback/xdGAM.png" width="309.75" />
  <p>A typical schematic of a system requiring active feedback control.</p>
</p>


In this schema, we are interested in the transfer function of the system. This is a way of extracting information about what the system will output given a known input, and is critical in being able to properly drive a system to a given state like in our application. It can be shown that for this system, with setpoint $y_0$, a regression error $e=|y-y_0|$, an amplifier $A$ with output $u$, a system $G$ with noisy output $x\rightarrow x+d$, and a measurement system $M$ with output $y$ that the transfer function of the system is given by:

$$ 
x(\omega) = \frac{d(\omega)}{1+GAM(\omega)}+\frac{GA(\omega)}{1+GAM(\omega)}y_0 
$$
where we give the transfer function in terms of its frequency components $\omega$ obtained by the Fourier transform of the time-domain signals from each component.

:::info
Note that in this formalism, you will also see equialent expressions for transfer functions given by the Laplace transform of the time-domain signals, known as the $s$-domain representation. 
:::
