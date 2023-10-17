---
title: Connecting to Keysight 3478A by HP in Python
sidebar_label: Keysight 3478A
description: The HP 3478A 5.5 digit DMM with HP-IB interface
keywords: [multimeters, HP, PyMeasure]
slug: /instruments-database/multimeters/hp/keysight-3478a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395416/Instruments/Multimeters/Keysight-3478A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 3478A

## Instrument Card

<div className="flex">

<div>

The HP 3478A 5.5 digit DMM with HP-IB interface

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395416/Instruments/Multimeters/Keysight-3478A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/9018-05398/user-manuals/9018-05398.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the Keysight 3478A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

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