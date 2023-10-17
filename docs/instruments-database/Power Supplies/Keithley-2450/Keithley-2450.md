---
title: Connecting to Keithley 2450 by Keithley in Python
sidebar_label: Keithley 2450
description: The 2450 is Keithley's next-generation SourceMeter source measure unit (SMU) instrument that truly brings Ohm's law (current, voltage, and resistance) testing right to your fingertips. Its innovative graphical user interface (GUI) and advanced, capacitive touchscreen technology allow intuitive usage and minimize the learning curve to enable engineers and scientists to learn faster, work smarter, and invent easier. The 2450 is the SMU for everyone-> a versatile instrument, particularly well-suited for characterizing modern scaled semiconductors, nano-scale devices and materials, organic semiconductors, printed electronics, and other small-geometry and low-power devices.
keywords: [power supplies, Keithley, QCodes, PyMeasure]
slug: /instruments-database/power-supplies/keithley/keithley-2450
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395430/Instruments/Power%20Supplies/Keithley-2450/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2450

## Instrument Card

<div className="flex">

<div>

The 2450 is Keithley's next-generation SourceMeter source measure unit (SMU) instrument that truly brings Ohm's law (current, voltage, and resistance) testing right to your fingertips. Its innovative graphical user interface (GUI) and advanced, capacitive touchscreen technology allow intuitive usage and minimize the learning curve to enable engineers and scientists to learn faster, work smarter, and invent easier. The 2450 is the SMU for everyone: a versatile instrument, particularly well-suited for characterizing modern scaled semiconductors, nano-scale devices and materials, organic semiconductors, printed electronics, and other small-geometry and low-power devices.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395430/Instruments/Power%20Supplies/Keithley-2450/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-2450-Datasheet.pdf">here</a></p>

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

## Connect to the Keithley 2450 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 2450 Power Supply using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2450 import Keithley_2450

# Connect to the Keithley 2450 Power Supply
keithley = Keithley_2450("keithley", "TCPIP::192.168.1.1::INSTR")

# Print the instrument ID
print(keithley.IDN())

# Set the source function to voltage
keithley.source_function("voltage")

# Set the voltage range to 10V
keithley.source.voltage.range(10)

# Set the voltage to 5V
keithley.source.voltage(5)

# Enable the output
keithley.output_enabled(True)

# Measure the current
current = keithley.sense.current()

# Print the measured current
print(f"Measured current: {current} A")

# Disable the output
keithley.output_enabled(False)

# Close the connection to the instrument
keithley.close()
```

Make sure to replace `"TCPIP::192.168.1.1::INSTR"` with the actual IP address or VISA resource string of your Keithley 2450 Power Supply.

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

Here is a Python script that uses Pymeasure to connect to a Keithley 2450 Power Supply:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2450

# Create a connection to the instrument
adapter = VISAAdapter("GPIB::1")
keithley = Keithley2450(adapter)

# Enable the source and set the current range
keithley.enable_source()
keithley.source_current_range = 10e-3

# Set the compliance voltage and source current
keithley.compliance_voltage = 10
keithley.source_current = 0

# Measure voltage
keithley.measure_voltage()

# Ramp the current to 5 mA and print the voltage
keithley.ramp_to_current(5e-3)
print(keithley.voltage)

# Shutdown the instrument
keithley.shutdown()
```

This script connects to the Keithley 2450 Power Supply using a VISA adapter with the address "GPIB::1". It enables the source, sets the current range to 10 mA, sets the compliance voltage to 10 V, and sets the source current to 0 mA. It then measures the voltage, ramps the current to 5 mA, and prints the voltage. Finally, it shuts down the instrument.

</TabItem>
</Tabs>