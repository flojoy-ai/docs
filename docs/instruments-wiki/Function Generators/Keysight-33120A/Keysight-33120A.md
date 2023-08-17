---
title: Connecting to Keysight 33120A by HP in Python
sidebar_label: Keysight 33120A
description: 33120A Function / Arbitrary Waveform Generator, 15 MHz
keywords: [function generators, HP, Pymeasure]
slug: /instruments-wiki/function-generators/hp/keysight-33120a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200855/Instruments/Function%20Generators/Keysight-33120A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33120A

## Instrument Card

<div className="flex">

<div>

33120A Function / Arbitrary Waveform Generator, 15 MHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200855/Instruments/Function%20Generators/Keysight-33120A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 33120A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import HP33120A

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::10::INSTR")

# Connect to the Keysight 33120A Function Generator
generator = HP33120A(adapter)

# Set the waveform shape to sinusoid
generator.shape = 'sinusoid'

# Set the frequency to 1 kHz
generator.frequency = 1000

# Set the amplitude to 1 Vpp
generator.amplitude = 1

# Enable the output
generator.output = True

# Generate a system beep
generator.beep()

# Disconnect from the instrument
generator.disconnect()
```

This script first creates a VISA adapter using the `VISAAdapter` class from Pymeasure. The adapter is initialized with the VISA address of the instrument, which in this case is "GPIB0::10::INSTR".

Then, an instance of the `HP33120A` class is created, passing the adapter as an argument. This represents the Keysight 33120A Function Generator.

The script then sets the waveform shape to sinusoid, frequency to 1 kHz, and amplitude to 1 Vpp using the properties provided by the `HP33120A` class.

Next, the output of the function generator is enabled by setting the `output` property to `True`.

A system beep is generated using the `beep()` method of the function generator.

Finally, the script disconnects from the instrument using the `disconnect()` method.

Note: Make sure to install the necessary dependencies (`pymeasure`, `pyvisa`, etc.) before running the script.

</TabItem>
</Tabs>