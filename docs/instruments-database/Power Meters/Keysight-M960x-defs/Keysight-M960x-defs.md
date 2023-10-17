---
title: Connecting to Keysight M960x defs by Keysight in Python
sidebar_label: Keysight M960x defs
description: PXI source/measure units are the source and measurement resources of voltage and current for test applications requiring high accuracy, high resolution, and measurement flexibility
keywords: [power meters, Keysight, QCodes]
slug: /instruments-database/power-meters/keysight/keysight-m960x-defs
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395548/Instruments/Power%20Meters/Keysight-M960x-defs/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight M960x defs

## Instrument Card

<div className="flex">

<div>

PXI source/measure units are the source and measurement resources of voltage and current for test applications requiring high accuracy, high resolution, and measurement flexibility

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395548/Instruments/Power%20Meters/Keysight-M960x-defs/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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


## Connect to the Keysight M960x defs in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here is a Python script that uses Qcodes to connect to a Keysight M960x Power Meter:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_M960x import Keysight_M960x

# Connect to the power meter
power_meter = Keysight_M960x("power_meter", "TCPIP0::192.168.1.1::inst0::INSTR")

# Print the power meter identification
print(power_meter.idn())

# Set the power meter to measure power
power_meter.measurement_function("POWER")

# Set the power meter range
power_meter.range_auto(True)

# Read the power measurement
power = power_meter.power()

# Print the power measurement
print(f"Power: {power} dBm")

# Close the connection to the power meter
power_meter.close()
```

This script connects to the power meter using the IP address "192.168.1.1" and sets up the measurement function to measure power. It then reads the power measurement and prints the result. Finally, it closes the connection to the power meter.

</TabItem>
</Tabs>