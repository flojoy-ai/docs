---
title: Connecting to Rigol DS1000-Series by Rigol in Python
sidebar_label: Rigol DS1000-Series
description: The 1000 Series from RIGOL include the B, D, and E series oscilloscopes. The E Series are the value leader with 50-100 MHz models that include 2 channels and 1 Million points of memory. The D Series add low speed digital capture enabling basic mixed signal analysis in a economic package. The B Series provide more speed and power including our economic 4 channel, 200 MHz DS1204B model which provides 2 GSa/sec sampling. With features including FFTs, record and replay, roll mode, alternate trigger mode, and adjustable trigger sensitivity the 1000 Series is a great entry for value oscilloscope requirements.
keywords: [oscilloscopes, Rigol, InstrumentKit]
slug: /instruments-wiki/oscilloscopes/rigol/rigol-ds1000-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395073/Instruments/Oscilloscopes/Rigol-DS1000-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DS1000-Series

## Instrument Card

<div className="flex">

<div>

The 1000 Series from RIGOL include the B, D, and E series oscilloscopes. The E Series are the value leader with 50-100 MHz models that include 2 channels and 1 Million points of memory. The D Series add low speed digital capture enabling basic mixed signal analysis in a economic package. The B Series provide more speed and power including our economic 4 channel, 200 MHz DS1204B model which provides 2 GSa/sec sampling. With features including FFTs, record and replay, roll mode, alternate trigger mode, and adjustable trigger sensitivity the 1000 Series is a great entry for value oscilloscope requirements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395073/Instruments/Oscilloscopes/Rigol-DS1000-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-wiki/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806170/Instruments/Vendor%20Logos/Rigol.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

RIGOL Technologies, Inc. specializes in development and production of test and measuring equipment and is one of the fastest growing Chinese companies in this sphere.
RIGOL’s line of products includes [digital storage oscilloscopes](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=227), [function/arbitrary waveform generators](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=230), [digital multimeters](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=233), PC-based devices compatible with LXI standard etc.

<ul>
  <li>Headquarters: Beijing, China</li>
  <li>Yearly Revenue (millions, USD): 23.0</li>
  <li>Vendor Website: <a href="https://www.rigol.com/">here</a></li>
</ul>
</details>

## Connect to the Rigol DS1000-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
from instrumentkit import RigolDS1000Series

# Connect to the oscilloscope
oscilloscope = RigolDS1000Series("192.168.1.1")  # Replace with the IP address of your oscilloscope

# Set the acquisition type to normal
oscilloscope.acquire_type = RigolDS1000Series.AcquisitionType.normal

# Set the number of averages to 8
oscilloscope.acquire_averages = 8

# Trigger the oscilloscope
oscilloscope.force_trigger()

# Start running the oscilloscope trigger
oscilloscope.run()

# Stop the oscilloscope trigger
oscilloscope.stop()

# Release any lockout of the local control panel
oscilloscope.release_panel()

# Disconnect from the oscilloscope
oscilloscope.disconnect()
```

Note: Replace `"192.168.1.1"` with the actual IP address of your Rigol DS1000-Series Oscilloscope.

</TabItem>
</Tabs>