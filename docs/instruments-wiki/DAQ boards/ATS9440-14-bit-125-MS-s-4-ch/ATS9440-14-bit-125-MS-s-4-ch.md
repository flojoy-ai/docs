---
title: Connecting to ATS9440-14 bit 125 MS-s 4 ch by Alazartech in Python
sidebar_label: ATS9440-14 bit 125 MS-s 4 ch
description: ATS9440 is a 4-channel, 14-bit, 125 MS/s waveform digitizer based on the 8-lane PCI Express interface
keywords: [daq boards, Alazartech, Qcodes]
slug: /instruments-wiki/daq-boards/alazartech/ats9440-14-bit-125-ms-s-4-ch
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201128/Instruments/DAQ%20boards/ATS9440-14-bit-125-MS-s-4-ch/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ATS9440-14 bit 125 MS-s 4 ch

## Instrument Card

<div className="flex">

<div>

ATS9440 is a 4-channel, 14-bit, 125 MS/s waveform digitizer based on the 8-lane PCI Express interface

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201128/Instruments/DAQ%20boards/ATS9440-14-bit-125-MS-s-4-ch/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125979/Instruments/Vendor%20Logos/Alazartech.png" style={{ width: "100%", objectFit: "cover" }} />

Alazar Technologies Inc. (AlazarTech) was founded in 2003 with the goal of serving the test and measurement market, in general, and the embedded waveform digitizer (OEM) market segment, in particular, by providing highly differentiated, high performance instrumentation products at affordable prices. <a href="https://www.alazartech.com/">Website</a>.

<ul>
  <li>Headquarters: CANADA - QC</li>
  <li>Yearly Revenue (millions, USD): 4.0</li>
</ul>
</details>

## Connect to the ATS9440-14 bit 125 MS-s 4 ch in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to an ATS9440-14 bit, 125 MS/s, 4 ch DAQ board:

```python
from qcodes.instrument_drivers.AlazarTech.ATS9440 import AlazarTechATS9440

# Connect to the ATS9440 board
daq = AlazarTechATS9440('daq', dll_path='C:\\WINDOWS\\System32\\ATSApi.dll')

# Print the available parameters
print(daq.parameters)

# Set the clock source to INTERNAL_CLOCK
daq.clock_source('INTERNAL_CLOCK')

# Set the sample rate to 125 MS/s
daq.sample_rate(125_000_000)

# Set the channel range for channel 1 to 0.1V
daq.channel_range1(0.1)

# Set the channel range for channel 2 to 0.1V
daq.channel_range2(0.1)

# Set the channel range for channel 3 to 0.1V
daq.channel_range3(0.1)

# Set the channel range for channel 4 to 0.1V
daq.channel_range4(0.1)

# Set other parameters as needed

# Close the connection to the board
daq.close()
```

Note: Make sure to replace `'C:\\WINDOWS\\System32\\ATSApi.dll'` with the correct path to the ATSApi.dll file on your system.

</TabItem>
</Tabs>