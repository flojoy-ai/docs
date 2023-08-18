---
title: Connecting to Keysight MAwgDef by Keysight in Python
sidebar_label: Keysight MAwgDef
description: Currently no description
keywords: [rf signal generators, Keysight, Qcodes]
slug: /instruments-wiki/rf-signal-generators/keysight/keysight-mawgdef
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692310113/Instruments/RF%20Signal%20Generators/Keysight-MAwgDef/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight MAwgDef

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692310113/Instruments/RF%20Signal%20Generators/Keysight-MAwgDef/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the Keysight MAwgDef in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight MAwgDef RF Signal Generator using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_MAwgDef import Keysight_MAwgDef

# Connect to the instrument
mawg = Keysight_MAwgDef('mawg', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Print the instrument ID
print(mawg.idn())

# Set the output frequency to 1 GHz
mawg.frequency(1e9)

# Set the output power to -10 dBm
mawg.power(-10)

# Enable the output
mawg.output(True)

# Disconnect from the instrument
mawg.close()
```

This script imports the necessary modules and creates an instance of the `Keysight_MAwgDef` instrument driver. It then connects to the instrument using the specified VISA address. You can replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your instrument.

The script then demonstrates some basic operations such as printing the instrument ID, setting the output frequency and power, enabling the output, and finally disconnecting from the instrument.

Note: Make sure you have installed the necessary dependencies and the Qcodes library before running this script.

</TabItem>
</Tabs>