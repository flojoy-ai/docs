---
title: Connecting to TDS510A by Tektronix in Python
sidebar_label: TDS510A
description: The TDS510A Digital Oscilloscope is a full-featured, cost-effective, versatile oscilloscope which meets the measurement requirements for general-purpose research and design. Its industry-preferred graphical user interface makes it easy to learn and efficient to use. The TDS510A advanced trigger capability allows the user to trigger and view signals in a wide variety of simple as well as complex design and analysis settings. With four channels, 50 K points per channel record length, and powerful waveform acquisition modes, the TDS510A can satisfy most complex design, debug, and analysis requirements.
keywords: [oscilloscopes, Tektronix, InstrumentKit]
slug: /instruments-wiki/oscilloscopes/tektronix/tds510a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639557/Instruments/Oscilloscopes/TDS510A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TDS510A

## Instrument Card

<div className="flex">

<div>

The TDS510A Digital Oscilloscope is a full-featured, cost-effective, versatile oscilloscope which meets the measurement requirements for general-purpose research and design. Its industry-preferred graphical user interface makes it easy to learn and efficient to use. The TDS510A advanced trigger capability allows the user to trigger and view signals in a wide variety of simple as well as complex design and analysis settings. With four channels, 50 K points per channel record length, and powerful waveform acquisition modes, the TDS510A can satisfy most complex design, debug, and analysis requirements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639557/Instruments/Oscilloscopes/TDS510A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125954/Instruments/Vendor%20Logos/Tektronix.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Tektronix, Inc., historically widely known as Tek, is an American company best known for manufacturing test and measurement devices such as [oscilloscopes](https://en.wikipedia.org/wiki/Oscilloscope), [logic analyzers](https://en.wikipedia.org/wiki/Logic_analyzer), and video and mobile test protocol equipment. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5800.0</li>
</ul>
</details>

## Connect to the TDS510A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

```python
from instrumentkit import tektronix

# Connect to the oscilloscope
tek = tektronix.TekTDS5xx.open_tcpip('192.168.0.2', 8888)

# Access the channels
channel1 = tek.channel[0]
channel2 = tek.channel[1]

# Set the scale of channel 1 to 1V
channel1.scale = 1.0

# Set the scale of channel 2 to 500mV
channel2.scale = 0.5

# Read the waveform from channel 1
x1, y1 = channel1.read_waveform()

# Read the waveform from channel 2
x2, y2 = channel2.read_waveform()

# Print the first 10 points of the waveform from channel 1
print(x1[:10])
print(y1[:10])

# Print the first 10 points of the waveform from channel 2
print(x2[:10])
print(y2[:10])

# Disconnect from the oscilloscope
tek.close()
```

</TabItem>
</Tabs>