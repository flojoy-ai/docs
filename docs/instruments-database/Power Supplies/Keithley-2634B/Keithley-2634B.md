---
title: Connecting to Keithley 2634B by Keithley in Python
sidebar_label: Keithley 2634B
description: The 2634B SourceMeter SMU instrument is a new dual-channel SMU instrument with best-in-class value and performance. Its tightly-integrated, four-quadrant design allows it to simultaneously source and measure both voltage and current to boost productivity in R&D and bench-top applications. The wide range of 1.5A DC, 10A pulse, 200V output and 1fA measurement resolution makes it suitable to test a wide range of lower current devices and materials. The Model 2634B is equipped with Keithley's high speed TSP technology, which is over 190% faster than traditional PC-to-instrument communication techniques. The Model 2634B is designed for bench-top applications and, therefore, does not have the high-end, system-level automation features of the Model 2636B SourceMeter SMU Instrument that includes digital I/O, TSP-Link technology, and contact check function.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-database/power-supplies/keithley/keithley-2634b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719323/Instruments/Power%20Supplies/Keithley-2634B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2634B

## Instrument Card

<div className="flex">

<div>

The 2634B SourceMeter SMU instrument is a new dual-channel SMU instrument with best-in-class value and performance. Its tightly-integrated, four-quadrant design allows it to simultaneously source and measure both voltage and current to boost productivity in R&D and bench-top applications. The wide range of 1.5A DC, 10A pulse, 200V output and 1fA measurement resolution makes it suitable to test a wide range of lower current devices and materials. The Model 2634B is equipped with Keithley's high speed TSP technology, which is over 190% faster than traditional PC-to-instrument communication techniques. The Model 2634B is designed for bench-top applications and, therefore, does not have the high-end, system-level automation features of the Model 2636B SourceMeter SMU Instrument that includes digital I/O, TSP-Link technology, and contact check function.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719323/Instruments/Power%20Supplies/Keithley-2634B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-2636B-Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

## Connect to the Keithley 2634B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here's an example Python script that uses Qcodes to connect to a Keithley 2634B Power Supply:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2600_channels import Keithley2600

# Create an instance of the Keithley 2634B instrument
keithley = Keithley2600('keithley', 'TCPIP::192.168.1.1::INSTR')

# Connect to the instrument
keithley.connect()

# Print the instrument ID
print(keithley.get_idn())

# Set the voltage source range to 1V
keithley.smuA.sourcerange_v(1)

# Set the current limit to 100mA
keithley.smuA.limiti(0.1)

# Enable the output
keithley.smuA.output(1)

# Set the voltage to 0.5V
keithley.smuA.volt(0.5)

# Set the current to 50mA
keithley.smuA.curr(0.05)

# Disable the output
keithley.smuA.output(0)

# Disconnect from the instrument
keithley.disconnect()
```

Note: Replace `'TCPIP::192.168.1.1::INSTR'` with the actual IP address or VISA resource address of your Keithley 2634B Power Supply.

</TabItem>
</Tabs>