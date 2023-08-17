---
title: Keithley 2400
description: Keithley’s Standard Series 2400 Source Measure Unit (SMU) Instruments offer four-quadrant precision voltage and current source/load coupled with measurement. Each SMU instrument is both a highly stable DC power source and a true instrument-grade 6½-digit multimeter. The power source characteristics include low noise, precision, and readback. The multimeter capabilities include high repeatability and low noise.
keywords: [power supplies, Keithley, Pymeasure, Qcodes]
slug: /instruments-wiki/power-supplies/keithley/keithley-2400
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200863/Instruments/Power%20Supplies/Keithley-2400/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2400

## Instrument Card

<div className="flex">

<div>

Keithley’s Standard Series 2400 Source Measure Unit (SMU) Instruments offer four-quadrant precision voltage and current source/load coupled with measurement. Each SMU instrument is both a highly stable DC power source and a true instrument-grade 6½-digit multimeter. The power source characteristics include low noise, precision, and readback. The multimeter capabilities include high repeatability and low noise.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200863/Instruments/Power%20Supplies/Keithley-2400/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2400 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments.keithley import Keithley2400

# Connect to the Keithley 2400
keithley = Keithley2400("GPIB::1")

# Configure the measurement settings
keithley.measure_voltage()
keithley.voltage_range = 10
keithley.voltage_nplc = 1

# Enable the source and set the voltage
keithley.enable_source()
keithley.source_voltage = 5

# Perform a measurement
voltage = keithley.voltage
print("Measured voltage:", voltage)

# Disable the source and disconnect from the instrument
keithley.disable_source()
keithley.disconnect()
```

This script connects to a Keithley 2400 Power Supply using the GPIB interface (replace "GPIB::1" with the appropriate address for your setup). It configures the instrument to measure voltage, sets the voltage range and integration time, enables the source, sets the desired voltage, performs a measurement, and then disables the source and disconnects from the instrument.

Note: Make sure you have the `pymeasure` package installed before running this script.

</TabItem>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keithley 2400 Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument_drivers.tektronix.Keithley_2400 import Keithley2400

# Create an instance of the Keithley2400 instrument
keithley = Keithley2400("keithley", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
keithley.connect()

# Now you can use the instrument to perform measurements and control the power supply
# For example, you can set the voltage range
keithley.rangev(10)  # Set the voltage range to 10V

# You can also read the current value
current = keithley.curr()  # Read the current value

# Finally, disconnect from the instrument
keithley.disconnect()
```

In this script, we first import the necessary modules and classes from Qcodes. Then, we create an instance of the `Keithley2400` instrument by providing a name and the instrument's address (in this case, a TCP/IP address). Next, we connect to the instrument using the `connect()` method.

Once connected, we can use the instrument's parameters and methods to control and read measurements from the power supply. In the example, we set the voltage range using the `rangev` parameter and read the current value using the `curr` parameter.

Finally, we disconnect from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>