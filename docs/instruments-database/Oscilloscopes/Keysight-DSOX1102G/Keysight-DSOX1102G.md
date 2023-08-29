---
title: Connecting to Keysight DSOX1102G by Keysight in Python
sidebar_label: Keysight DSOX1102G
description: The DSOX1102G oscilloscope provides 70, 100 MHz of bandwidth on 2 analog channels, and waveform generator
keywords: [oscilloscopes, Keysight, PyMeasure]
slug: /instruments-database/oscilloscopes/keysight/keysight-dsox1102g
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395439/Instruments/Oscilloscopes/Keysight-DSOX1102G/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight DSOX1102G

## Instrument Card

<div className="flex">

<div>

The DSOX1102G oscilloscope provides 70, 100 MHz of bandwidth on 2 analog channels, and waveform generator

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395439/Instruments/Oscilloscopes/Keysight-DSOX1102G/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-05520/data-sheets/5992-1965.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight DSOX1102G in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import KeysightDSOX1102G

# Connect to the oscilloscope
adapter = VISAAdapter("USB0::0x0957::0x179B::MY44012345::INSTR")
oscilloscope = KeysightDSOX1102G(adapter)

# Perform some operations on the oscilloscope
oscilloscope.clear_status()
oscilloscope.autoscale()
ch1_data, ch1_preamble = oscilloscope.download_data(source="channel1", points=2000)

# Disconnect from the oscilloscope
oscilloscope.shutdown()
```

In this script, we first import the necessary modules from Pymeasure. We then create a `VISAAdapter` object to connect to the oscilloscope using its VISA address. Next, we create a `KeysightDSOX1102G` object using the adapter.

We can then perform various operations on the oscilloscope, such as clearing the status, autoscaling the channels, and downloading data from channel 1. Finally, we call the `shutdown()` method to disconnect from the oscilloscope.

Note: Make sure to replace the VISA address in the `VISAAdapter` constructor with the correct address for your oscilloscope.

</TabItem>
</Tabs>