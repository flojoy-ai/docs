---
title: Connecting to Keysight 34410A by Agilent in Python
sidebar_label: Keysight 34410A
description: The Keysight Technologies, Inc. 34410A and 34411A 6½-Digit DMMs build on the phenomenal success of the industry-standard Keysight 34401A. These new meters offer improved accuracy, expanded measurement capability, dramatically improved measurement speed and throughput, and modern computer interfaces including LAN and USB.
keywords: [multimeters, Agilent, QCodes]
slug: /instruments-database/multimeters/agilent/keysight-34410a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639190/Instruments/Multimeters/Keysight-34410A/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34410A

## Instrument Card

<div className="flex">

<div>

The Keysight Technologies, Inc. 34410A and 34411A 6½-Digit DMMs build on the phenomenal success of the industry-standard Keysight 34401A. These new meters offer improved accuracy, expanded measurement capability, dramatically improved measurement speed and throughput, and modern computer interfaces including LAN and USB.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639190/Instruments/Multimeters/Keysight-34410A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01326/data-sheets/5989-3738.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 34410A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 34410A Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_344XXA import Keysight_344XXA

# Create an instance of the Keysight_344XXA driver
multimeter = Keysight_344XXA('multimeter', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the multimeter
multimeter.connect()

# Perform measurements or set parameters using the multimeter object

# Disconnect from the multimeter
multimeter.disconnect()
```

This script imports the `Keysight_344XXA` driver from the `qcodes.instrument_drivers.Keysight` module. It then creates an instance of the driver, specifying a name for the instrument and the VISA resource address of the multimeter. The `connect()` method is called to establish a connection to the multimeter. You can then perform measurements or set parameters using the `multimeter` object. Finally, the `disconnect()` method is called to disconnect from the multimeter.

</TabItem>
</Tabs>