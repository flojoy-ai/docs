---
title: Connecting to Keysight 8657B by HP in Python
sidebar_label: Keysight 8657B
description: The Agilent Technologies 8657A and 8657B signal generators are designed to test AM, FM, and pulsed receivers as well as components.
keywords: [rf signal generator, HP, Pymeasure]
slug: /instruments-wiki/rf-signal-generator/hp/keysight-8657b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201341/Instruments/RF%20Signal%20Generator/Keysight-8657B/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 8657B

## Instrument Card

<div className="flex">

<div>

The Agilent Technologies 8657A and 8657B signal generators are designed to test AM, FM, and pulsed receivers as well as components.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201341/Instruments/RF%20Signal%20Generator/Keysight-8657B/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight 8657B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Keysight 8657B RF Signal Generator:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.hp import HP8657B

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::7")

# Connect to the instrument
instrument = HP8657B(adapter)

# Set the output frequency to 1 MHz
instrument.frequency = 1E6

# Set the output level to -10 dBm
instrument.level = -10

# Enable the output
instrument.output_enabled = True

# Disconnect from the instrument
instrument.shutdown()
```

Explanation of the code:
1. Import the necessary modules from Pymeasure.
2. Create a `VISAAdapter` object with the appropriate address for the instrument.
3. Create an `HP8657B` object with the adapter.
4. Use the `frequency` property to set the output frequency of the instrument.
5. Use the `level` property to set the output level of the instrument.
6. Use the `output_enabled` property to enable the output of the instrument.
7. Use the `shutdown` method to disconnect from the instrument.

</TabItem>
</Tabs>