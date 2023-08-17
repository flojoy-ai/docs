---
title: WaveSurfer 4000HD
description: WaveSurfer 4000HD extends Teledyne LeCroy’s leadership in High Definition Oscilloscopes with a bright, 12.1” touch screen display, performance without compromise, and price points that fit your budget.
keywords: [oscilloscopes, Teledyne, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/teledyne/wavesurfer-4000hd
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201048/Instruments/Oscilloscopes/WaveSurfer-4000HD/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveSurfer 4000HD

## Instrument Card

<div className="flex">

<div>

WaveSurfer 4000HD extends Teledyne LeCroy’s leadership in High Definition Oscilloscopes with a bright, 12.1” touch screen display, performance without compromise, and price points that fit your budget.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201048/Instruments/Oscilloscopes/WaveSurfer-4000HD/file.png" style={{ width: "325px" }} />

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

## Connect to the WaveSurfer 4000HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a WaveSurfer 4000HD Oscilloscope using Instrumentkit, you can use the following code:

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

# Read waveform data from the channel
xdat, ydat = channel.read_waveform()

# Perform other operations as needed

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope using the specified VISA address (`"TCPIP0::192.168.0.10::INSTR"`). It then performs various operations on the oscilloscope, such as setting the time division, accessing and controlling the channels, and reading waveform data. Finally, it closes the connection to the oscilloscope.

</TabItem>
</Tabs>