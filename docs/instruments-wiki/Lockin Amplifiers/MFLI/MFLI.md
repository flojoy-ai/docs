---
title: Connecting to MFLI by Zurich Instruments in Python
sidebar_label: MFLI
description: The Zurich Instruments MFLI is a digital lock-in amplifier that covers the frequency range from DC to 500 kHz (and up to 5 MHz when upgraded). Thanks to its embedded data and web servers, the MFLI can be used directly with any device running a web browser without further software installations
keywords: [lockin amplifiers, Zurich Instruments, Qcodes]
slug: /instruments-wiki/lockin-amplifiers/zurich-instruments/mfli
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200935/Instruments/Lockin%20Amplifiers/MFLI/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MFLI

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments MFLI is a digital lock-in amplifier that covers the frequency range from DC to 500 kHz (and up to 5 MHz when upgraded). Thanks to its embedded data and web servers, the MFLI can be used directly with any device running a web browser without further software installations

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200935/Instruments/Lockin%20Amplifiers/MFLI/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126012/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis. <a href="https://www.zhinst.com/americas/en">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
</ul>
</details>

## Connect to the MFLI in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

The provided code is a stub for connecting to a Zurich Instruments MFLI Lock-in Amplifier using Qcodes. To establish a connection and interact with the lock-in amplifier, you can use the following code:

```python
from qcodes import Station
from qcodes.instrument_drivers.zhinst import MFLI

# Create a station to hold the instruments
station = Station()

# Connect to the MFLI Lock-in Amplifier
mflilockin = MFLI("MFLI", "dev1234", interface="1GbE")

# Add the lock-in amplifier to the station
station.add_component(mflilockin)

# Print the available parameters of the lock-in amplifier
print(mflilockin.parameters)

# Perform further operations with the lock-in amplifier as needed
# ...

# Close the connection to the lock-in amplifier
mflilockin.close()
```

Make sure to replace `"dev1234"` with the actual device ID or name of your MFLI Lock-in Amplifier. The `interface` parameter specifies the connection interface, which is set to `"1GbE"` in this example.

The code creates a `Station` object to hold the instruments. Then, it establishes a connection to the MFLI Lock-in Amplifier using the `MFLI` class from the `zhinst` module of Qcodes. The lock-in amplifier is added to the station using the `add_component` method.

You can access and manipulate the lock-in amplifier's parameters using the `parameters` attribute of the `MFLI` instance. In the provided code, it prints the available parameters of the lock-in amplifier.

Finally, the connection to the lock-in amplifier is closed using the `close` method of the `MFLI` instance.

Note: This code assumes that you have already installed the `qcodes` and `zhinst-qcodes` packages.

</TabItem>
</Tabs>