---
title: Keysight E3631A
description: E3631A 80W Triple Output Power Supply, 6V, 5A & ±25V, 1A
keywords: [power supplies, HP, Instrumentkit]
slug: /instruments-wiki/power-supplies/hp/keysight-e3631a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106905/Instruments/Power%20Supplies/Keysight-E3631A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E3631A

## Instrument Card

<div className="flex">

<div>

E3631A 80W Triple Output Power Supply, 6V, 5A & ±25V, 1A

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106905/Instruments/Power%20Supplies/Keysight-E3631A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E3631A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to a Keysight E3631A Power Supply:

```python
from instrumentkit import gpib
from instrumentkit import power

# Connect to the power supply
power_supply = power.KeysightE3631A(gpib.GPIBConnection(0, 10))

# Set the output voltage and current limit
power_supply.set_voltage(5)  # Set the output voltage to 5V
power_supply.set_current_limit(1)  # Set the current limit to 1A

# Enable the output
power_supply.enable_output()

# Measure the output voltage and current
voltage = power_supply.measure_voltage()
current = power_supply.measure_current()

print(f"Output Voltage: {voltage} V")
print(f"Output Current: {current} A")

# Disable the output
power_supply.disable_output()

# Disconnect from the power supply
power_supply.disconnect()
```

Note: Make sure to replace the GPIB address (0, 10) with the actual address of your Keysight E3631A Power Supply.

</TabItem>
</Tabs>