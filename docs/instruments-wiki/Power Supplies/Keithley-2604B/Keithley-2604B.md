---
title: Connecting to Keithley 2604B by Keithley in Python
sidebar_label: Keithley 2604B
description: The 2604B SourceMeter SMU instrument is a new dual channel SMU instrument with best-in-class value and performance. Its tightly integrated four-quadrant design allows it to simultaneously source and measure both voltage and current to boost productivity in R&D and bench-top applications. The Model 2604B is equipped with our high speed TSP technology, which is over 190% faster than traditional PC-to-instrument communication techniques. The Model 2604B is designed for bench-top applications and, therefore, does not have the high-end, system-level automation features of the Model 2602B SourceMeter SMU Instrument that includes digital I/O, TSP-Link technology, and contact check function. The wide range of 3A DC, 10A pulse, 40V output makes the Model 2604B suitable for testing a wide range of higher current devices, materials, components, and sub-assemblies.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-wiki/power-supplies/keithley/keithley-2604b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719318/Instruments/Power%20Supplies/Keithley-2604B/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2604B

## Instrument Card

<div className="flex">

<div>

The 2604B SourceMeter SMU instrument is a new dual channel SMU instrument with best-in-class value and performance. Its tightly integrated four-quadrant design allows it to simultaneously source and measure both voltage and current to boost productivity in R&D and bench-top applications. The Model 2604B is equipped with our high speed TSP technology, which is over 190% faster than traditional PC-to-instrument communication techniques. The Model 2604B is designed for bench-top applications and, therefore, does not have the high-end, system-level automation features of the Model 2602B SourceMeter SMU Instrument that includes digital I/O, TSP-Link technology, and contact check function. The wide range of 3A DC, 10A pulse, 40V output makes the Model 2604B suitable for testing a wide range of higher current devices, materials, components, and sub-assemblies.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719318/Instruments/Power%20Supplies/Keithley-2604B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the Keithley 2604B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 2604B Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.tektronix.Keithley_2600 import Keithley2604B

# Create an instance of the Keithley2604B instrument
keithley = Keithley2604B('keithley', 'TCPIP::192.168.1.1::INSTR')

# Connect to the instrument
keithley.connect()

# Perform operations with the instrument

# Disconnect from the instrument
keithley.disconnect()
```

In this script, we import the `Keithley2604B` class from the `qcodes.instrument_drivers.tektronix.Keithley_2600` module. We then create an instance of the `Keithley2604B` instrument, providing a name for the instrument ('keithley') and the connection string ('TCPIP::192.168.1.1::INSTR').

Next, we connect to the instrument using the `connect()` method. You can perform various operations with the instrument, such as setting voltage or current, measuring voltage or current, etc.

Finally, we disconnect from the instrument using the `disconnect()` method.

Note: Make sure to replace the connection string ('TCPIP0::192.168.1.1::inst0::INSTR') with the appropriate IP address or other connection details for your specific setup.

</TabItem>
</Tabs>