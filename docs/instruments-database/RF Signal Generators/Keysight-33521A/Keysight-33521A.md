---
title: Connecting to Keysight (Agilent) 33521A by Agilent in Python
sidebar_label: Keysight (Agilent) 33521A
description: Keysight (Agilent) 33500 Series function/arbitrary waveform generators offer the highest signal fidelity and implement a new breakthrough technology that provides you with the ability to generate more accurate arbitrary waveforms. With 10x better jitter than anything in their class, they offer unparalleled control of signal frequency for your most challenging measurements.
keywords: [rf signal generators, Agilent, PyMeasure]
slug: /instruments-database/rf-signal-generators/agilent/keysight-33521a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719432/Instruments/RF%20Signal%20Generators/Keysight-33521A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) 33521A

## Instrument Card

<div className="flex">

<div>

Keysight (Agilent) 33500 Series function/arbitrary waveform generators offer the highest signal fidelity and implement a new breakthrough technology that provides you with the ability to generate more accurate arbitrary waveforms. With 10x better jitter than anything in their class, they offer unparalleled control of signal frequency for your most challenging measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719432/Instruments/RF%20Signal%20Generators/Keysight-33521A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-02567/data-sheets/5990-5914.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: AGILENT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight (Agilent) Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='AGILENT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) 33521A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='AGILENT'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments import Agilent33500

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::1")

# Connect to the instrument
instrument = Agilent33500(adapter)

# Set the output waveform shape to sine
instrument.shape = "SIN"

# Set the frequency to 1 kHz
instrument.frequency = 1e3

# Set the amplitude to 1 Vpp
instrument.amplitude = 1

# Enable the output
instrument.output = True

# Disconnect from the instrument
instrument.disconnect()
```

This script connects to the instrument using a VISA adapter and creates an instance of the `Agilent33500` class. It then sets the output waveform shape to sine, frequency to 1 kHz, amplitude to 1 Vpp, and enables the output. Finally, it disconnects from the instrument.

Note: Make sure to replace `"GPIB::1"` with the appropriate address of your Keysight (Agilent) 33521A RF Signal Generator.

</TabItem>
</Tabs>