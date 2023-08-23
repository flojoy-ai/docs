---
title: Connecting to 2500A Bridge by Andeen Hagerling in Python
sidebar_label: 2500A Bridge
description: The AH 2500A offers unparalleled stability, resolution and accuracy in a capacitance/loss1 bridge (whether manual or automatic)
keywords: [multimeters, Andeen Hagerling, PyMeasure]
slug: /instruments-wiki/multimeters/andeen-hagerling/2500a-bridge
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692386181/Instruments/Multimeters/2500A-Bridge/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2500A Bridge

## Instrument Card

<div className="flex">

<div>

The AH 2500A offers unparalleled stability, resolution and accuracy in a capacitance/loss1 bridge (whether manual or automatic)

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692386181/Instruments/Multimeters/2500A-Bridge/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="http://manuals.repeater-builder.com/te-files/MISCELLANEOUS/ANDEEN-HAGERLING%202500A%20Operation.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806198/Instruments/Vendor%20Logos/Andeen_Hagerling.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Andeen**-**Hagerling**, Inc. - manufacturers of the world's most accurate capacitance bridges and standards.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 1.0</li>
  <li>Vendor Website: <a href="https://www.andeen-hagerling.com/">here</a></li>
</ul>
</details>

## Connect to the 2500A Bridge in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import AH2500A

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::1::INSTR")

# Connect to the AH2500A instrument
multimeter = AH2500A(adapter)

# Perform a single capacitance and loss measurement
capacitance, loss, voltage = multimeter.caplossvolt

# Print the measurement values
print(f"Capacitance: {capacitance} pF")
print(f"Loss: {loss} nS")
print(f"Voltage: {voltage} V")

# Disconnect from the instrument
multimeter.disconnect()
```

Explanation:
1. We import the necessary modules from Pymeasure: `VISAAdapter` for communication and `AH2500A` for the 2500A Bridge Multimeter instrument.
2. We create a `VISAAdapter` object, specifying the appropriate address for the instrument. In this example, we assume the instrument is connected via GPIB at address 1.
3. We create an `AH2500A` object, passing the adapter as an argument to establish the connection.
4. We use the `caplossvolt` measurement property of the `AH2500A` object to perform a single capacitance and loss measurement. This property returns a tuple of capacitance, loss, and voltage values.
5. We print the measurement values using f-strings.
6. We disconnect from the instrument using the `disconnect()` method of the `AH2500A` object.

Note: Make sure you have the necessary dependencies installed, such as `pymeasure`, `pyvisa`, and the appropriate VISA library for your instrument.

</TabItem>
</Tabs>