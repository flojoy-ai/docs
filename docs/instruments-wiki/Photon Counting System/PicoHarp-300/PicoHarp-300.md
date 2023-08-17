---
title: PicoHarp 300
description: The PicoHarp 300 is a high-end, easy to use, plug and play Time-Correlated Single Photon Counting (TCSPC) system. It is connected to a PC through a USB 2.0 interface. The high quality and reliability of the PicoHarp 300 is expressed by a unique 5-year limited warranty.
keywords: [photon counting system, Picoquant, Pytango]
slug: /instruments-wiki/photon-counting-system/picoquant/picoharp-300
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200797/Instruments/Photon%20Counting%20System/PicoHarp-300/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PicoHarp 300

## Instrument Card

<div className="flex">

<div>

The PicoHarp 300 is a high-end, easy to use, plug and play Time-Correlated Single Photon Counting (TCSPC) system. It is connected to a PC through a USB 2.0 interface. The high quality and reliability of the PicoHarp 300 is expressed by a unique 5-year limited warranty.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200797/Instruments/Photon%20Counting%20System/PicoHarp-300/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125981/Instruments/Vendor%20Logos/PicoQuant.png" style={{ width: "100%", objectFit: "cover" }} />

The PicoQuant group was founded in 1996 to develop robust, compact, and easy to use time-resolved instrumentation and systems. Since April 2008 sales and support in North America is handled by PicoQuant Photonics North America Inc. In January 2010, the PicoQuant group was extended by PicoQuant Innovations, which was founded to support the increasing activities in the field of teaching, customer support, and event organization. <a href="https://www.picoquant.com/">Website</a>.

<ul>
  <li>Headquarters: Berlin, Germany</li>
  <li>Yearly Revenue (millions, USD): 14.7</li>
</ul>
</details>

## Connect to the PicoHarp 300 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pytango" label="Pytango">

```python
import time
import numpy as np
import PyTango as pt

# Measurement parameters, these are hardcoded since this is just a demo
binning = 0  # you can change this
offset = 0
tacq = 1000  # Measurement time in millisec, you can change this
syncDivider = 1  # you can change this
CFDZeroCross0 = 10  # you can change this (in mV)
CFDLevel0 = 100  # you can change this (in mV)
CFDZeroCross1 = 10  # you can change this (in mV)
CFDLevel1 = 50  # you can change this (in mV)

# Variables to store information read from device
counts = np.zeros(65536, dtype=np.uint32)
dev = None

# Connect to the PicoHarp device
dev_name = "pico/0"  # Replace with the actual device name
dev = pt.DeviceProxy(dev_name)

# Initialize the device
dev.Initialize(0)

# Set measurement parameters
dev.SetSyncDiv(syncDivider)
dev.SetInputCFD(0, CFDLevel0, CFDZeroCross0)
dev.SetInputCFD(1, CFDLevel1, CFDZeroCross1)
dev.SetBinning(binning)
dev.SetOffset(offset)

# Get count rates
countRate0 = dev.GetCountRate(0)
countRate1 = dev.GetCountRate(1)
print("Count Rate 0: %d/s" % countRate0)
print("Count Rate 1: %d/s" % countRate1)

# Set stop overflow
dev.SetStopOverflow(1, 65535)

# Start measurement
dev.StartMeas(tacq)

# Wait for measurement to complete
time.sleep(tacq / 1000)

# Stop measurement
dev.StopMeas()

# Get histogram data
counts = dev.GetHistogram(0)

# Process histogram data
integralCount = np.sum(counts)
print("Total Count: %d" % integralCount)

# Close the device
dev.CloseDevice()
```

</TabItem>
</Tabs>