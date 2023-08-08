<!--- Add SEO here --->

In this example, the `LINSPACE` node generates an array of 600 samples, which is the `step` value.
The sample rate in this case is 800, so the `end` parameter is samples/sample_rate = 0.75.

The generated array is then passed to two `SINE` nodes. One generates a sine wave of 30hz with an amplitude of 1, and the other generates a sine wave of 100hz with an amplitude of 0.5.

Finally, the signal is passed to the `FFT` node, which performs the fast fourier transform algorithm, 
transforming the input from the time domain into the frequency domain. Since we want to display the data,
the `display` option is set to true. The input signal consists of real numbers only, so `real` is also true.
Note that a `hann` window is used here to reduce spectral leakage, but any other window type or no window can also be used.