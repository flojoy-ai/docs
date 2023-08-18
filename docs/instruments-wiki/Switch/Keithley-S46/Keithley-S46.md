---
title: Connecting to Keithley S46 by Keithley in Python
sidebar_label: Keithley S46
description: S46 Microwave Switch Systems are designed to simplify the automated switching needed to test a wide range of RF and telecommunication products and devices. The S46 can control 32 relay contacts in a package as small as a 2U high (3.5 in) full-rack enclosure.
keywords: [switch, Keithley, Qcodes]
slug: /instruments-wiki/switch/keithley/keithley-s46
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197331/Instruments/Switch/Keithley-S46/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley S46

## Instrument Card

<div className="flex">

<div>

S46 Microwave Switch Systems are designed to simplify the automated switching needed to test a wide range of RF and telecommunication products and devices. The S46 can control 32 relay contacts in a package as small as a 2U high (3.5 in) full-rack enclosure.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692197331/Instruments/Switch/Keithley-S46/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley S46 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keithley S46 Switch using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keithley.KeithleyS46 import KeithleyS46

# Create an instance of the KeithleyS46 instrument
s46 = KeithleyS46("s46", "TCPIP::192.168.1.1::INSTR")

# Open a connection to the instrument
s46.connect()

# Print the available channels
print(s46.available_channels)

# Close channel 'A1'
s46.A1.set("close")

# Check if channel 'A1' is closed
print(s46.A1.is_closed())

# Open all channels
s46.open_all_channels()

# Close channel 'R2'
s46.R2.set("close")

# Check if channel 'R2' is closed
print(s46.R2.is_closed())

# Close the connection to the instrument
s46.disconnect()
```

This script creates an instance of the `KeithleyS46` instrument, connects to it using the specified address (replace `"TCPIP::192.168.1.1::INSTR"` with the actual address of your instrument), and performs various operations on the switch channels. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>