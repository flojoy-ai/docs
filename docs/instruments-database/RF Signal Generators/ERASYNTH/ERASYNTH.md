---
title: Connecting to ERASYNTH
 by Erainstruments in Python
sidebar_label: ERASYNTH

description: ERASynth removes the cost barriers and makes quality RF signal synthesis accessible to everyone, especially budget-conscious makers.
keywords: [rf signal generators, Erainstruments, QCodes Community]
slug: /instruments-database/rf-signal-generators/erainstruments/erasynth
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395718/Instruments/RF%20Signal%20Generators/ERASYNTH/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ERASYNTH


## Instrument Card

<div className="flex">

<div>

ERASynth removes the cost barriers and makes quality RF signal synthesis accessible to everyone, especially budget-conscious makers.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395718/Instruments/RF%20Signal%20Generators/ERASYNTH/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ERAINSTRUMENTS</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692139600/Instruments/Vendor%20Logos/ERAInstruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**ERA Instruments** is a startup technology company based in Istanbul, Turkey. With its young and dynamic engineering team, ERA specializes in: RF Signal Generators.

<ul>
  <li>Headquarters: Turkey</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
  <li>Vendor Website: <a href="https://erainstruments.com/#home">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='ERAINSTRUMENTS'></FeaturedInstrumentVideo>


## Connect to the ERASYNTH
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='ERAINSTRUMENTS'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">


```python
from qcodes_contrib_drivers.drivers.ERAInstruments import ERASynth

# Connect to the ERASynth signal generator
lo = ERASynth("ERASynth", 'ASRL/dev/cu.usbmodem14101::INSTR')

# Turn off the output
lo.off()

# Print updated snapshot once to make sure the snapshot will be up-to-date
# This may take a few seconds
lo.print_readable_snapshot(update=True)

# Configure the local oscillator
lo.ref_osc_source("int")  # Use internal reference
lo.frequency(4.7e9)
lo.power(10)  # Set the amplitude to 10 dBm
lo.on()  # Turn on the output
```

This script connects to the ERASynth signal generator using the specified address (`ASRL/dev/cu.usbmodem14101::INSTR`). It then turns off the RF output, prints the updated snapshot of the instrument's parameters, configures the local oscillator with the desired frequency and power, and finally turns on the RF output.

Note: Make sure to replace `'ASRL/dev/cu.usbmodem14101::INSTR'` with the actual address of your ERASynth signal generator.

Let me know if you need any further assistance!

</TabItem>
</Tabs>