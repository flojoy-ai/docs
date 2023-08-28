---
title: Connecting to M4i.6631-x8 by Spectrum in Python
sidebar_label: M4i.6631-x8
description: The M4i.66xx-x8 series arbitrary waveform generators (AWG) deliver the highest performance in both speed and resolution. The series includes PCIe cards with either one, two or four synchronous channels. The large onboard memory can be segmented to replay different waveform sequences. The AWG features a PCI Express x8 Gen 2 interface that offers outstanding data streaming performance. The interface and Spectrum’s optimized drivers enable data transfer rates in excess of 2.8 GB/s so that signals can continuously replayed at a high output rate. While the cards have been designed using the latest technology they are still software compatible with the drivers from earlier Spectrum waveform generators. So, existing customers can use the same software they developed for a 10 year old 20 MS/s AWG card and for an M4i series 625 MS/s AWG.
keywords: [function generators, Spectrum, QCodes Community]
slug: /instruments-wiki/function-generators/spectrum/m4i6631-x8
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395778/Instruments/Function%20Generators/M4i.6631-x8/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M4i.6631-x8

## Instrument Card

<div className="flex">

<div>

The M4i.66xx-x8 series arbitrary waveform generators (AWG) deliver the highest performance in both speed and resolution. The series includes PCIe cards with either one, two or four synchronous channels. The large onboard memory can be segmented to replay different waveform sequences. The AWG features a PCI Express x8 Gen 2 interface that offers outstanding data streaming performance. The interface and Spectrum’s optimized drivers enable data transfer rates in excess of 2.8 GB/s so that signals can continuously replayed at a high output rate. While the cards have been designed using the latest technology they are still software compatible with the drivers from earlier Spectrum waveform generators. So, existing customers can use the same software they developed for a 10 year old 20 MS/s AWG card and for an M4i series 625 MS/s AWG.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395778/Instruments/Function%20Generators/M4i.6631-x8/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-wiki/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806179/Instruments/Vendor%20Logos/Spectrum.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Spectrum Instrumentation manufactures high-speed, high-resolution PC measurement equipment for the most demanding applications. 200+ products are available for your Perfect Fit Solution, combined with intuitive measurement software, support directly from the engineers and five years warranty. Spectrum products and solutions are used by leading companies and research institutes worldwide.

<ul>
  <li>Headquarters: Grosshandorf, Germany</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://spectrum-instrumentation.com/">here</a></li>
</ul>
</details>

## Connect to the M4i.6631-x8 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

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

</TabItem>
</Tabs>