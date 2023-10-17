---
title: Connecting to Keysight N5183B MXG by Keysight in Python
sidebar_label: Keysight N5183B MXG
description: N5183B MXG X-Series microwave analog signal generator offers 9 kHz to 40 GHz frequency coverage and near PSG levels of phase noise performance.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-n5183b-mxg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395596/Instruments/RF%20Signal%20Generators/Keysight-N5183B-MXG/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5183B MXG

## Instrument Card

<div className="flex">

<div>

N5183B MXG X-Series microwave analog signal generator offers 9 kHz to 40 GHz frequency coverage and near PSG levels of phase noise performance.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395596/Instruments/RF%20Signal%20Generators/Keysight-N5183B-MXG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-04096/data-sheets/5991-3131.pdf">here</a></p>

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

## Connect to the Keysight N5183B MXG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight N5183B MXG RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.N51x1 import N51x1
from qcodes.instrument_drivers.Keysight.KeysightN5183B import KeysightN5183B

# Create an instance of the KeysightN5183B instrument
instrument = KeysightN5183B('my_instrument', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
instrument.connect()

# Now you can use the instrument to perform various operations
# For example, you can set the frequency and power level
instrument.frequency(1e9)  # Set the frequency to 1 GHz
instrument.power(-10)  # Set the power level to -10 dBm

# Disconnect from the instrument
instrument.disconnect()
```

Note that you need to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your instrument.

</TabItem>
</Tabs>