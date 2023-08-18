---
title: Connecting to Keysight E36313A by Keysight in Python
sidebar_label: Keysight E36313A
description: The triple output, 160 W, E36313A provides small, compact size for bench use; low output ripple and noise; built-in measurements and basic programmable features with USB and LAN, and optional GPIB interfaces.
keywords: [power supplies, Keysight, Qcodes Community]
slug: /instruments-wiki/power-supplies/keysight/keysight-e36313a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201237/Instruments/Power%20Supplies/Keysight-E36313A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E36313A

## Instrument Card

<div className="flex">

<div>

The triple output, 160 W, E36313A provides small, compact size for bench use; low output ripple and noise; built-in measurements and basic programmable features with USB and LAN, and optional GPIB interfaces.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201237/Instruments/Power%20Supplies/Keysight-E36313A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E36313A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Keysight E36313A Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.E36313A import E36313A

# Create an instance of the E36313A instrument
power_supply = E36313A('power_supply', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
power_supply.connect()

# Get the identification information of the instrument
idn = power_supply.get_idn()
print('Instrument ID:', idn)

# Set the voltage and current for channel 1
power_supply.ch1.source_voltage(5)  # Set the voltage to 5V
power_supply.ch1.source_current(0.5)  # Set the current to 0.5A

# Enable channel 1
power_supply.ch1.enable('on')

# Read the voltage and current from channel 1
voltage = power_supply.ch1.voltage()
current = power_supply.ch1.current()
print('Channel 1 Voltage:', voltage)
print('Channel 1 Current:', current)

# Disable channel 1
power_supply.ch1.enable('off')

# Disconnect from the instrument
power_supply.disconnect()
```

This script creates an instance of the `E36313A` instrument, connects to it using the specified address (replace `'TCPIP0::192.168.1.1::INSTR'` with the actual address of your instrument), retrieves the identification information, sets the voltage and current for channel 1, enables channel 1, reads the voltage and current from channel 1, disables channel 1, and finally disconnects from the instrument.

</TabItem>
</Tabs>