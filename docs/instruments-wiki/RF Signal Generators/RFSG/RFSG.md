---
title: Connecting to RFSG by National Instruments in Python
sidebar_label: RFSG
description: Currently no description
keywords: [rf signal generators, National Instruments, Qcodes Community]
slug: /instruments-wiki/rf-signal-generators/national-instruments/rfsg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692310247/Instruments/RF%20Signal%20Generators/RFSG/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RFSG

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692310247/Instruments/RF%20Signal%20Generators/RFSG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125989/Instruments/Vendor%20Logos/National_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision. <a href="https://www.ni.com/en-ca.html">Website</a>.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
</ul>
</details>

## Connect to the RFSG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

Here is an example Python script that uses Qcodes Community to connect to a RFSG RF Signal Generator:

```python
import qcodes as qc
from qcodes_contrib_drivers.drivers.NationalInstruments.NIRFSG import NI_RFSG

# Connect to the RF Signal Generator
rfsg = NI_RFSG("rfsg", "PXI1Slot2")

# Print the IDN information
print(rfsg.get_idn())

# Set the frequency and power level
rfsg.frequency(1e9)  # 1 GHz
rfsg.power_level(-10)  # -10 dBm

# Enable the RF output
rfsg.output_enabled(True)

# Close the connection
rfsg.close()
```

Note: Make sure you have installed the `qcodes_contrib_drivers` package before running this script.

</TabItem>
</Tabs>