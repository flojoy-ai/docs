---
title: Connecting to Keithley 6517B by Keithley in Python
sidebar_label: Keithley 6517B
description: 6517B Electrometer/High Resistance Meter is capable of measuring the largest voltage range—up to 200 V—with an input impedance exceeding 200 TΩ. All this performance is built into an instrument that operates as simply as a digital multimeter.
keywords: [power meters, Keithley, PyMeasure]
slug: /instruments-database/power-meters/keithley/keithley-6517b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395438/Instruments/Power%20Meters/Keithley-6517B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6517B

## Instrument Card

<div className="flex">

<div>

6517B Electrometer/High Resistance Meter is capable of measuring the largest voltage range—up to 200 V—with an input impedance exceeding 200 TΩ. All this performance is built into an instrument that operates as simply as a digital multimeter.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395438/Instruments/Power%20Meters/Keithley-6517B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.farnell.com/datasheets/1484838.pdf?_ga=2.191326378.1021018580.1687884136-1198138748.1687884136">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the Keithley 6517B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley6517B

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::1")

# Connect to the Keithley 6517B Power Meter
keithley = Keithley6517B(adapter)

# Enable the source output
keithley.enable_source()

# Set up to measure resistance
keithley.measure_resistance()

# Set the source voltage range to 200 V
keithley.source_voltage_range = 200

# Set the source voltage to 20 V
keithley.source_voltage = 20

# Ramp the voltage to 50 V
keithley.ramp_to_voltage(50)

# Print the measured resistance in Ohms
print(keithley.resistance)

# Ramp the voltage to 0 V and disable the output
keithley.shutdown()

# Disconnect from the instrument
keithley.disconnect()
```

This script connects to the Keithley 6517B Power Meter using a VISA adapter and creates an instance of the `Keithley6517B` class. It then enables the source output, sets up to measure resistance, and configures the source voltage range and voltage. It ramps the voltage to 50 V and prints the measured resistance. Finally, it ramps the voltage to 0 V and disables the output before disconnecting from the instrument.

</TabItem>
</Tabs>