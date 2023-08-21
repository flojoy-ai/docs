---
title: Connecting to Keysight 3456A by HP in Python
sidebar_label: Keysight 3456A
description: 3456A 6 1/2 Digit Digital Multimeter
keywords: [multimeters, HP, InstrumentKit]
slug: /instruments-wiki/multimeters/hp/keysight-3456a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692393997/Instruments/Multimeters/Keysight-3456A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 3456A

## Instrument Card

<div className="flex">

<div>

3456A 6 1/2 Digit Digital Multimeter

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692393997/Instruments/Multimeters/Keysight-3456A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 3456A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
import instrumentkit as ik

# Connect to the multimeter
multimeter = ik.keysight.Keysight3456A.open_gpibusb("/dev/ttyUSB0", 22)

# Set the measurement mode to DC voltage
multimeter.mode = multimeter.Mode.dcv

# Perform a measurement
measurement = multimeter.measure()

# Print the measurement result
print("Measurement: {}".format(measurement))
```

This script first imports the `instrumentkit` module and then uses the `open_gpibusb` method of the `ik.keysight.Keysight3456A` class to connect to the multimeter. You'll need to replace `"/dev/ttyUSB0"` with the appropriate device path for your system.

Next, it sets the measurement mode to DC voltage using the `mode` property of the multimeter object. In this example, we're using the `Mode.dcv` enum value.

Finally, it performs a measurement using the `measure` method of the multimeter object and prints the result.

Note that this script assumes you have already installed the `instrumentkit` library. If not, you can install it using `pip install instrumentkit`.

</TabItem>
</Tabs>