---
title: Connecting to Thermotron 3800 by Thermotron in Python
sidebar_label: Thermotron 3800
description: The 3800 is a microprocessor-based programmer and controller. The programmer function allows you to program temperature, temperature/humidity, or other types of tests and store them in program memory
keywords: [temperature controllers, Thermotron, Pymeasure]
slug: /instruments-wiki/temperature-controllers/thermotron/thermotron-3800
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201081/Instruments/Temperature%20Controllers/Thermotron-3800/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Thermotron 3800

## Instrument Card

<div className="flex">

<div>

The 3800 is a microprocessor-based programmer and controller. The programmer function allows you to program temperature, temperature/humidity, or other types of tests and store them in program memory

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201081/Instruments/Temperature%20Controllers/Thermotron-3800/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125971/Instruments/Vendor%20Logos/Thermotron.png" style={{ width: "100%", objectFit: "cover" }} />

**Thermotron** is a worldwide temperature chamber, humidity chamber, and vibration testing equipment manufacturer. View our testing equipment today!. <a href="https://thermotron.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 89.0</li>
</ul>
</details>

## Connect to the Thermotron 3800 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.thermotron import Thermotron3800

# Create a VISA adapter for communication with the instrument
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")  # Replace with the actual IP address of the instrument

# Create an instance of the Thermotron3800 instrument
thermotron = Thermotron3800(adapter)

# Connect to the instrument
thermotron.connect()

# Read the instrument identification
id = thermotron.id
print("Instrument ID:", id)

# Read the current temperature of the oven
temperature = thermotron.temperature
print("Temperature:", temperature)

# Get the operating mode of the oven
mode = thermotron.mode
print("Operating Mode:", mode)

# Set the setpoint of the oven to 50 degrees Celsius
thermotron.setpoint = 50

# Start temperature forcing
thermotron.run()

# Wait for the oven to reach the setpoint
while thermotron.temperature < thermotron.setpoint:
    pass

# Stop temperature forcing
thermotron.stop()

# Disconnect from the instrument
thermotron.disconnect()
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual VISA address of the Thermotron 3800 Temperature Controller.

</TabItem>
</Tabs>