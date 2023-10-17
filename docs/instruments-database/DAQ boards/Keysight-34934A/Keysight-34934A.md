---
title: Connecting to Keysight 34934A by Keysight in Python
sidebar_label: Keysight 34934A
description: The Keysight 34934A module for the 34980A Multifunction Switch/Measure Unit offers the highest density matrix for connecting paths between your device under test and your test equipment, allowing for multiple instrument connections to multiple points on your device under test at the same time.
keywords: [daq boards, Keysight, QCodes]
slug: /instruments-database/daq-boards/keysight/keysight-34934a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395587/Instruments/DAQ%20boards/Keysight-34934A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34934A

## Instrument Card

<div className="flex">

<div>

The Keysight 34934A module for the 34980A Multifunction Switch/Measure Unit offers the highest density matrix for connecting paths between your device under test and your test equipment, allowing for multiple instrument connections to multiple points on your device under test at the same time.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395587/Instruments/DAQ%20boards/Keysight-34934A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the Keysight 34934A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 34934A DAQ board using Qcodes, you can use the following Python script:

```python
from qcodes import VisaInstrument

# Connect to the DAQ board
daq = VisaInstrument('DAQ', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Create an instance of the Keysight34934A module
module = Keysight34934A(daq, 'module1', 1)

# Set the relay protection mode to 'AUTO100'
module.protection_mode('AUTO100')

# Get the relay protection mode
mode = module.protection_mode()

# Print the relay protection mode
print(f"Relay protection mode: {mode}")

# Disconnect from the DAQ board
daq.close()
```

Note: Make sure to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your DAQ board.

</TabItem>
</Tabs>