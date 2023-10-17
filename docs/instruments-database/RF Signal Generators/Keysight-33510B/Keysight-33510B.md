---
title: Connecting to Keysight 33510B by Keysight in Python
sidebar_label: Keysight 33510B
description: The 33510B waveform generator provides Keysight's exclusive Trueform technology which offers unmatched capabilities for generating a full range of signals for your most demanding measurements.
keywords: [rf signal generators, Keysight, QCodes]
slug: /instruments-database/rf-signal-generators/keysight/keysight-33510b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395569/Instruments/RF%20Signal%20Generators/Keysight-33510B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33510B

## Instrument Card

<div className="flex">

<div>

The 33510B waveform generator provides Keysight's exclusive Trueform technology which offers unmatched capabilities for generating a full range of signals for your most demanding measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395569/Instruments/RF%20Signal%20Generators/Keysight-33510B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-05928/data-sheets/5992-2572.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: MZ2000</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

## Connect to the Keysight 33510B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='WIDGET2000' manufacturer='MZ2000'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight 33510B RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_33XXX import WaveformGenerator_33XXX

# Create an instance of the instrument
signal_generator = WaveformGenerator_33XXX('signal_generator', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
signal_generator.connect()

# Now you can use the instrument to control the RF Signal Generator
# For example, you can set the frequency and amplitude of the output channel
signal_generator.ch1.frequency(1e6)  # Set the frequency to 1 MHz
signal_generator.ch1.amplitude(0.5)  # Set the amplitude to 0.5 V

# You can also enable the output channel
signal_generator.ch1.output('ON')

# Disconnect from the instrument
signal_generator.disconnect()
```

This script creates an instance of the `WaveformGenerator_33XXX` class from the `qcodes.instrument_drivers.Keysight.Keysight_33XXX` module. It then connects to the instrument using the specified VISA resource address (`TCPIP0::192.168.1.1::INSTR` in this example).

Once connected, you can use the instrument instance to control the signal generator. In the example, it sets the frequency of channel 1 to 1 MHz using the `frequency` parameter of the `ch1` submodule. It then reads the current frequency setting and prints it.

Finally, the script disconnects from the instrument using the `disconnect` method of the instrument instance.

</TabItem>
</Tabs>