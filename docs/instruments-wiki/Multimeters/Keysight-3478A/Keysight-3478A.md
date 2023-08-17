---
title: Keysight 3478A
description: The HP 3478A 5.5 digit DMM with HP-IB interface
keywords: [multimeters, HP, Pymeasure]
slug: /instruments-wiki/multimeters/hp/keysight-3478a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200920/Instruments/Multimeters/Keysight-3478A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 3478A

## Instrument Card

<div className="flex">

<div>

The HP 3478A 5.5 digit DMM with HP-IB interface

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200920/Instruments/Multimeters/Keysight-3478A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 3478A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Keysight 3478A Multimeter:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.hp.hp3478a import HP3478A

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::22::INSTR")

# Create an instance of the HP3478A instrument
multimeter = HP3478A(adapter)

# Connect to the instrument
multimeter.open()

# Perform measurements
voltage = multimeter.measure_DCV()
current = multimeter.measure_DCI()
resistance = multimeter.measure_R2W()

# Print the measurement results
print("Voltage: ", voltage)
print("Current: ", current)
print("Resistance: ", resistance)

# Close the connection to the instrument
multimeter.close()
```

This script creates a VISA adapter using the GPIB address of the instrument. Then, it creates an instance of the HP3478A instrument using the adapter. The script opens the connection to the instrument, performs measurements of DC voltage, DC current, and resistance, and prints the measurement results. Finally, it closes the connection to the instrument.

</TabItem>
</Tabs>