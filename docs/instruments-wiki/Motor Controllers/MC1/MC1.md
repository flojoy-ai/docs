---
title: Connecting to MC1 by Qubitekk in Python
sidebar_label: MC1
description: Currently no description
keywords: [motor controllers, Qubitekk, InstrumentKit]
slug: /instruments-wiki/motor-controllers/qubitekk/mc1
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692724021/Instruments/Motor%20Controllers/MC1/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MC1

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692724021/Instruments/Motor%20Controllers/MC1/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125997/Instruments/Vendor%20Logos/Qubitekk.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Qubitekk provides reliable products for generating, preparing, distributing, detecting, correlating and storing photonic qubits. The hardware that is needed to strengthen American leadership in quantum computing, communications, and sensing solutions is being developed and manufactured in San Diego County, CA. <a href="https://qubitekk.com/">Website</a>.

<ul>
  <li>Headquarters: Vista, California, United States</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the MC1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
from instrumentkit import SerialConnection
from instrumentkit import MC1

# Create a serial connection to the MC1 controller
connection = SerialConnection(port='/dev/ttyUSB0', baudrate=9600)
mc1 = MC1(connection)

# Set the stepping increment value
mc1.increment = 2  # milliseconds

# Get the current motor position
position = mc1.internal_position
print(f"Current position: {position}")

# Move the motor to a new position
new_position = 500  # milliseconds
mc1.move(new_position)

# Check if the motor is centering
is_centering = mc1.is_centering()
print(f"Is centering: {is_centering}")

# Reset the motor to its limit
mc1.reset()

# Close the connection
connection.close()
```

This script demonstrates how to connect to the MC1 controller, set the stepping increment value, get the current motor position, move the motor to a new position, check if the motor is centering, and reset the motor to its limit.

</TabItem>
</Tabs>