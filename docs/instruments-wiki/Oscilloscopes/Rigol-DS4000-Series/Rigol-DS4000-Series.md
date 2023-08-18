---
title: Connecting to Rigol DS4000-Series by Rigol in Python
sidebar_label: Rigol DS4000-Series
description: The Rigol DS4000 series consists of 8 high level Oscilloscopes for professional operation, which come off very well compared to higher prices models of other brands.
keywords: [oscilloscopes, Rigol, Qcodes]
slug: /instruments-wiki/oscilloscopes/rigol/rigol-ds4000-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201260/Instruments/Oscilloscopes/Rigol-DS4000-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rigol DS4000-Series

## Instrument Card

<div className="flex">

<div>

The Rigol DS4000 series consists of 8 high level Oscilloscopes for professional operation, which come off very well compared to higher prices models of other brands.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201260/Instruments/Oscilloscopes/Rigol-DS4000-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125991/Instruments/Vendor%20Logos/Rigol.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

RIGOL Technologies, Inc. specializes in development and production of test and measuring equipment and is one of the fastest growing Chinese companies in this sphere.
RIGOL’s line of products includes [digital storage oscilloscopes](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=227), [function/arbitrary waveform generators](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=230), [digital multimeters](https://www.tmatlantic.com/e-store/index.php?SECTION_ID=233), PC-based devices compatible with LXI standard etc. <a href="https://www.rigol.com/">Website</a>.

<ul>
  <li>Headquarters: Beijing, China</li>
  <li>Yearly Revenue (millions, USD): 23.0</li>
</ul>
</details>

## Connect to the Rigol DS4000-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Rigol DS4000-Series Oscilloscope using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.rigol.DS4000 import RigolDS4000

# Connect to the oscilloscope
oscilloscope = RigolDS4000("oscilloscope", "USB0::0x1AB1::0x04CE::DS4A203100839::INSTR")

# Print the IDN information of the oscilloscope
print(oscilloscope.get_idn())

# Set the time base to 1 ms/div
oscilloscope.time_base(0.001)

# Enable autoscale
oscilloscope.enable_auto_scale(True)

# Start acquisition
oscilloscope.run()

# Wait for the acquisition to complete
qc.WaitInterval(1).wait()

# Stop acquisition
oscilloscope.stop()

# Get the waveform data from channel 1
waveform_data = oscilloscope.channels.ch1.curvedata()

# Print the waveform data
print(waveform_data)

# Disconnect from the oscilloscope
oscilloscope.close()
```

This script connects to the oscilloscope using the VISA address "USB0::0x1AB1::0x04CE::DS4A203100839::INSTR". You may need to modify this address to match the actual address of your oscilloscope.

The script then performs various operations on the oscilloscope, such as setting the time base, enabling autoscale, starting and stopping the acquisition, and retrieving the waveform data from channel 1.

Finally, the script closes the connection to the oscilloscope using the `close()` method.

Note: This script assumes that you have already installed the necessary dependencies, including Qcodes and the Rigol DS4000 driver.

</TabItem>
</Tabs>