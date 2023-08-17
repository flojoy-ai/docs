---
title: WaveSurfer 3000z
description: The WaveSurfer 3000z has a 10.1" capacitive touch display, the longest memory, and the deepest toolbox – all at an affordable price.
keywords: [oscilloscopes, Teledyne, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/teledyne/wavesurfer-3000z
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201043/Instruments/Oscilloscopes/WaveSurfer-3000z/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveSurfer 3000z

## Instrument Card

<div className="flex">

<div>

The WaveSurfer 3000z has a 10.1" capacitive touch display, the longest memory, and the deepest toolbox – all at an affordable price.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201043/Instruments/Oscilloscopes/WaveSurfer-3000z/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width: "100%", objectFit: "cover" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
</ul>
</details>

## Connect to the WaveSurfer 3000z in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a WaveSurfer 3000z Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
oscilloscope = ik.teledyne.MAUI.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
# For example, you can read the waveform from a channel
channel = oscilloscope.channel[0]
xdat, ydat = channel.read_waveform()

# Print the waveform data
print("X Data:", xdat)
print("Y Data:", ydat)
```

This code connects to the oscilloscope at the specified IP address ("TCPIP0::192.168.0.10::INSTR") using the VISA protocol. It then reads the waveform data from the first channel and prints the X and Y data.

Note: Make sure to replace "TCPIP0::192.168.0.10::INSTR" with the actual IP address of your WaveSurfer 3000z Oscilloscope.

</TabItem>
</Tabs>