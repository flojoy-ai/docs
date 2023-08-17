---
title: Rigol DP8xx-Series
description: The DP800 Series Power Supplies combine the ability to source, analyze, and coordinate over time on a powerful platform. The DP800 Series is a family of linear power supplies systems with 1, 2, or 3 outputs and 140 to 200 Watts in total. With one channel isolated users can reconfigure instruments into any number of systems or applications. Built in V, A, and W measurements make power monitoring easy, but additional wave tracking, timing, and analysis features in the advanced "A" models means there are even more ways to use the instruments. Digital triggering between instruments also makes it possible to reliably combine and connect supplies together. Intuitive to use for everything from education labs to the R & D bench, the DP800 family of power supplies provide incredible value for any application. Select the value models for best price performance or upgrade to the "A" model to improve resolution and add advanced monitoring, triggering, and programming capabilities.
keywords: [power supplies, Rigol, Qcodes]
slug: /instruments-wiki/power-supplies/rigol/rigol-dp8xx-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201342/Instruments/Power%20Supplies/Rigol-DP8xx-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DP8xx-Series

## Instrument Card

<div className="flex">

<div>

The DP800 Series Power Supplies combine the ability to source, analyze, and coordinate over time on a powerful platform. The DP800 Series is a family of linear power supplies systems with 1, 2, or 3 outputs and 140 to 200 Watts in total. With one channel isolated users can reconfigure instruments into any number of systems or applications. Built in V, A, and W measurements make power monitoring easy, but additional wave tracking, timing, and analysis features in the advanced "A" models means there are even more ways to use the instruments. Digital triggering between instruments also makes it possible to reliably combine and connect supplies together. Intuitive to use for everything from education labs to the R & D bench, the DP800 family of power supplies provide incredible value for any application. Select the value models for best price performance or upgrade to the "A" model to improve resolution and add advanced monitoring, triggering, and programming capabilities.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201342/Instruments/Power%20Supplies/Rigol-DP8xx-Series/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125991/Instruments/Vendor%20Logos/Rigol.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

RIGOL Technologies, Inc. specializes in development and production of test and measuring equipment and is one of the fastest growing Chinese companies in this sphere.
RIGOL’s line of products includes [digital storage oscilloscopes](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=227), [function/arbitrary waveform generators](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=230), [digital multimeters](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=233), PC-based devices compatible with LXI standard etc. <a href="https://www.rigol.com/">Website</a>.

<ul>
  <li>Headquarters: Beijing, China</li>
  <li>Yearly Revenue (millions, USD): 23.0</li>
</ul>
</details>

## Connect to the Rigol DP8xx-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here's an example Python script that uses Qcodes to connect to a Rigol DP8xx-Series Power Supply:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument_drivers.rigol.DP8xx import RigolDP8xx

# Create an instance of the RigolDP8xx instrument
rigol = RigolDP8xx("rigol", "USB0::0x1AB1::0x0E11::DP8xxxxxxxxx::INSTR")

# Connect to the instrument
rigol.connect()

# Print the installed options
print(rigol.installed_options())

# Set the voltage and current for channel 1
rigol.ch1.set_voltage(3.0)  # Set the voltage to 3.0V
rigol.ch1.set_current(0.5)  # Set the current to 0.5A

# Enable the output for channel 1
rigol.ch1.state(True)

# Read the measured voltage and current for channel 1
voltage = rigol.ch1.voltage()
current = rigol.ch1.current()
print(f"Measured voltage: {voltage}V")
print(f"Measured current: {current}A")

# Disconnect from the instrument
rigol.disconnect()
```

Note: Replace `"USB0::0x1AB1::0x0E11::DP8xxxxxxxxx::INSTR"` with the actual VISA address of your Rigol DP8xx-Series Power Supply.

</TabItem>
</Tabs>