---
title: Connecting to Keithley 2636B by Keithley in Python
sidebar_label: Keithley 2636B
description: The 2636B from Keithley is a 2600B series dual channel system SourceMeter® (SMU) instrument (0.1fA, 10A pulse). It is an industry’s leading current/voltage source and measure solutions. This dual channel model combines the capabilities of a precision power supply, true current source, 6 1/2 digit DMM, arbitrary waveform generator, pulse generator and electronic load all into one tightly integrated instrument. The result is a powerful solution that significantly boosts productivity in applications ranging from bench-top I-V characterization through highly automated production test. It has 100mV to 40V voltage, 100nA to 10A current measurement range (source). This is tightly integrated, 4-quadrant voltage/current source and measure instrument which offers best in class performance with 6 1/2digit resolution. Built-in web browser based software enables remote control through any browser, on any computer, from anywhere in the world.
keywords: [power supplies, Keithley, Qcodes]
slug: /instruments-wiki/power-supplies/keithley/keithley-2636b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201224/Instruments/Power%20Supplies/Keithley-2636B/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2636B

## Instrument Card

<div className="flex">

<div>

The 2636B from Keithley is a 2600B series dual channel system SourceMeter® (SMU) instrument (0.1fA, 10A pulse). It is an industry’s leading current/voltage source and measure solutions. This dual channel model combines the capabilities of a precision power supply, true current source, 6 1/2 digit DMM, arbitrary waveform generator, pulse generator and electronic load all into one tightly integrated instrument. The result is a powerful solution that significantly boosts productivity in applications ranging from bench-top I-V characterization through highly automated production test. It has 100mV to 40V voltage, 100nA to 10A current measurement range (source). This is tightly integrated, 4-quadrant voltage/current source and measure instrument which offers best in class performance with 6 1/2digit resolution. Built-in web browser based software enables remote control through any browser, on any computer, from anywhere in the world.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201224/Instruments/Power%20Supplies/Keithley-2636B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2636B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here's an example Python script that uses Qcodes to connect to a Keithley 2636B Power Supply:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2600 import Keithley2600

# Connect to the Keithley 2636B Power Supply
keithley = Keithley2600("keithley", "TCPIP::192.168.1.1::INSTR")

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

# Close the connection
keithley.close()
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual IP address or VISA resource address of your Keithley 2636B Power Supply.

</TabItem>
</Tabs>