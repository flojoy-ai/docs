---
title: Keysight N5173B EXG
description: The Keysight N5173B EXG microwave analog signal generator is the cost-effective choice when you need to balance budget and performance. It provides the essential signals that address parametric testing of broadband filters, amplifiers, receivers, and more. Perform basic LO upconversion or CW blocking with low-cost coverage to 13, 20, 31.8, or 40 GHz. Characterize broadband microwave components such as filters and amplifiers with the best combination of output power (+20 dBm at 20 GHz), low harmonics (≤ –55 dBc), and full step attenuation. Use as a high-stability system reference with standard high-performance OCXO at an aging rate of less than ± 5 parts per billion per day.
keywords: [rf signal generator, Keysight, Qcodes]
slug: /instruments-wiki/rf-signal-generator/keysight/keysight-n5173b-exg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106969/Instruments/RF%20Signal%20Generator/Keysight-N5173B-EXG/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5173B EXG

## Instrument Card

<div className="flex">

<div>

The Keysight N5173B EXG microwave analog signal generator is the cost-effective choice when you need to balance budget and performance. It provides the essential signals that address parametric testing of broadband filters, amplifiers, receivers, and more. Perform basic LO upconversion or CW blocking with low-cost coverage to 13, 20, 31.8, or 40 GHz. Characterize broadband microwave components such as filters and amplifiers with the best combination of output power (+20 dBm at 20 GHz), low harmonics (≤ –55 dBc), and full step attenuation. Use as a high-stability system reference with standard high-performance OCXO at an aging rate of less than ± 5 parts per billion per day.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692106969/Instruments/RF%20Signal%20Generator/Keysight-N5173B-EXG/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight N5173B EXG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

```python
from qcodes import Station, Instrument
from qcodes.instrument_drivers.Keysight.Keysight_N51x1 import N51x1

# Create a station to hold the instrument
station = Station()

# Connect to the Keysight N5173B EXG RF Signal Generator
n5173b = N51x1('n5173b', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Add the instrument to the station
station.add_component(n5173b)

# Print the IDN information of the instrument
print(n5173b.get_idn())

# Set the power to -10 dBm
n5173b.power(-10)

# Set the frequency to 1 GHz
n5173b.frequency(1e9)

# Enable the RF output
n5173b.rf_output('on')

# Disable the RF output
n5173b.rf_output('off')
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your instrument.

</TabItem>
</Tabs>