---
title: Connecting to WaveSurfer 3000z by Teledyne in Python
sidebar_label: WaveSurfer 3000z
description: The WaveSurfer 3000z has a 10.1" capacitive touch display, the longest memory, and the deepest toolbox – all at an affordable price.
keywords: [oscilloscopes, Teledyne, InstrumentKit]
slug: /instruments-database/oscilloscopes/teledyne/wavesurfer-3000z
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394026/Instruments/Oscilloscopes/WaveSurfer-3000z/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveSurfer 3000z

## Instrument Card

<div className="flex">

<div>

The WaveSurfer 3000z has a 10.1" capacitive touch display, the longest memory, and the deepest toolbox – all at an affordable price.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394026/Instruments/Oscilloscopes/WaveSurfer-3000z/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://cdn.teledynelecroy.com/files/pdf/wavesurfer-3000z-oscilloscope-datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: TELEDYNE</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692812958/Instruments/Vendor%20Logos/Teledyne_technologies.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
  <li>Vendor Website: <a href="https://www.teledynelecroy.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='OSCILLOSCOPES' manufacturer='TELEDYNE'></FeaturedInstrumentVideo>


## Connect to the WaveSurfer 3000z in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='OSCILLOSCOPES' manufacturer='TELEDYNE'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a WaveSurfer 3000z Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
oscilloscope = ik.teledyne.WaveSurfer3000z.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
oscilloscope.run()
print(oscilloscope.trigger_state)

# Close the connection
oscilloscope.close()
```

This code imports the `instrumentkit` library and uses the `open_visa` method of the `WaveSurfer3000z` class to connect to the oscilloscope. You need to replace `"TCPIP0::192.168.0.10::INSTR"` with the actual VISA address of your oscilloscope.

Once connected, you can perform operations on the oscilloscope. In this example, the `run` method is called to start the oscilloscope's trigger, and then the `trigger_state` property is printed to display the current trigger state.

Finally, the `close` method is called to close the connection to the oscilloscope.

Note: This code assumes that you have already installed the `instrumentkit` library and its dependencies.

</TabItem>
</Tabs>