---
title: Connecting to DMM7510 Keithley  by Keithley in Python
sidebar_label: DMM7510 Keithley 
description: The DMM7510 7.5 digit multimeter combines a precision, high-resolution digital multimeter (DMM), graphical touchscreen display, and high-speed, high-resolution digitizer to create the first graphical sampling multimeter. With pA-level sensitivity and 1Msample/s sampling, it accurately measures ultra-low sleep mode currents and transmit drain currents from wireless devices.
keywords: [multimeters, Keithley, QCodes]
slug: /instruments-database/multimeters/keithley/dmm7510-keithley
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395565/Instruments/Multimeters/DMM7510-Keithley/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DMM7510 Keithley 

## Instrument Card

<div className="flex">

<div>

The DMM7510 7.5 digit multimeter combines a precision, high-resolution digital multimeter (DMM), graphical touchscreen display, and high-speed, high-resolution digitizer to create the first graphical sampling multimeter. With pA-level sensitivity and 1Msample/s sampling, it accurately measures ultra-low sleep mode currents and transmit drain currents from wireless devices.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395565/Instruments/Multimeters/DMM7510-Keithley/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.farnell.com/datasheets/3540326.pdf">here</a></p>

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

## Connect to the DMM7510 Keithley  in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_7510 import Keithley7510

# Connect to the instrument
dmm = Keithley7510("dmm", "TCPIP::192.168.1.1::INSTR")

# Print the available sense functions
print(dmm.sense_function.vals)

# Set the sense function to voltage
dmm.sense_function("voltage")

# Set the range to 10V
dmm.sense.voltage.range(10)

# Make a measurement
measurement = dmm.sense.voltage()

# Print the measurement
print(f"Voltage: {measurement} V")

# Disconnect from the instrument
dmm.close()
```

</TabItem>
</Tabs>