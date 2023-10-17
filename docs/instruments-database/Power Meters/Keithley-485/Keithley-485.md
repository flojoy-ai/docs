---
title: Connecting to Keithley 485 by Keithley in Python
sidebar_label: Keithley 485
description: The Keithley 485 Autoranging Picoammeter provides 100fA sensitivity with 4 1/2-digit resolution in a low-cost, highly sensitive, easy-to-use instrument. The 485 measures DC current on seven ranges covering 10 decades from 100fA to 2mA. The input can withstand overloads as high as 1000V (with 100kΩ limiting resistor) for flexibility in a wide range of applications in test, research, and student labs. An analog output linearly converts the incoming current to voltage for hard copy output or control loop applications.
keywords: [power meters, Keithley, InstrumentKit]
slug: /instruments-database/power-meters/keithley/keithley-485
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394003/Instruments/Power%20Meters/Keithley-485/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 485

## Instrument Card

<div className="flex">

<div>

The Keithley 485 Autoranging Picoammeter provides 100fA sensitivity with 4 1/2-digit resolution in a low-cost, highly sensitive, easy-to-use instrument. The 485 measures DC current on seven ranges covering 10 decades from 100fA to 2mA. The input can withstand overloads as high as 1000V (with 100kΩ limiting resistor) for flexibility in a wide range of applications in test, research, and student labs. An analog output linearly converts the incoming current to voltage for hard copy output or control loop applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394003/Instruments/Power%20Meters/Keithley-485/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-485-Datasheet.pdf">here</a></p>

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

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the Keithley 485 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
import instrumentkit as ik

# Connect to the Keithley 485 picoammeter
inst = ik.keithley.Keithley485.open_gpibusb("/dev/ttyUSB0", 22)

# Set the input range to 2e-9 A
inst.input_range = "2e-9"

# Enable zero check mode
inst.zero_check = True

# Enable log mode
inst.log = True

# Enable relative mode
inst.relative = True

# Perform a current measurement
measurement = inst.measure()
print(measurement)
```

This script first imports the `instrumentkit` module and then uses the `open_gpibusb` method of the `Keithley485` class to connect to the Keithley 485 picoammeter. The method takes the device path (`/dev/ttyUSB0`) and the GPIB address (22) as arguments.

Next, the script sets the input range to 2e-9 A using the `input_range` property of the instrument. It then enables zero check mode, log mode, and relative mode using the corresponding properties.

Finally, the script performs a current measurement using the `measure` method of the instrument and prints the result.

Note: This script assumes that you have already installed the Instrumentkit library and have the necessary permissions to access the GPIB device.

</TabItem>
</Tabs>