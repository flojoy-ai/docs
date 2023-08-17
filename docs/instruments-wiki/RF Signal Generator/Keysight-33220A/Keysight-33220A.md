---
title: Keysight 33220A
description: The Keysight 33220A is a 20 MHz synthesized function generator with built-in arbitrary waveform and pulse capabilities. Itscombination of bench-top and system features makes this function generator a versatile solution for your testing requirements now and in the future.
keywords: [rf signal generator, Agilent, Instrumentkit]
slug: /instruments-wiki/rf-signal-generator/agilent/keysight-33220a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201223/Instruments/RF%20Signal%20Generator/Keysight-33220A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33220A

## Instrument Card

<div className="flex">

<div>

The Keysight 33220A is a 20 MHz synthesized function generator with built-in arbitrary waveform and pulse capabilities. Itscombination of bench-top and system features makes this function generator a versatile solution for your testing requirements now and in the future.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201223/Instruments/RF%20Signal%20Generator/Keysight-33220A/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 33220A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to a Keysight 33220A RF Signal Generator:

```python
import instrumentkit as ik
import instrumentkit.keysight as keysight

# Connect to the instrument
inst = keysight.Keysight33220A.open_gpibusb('/dev/ttyUSB0', 1)

# Set the output function to sinusoid
inst.function = keysight.Keysight33220A.Function.sinusoid

# Set the frequency to 1 kHz
inst.frequency = 1 * ik.units.kHz

# Enable the output
inst.output = True
```

This script imports the necessary modules from Instrumentkit and specifically from the `instrumentkit.keysight` module for the Keysight 33220A RF Signal Generator. It then connects to the instrument using the `open_gpibusb` method, specifying the device path and GPIB address.

The script sets the output function to sinusoid using the `function` property of the instrument object. It sets the frequency to 1 kHz using the `frequency` property, and enables the output using the `output` property.

Note that you may need to modify the device path and GPIB address to match your specific setup.

</TabItem>
</Tabs>