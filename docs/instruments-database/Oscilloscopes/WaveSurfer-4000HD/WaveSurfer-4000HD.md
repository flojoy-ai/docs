---
title: Connecting to WaveSurfer 4000HD by Teledyne in Python
sidebar_label: WaveSurfer 4000HD
description: WaveSurfer 4000HD extends Teledyne LeCroy’s leadership in High Definition Oscilloscopes with a bright, 12.1” touch screen display, performance without compromise, and price points that fit your budget.
keywords: [oscilloscopes, Teledyne, InstrumentKit]
slug: /instruments-database/oscilloscopes/teledyne/wavesurfer-4000hd
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394027/Instruments/Oscilloscopes/WaveSurfer-4000HD/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveSurfer 4000HD

## Instrument Card

<div className="flex">

<div>

WaveSurfer 4000HD extends Teledyne LeCroy’s leadership in High Definition Oscilloscopes with a bright, 12.1” touch screen display, performance without compromise, and price points that fit your budget.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394027/Instruments/Oscilloscopes/WaveSurfer-4000HD/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://cdn.teledynelecroy.com/files/pdf/wavesurfer-4000hd-datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: TELEDYNE</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692812958/Instruments/Vendor%20Logos/Teledyne_technologies.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
  <li>Vendor Website: <a href="https://www.teledynelecroy.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='OSCILLOSCOPES' manufacturer='TELEDYNE'></FeaturedInstrumentVideo>


## Connect to the WaveSurfer 4000HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='OSCILLOSCOPES' manufacturer='TELEDYNE'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

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

# Print the waveform data
print("X Data:", xdat)
print("Y Data:", ydat)

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope at the specified IP address ("TCPIP0::192.168.0.10::INSTR") using the VISA protocol. It then reads the waveform data from the first channel and prints the X and Y data.

Note: Make sure to replace "TCPIP0::192.168.0.10::INSTR" with the actual IP address of your WaveSurfer 4000HD Oscilloscope.

</TabItem>
</Tabs>