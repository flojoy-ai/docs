---
title: Connecting to Keysight (Agilent) 33250A by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) 33250A
description: The 33250A 80 MHz Function/Arbitrary Waveform Generator uses direct digital-synthesis techniques to create a stable, accurate output on all waveforms, down to 1 µHz frequency resolution. The benefits are apparent in every signal you produce, from the sine wave frequency accuracy to the fast rise/fall times of square waves, to the ramp linearity.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-33250a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395568/Instruments/RF%20Signal%20Generators/Keysight-33250A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) 33250A

## Instrument Card

<div className="flex">

<div>

The 33250A 80 MHz Function/Arbitrary Waveform Generator uses direct digital-synthesis techniques to create a stable, accurate output on all waveforms, down to 1 µHz frequency resolution. The benefits are apparent in every signal you produce, from the sine wave frequency accuracy to the fast rise/fall times of square waves, to the ramp linearity.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395568/Instruments/RF%20Signal%20Generators/Keysight-33250A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-06693/data-sheets/5968-8807.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight (Agilent) Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) 33250A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight (Agilent) 33250A RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_33XXX import WaveformGenerator_33XXX

# Create an instance of the instrument
signal_generator = WaveformGenerator_33XXX('signal_generator', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
signal_generator.connect_message()
```

This script imports the `WaveformGenerator_33XXX` class from the `qcodes.instrument_drivers.Keysight.Keysight_33XXX` module. It then creates an instance of the instrument with the name "signal_generator" and the appropriate VISA address for your specific instrument. Finally, it calls the `connect_message()` method to establish a connection to the instrument and print a connection message.

</TabItem>
</Tabs>