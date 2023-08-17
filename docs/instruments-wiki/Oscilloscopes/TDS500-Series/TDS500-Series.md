---
title: TDS500 Series
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

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201348/Instruments/Oscilloscopes/TDS500-Series/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125954/Instruments/Vendor%20Logos/Tektronix.png" style={{ width: "100%", objectFit: "cover" }} />

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

To connect to a TDS500 Series Oscilloscope using Instrumentkit, you can use the `tds500.TDS500` class. Here's an example Python script that connects to the oscilloscope and performs a simple measurement:

```python
import instrumentkit as ik

# Connect to the TDS500 Oscilloscope
oscilloscope = ik.tektronix.tds500.TDS500.open_gpibusb("/dev/ttyUSB0", 1)

# Set the timebase and voltage scale
oscilloscope.timebase = 1e-6  # 1 microsecond per division
oscilloscope.channel[1].voltage_scale = 0.1  # 0.1 volts per division

# Trigger the oscilloscope
oscilloscope.trigger()

# Wait for the acquisition to complete
oscilloscope.wait_for_acquisition()

# Read the waveform data from channel 1
waveform = oscilloscope.channel[1].get_waveform()

# Print the first 10 samples of the waveform
print(waveform[:10])
```

Note: This code assumes that you have already installed the `instrumentkit` package and its dependencies.

</TabItem>
</Tabs>