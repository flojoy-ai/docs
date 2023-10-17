---
title: Connecting to Keysight 34980A by Keysight in Python
sidebar_label: Keysight 34980A
description: The Keysight 34980A Multifunction Switch/Measure unit is designed for R&D andmanufacturing test engineers who are working in design verification, automatedtest or data acquisition and are either looking to upgrade their existing systems orare in need of a new, cost-effective alternative
keywords: [multimeters, Keysight, QCodes]
slug: /instruments-database/multimeters/keysight/keysight-34980a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395589/Instruments/Multimeters/Keysight-34980A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34980A

## Instrument Card

<div className="flex">

<div>

The Keysight 34980A Multifunction Switch/Measure unit is designed for R&D and
manufacturing test engineers who are working in design verification, automated
test or data acquisition and are either looking to upgrade their existing systems or
are in need of a new, cost-effective alternative

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395589/Instruments/Multimeters/Keysight-34980A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01247/data-sheets/5989-1437.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 34980A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here is a Python script that uses Qcodes to connect to a Keysight 34980A DAQ board:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_34980A import Keysight34980A

# Create an instance of the instrument
daq = Keysight34980A('daq', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
daq.connect()

# Perform operations with the instrument
daq.reset()
status = daq.get_status()
error = daq.get_error()

# Disconnect from the instrument
daq.disconnect()
```

This script imports the necessary modules and creates an instance of the `Keysight34980A` instrument with the name 'daq' and the specified address. It then connects to the instrument using the `connect()` method.

After connecting, the script performs some operations with the instrument, such as resetting it, getting the status and error messages. Finally, it disconnects from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>