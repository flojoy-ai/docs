---
title: 2500A Bridge
description: The AH 2500A offers unparalleled stability, resolution and accuracy in a capacitance/loss1 bridge (whether manual or automatic)
keywords: [multimeters, Andeen Hagerling, Pymeasure]
slug: /instruments-wiki/multimeters/andeen hagerling/2500a-bridge
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201331/Instruments/Multimeters/2500A-Bridge/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2500A Bridge

## Instrument Card

<div className="flex">

<div>

The AH 2500A offers unparalleled stability, resolution and accuracy in a capacitance/loss1 bridge (whether manual or automatic)

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201331/Instruments/Multimeters/2500A-Bridge/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126007/Instruments/Vendor%20Logos/Andeen_Hagerling.png" style={{ width: "100%", objectFit: "cover" }} />

**Andeen**-**Hagerling**, Inc. - manufacturers of the world's most accurate capacitance bridges and standards. <a href="https://www.andeen-hagerling.com/">Website</a>.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 1.0</li>
</ul>
</details>

## Connect to the 2500A Bridge in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import AH2500A

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::1::INSTR")

# Connect to the 2500A Bridge Multimeter
multimeter = AH2500A(adapter)

# Perform a single capacitance and loss measurement
capacitance, loss, voltage = multimeter.caplossvolt

# Print the measurement results
print(f"Capacitance: {capacitance} pF")
print(f"Loss: {loss} nS")
print(f"Voltage: {voltage} V")

# Disconnect from the multimeter
multimeter.disconnect()
```

Explanation:
1. Import the necessary modules from Pymeasure.
2. Create a VISA adapter using the appropriate address for your instrument.
3. Create an instance of the AH2500A class, passing the adapter as an argument.
4. Use the `caplossvolt` property of the multimeter object to perform a single capacitance and loss measurement. This property returns a tuple containing the capacitance, loss, and voltage values.
5. Print the measurement results.
6. Disconnect from the multimeter using the `disconnect()` method.

Note: Make sure to replace `"GPIB0::1::INSTR"` with the correct address for your instrument.

</TabItem>
</Tabs>