---
title: Connecting to TDS500 Series by Tektronix in Python
sidebar_label: TDS500 Series
description: Currently no description
keywords: [oscilloscopes, Tektronix, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/tektronix/tds500-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201348/Instruments/Oscilloscopes/TDS500-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TDS500 Series

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201348/Instruments/Oscilloscopes/TDS500-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the TDS500 Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a TDS500 Series Oscilloscope using Instrumentkit, you can use the following Python script:

```python
from instrumentkit import tektronix

# Connect to the oscilloscope
tek = tektronix.TekTDS5xx.open_tcpip('192.168.0.2', 8888)

# Access the channels and read waveform data
channel1 = tek.channel[0]
x, y = channel1.read_waveform()

# Print the waveform data
print("X values:", x)
print("Y values:", y)

# Disconnect from the oscilloscope
tek.close()
```

This script connects to the oscilloscope at IP address '192.168.0.2' and port 8888 using the `open_tcpip` method of the `TekTDS5xx` class. It then accesses the first channel of the oscilloscope using `tek.channel[0]` and reads the waveform data using the `read_waveform` method. Finally, it prints the X and Y values of the waveform and closes the connection to the oscilloscope using the `close` method.

</TabItem>
</Tabs>