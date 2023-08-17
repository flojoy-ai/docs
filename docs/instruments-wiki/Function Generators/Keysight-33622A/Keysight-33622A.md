---
title: Connecting to Keysight 33622A by Keysight in Python
sidebar_label: Keysight 33622A
description: The Keysight 33622A function/arbitrary waveform generators offer the standard signals and features you expect, such as modulation, sweep, and burst. However, it also provides features that give you the capabilities and flexibility you need to get your job done quickly, no matter how complex. An intuitive front-panel user interface, for example, can be quickly and easily relearned when your attention has been focused elsewhere.
keywords: [function generators, Keysight, Qcodes]
slug: /instruments-wiki/function-generators/keysight/keysight-33622a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201214/Instruments/Function%20Generators/Keysight-33622A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33622A

## Instrument Card

<div className="flex">

<div>

The Keysight 33622A function/arbitrary waveform generators offer the standard signals and features you expect, such as modulation, sweep, and burst. However, it also provides features that give you the capabilities and flexibility you need to get your job done quickly, no matter how complex. An intuitive front-panel user interface, for example, can be quickly and easily relearned when your attention has been focused elsewhere.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201214/Instruments/Function%20Generators/Keysight-33622A/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight 33622A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 33622A Function Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_33XXX import WaveformGenerator_33XXX

# Create an instance of the instrument
instrument = WaveformGenerator_33XXX('my_instrument', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
instrument.connect()

# Now you can use the instrument to control the function generator
# For example, to set the frequency of channel 1 to 1 MHz:
instrument.ch1.frequency(1e6)

# To turn on the output of channel 1:
instrument.ch1.output('ON')

# To disconnect from the instrument:
instrument.disconnect()
```

Note that you need to replace `'TCPIP0::192.168.1.1::INSTR'` with the actual VISA resource name of your instrument.

</TabItem>
</Tabs>