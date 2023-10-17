---
title: Connecting to Keithley 2000 by Keithley in Python
sidebar_label: Keithley 2000
description: The Model 2000 6½-Digit Multimeter is part of Keithley’s family of high performance DMMs. Based on the same high speed, low noise A/D convertertechnology as the Model 2001 and 2002, the 2000 is a fast, accurate,and highly stable instrument that’s as easy to operate as it is to afford. Itcombines broad measurement ranges with superior accuracy specifications
keywords: [multimeters, Keithley, QCodes, PyMeasure]
slug: /instruments-database/multimeters/keithley/keithley-2000
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395425/Instruments/Multimeters/Keithley-2000/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2000

## Instrument Card

<div className="flex">

<div>

The Model 2000 6½-Digit Multimeter is part of Keithley’s family of high performance DMMs. Based on the same high speed, low noise A/D converter
technology as the Model 2001 and 2002, the 2000 is a fast, accurate,
and highly stable instrument that’s as easy to operate as it is to afford. It
combines broad measurement ranges with superior accuracy specifications

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395425/Instruments/Multimeters/Keithley-2000/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/2000-DMM-Data-Sheet-1KW612970.pdf">here</a></p>

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

## Connect to the Keithley 2000 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 2000 Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.tektronix.Keithley_2000 import Keithley_2000

# Create an instance of the Keithley 2000 driver
keithley = Keithley_2000("keithley", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
keithley.connect()

# Print the instrument ID
print(keithley.IDN())

# Set the mode to DC voltage
keithley.mode("dc voltage")

# Set the range to 10V
keithley.range(10)

# Enable auto range
keithley.auto_range_enabled(True)

# Set the NPLC to 1
keithley.nplc(1)

# Trigger a measurement
keithley.trigger()

# Read the measured value
value = keithley.amplitude()
print("Measured value:", value)

# Disconnect from the instrument
keithley.disconnect()
```

This script creates an instance of the `Keithley_2000` driver and connects to the instrument using the specified address. It then sets various parameters such as mode, range, auto range, and NPLC. It triggers a measurement and reads the measured value using the `amplitude` parameter. Finally, it disconnects from the instrument.

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

To connect to a Keithley 2000 Multimeter using Pymeasure, you can use the following Python script:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2000

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::1")

# Connect to the Keithley 2000 Multimeter
meter = Keithley2000(adapter)

# Perform measurements or configure the instrument as needed
meter.measure_voltage()
print("Voltage:", meter.voltage)

meter.measure_current()
print("Current:", meter.current)

meter.measure_resistance()
print("Resistance:", meter.resistance)

# Disconnect from the instrument
meter.disconnect()
```

This script creates a `VISAAdapter` object to connect to the instrument using the GPIB address "GPIB::1". Then, a `Keithley2000` object is created using the adapter. You can perform measurements or configure the instrument as needed using the provided methods and properties. Finally, the `disconnect()` method is called to disconnect from the instrument.

</TabItem>
</Tabs>