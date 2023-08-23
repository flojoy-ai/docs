---
title: Connecting to WaveSurfer 510 by Teledyne in Python
sidebar_label: WaveSurfer 510
description: The WaveSurfer 510 combines the MAUI with OneTouch user interface with powerful waveform processing, in addition to advanced math, measurement, and debug tools, to quickly analyze and find the root cause of problems. The 12.1” touch-screen display of the WaveSurfer 510 is the largest in its class and makes viewing waveform abnormalities fast and easy.
keywords: [oscilloscopes, Teledyne, InstrumentKit]
slug: /instruments-wiki/oscilloscopes/teledyne/wavesurfer-510
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639580/Instruments/Oscilloscopes/WaveSurfer-510/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveSurfer 510

## Instrument Card

<div className="flex">

<div>

The WaveSurfer 510 combines the MAUI with OneTouch user interface with powerful waveform processing, in addition to advanced math, measurement, and debug tools, to quickly analyze and find the root cause of problems. The 12.1” touch-screen display of the WaveSurfer 510 is the largest in its class and makes viewing waveform abnormalities fast and easy.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639580/Instruments/Oscilloscopes/WaveSurfer-510/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://res.cloudinary.com/iwh/image/upload/q_auto,g_center/assets/1/26/wavesurfer510-ds-24mar17-prelim.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692812958/Instruments/Vendor%20Logos/Teledyne_technologies.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
  <li>Vendor Website: <a href="https://www.teledynelecroy.com/">here</a></li>
</ul>
</details>

## Connect to the WaveSurfer 510 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a WaveSurfer 510 Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
oscilloscope = ik.teledyne.MAUI.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
# For example, you can set the time division
oscilloscope.time_div = 200e-9

# You can also access and control the channels
channel = oscilloscope.channel[0]
channel.trace = True
channel.coupling = channel.Coupling.dc50
channel.scale = 1.0

# Read a waveform from the channel
xdat, ydat = channel.read_waveform()

# Perform other operations as needed

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope at the specified IP address ("TCPIP0::192.168.0.10::INSTR") using the VISA protocol. It then performs various operations on the oscilloscope, such as setting the time division, accessing and controlling the channels, and reading a waveform from a channel. Finally, it closes the connection to the oscilloscope.

</TabItem>
</Tabs>