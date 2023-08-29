---
title: Connecting to Keysight N5171B EXG by Keysight in Python
sidebar_label: Keysight N5171B EXG
description: N5171B EXG X-Series RF analog mid-performance signal generators offer 9 kHz to 6 GHz frequency coverage, optimized for manufacturing with faster throughput and greater uptime at the right price.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-n5171b-exg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395618/Instruments/RF%20Signal%20Generators/Keysight-N5171B-EXG/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5171B EXG

## Instrument Card

<div className="flex">

<div>

N5171B EXG X-Series RF analog mid-performance signal generators offer 9 kHz to 6 GHz frequency coverage, optimized for manufacturing with faster throughput and greater uptime at the right price.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395618/Instruments/RF%20Signal%20Generators/Keysight-N5171B-EXG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-03381/data-sheets/5991-0039.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight N5171B EXG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

```python
from qcodes import Station, Instrument
from qcodes.instrument_drivers.Keysight.N51x1 import N51x1

# Create a station to hold the instrument
station = Station()

# Connect to the Keysight N5171B EXG RF Signal Generator
n5171b = N51x1('n5171b', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Add the instrument to the station
station.add_component(n5171b)

# Print the IDN information of the instrument
print(n5171b.get_idn())

# Set the frequency to 1 GHz
n5171b.frequency(1e9)

# Set the power to -10 dBm
n5171b.power(-10)

# Enable the RF output
n5171b.rf_output(1)

# Disable the pulse modulation
n5171b.pulse_modulation(0)

# Disconnect from the instrument
n5171b.close()
```

This script connects to a Keysight N5171B EXG RF Signal Generator using the Qcodes driver `N51x1`. It creates a station to hold the instrument, connects to the instrument using the instrument's IP address, adds the instrument to the station, and then performs various operations on the instrument such as setting the frequency, power, enabling RF output, and disabling pulse modulation. Finally, it closes the connection to the instrument.

</TabItem>
</Tabs>