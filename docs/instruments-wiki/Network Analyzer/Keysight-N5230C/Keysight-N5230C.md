---
title: Keysight N5230C
description: The Keysight N5230C PNA-L is a microwave network analyzer made to test amplifiers, passive parts, and frequency converters using S-parameters and basic nonlinearity. The Keysight N5230C has a 110 dB system / 122 dB receiver dynamic range. The N5230C has a 300 kHz to 20 GHz frequency range and has 2 or 4 ports with built-in sources.
keywords: [network analyzer, Keysight, Qcodes]
slug: /instruments-wiki/network-analyzer/keysight/keysight-n5230c
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201305/Instruments/Network%20Analyzer/Keysight-N5230C/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5230C

## Instrument Card

<div className="flex">

<div>

The Keysight N5230C PNA-L is a microwave network analyzer made to test amplifiers, passive parts, and frequency converters using S-parameters and basic nonlinearity. The Keysight N5230C has a 110 dB system / 122 dB receiver dynamic range. The N5230C has a 300 kHz to 20 GHz frequency range and has 2 or 4 ports with built-in sources.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201305/Instruments/Network%20Analyzer/Keysight-N5230C/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight N5230C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_N5230C import Keysight_N5230C

# Create an instance of the Keysight_N5230C instrument
n5230c = Keysight_N5230C('n5230c', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
n5230c.connect()

# Perform operations with the instrument

# Disconnect from the instrument
n5230c.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your N5230C Network Analyzer.

</TabItem>
</Tabs>