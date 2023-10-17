---
title: Connecting to HDAWG by Zurich Instruments in Python
sidebar_label: HDAWG
description: The Zurich Instruments HDAWG multi-channel Arbitrary Waveform Generator has one of the highest channel densities available in its class and is designed for advanced signal generation up to 750 MHz bandwidth. The HDAWG comes with either 4 or 8 DC-coupled, single-ended analog output channels with 16-bit vertical resolution.
keywords: [rf signal generators, Zurich Instruments, QCodes, QCodes Community]
slug: /instruments-database/rf-signal-generators/zurich-instruments/hdawg
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395541/Instruments/RF%20Signal%20Generators/HDAWG/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HDAWG

## Instrument Card

<div className="flex">

<div>

The Zurich Instruments HDAWG multi-channel Arbitrary Waveform Generator has one of the highest channel densities available in its class and is designed for advanced signal generation up to 750 MHz bandwidth. The HDAWG comes with either 4 or 8 DC-coupled, single-ended analog output channels with 16-bit vertical resolution.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395541/Instruments/RF%20Signal%20Generators/HDAWG/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://docs.zhinst.com/pdf/ziHDAWG_UserManual.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ZURICH</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806207/Instruments/Vendor%20Logos/Zurich_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Zurich Instruments Ltd. is a privately owned company developing and selling advanced test and measurement instruments equipped with software for dynamic signal analysis.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 38.0</li>
  <li>Vendor Website: <a href="https://www.zhinst.com/americas/en">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='ZURICH'></FeaturedInstrumentVideo>


## Connect to the HDAWG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='ZURICH'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.zhinst import HDAWG

# Connect to the HDAWG RF Signal Generator
hdawg = HDAWG("hdawg", "dev1234")

# Enable QCCS mode
hdawg.enable_qccs_mode()

# Print the available AWG channels
print(hdawg.awgs.channels)

# Load a sequencer program to AWG channel 0
sequencer_program = """
    const N = 1000;
    wave w = ones(N);
    playWave(w);
"""
hdawg.awgs[0].load_sequencer_program(sequencer_program)

# Enable the sequencer on AWG channel 0
hdawg.awgs[0].enable_sequencer(single=True)

# Wait for the AWG to finish
hdawg.awgs[0].wait_done()

# Disconnect from the HDAWG RF Signal Generator
hdawg.close()
```
This script connects to the HDAWG RF Signal Generator with the device ID "dev1234" and enables QCCS mode. It then loads a sequencer program to AWG channel 0, enables the sequencer, waits for the AWG to finish, and finally disconnects from the device.

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a HDAWG RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station, Instrument
from qcodes.instrument_drivers.zhinst import ZIHDAWG8

# Create a station to hold the instrument
station = Station()

# Connect to the HDAWG RF Signal Generator
hdawg = ZIHDAWG8('hdawg', 'dev1234')

# Add the instrument to the station
station.add_component(hdawg)

# Now you can use the instrument to perform operations
hdawg.enable_channel(1)
hdawg.start_awg(1)

# Disconnect from the instrument
hdawg.close()
```

In this script, we first import the necessary modules and classes from Qcodes. Then, we create a `Station` object to hold the instrument. Next, we create an instance of the `ZIHDAWG8` class, passing the name of the instrument ('hdawg') and the device ID ('dev1234') as arguments. We add the instrument to the station using the `add_component` method. Finally, we can use the instrument to perform operations such as enabling a channel and starting the AWG.
Note: Replace `'dev1234'` with the actual device ID of your HDAWG RF Signal Generator.

</TabItem>
</Tabs>