---
title: Lecroydso

description: This Class Allows The Acquisition Of A Waveform (The Description And The Data), From A Specific C...
keywords: [oscilloscopes, Lecroy, Pytango]
slug: /instruments-wiki/oscilloscopes/lecroy/lecroydso
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106981/Instruments/Oscilloscopes/Lecroydso/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lecroydso


## Instrument Card

<div className="flex">

<div>

This Class Allows The Acquisition Of A Waveform (The Description And The Data), From A Specific C...

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106981/Instruments/Oscilloscopes/Lecroydso/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125968/Instruments/Vendor%20Logos/Lecroy.png" style={{ width: "100%", objectFit: "cover" }} />

Teledyne LeCroy, Inc. manufactures and distributes electronic measuring instruments. The Company produces analyzers, measurement, and testing solutions including oscilloscopes, production test digitizers, and electronic components. Teledyne LeCroy serves customers worldwide. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: s	Chestnut Ridge, New York, USA</li>
  <li>Yearly Revenue (millions, USD): 178.0</li>
</ul>
</details>

## Connect to the Lecroydso
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pytango" label="Pytango">

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