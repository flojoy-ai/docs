---
title: Connecting to Keysight (Agilent) 33210A by Keysight (Agilent) in Python
sidebar_label: Keysight (Agilent) 33210A
description: The Keysight (Agilent) (formerly Agilent) 33210A is the latest function/arbitrary waveform generator from Keysight. It uses direct digital synthesis techniques to create a stable, accurate output signal having clean, low distortion sine waves. For user defined waveforms, option 002 provides 14-bit 8k point arbitrary waveform generation
keywords: [function generators, Keysight, QCodes]
slug: /instruments-database/function-generators/keysight/keysight-33210a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395566/Instruments/Function%20Generators/Keysight-33210A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) 33210A

## Instrument Card

<div className="flex">

<div>

The Keysight (Agilent) (formerly Agilent) 33210A is the latest function/arbitrary waveform generator from Keysight. It uses direct digital synthesis techniques to create a stable, accurate output signal having clean, low distortion sine waves. For user defined waveforms, option 002 provides 14-bit 8k point arbitrary waveform generation

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395566/Instruments/Function%20Generators/Keysight-33210A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.mouser.com/pdfdocs/ug33210-90010.pdf">here</a></p>

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

<FeaturedInstrumentVideo category='FUNCTION_GENERATORS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) 33210A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='FUNCTION_GENERATORS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keysight (Agilent) 33210A Function Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_33XXX import WaveformGenerator_33XXX

# Create an instance of the instrument
instrument = WaveformGenerator_33XXX('my_instrument', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
instrument.connect()

# Now you can use the instrument to control the function generator
# For example, you can set the frequency of channel 1 to 1 kHz
instrument.ch1.frequency(1e3)

# You can also read the current frequency setting
frequency = instrument.ch1.frequency()
print(f"The current frequency is {frequency} Hz")

# Disconnect from the instrument
instrument.disconnect()
```

This script creates an instance of the `WaveformGenerator_33XXX` class from the `qcodes.instrument_drivers.Keysight.Keysight_33XXX` module. It then connects to the instrument using the specified VISA resource address (`TCPIP0::192.168.1.1::INSTR` in this example).

Once connected, you can use the instrument instance to control the function generator. In the example, it sets the frequency of channel 1 to 1 kHz using the `frequency` parameter of the `ch1` submodule. It then reads the current frequency setting and prints it.

Finally, the script disconnects from the instrument using the `disconnect` method of the instrument instance.

</TabItem>
</Tabs>