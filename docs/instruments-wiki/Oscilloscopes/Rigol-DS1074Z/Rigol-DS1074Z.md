---
title: Connecting to Rigol DS1074Z by Rigol in Python
sidebar_label: Rigol DS1074Z
description: 4 analog channels, Upgradable to 16 digital channels (requires optional RPL1116 logic probe to operate)Built in 2 channel 25MHz waveform generator
keywords: [oscilloscopes, Rigol, Qcodes]
slug: /instruments-wiki/oscilloscopes/rigol/rigol-ds1074z
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201196/Instruments/Oscilloscopes/Rigol-DS1074Z/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DS1074Z

## Instrument Card

<div className="flex">

<div>

4 analog channels, Upgradable to 16 digital channels (requires optional RPL1116 logic probe to operate)
Built in 2 channel 25MHz waveform generator

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201196/Instruments/Oscilloscopes/Rigol-DS1074Z/file.png" style={{ width: "325px" }} />

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

## Connect to the Rigol DS1074Z in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to a Rigol DS1074Z Oscilloscope:

```python
from qcodes.instrument.visa import VisaInstrument

class RigolDS1074Z(VisaInstrument):
    # ... code omitted for brevity ...

# Create an instance of the RigolDS1074Z instrument
rigol = RigolDS1074Z("rigol", "USB0::0x1AB1::0x04CE::DS1ZA222222222::INSTR")

# Connect to the instrument
rigol.connect()

# Access and set parameters
rigol.trigger_mode("edge")
rigol.trigger_level(0.5)

# Access channel parameters
channel1 = rigol.channels.ch1
channel1.vertical_scale(0.1)

# Get the trace data from channel 1
trace_data = channel1.trace()

# Disconnect from the instrument
rigol.disconnect()
```

This script creates an instance of the `RigolDS1074Z` instrument, sets the trigger mode and level, accesses the parameters of channel 1, retrieves the trace data from channel 1, and finally disconnects from the instrument.

</TabItem>
</Tabs>