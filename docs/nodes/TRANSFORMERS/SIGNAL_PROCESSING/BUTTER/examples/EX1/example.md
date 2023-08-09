<!--- Add SEO here --->

In this example, the `BASIC_OSCILLATOR` node generates a signal that is 10 seconds long and has a sample rate of 50. The generated signal is a `sawtooth` with a starting frequency of 1.

The result is then sent to the `BUTTER` node that filters out all frequencies above 5 with a `filter_order` of 4. Since we want the lower frequencies to pass through, the `lowpass` option is selected for the `btype` parameter.