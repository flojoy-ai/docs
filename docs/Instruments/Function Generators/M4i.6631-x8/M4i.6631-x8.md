
# M4i.6631-x8

## Instrument Card

<div className="flex">

<div>

The M4i.66xx-x8 series arbitrary waveform generators (AWG) deliver the highest performance in both speed and resolution. The series includes PCIe cards with either one, two or four synchronous channels. The large onboard memory can be segmented to replay different waveform sequences. The AWG features a PCI Express x8 Gen 2 interface that offers outstanding data streaming performance. The interface and Spectrum’s optimized drivers enable data transfer rates in excess of 2.8 GB/s so that signals can continuously replayed at a high output rate. While the cards have been designed using the latest technology they are still software compatible with the drivers from earlier Spectrum waveform generators. So, existing customers can use the same software they developed for a 10 year old 20 MS/s AWG card and for an M4i series 625 MS/s AWG.

</div>

<img src={require("./M4i.6631-x8.jpg").default} width="256"/>

</div>

The M4i.66xx-x8 series arbitrary waveform generators (AWG) deliver the highest performance in both speed and resolution. The series includes PCIe cards with either one, two or four synchronous channels. The large onboard memory can be segmented to replay different waveform sequences. The AWG features a PCI Express x8 Gen 2 interface that offers outstanding data streaming performance. The interface and Spectrum’s optimized drivers enable data transfer rates in excess of 2.8 GB/s so that signals can continuously replayed at a high output rate. While the cards have been designed using the latest technology they are still software compatible with the drivers from earlier Spectrum waveform generators. So, existing customers can use the same software they developed for a 10 year old 20 MS/s AWG card and for an M4i series 625 MS/s AWG.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Spectrum Instrumentation manufactures high-speed, high-resolution PC measurement equipment for the most demanding applications. 200+ products are available for your Perfect Fit Solution, combined with intuitive measurement software, support directly from the engineers and five years warranty. Spectrum products and solutions are used by leading companies and research institutes worldwide. <a href="https://spectrum-instrumentation.com/">Website</a>.

<ul>
  <li>Headquarters: Grosshandorf, Germany</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the M4i.6631-x8 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a M4i.6631-x8 Function Generator using Qcodes Community, you can use the following code:

```python
from qcodes.instrument_drivers.Spectrum.M4i import M4i

# Connect to the M4i.6631-x8 Function Generator
m4i = M4i('m4i', cardid='spcm0')

# Set the output voltage of channel 0 to 1V
m4i.set_amplitude(1, channel=0)

# Enable the output of channel 0
m4i.enable_output(True, channel=0)

# Close the connection to the M4i.6631-x8 Function Generator
m4i.close()
```

This code connects to the M4i.6631-x8 Function Generator using the `M4i` driver from the Qcodes Community. It sets the output voltage of channel 0 to 1V and enables the output of channel 0. Finally, it closes the connection to the function generator.

