---
title: Connecting to WaveRunner 8000HD by Teledyne in Python
sidebar_label: WaveRunner 8000HD
description: Providing 12 bits all the time, more channels than any other oscilloscope, and long memory without tradeoffs – the WaveRunner 8000HD 8 channel oscilloscope captures every detail.
keywords: [oscilloscopes, Teledyne, InstrumentKit]
slug: /instruments-database/oscilloscopes/teledyne/waverunner-8000hd
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692394023/Instruments/Oscilloscopes/WaveRunner-8000HD/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveRunner 8000HD

## Instrument Card

<div className="flex">

<div>

Providing 12 bits all the time, more channels than any other oscilloscope, and long memory without tradeoffs – the WaveRunner 8000HD 8 channel oscilloscope captures every detail.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692394023/Instruments/Oscilloscopes/WaveRunner-8000HD/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://cdn.teledynelecroy.com/files/pdf/waverunner-8000hd-datasheet.pdf">here</a></p>

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


## Connect to the WaveRunner 8000HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='OSCILLOSCOPES' manufacturer='TELEDYNE'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a WaveRunner 8000HD Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
oscilloscope = ik.teledyne.MAUI.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
oscilloscope.run()
print(oscilloscope.trigger_state)

# Close the connection
oscilloscope.close()
```

This code imports the `instrumentkit` module and uses the `open_visa` function from the `ik.teledyne.MAUI` module to connect to the oscilloscope. The IP address "192.168.0.10" is used as an example, and you should replace it with the actual IP address of your oscilloscope.

Once connected, you can perform operations on the oscilloscope, such as starting the trigger in automatic mode and printing the trigger state. Finally, you can close the connection to the oscilloscope using the `close` method.

Note: This code assumes that you have already installed the necessary dependencies for Instrumentkit and have the correct VISA backend installed.

</TabItem>
</Tabs>