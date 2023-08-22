---
title: Connecting to Keysight 33512B by Keysight in Python
sidebar_label: Keysight 33512B
description: The 33512B provides Keysight’s exclusive Trueform technology which offers unmatched capabilities for generating a full range of signals for your most demanding measurements. The 33512B can be easily upgraded to 30 MHz as your needs change.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-wiki/rf-signal-generators/keysight/keysight-33512b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395572/Instruments/RF%20Signal%20Generators/Keysight-33512B/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33512B

## Instrument Card

<div className="flex">

<div>

The 33512B provides Keysight’s exclusive Trueform technology which offers unmatched capabilities for generating a full range of signals for your most demanding measurements. The 33512B can be easily upgraded to 30 MHz as your needs change.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395572/Instruments/RF%20Signal%20Generators/Keysight-33512B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 33512B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 33512B RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_33XXX import WaveformGenerator_33XXX

# Create an instance of the instrument
signal_generator = WaveformGenerator_33XXX('signal_generator', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
signal_generator.connect_message()

# Now you can use the instrument to control the signal generator
# For example, to set the frequency of channel 1 to 1 MHz:
signal_generator.ch1.frequency(1e6)

# To turn on the output of channel 1:
signal_generator.ch1.output('ON')

# To turn off the output of channel 1:
signal_generator.ch1.output('OFF')

# To disconnect from the instrument
signal_generator.close()
```

Note: Replace `'TCPIP0::192.168.1.1::INSTR'` with the actual VISA resource name or address of your Keysight 33512B RF Signal Generator.

</TabItem>
</Tabs>