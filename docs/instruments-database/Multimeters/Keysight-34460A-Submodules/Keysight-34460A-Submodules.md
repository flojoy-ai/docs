---
title: Connecting to Keysight 34460A Submodules by Keysight in Python
sidebar_label: Keysight 34460A Submodules
description: The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.
keywords: [multimeters, Keysight, QCodes]
slug: /instruments-database/multimeters/keysight/keysight-34460a-submodules
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395580/Instruments/Multimeters/Keysight-34460A-Submodules/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34460A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395580/Instruments/Multimeters/Keysight-34460A-Submodules/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-03846/data-sheets/5991-1983.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MULTIMETERS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight 34460A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MULTIMETERS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 34460A Submodules Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_344xxA import Keysight_34411A

# Create an instance of the Keysight_34411A driver
multimeter = Keysight_34411A(name='multimeter', address='your_device_address')

# Connect to the multimeter
multimeter.connect()

# Now you can use the multimeter to perform measurements
# For example, to measure the voltage:
voltage = multimeter.volt()

# Print the measured voltage
print(f"Measured voltage: {voltage} V")

# Disconnect from the multimeter
multimeter.disconnect()
```

Make sure to replace `'your_device_address'` with the actual address of your Keysight 34460A Submodules Multimeter.

</TabItem>
</Tabs>