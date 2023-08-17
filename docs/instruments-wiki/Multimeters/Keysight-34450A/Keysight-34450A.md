---
title: Keysight 34450A
description: Turbo charge your production line with the Keysight 34450A 5.5-digit multimeter with OLED display. With its fast speed of up to 190 readings per second, you can increase your manufacturing throughput tremendously.
keywords: [multimeters, Agilent, Pymeasure]
slug: /instruments-wiki/multimeters/agilent/keysight-34450a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106786/Instruments/Multimeters/Keysight-34450A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34450A

## Instrument Card

<div className="flex">

<div>

Turbo charge your production line with the Keysight 34450A 5.5-digit multimeter with OLED display. With its fast speed of up to 190 readings per second, you can increase your manufacturing throughput tremendously.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106786/Instruments/Multimeters/Keysight-34450A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 34450A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import Agilent34450A

# Create a VISA adapter for the instrument
adapter = VISAAdapter("USB0::0x2A8D::0x0101::MY53200001::INSTR")

# Create an instance of the Agilent34450A instrument
dmm = Agilent34450A(adapter)

# Reset the instrument
dmm.reset()

# Configure the instrument to measure DC voltage
dmm.configure_voltage()

# Read the voltage measurement
voltage = dmm.voltage
print("Voltage:", voltage)

# Shutdown the instrument
dmm.shutdown()
```

In this example, we first import the necessary modules from Pymeasure. We then create a VISA adapter using the appropriate address for your instrument. Next, we create an instance of the Agilent34450A instrument using the adapter. We can then perform various operations on the instrument, such as resetting it, configuring it to measure DC voltage, and reading the voltage measurement. Finally, we shutdown the instrument to release any resources it may be using.

Note: Make sure to replace the address in the `VISAAdapter` constructor with the correct address for your instrument.

</TabItem>
</Tabs>