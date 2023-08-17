---
title: WaveRunner 9000
description: WaveRunner 9000 oscilloscopes have the industry's widest and deepest collection of tools, making it unbelievably powerful and MAUI with OneTouch makes measurement setup insanely easy, providing faster time to insight.
keywords: [oscilloscopes, Teledyne, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/teledyne/waverunner-9000
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200897/Instruments/Oscilloscopes/WaveRunner-9000/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveRunner 9000

## Instrument Card

<div className="flex">

<div>

WaveRunner 9000 oscilloscopes have the industry's widest and deepest collection of tools, making it unbelievably powerful and MAUI with OneTouch makes measurement setup insanely easy, providing faster time to insight.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200897/Instruments/Oscilloscopes/WaveRunner-9000/file.png" style={{ width: "325px" }} />

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

## Connect to the WaveRunner 9000 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a WaveRunner 9000 Oscilloscope using Instrumentkit, you can use the following code:

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

Note: The IP address used in the code is just an example. You need to replace it with the actual IP address of your WaveRunner 9000 Oscilloscope.

</TabItem>
</Tabs>