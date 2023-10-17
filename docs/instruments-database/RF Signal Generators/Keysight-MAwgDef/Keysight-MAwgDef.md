---
title: Connecting to Keysight MAwgDef by Keysight in Python
sidebar_label: Keysight MAwgDef
description: Currently no description
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-mawgdef
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395610/Instruments/RF%20Signal%20Generators/Keysight-MAwgDef/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight MAwgDef

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395610/Instruments/RF%20Signal%20Generators/Keysight-MAwgDef/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

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

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='WIDGET2000' manufacturer='MZ2000'></FeaturedInstrumentVideo>


## Connect to the Keysight MAwgDef in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

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