---
title: Keithley 6430
description: he 6½-digit Model 6430 Sub-Femtoamp Remote SourceMeter SMU Instrument can measure current with 1aA sensitivity. Its low noise and drift performance make it ideal for research on single electron devices, highly resistive nanowires and nanotubes, polymers, and electrochemical applications.
keywords: [power supplies, Keithley, Qcodes Community]
slug: /instruments-wiki/power-supplies/keithley/keithley-6430
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200770/Instruments/Power%20Supplies/Keithley-6430/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6430

## Instrument Card

<div className="flex">

<div>

he 6½-digit Model 6430 Sub-Femtoamp Remote SourceMeter SMU Instrument can measure current with 1aA sensitivity. Its low noise and drift performance make it ideal for research on single electron devices, highly resistive nanowires and nanotubes, polymers, and electrochemical applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200770/Instruments/Power%20Supplies/Keithley-6430/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 6430 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Keithley 6430 Multimeter using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument_drivers.tektronix.Keithley_6430 import Keithley_6430

# Create an instance of the Keithley_6430 driver
keithley = Keithley_6430('keithley', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
keithley.connect()

# Perform operations with the instrument
keithley.source_current(0.1)  # Set the source current to 0.1 A
voltage, current, resistance = keithley.read()  # Read the voltage, current, and resistance

# Disconnect from the instrument
keithley.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::INSTR'` with the actual address of your Keithley 6430 Multimeter.

</TabItem>
</Tabs>