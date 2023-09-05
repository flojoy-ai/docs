---
title: Connecting to Yokogawa GS 200 by Yokogawa in Python
sidebar_label: Yokogawa GS 200
description: The GS200 is a low voltage/current DC source with high accuracy, high stability, and high resolution. With its excellent traceability, stability, and 5 1/2-digit resolution, the GS200 generates extremely low-noise DC voltage and current signals that are required for many applications. Additionally, the optional monitoring feature turns the GS200 into a voltage and current measuring instrument.
keywords: [power supplies, Yokogawa, QCodes, PyMeasure]
slug: /instruments-database/power-supplies/yokogawa/yokogawa-gs-200
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395488/Instruments/Power%20Supplies/Yokogawa-GS-200/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Yokogawa GS 200

## Instrument Card

<div className="flex">

<div>

The GS200 is a low voltage/current DC source with high accuracy, high stability, and high resolution. With its excellent traceability, stability, and 5 1/2-digit resolution, the GS200 generates extremely low-noise DC voltage and current signals that are required for many applications. Additionally, the optional monitoring feature turns the GS200 into a voltage and current measuring instrument.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395488/Instruments/Power%20Supplies/Yokogawa-GS-200/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://cdn.tmi.yokogawa.com/1/7543/files/BUGS200-01EN.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806180/Instruments/Vendor%20Logos/Yokogawa.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Yokogawa is a leading provider of Industrial Automation and Test and Measurement solutions. Combining superior technology with engineering services, project management, and maintenance, Yokogawa delivers field proven operational efficiency, safety, quality, and reliability.

<ul>
  <li>Headquarters: Japan</li>
  <li>Yearly Revenue (millions, USD): 318.0</li>
  <li>Vendor Website: <a href="https://www.yokogawa.com/">here</a></li>
</ul>
</details>

## Connect to the Yokogawa GS 200 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

```python
from qcodes.instrument_drivers.yokogawa.GS200 import YokogawaGS200

# Connect to the Yokogawa GS200 power supply
gs200 = YokogawaGS200("gs200", "GPIB0::1::INSTR")

# Print the output state
print(gs200.output())

# Turn on the output
gs200.output(True)

# Set the voltage to 1V
gs200.voltage(1)

# Set the current to 100mA
gs200.current(0.1)

# Ramp the voltage from 0V to 5V with a step of 1V and a delay of 1 second
gs200.ramp_voltage(5, 1, 1)

# Ramp the current from 0A to 1A with a step of 0.1A and a delay of 0.1 seconds
gs200.ramp_current(1, 0.1, 0.1)

# Turn off the output
gs200.output(False)

# Disconnect from the power supply
gs200.close()
```
Note: Make sure to replace `"GPIB0::1::INSTR"` with the actual address of your Yokogawa GS200 power supply.

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

Here is a Python script that uses Pymeasure to connect to a Yokogawa GS 200 Power Supply:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.yokogawa import YokogawaGS200

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB0::1::INSTR")

# Connect to the Yokogawa GS200 Power Supply
power_supply = YokogawaGS200(adapter)

# Enable the power supply
power_supply.source_enabled = True

# Set the source mode to voltage
power_supply.source_mode = 'voltage'

# Set the source range to 10V
power_supply.source_range = 10

# Set the voltage limit to 5V
power_supply.voltage_limit = 5

# Set the current limit to 100mA
power_supply.current_limit = 0.1

# Set the source level to 3V
power_supply.source_level = 3

# Ramp the output level to 5V in 1 second
power_supply.trigger_ramp_to_level(5, 1)

# Disable the power supply
power_supply.source_enabled = False

# Disconnect from the power supply
power_supply.disconnect()
```

This script connects to a Yokogawa GS200 Power Supply using a VISA adapter and performs various operations such as enabling the power supply, setting the source mode, range, voltage limit, current limit, and source level. It also demonstrates how to ramp the output level to a specified value and finally disables the power supply and disconnects from it.

</TabItem>
</Tabs>