---
title: Keysight B2962A
description: The Keysight B2962A source / measure unit (SMU) is a 6.5-digit low noise power source that provides a power supply and source solution that meets the difficult measurement challenges researchers, designers, and developers face working on advanced components, circuits, and materials.
keywords: [power supplies, Keysight, Qcodes]
slug: /instruments-wiki/power-supplies/keysight/keysight-b2962a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200917/Instruments/Power%20Supplies/Keysight-B2962A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight B2962A

## Instrument Card

<div className="flex">

<div>

The Keysight B2962A source / measure unit (SMU) is a 6.5-digit low noise power source that provides a power supply and source solution that meets the difficult measurement challenges researchers, designers, and developers face working on advanced components, circuits, and materials.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200917/Instruments/Power%20Supplies/Keysight-B2962A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight B2962A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

```python
from qcodes import Station
from qcodes.instrument_drivers.Keysight.Keysight_B2962A import KeysightB2962A

# Create a station to hold the instrument
station = Station()

# Connect to the instrument
instrument = KeysightB2962A('power_supply', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Add the instrument to the station
station.add_component(instrument)

# Print the instrument IDN
print(instrument.get_idn())

# Set the voltage and current for channel 1
instrument.ch1.source_voltage(1.0)
instrument.ch1.source_current(0.1)

# Enable channel 1
instrument.ch1.enable('on')

# Measure the voltage and current for channel 1
voltage = instrument.ch1.voltage()
current = instrument.ch1.current()

# Print the measured values
print(f"Voltage: {voltage} V")
print(f"Current: {current} A")

# Disconnect from the instrument
instrument.close()
```


</TabItem>
</Tabs>