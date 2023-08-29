---
title: Connecting to CC1 by Qubitekk in Python
sidebar_label: CC1
description: Qubitekk’s 2-channel Coincidence Counter provides researchers with a low-cost solution for nanosecond resolution coincidence counting. A third gating channel makes the counter suitable for use with pulsed sources.
keywords: [coincidence counters, Qubitekk, InstrumentKit]
slug: /instruments-database/coincidence-counters/qubitekk/cc1
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692718982/Instruments/Coincidence%20Counters/CC1/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CC1

## Instrument Card

<div className="flex">

<div>

Qubitekk’s 2-channel Coincidence Counter provides researchers with a low-cost solution for nanosecond resolution coincidence counting. A third gating channel makes the counter suitable for use with pulsed sources.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692718982/Instruments/Coincidence%20Counters/CC1/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125997/Instruments/Vendor%20Logos/Qubitekk.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Qubitekk provides reliable products for generating, preparing, distributing, detecting, correlating and storing photonic qubits. The hardware that is needed to strengthen American leadership in quantum computing, communications, and sensing solutions is being developed and manufactured in San Diego County, CA.

<ul>
  <li>Headquarters: Vista, California, United States</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://qubitekk.com/">here</a></li>
</ul>
</details>

## Connect to the CC1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
import instrumentkit as ik

# Connect to the CC1 Coincidence Counter
cc1 = ik.qubitekk.CC1.open_serial('COM8', 19200, timeout=1)

# Get the firmware version
firmware_version = cc1.firmware
print(f"Firmware version: {firmware_version}")

# Set the dwell time to 1 second
cc1.dwell_time = 1

# Get the counts of the first channel
channel_1_count = cc1.channel[0].count
print(f"Channel 1 count: {channel_1_count}")

# Enable the gate
cc1.gate = True

# Enable the subtract feature
cc1.subtract = True

# Set the trigger mode to continuous
cc1.trigger_mode = "continuous"

# Set the coincidence window to 5 ns
cc1.window = 5

# Set the delay on Channel 1 to 4 ns
cc1.delay = 4

# Clear the current total counts on the counters
cc1.clear_counts()

# Disconnect from the CC1 Coincidence Counter
cc1.close()
```

This script demonstrates how to connect to the CC1 Coincidence Counter, retrieve the firmware version, set various properties such as dwell time, gate, subtract, trigger mode, coincidence window, and delay, as well as clear the counts and disconnect from the instrument.

</TabItem>
</Tabs>
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/Coincidence%20Counters/CC1/CC1.md)
