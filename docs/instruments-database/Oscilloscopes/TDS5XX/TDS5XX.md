---
title: Connecting to TDS5XX by Tektronix in Python
sidebar_label: TDS5XX
description: Currently no description
keywords: [oscilloscopes, Tektronix, InstrumentKit]
slug: /instruments-database/oscilloscopes/tektronix/tds5xx
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395115/Instruments/Oscilloscopes/TDS5XX/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TDS5XX

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395115/Instruments/Oscilloscopes/TDS5XX/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806108/Instruments/Vendor%20Logos/Tektronix.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Tektronix, Inc., historically widely known as Tek, is an American company best known for manufacturing test and measurement devices such as [oscilloscopes](https://en.wikipedia.org/wiki/Oscilloscope), [logic analyzers](https://en.wikipedia.org/wiki/Logic_analyzer), and video and mobile test protocol equipment.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5800.0</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the TDS5XX in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
from instrumentkit import Scope

# Connect to the oscilloscope
scope = Scope("TCPIP::192.168.1.1::INSTR")

# Set the timebase and voltage scale
scope.timebase = 1e-3  # 1 ms/div
scope.channel1.voltage_scale = 0.1  # 0.1 V/div

# Acquire a waveform
waveform = scope.acquire_waveform()

# Print the waveform data
print(waveform.data)

# Disconnect from the oscilloscope
scope.disconnect()
```

In this example, we first import the `Scope` class from the `instrumentkit` module. Then, we create an instance of the `Scope` class by passing the instrument's address as a string to the constructor.

Next, we set the timebase and voltage scale of the oscilloscope using the `timebase` and `voltage_scale` properties of the `Scope` and `Channel` classes, respectively.

We then acquire a waveform from the oscilloscope using the `acquire_waveform` method of the `Scope` class. This method returns a `Waveform` object that contains the acquired waveform data.

Finally, we print the waveform data using the `data` property of the `Waveform` class, and disconnect from the oscilloscope using the `disconnect` method of the `Scope` class.

</TabItem>
</Tabs>