---
title: CC1
description: Qubitekk’s 2-channel Coincidence Counter provides researchers with a low-cost solution for nanosecond resolution coincidence counting. A third gating channel makes the counter suitable for use with pulsed sources.
keywords: [coincidence counter, Qubitekk, Instrumentkit]
slug: /instruments-wiki/coincidence-counter/qubitekk/cc1
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200785/Instruments/Coincidence%20Counter/CC1/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CC1

## Instrument Card

<div className="flex">

<div>

Qubitekk’s 2-channel Coincidence Counter provides researchers with a low-cost solution for nanosecond resolution coincidence counting. A third gating channel makes the counter suitable for use with pulsed sources.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200785/Instruments/Coincidence%20Counter/CC1/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125997/Instruments/Vendor%20Logos/Qubitekk.png" style={{ width: "100%", objectFit: "cover" }} />

Qubitekk provides reliable products for generating, preparing, distributing, detecting, correlating and storing photonic qubits. The hardware that is needed to strengthen American leadership in quantum computing, communications, and sensing solutions is being developed and manufactured in San Diego County, CA. <a href="https://qubitekk.com/">Website</a>.

<ul>
  <li>Headquarters: Vista, California, United States</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the CC1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a CC1 Coincidence Counter using Instrumentkit, you can use the following Python script:

```python
from instrumentkit import qubitekk

# Connect to the CC1 Coincidence Counter
cc1 = qubitekk.CC1.open_serial('COM8', 19200, timeout=1)

# Access the properties and methods of the CC1 Coincidence Counter
print(cc1.firmware)
print(cc1.dwell_time)

cc1.dwell_time = 0.5  # Set the dwell time to 0.5 seconds

cc1.clear_counts()  # Clear the current total counts on the counters

# Access the counts of each channel
for channel in cc1.channel:
    print(channel.count)

# Disconnect from the CC1 Coincidence Counter
cc1.close()
```

This script imports the `qubitekk` module from Instrumentkit and uses the `open_serial` method to connect to the CC1 Coincidence Counter using the specified serial port and baud rate. It then demonstrates accessing the properties and methods of the CC1 Coincidence Counter, such as getting the firmware version, getting and setting the dwell time, clearing the counts, and accessing the counts of each channel. Finally, it closes the connection to the CC1 Coincidence Counter using the `close` method.

</TabItem>
</Tabs>