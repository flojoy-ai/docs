---
title: Connecting to Keithley 2602A by Keithley in Python
sidebar_label: Keithley 2602A
description: The Keithley 2602A SourceMeter is used as either a bench-top I-V characterization tool or as a building block component of multi-channel I-V test systems. For bench-top use, the Keithley 2602A SourceMeter features an embedded TSP® Express Software Tool that allows users to quickly and easily perform common I-V tests without programming or installing software. For system level applications, the Keithley 2602A SourceMeter's Test Script Processor (TSP®) architecture along with new capabilities such as parallel test execution and precision timing provide the highest throughput in the industry to lower the cost of test.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-wiki/power-supplies/keithley/keithley-2602a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395555/Instruments/Power%20Supplies/Keithley-2602A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2602A

## Instrument Card

<div className="flex">

<div>

The Keithley 2602A SourceMeter is used as either a bench-top I-V characterization tool or as a building block component of multi-channel I-V test systems. For bench-top use, the Keithley 2602A SourceMeter features an embedded TSP® Express Software Tool that allows users to quickly and easily perform common I-V tests without programming or installing software. For system level applications, the Keithley 2602A SourceMeter's Test Script Processor (TSP®) architecture along with new capabilities such as parallel test execution and precision timing provide the highest throughput in the industry to lower the cost of test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395555/Instruments/Power%20Supplies/Keithley-2602A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-2602-Datasheet.pdf">here</a></p>

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

## Connect to the Keithley 2602A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">


```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2600_channels import Keithley2600

# Create an instance of the Keithley 2602A instrument
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
keithley.smua.curr(0.05)  # Set current to 50mA

# Measure the voltage and current
voltage = keithley.smua.volt()
current = keithley.smua.curr()
print(f"Voltage: {voltage}V, Current: {current}A")

# Disable the output
keithley.smua.output(0)  # Turn off the output

# Disconnect from the instrument
keithley.disconnect()
```

Note: Replace `'TCPIP::192.168.1.1::INSTR'` with the actual IP address or VISA resource address of your Keithley 2602A Power Supply.

This script connects to the Keithley 2602A instrument, sets the voltage and current limits, enables the output, sets the voltage and current levels, measures the voltage and current, and finally disables the output.

</TabItem>
</Tabs>