---
title: Keysight 81110A
description: Keysight 81110APulse Pattern Generator / 165/330 MHz
keywords: [function generators, Agilent, Instrumental]
slug: /instruments-wiki/function-generators/agilent/keysight-81110a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692250453/Instruments/Function%20Generators/Keysight-81110A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 81110A

## Instrument Card

<div className="flex">

<div>

Keysight 81110A
Pulse Pattern Generator / 165/330 MHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692250453/Instruments/Function%20Generators/Keysight-81110A/file.png" style={{ width: "325px" }} />

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

## Connect to the Keysight 81110A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

To connect to a Keysight 81110A Function Generator using Instrumental, you can use the following Python script:

```python
from instrumental import instrument, list_resources

# Find available resources
resources = list_resources()

# Connect to the Keysight 81110A Function Generator
func_gen = instrument(resources[0])

# Now you can use the function generator
# For example, to set the frequency:
func_gen.frequency = 1000  # Set frequency to 1 kHz

# Close the connection
func_gen.close()
```

This script first uses the `list_resources()` function from Instrumental to find all available resources. It then connects to the first resource found using the `instrument()` function. You can modify the index `0` in `resources[0]` to connect to a different resource if multiple function generators are available.

Once connected, you can use the `func_gen` object to control the function generator. In the example, it sets the frequency to 1 kHz by assigning the desired frequency to the `frequency` attribute of the `func_gen` object.

Finally, the `close()` method is called to close the connection to the function generator.

</TabItem>
</Tabs>