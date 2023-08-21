---
title: Connecting to Keithley 3706A by Keithley in Python
sidebar_label: Keithley 3706A
description: The Model 3706A system switch with high performance DMM contains six slots for plug-in cards in a compact 2U high enclosure that easily accommodates the needs of medium to high channel count applications. When fully loaded, a mainframe can support up to 576 two-wire multiplexer channels for unrivaled density and economical per channel costs. The result is a tightly integrated switch and measurement solution that’s equally at home on the bench or in the rack.
keywords: [multimeters, Keithley, QCodes]
slug: /instruments-wiki/multimeters/keithley/keithley-3706a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395563/Instruments/Multimeters/Keithley-3706A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 3706A

## Instrument Card

<div className="flex">

<div>

The Model 3706A system switch with high performance DMM contains six slots for plug-in cards in a compact 2U high enclosure that easily accommodates the needs of medium to high channel count applications. When fully loaded, a mainframe can support up to 576 two-wire multiplexer channels for unrivaled density and economical per channel costs. The result is a tightly integrated switch and measurement solution that’s equally at home on the bench or in the rack.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395563/Instruments/Multimeters/Keithley-3706A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the Keithley 3706A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 3706A Multimeter using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_3706A import Keithley3706A

# Create an instance of the Keithley3706A instrument
keithley = Keithley3706A("keithley", "TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the instrument
keithley.connect_message()

# Perform operations with the instrument
keithley.reset_channel("allslots")
keithley.open_channel("slot1")
keithley.close_channel("slot2")

# Disconnect from the instrument
keithley.close()
```

In this script, we import the necessary modules and create an instance of the `Keithley3706A` instrument. We provide the instrument name and the VISA resource address (in this case, the IP address of the instrument). Then, we connect to the instrument using the `connect_message()` method, which prints information about the connected instrument and its switch cards. After that, we can perform operations with the instrument, such as resetting channels, opening channels, and closing channels. Finally, we disconnect from the instrument by calling the `close()` method.

</TabItem>
</Tabs>