---
title: Connecting to ANC 350 PIEZO Controller by Attocube in Python
sidebar_label: ANC 350 PIEZO Controller
description: multi-functional piezo controller for closed loop positioners
keywords: [motor controllers, Attocube, QCodes Community]
slug: /instruments-database/motor-controllers/attocube/anc-350-piezo-controller
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692638997/Instruments/Motor%20Controllers/ANC-350-PIEZO-Controller/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ANC 350 PIEZO Controller

## Instrument Card

<div className="flex">

<div>

multi-functional piezo controller for closed loop positioners

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692638997/Instruments/Motor%20Controllers/ANC-350-PIEZO-Controller/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.attocube.com/downloads/anc350-piezo-motion-und-readout-controller.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806147/Instruments/Vendor%20Logos/Attocube.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Attocube** is a leading pioneer for nanotechnology solutions in precision motion and nanopositioning applications, cryogenic microscopy,.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 14.0</li>
  <li>Vendor Website: <a href="https://www.attocube.com/en">here</a></li>
</ul>
</details>

## Connect to the ANC 350 PIEZO Controller in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

Here is an example Python script that uses Qcodes Community to connect to an ANC350 PIEZO Controller Positional Controller:

```python
import qcodes as qc
from qcodes.instrument_drivers.attocube.ANC350 import ANC350, ANC350v3Lib

# Create an instance of the ANC350v3Lib library
lib = ANC350v3Lib()

# Create an instance of the ANC350 instrument
anc350 = ANC350("anc350", lib)

# Connect to the ANC350 device
anc350.connect()

# Print the device information
print(anc350.get_idn())

# Access the individual axis channels
x_axis = anc350.axis_channels.x_axis
y_axis = anc350.axis_channels.y_axis
z_axis = anc350.axis_channels.z_axis

# Set the frequency of the x-axis to 1000 Hz
x_axis.frequency(1000)

# Set the amplitude of the y-axis to 50 V
y_axis.amplitude(50)

# Move the z-axis to a target position of 10 mm
z_axis.target_position(10)

# Close the connection to the ANC350 device
anc350.close()
```

Note: Make sure to install the required dependencies (`qcodes` and `pyanc350`) before running the script.

</TabItem>
</Tabs>