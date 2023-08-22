---
title: Connecting to Keysight 8116A by HP in Python
sidebar_label: Keysight 8116A
description: 8116A 50 MHZ PULSE/FUNCTION GENERATOR
keywords: [function generators, HP, PyMeasure]
slug: /instruments-wiki/function-generators/hp/keysight-8116a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395418/Instruments/Function%20Generators/Keysight-8116A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 8116A

## Instrument Card

<div className="flex">

<div>

8116A 50 MHZ PULSE/FUNCTION GENERATOR

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395418/Instruments/Function%20Generators/Keysight-8116A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 8116A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import GPIBAdapter
from pymeasure.instruments.hp import HP8116A

# Connect to the instrument
adapter = GPIBAdapter(address=1)
instrument = HP8116A(adapter)

# Set the frequency to 1 kHz
instrument.frequency = 1e3

# Set the amplitude to 1 V
instrument.amplitude = 1

# Enable the output
instrument.output_enabled = True

# Wait for 5 seconds
import time
time.sleep(5)

# Disable the output
instrument.output_enabled = False

# Disconnect from the instrument
instrument.shutdown()
```

This script connects to the instrument using a GPIB adapter with address 1. It then sets the frequency to 1 kHz and the amplitude to 1 V. It enables the output, waits for 5 seconds, and then disables the output. Finally, it disconnects from the instrument.

</TabItem>
</Tabs>