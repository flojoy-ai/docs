---
title: Connecting to Keysight E8267D PSG by Keysight in Python
sidebar_label: Keysight E8267D PSG
description: The E8267D PSG Vector Signal Generator is the highest performance, fully-integrated microwave vector signal generator from 100 kHz to 44 GHz, allowing you to create realistic wideband radar, electronic warfare (EW), and satellite communications (SATCOM) waveforms.
keywords: [rf signal generators, Keysight, QCodes Community]
slug: /instruments-database/rf-signal-generators/keysight/keysight-e8267d-psg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395739/Instruments/RF%20Signal%20Generators/Keysight-E8267D-PSG/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8267D PSG

## Instrument Card

<div className="flex">

<div>

The E8267D PSG Vector Signal Generator is the highest performance, fully-integrated microwave vector signal generator from 100 kHz to 44 GHz, allowing you to create realistic wideband radar, electronic warfare (EW), and satellite communications (SATCOM) waveforms.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395739/Instruments/RF%20Signal%20Generators/Keysight-E8267D-PSG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://keysight.com/us/en/assets/7018-01210/data-sheets/5989-0697.pdf">here</a></p>

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

## Connect to the Keysight E8267D PSG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Keysight E8267D PSG RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument_drivers.Keysight.Keysight_E8267D import Keysight_E8267D

# Create an instance of the Keysight E8267D PSG RF Signal Generator
signal_generator = Keysight_E8267D("signal_generator", "TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the signal generator
signal_generator.connect()

# Now you can use the instrument to control the signal generator
# For example, to set the frequency:
signal_generator.frequency(1e9)

# To get the current frequency:
frequency = signal_generator.frequency()

# To set the power:
signal_generator.power(-10)

# To get the current power:
power = signal_generator.power()

# Disconnect from the signal generator
signal_generator.disconnect()
```

Please note that you need to replace `"TCPIP0::192.168.1.1::inst0::INSTR"` with the actual VISA address of your Keysight E8267D PSG RF Signal Generator.

</TabItem>
</Tabs>