---
title: ATS9870-8 bit 1 GS-s
description: ATS9870 is the world's first Giga-sample waveform digitizer based on the 8-lane PCI Express interface
keywords: [daq boards, Alazartech, Qcodes]
slug: /instruments-wiki/daq-boards/alazartech/ats9870-8-bit-1-gs-s
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201046/Instruments/DAQ%20boards/ATS9870-8-bit-1-GS-s/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ATS9870-8 bit 1 GS-s

## Instrument Card

<div className="flex">

<div>

ATS9870 is the world's first Giga-sample waveform digitizer based on the 8-lane PCI Express interface

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201046/Instruments/DAQ%20boards/ATS9870-8-bit-1-GS-s/file.png" style={{ width: "325px" }} />

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

## Connect to the ATS9870-8 bit 1 GS-s in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to an ATS9870-8 bit, 1 GS/s DAQ board using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.AlazarTech.ATS9870 import AlazarTechATS9870

# Create an instance of the AlazarTechATS9870 driver
daq = AlazarTechATS9870('daq', dll_path='C:\\WINDOWS\\System32\\ATSApi.dll')

# Connect to the DAQ board
daq.connect('ATS9870')

# Print the IDN information of the DAQ board
print(daq.get_idn())

# Set the sample rate to 1 GS/s
daq.sample_rate(1e9)

# Set other parameters as needed

# Disconnect from the DAQ board
daq.disconnect()
```

This script creates an instance of the `AlazarTechATS9870` driver, connects to the ATS9870-8 bit, 1 GS/s DAQ board, and sets the sample rate to 1 GS/s. You can modify the script to set other parameters or perform data acquisition as required.

</TabItem>
</Tabs>