---
title: Connecting to Keysight N5245A by Keysight in Python
sidebar_label: Keysight N5245A
description: The Keysight N5245A Network Analyzer provides a wide range of measurement applications for amplifiers, converters, antennas, or mixers with a single connection.
keywords: [network analyzers, Keysight, QCodes]
slug: /instruments-wiki/network-analyzers/keysight/keysight-n5245a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395603/Instruments/Network%20Analyzers/Keysight-N5245A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5245A

## Instrument Card

<div className="flex">

<div>

The Keysight N5245A Network Analyzer provides a wide range of measurement applications for amplifiers, converters, antennas, or mixers with a single connection.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395603/Instruments/Network%20Analyzers/Keysight-N5245A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight N5245A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_N5245A import Keysight_N5245A

# Connect to the instrument
n5245a = Keysight_N5245A("n5245a", "TCPIP0::192.168.1.1::inst0::INSTR")

# Print the instrument ID
print(n5245a.IDN())

# Close the connection
n5245a.close()
```

This code imports the necessary modules and connects to the Keysight N5245A Network Analyzer using the `Keysight_N5245A` driver from the Qcodes library. It then prints the instrument ID and closes the connection.

</TabItem>
</Tabs>