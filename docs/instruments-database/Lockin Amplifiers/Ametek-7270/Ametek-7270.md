---
title: Connecting to Ametek 7270 by Ametek in Python
sidebar_label: Ametek 7270
description: The model 7270 sets a new standard for general-purpose DSP lock-in amplifiers.
keywords: [lockin amplifiers, Ametek, PyMeasure]
slug: /instruments-database/lockin-amplifiers/ametek/ametek-7270
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395175/Instruments/Lockin%20Amplifiers/Ametek-7270/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ametek 7270

## Instrument Card

<div className="flex">

<div>

The model 7270 sets a new standard for general-purpose DSP lock-in amplifiers.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395175/Instruments/Lockin%20Amplifiers/Ametek-7270/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.ameteksi.com/-/media/ameteksi/download_links/documentations/7270/model_7270.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806123/Instruments/Vendor%20Logos/Ametek.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Since 1930, our talented and diverse workforce has been delivering **differentiated technology solutions** to create strong, sustainable and profitable growth.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 6200.0</li>
  <li>Vendor Website: <a href="https://www.ametek.com/">here</a></li>
</ul>
</details>

## Connect to the Ametek 7270 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.ametek import Ametek7270

# Create a connection to the instrument
adapter = VISAAdapter("GPIB::1::INSTR")
lockin = Ametek7270(adapter)

# Set the instrument to voltage control mode
lockin.set_voltage_mode()

# Set the sensitivity to 100 nV
lockin.sensitivity = 100e-9

# Set the filter slope to 12 dB/octave
lockin.slope = 12

# Read the X and Y values
x_value = lockin.x
y_value = lockin.y

# Print the X and Y values
print("X value:", x_value)
print("Y value:", y_value)

# Close the connection to the instrument
lockin.shutdown()
```

This script connects to the Ametek 7270 Lockin Amplifier using a VISA adapter and sets the instrument to voltage control mode. It then sets the sensitivity to 100 nV and the filter slope to 12 dB/octave. The script reads the X and Y values from the lockin amplifier and prints them. Finally, it shuts down the instrument and closes the connection.

Note: Make sure to install the necessary dependencies (`pymeasure`, `pyvisa`, and `pyvisa-py`) before running the script.

</TabItem>
</Tabs>