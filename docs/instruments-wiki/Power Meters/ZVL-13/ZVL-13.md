---
title: Connecting to ZVL 13 by Rohdes&Schwarz in Python
sidebar_label: ZVL 13
description: The ZVL is a compact, cost-efficient, powerful and portable network analyzer. It is ideal for use in development, production, and service. It is the only instrument to combine the functions of a network analyzer, spectrum analyzer, and power meter in a single box, making you much more efficient.
keywords: [power meters, Rohdes&Schwarz, QCodes Community]
slug: /instruments-wiki/power-meters/rohdes&schwarz/zvl-13
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395809/Instruments/Power%20Meters/ZVL-13/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ZVL 13

## Instrument Card

<div className="flex">

<div>

The ZVL is a compact, cost-efficient, powerful and portable network analyzer. It is ideal for use in development, production, and service. It is the only instrument to combine the functions of a network analyzer, spectrum analyzer, and power meter in a single box, making you much more efficient.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395809/Instruments/Power%20Meters/ZVL-13/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692139604/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication. <a href="https://www.rohde-schwarz.com/ca/home_48230.html">Website</a>.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
</ul>
</details>

## Connect to the ZVL 13 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a ZVL 13 Network Analyzer using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.rohde_schwarz.ZVL13 import ZVL13

# Create a station to hold the instruments
station = Station()

# Connect to the ZVL 13 Network Analyzer
zvl13 = ZVL13('zvl13', 'TCPIP0::192.168.1.1::inst0::INSTR')
station.add_component(zvl13)

# Print the available parameters and functions of the ZVL 13
print(zvl13.parameters)
print(zvl13.functions)

# Set the start frequency, stop frequency, and number of points
zvl13.start(1e6)
zvl13.stop(1e9)
zvl13.npts(101)

# Perform a frequency sweep and get the magnitude and phase data
mag, phase = zvl13.trace_mag_phase()

# Print the magnitude and phase data
print(mag)
print(phase)

# Disconnect from the instruments
zvl13.close()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your ZVL 13 Network Analyzer.

</TabItem>
</Tabs>