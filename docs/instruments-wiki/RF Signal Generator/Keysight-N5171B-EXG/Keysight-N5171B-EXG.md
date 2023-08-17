---
title: Keysight N5171B EXG
description: N5171B EXG X-Series RF analog mid-performance signal generators offer 9 kHz to 6 GHz frequency coverage, optimized for manufacturing with faster throughput and greater uptime at the right price.
keywords: [rf signal generator, Keysight, Qcodes]
slug: /instruments-wiki/rf-signal-generator/keysight/keysight-n5171b-exg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200888/Instruments/RF%20Signal%20Generator/Keysight-N5171B-EXG/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5171B EXG

## Instrument Card

<div className="flex">

<div>

N5171B EXG X-Series RF analog mid-performance signal generators offer 9 kHz to 6 GHz frequency coverage, optimized for manufacturing with faster throughput and greater uptime at the right price.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200888/Instruments/RF%20Signal%20Generator/Keysight-N5171B-EXG/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight N5171B EXG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

```python
from qcodes import Instrument

# Create an instance of the N51x1 instrument
n5171b = N51x1('n5171b', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
n5171b.connect()

# Get the IDN information of the instrument
idn = n5171b.get_idn()
print(idn)

# Set the power to -10 dBm
n5171b.power.set(-10)

# Set the frequency to 1 GHz
n5171b.frequency.set(1e9)

# Enable the RF output
n5171b.rf_output.set(1)

# Disconnect from the instrument
n5171b.disconnect()
```

This script connects to a Keysight N5171B EXG RF Signal Generator using the Qcodes library. It retrieves the IDN information of the instrument, sets the power to -10 dBm, sets the frequency to 1 GHz, and enables the RF output. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>