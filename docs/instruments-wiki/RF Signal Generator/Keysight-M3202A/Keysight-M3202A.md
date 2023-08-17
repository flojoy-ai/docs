---
title: Keysight M3202A
description: Keysight's M3202A PXIe arbitrary waveform generator offers 4 channels, on-board FPGA with optional software tools that enable real-time sequencing, inter-module synchronization, and graphical FPGA design environment.
keywords: [rf signal generator, Keysight, Qcodes Community]
slug: /instruments-wiki/rf-signal-generator/keysight/keysight-m3202a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106896/Instruments/RF%20Signal%20Generator/Keysight-M3202A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight M3202A

## Instrument Card

<div className="flex">

<div>

Keysight's M3202A PXIe arbitrary waveform generator offers 4 channels, on-board FPGA with optional software tools that enable real-time sequencing, inter-module synchronization, and graphical FPGA design environment.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106896/Instruments/RF%20Signal%20Generator/Keysight-M3202A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight M3202A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Keysight M3202A RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.KeysightM3202A import M3202A

# Create an instance of the M3202A driver
awg = M3202A('awg', chassis=0, slot=2)

# Connect to the instrument
awg.connect()

# Now you can use the instrument for various operations
# For example, you can upload a waveform
waveform = [0, 0.1, 0.2, 0.3, 0.4, 0.5]
ref = awg.upload_waveform(waveform)

# Queue the waveform for output on channel 1
awg.awg_queue_waveform(1, ref, awg.SD_TriggerModes.EXTTRIG, 0, 1, 0)

# Disconnect from the instrument
awg.disconnect()
```

Note: Make sure you have installed the necessary dependencies and have the correct drivers installed for the Keysight M3202A RF Signal Generator.

</TabItem>
</Tabs>