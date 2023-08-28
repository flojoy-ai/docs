---
title: Connecting to Keithley 2614B by Keithley in Python
sidebar_label: Keithley 2614B
description: The 2614B SourceMeter SMU Instrument is a new dual-channel SMU instrument with best-in-class value and performance. Its tightly integrated, four-quadrant design allows it to simultaneously source and measure both voltage and current to boost productivity in R&D and bench-top applications. The Model 2614B is equipped with Keithley's high speed TSP technology, which is over 190% faster than traditional PC-to-instrument communication techniques. The Model 2614B is designed for bench-top applications and, therefore, does not have the high-end, system-level automation features of the Model 2612B SourceMeter SMU Instrument, which includes digital I/O, TSP-Link technology, and contact check function.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-database/power-supplies/keithley/keithley-2614b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719322/Instruments/Power%20Supplies/Keithley-2614B/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2614B

## Instrument Card

<div className="flex">

<div>

The 2614B SourceMeter SMU Instrument is a new dual-channel SMU instrument with best-in-class value and performance. Its tightly integrated, four-quadrant design allows it to simultaneously source and measure both voltage and current to boost productivity in R&D and bench-top applications. The Model 2614B is equipped with Keithley's high speed TSP technology, which is over 190% faster than traditional PC-to-instrument communication techniques. The Model 2614B is designed for bench-top applications and, therefore, does not have the high-end, system-level automation features of the Model 2612B SourceMeter SMU Instrument, which includes digital I/O, TSP-Link technology, and contact check function.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719322/Instruments/Power%20Supplies/Keithley-2614B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/1KW-60906-0_Series_2600BDatasheet_112718.pdf">here</a></p>

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

## Connect to the Keithley 2614B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

Here's an example Python script that uses Qcodes to connect to a Keithley 2614B Power Supply:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2600_channels import Keithley2600

# Create a connection to the Keithley 2614B Power Supply
keithley = Keithley2600('keithley', 'TCPIP::192.168.1.1::INSTR')

# Connect to the instrument
keithley.connect()

# Print the instrument ID
print(keithley.get_idn())

# Set the voltage and current limits
keithley.smua.limitv(10)  # Set voltage limit to 10V
keithley.smua.limiti(0.1)  # Set current limit to 0.1A

# Enable the output
keithley.smua.output(1)  # Turn on the output

# Set the voltage and current levels
keithley.smua.volt(5)  # Set voltage to 5V
keithley.smua.curr(0.05)  # Set current to 0.05A

# Measure the voltage and current
voltage = keithley.smua.volt()
current = keithley.smua.curr()
print(f"Voltage: {voltage} V")
print(f"Current: {current} A")

# Disable the output
keithley.smua.output(0)  # Turn off the output

# Disconnect from the instrument
keithley.disconnect()
```

Note: Replace `'TCPIP::192.168.1.1::INSTR'` with the actual IP address or VISA resource address of your Keithley 2614B Power Supply.

</TabItem>
</Tabs>