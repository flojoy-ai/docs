---
title: Connecting to Keysight 8116A by HP in Python
sidebar_label: Keysight 8116A
description: 8116A 50 MHZ PULSE/FUNCTION GENERATOR
keywords: [function generators, HP, PyMeasure]
slug: /instruments-database/function-generators/hp/keysight-8116a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395418/Instruments/Function%20Generators/Keysight-8116A/file.jpg
hide_table_of_contents: true
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

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/9018-05117/user-manuals/9018-05117.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: HP</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='FUNCTION_GENERATORS' manufacturer='HP'></FeaturedInstrumentVideo>


## Connect to the Keysight 8116A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='FUNCTION_GENERATORS' manufacturer='HP'></NodeCardCollection>

</TabItem>
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