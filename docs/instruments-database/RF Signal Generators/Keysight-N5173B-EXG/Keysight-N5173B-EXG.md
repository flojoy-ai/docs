---
title: Connecting to Keysight N5173B EXG by Keysight in Python
sidebar_label: Keysight N5173B EXG
description: The Keysight N5173B EXG microwave analog signal generator is the cost-effective choice when you need to balance budget and performance. It provides the essential signals that address parametric testing of broadband filters, amplifiers, receivers, and more. Perform basic LO upconversion or CW blocking with low-cost coverage to 13, 20, 31.8, or 40 GHz. Characterize broadband microwave components such as filters and amplifiers with the best combination of output power (+20 dBm at 20 GHz), low harmonics (≤ –55 dBc), and full step attenuation. Use as a high-stability system reference with standard high-performance OCXO at an aging rate of less than ± 5 parts per billion per day.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-n5173b-exg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639262/Instruments/RF%20Signal%20Generators/Keysight-N5173B-EXG/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5173B EXG

## Instrument Card

<div className="flex">

<div>

The Keysight N5173B EXG microwave analog signal generator is the cost-effective choice when you need to balance budget and performance. It provides the essential signals that address parametric testing of broadband filters, amplifiers, receivers, and more. Perform basic LO upconversion or CW blocking with low-cost coverage to 13, 20, 31.8, or 40 GHz. Characterize broadband microwave components such as filters and amplifiers with the best combination of output power (+20 dBm at 20 GHz), low harmonics (≤ –55 dBc), and full step attenuation. Use as a high-stability system reference with standard high-performance OCXO at an aging rate of less than ± 5 parts per billion per day.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639262/Instruments/RF%20Signal%20Generators/Keysight-N5173B-EXG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-04097/data-sheets/5991-3132.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight N5173B EXG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

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