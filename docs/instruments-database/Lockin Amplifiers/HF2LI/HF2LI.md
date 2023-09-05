---
title: Connecting to HF2LI by Zurich Instruments in Python
sidebar_label: HF2LI
description: The Zurich Instruments HF2LI is a digital lock-in amplifier covering the frequency range between DC and 50 MHz. It is the instrument of choice for the characterization of MEMS devices such as gyroscopes and for measurements in the area of microfluidics.
keywords: [lockin amplifiers, Zurich Instruments, QCodes Community]
slug: /instruments-database/lockin-amplifiers/zurich-instruments/hf2li
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395721/Instruments/Lockin%20Amplifiers/HF2LI/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HF2LI

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments HF2LI is a digital lock-in amplifier covering the frequency range between DC and 50 MHz. It is the instrument of choice for the characterization of MEMS devices such as gyroscopes and for measurements in the area of microfluidics.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395721/Instruments/Lockin%20Amplifiers/HF2LI/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://lasphotonics.com/wp-content/uploads/2020/12/zi_hf2li_leaflet_web.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

## Connect to the HF2LI in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a HF2LI Lockin Amplifier using Qcodes Community, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import HF2LI

# Create an instance of the HF2LI instrument
hf2li = HF2LI('hf2li', 'dev204', demod=1, sigout=0, auxouts={'X': 0, 'Y': 3})

# Connect to the instrument
hf2li.connect()

# Now you can use the instrument to perform various operations
# For example, you can get the phase value
phase = hf2li.phase()
print(f"Phase: {phase} degrees")

# You can also set the phase value
hf2li.phase(45)

# You can get the gain for the X output
gain_x = hf2li.gain_X()
print(f"Gain for X output: {gain_x} V/Vrms")

# You can set the gain for the X output
hf2li.gain_X(0.5)

# Disconnect from the instrument
hf2li.disconnect()
```

Note: Make sure you have installed the necessary dependencies, including `qcodes` and `zhinst`.

<<<<<<< HEAD:docs/instruments-database/Lockin Amplifiers/HF2LI/HF2LI.md
</TabItem>
</Tabs>
=======
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/Lockin%20Amplifiers/HF2LI/HF2LI.md)
>>>>>>> 216cbc78 (feat: Added unique GitHub edit links to each .md file):docs/Instruments/Lockin Amplifiers/HF2LI.md
