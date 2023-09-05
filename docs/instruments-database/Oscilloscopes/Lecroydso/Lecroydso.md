---
title: Connecting to Lecroydso
 by Lecroy in Python
sidebar_label: Lecroydso

description: This Class Allows The Acquisition Of A Waveform (The Description And The Data), From A Specific C...
keywords: [oscilloscopes, Lecroy, PyTango]
slug: /instruments-database/oscilloscopes/lecroy/lecroydso
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395493/Instruments/Oscilloscopes/Lecroydso/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lecroydso


## Instrument Card

<div className="flex">

<div>

This Class Allows The Acquisition Of A Waveform (The Description And The Data), From A Specific C...

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395493/Instruments/Oscilloscopes/Lecroydso/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806142/Instruments/Vendor%20Logos/Lecroy.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Teledyne LeCroy, Inc. manufactures and distributes electronic measuring instruments. The Company produces analyzers, measurement, and testing solutions including oscilloscopes, production test digitizers, and electronic components. Teledyne LeCroy serves customers worldwide.

<ul>
  <li>Headquarters: s	Chestnut Ridge, New York, USA</li>
  <li>Yearly Revenue (millions, USD): 178.0</li>
  <li>Vendor Website: <a href="https://www.teledynelecroy.com/">here</a></li>
</ul>
</details>

## Connect to the Lecroydso
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyTango" label="PyTango">

To connect to a LeCroy Oscilloscope using Pytango, you can use the following code:

```python
import PyTango
from lecroydso import DSOConnection
from lecroydso import LeCroyDSO

# Create a connection to the oscilloscope
connection = DSOConnection("your_oscilloscope_address")

# Connect to the oscilloscope
connection.connect()

# Create an instance of the LeCroyDSO class
lecroy_dso = LeCroyDSO(connection)

# Now you can use the LeCroyDSO instance to interact with the oscilloscope
# For example, you can get the serial number of the oscilloscope
serial_number = lecroy_dso.get_serial_number()
print("Serial Number:", serial_number)

# Disconnect from the oscilloscope
connection.disconnect()
```

Note: Replace "your_oscilloscope_address" with the actual address of your oscilloscope.

</TabItem>
</Tabs>