---
title: Connecting to Keysight 34411A Submodules by Keysight in Python
sidebar_label: Keysight 34411A Submodules
description: The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.
keywords: [multimeters, Keysight, QCodes]
slug: /instruments-database/multimeters/keysight/keysight-34411a-submodules
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395579/Instruments/Multimeters/Keysight-34411A-Submodules/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34411A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395579/Instruments/Multimeters/Keysight-34411A-Submodules/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01326/data-sheets/5989-3738.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 34411A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 34411A Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_34411A import Keysight_34411A

# Create an instance of the Keysight_34411A driver
multimeter = Keysight_34411A(name='multimeter', address='your_device_address')

# Connect to the multimeter
multimeter.connect()

# Perform measurements or other operations with the multimeter

# Disconnect from the multimeter
multimeter.disconnect()
```

This script imports the `Keysight_34411A` driver from the `qcodes.instrument_drivers.Keysight` module. It then creates an instance of the `Keysight_34411A` driver, specifying a name for the instrument and the address of the device.

After creating the instance, you can connect to the multimeter using the `connect()` method. Once connected, you can perform measurements or other operations with the multimeter.

Finally, you can disconnect from the multimeter using the `disconnect()` method.

Note: Make sure you replace `'your_device_address'` with the actual address of your Keysight 34411A Multimeter.

</TabItem>
</Tabs>