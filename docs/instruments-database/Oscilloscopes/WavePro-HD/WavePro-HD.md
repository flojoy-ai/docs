---
title: Connecting to WavePro HD by Teledyne in Python
sidebar_label: WavePro HD
description: WavePro HD High-Definition oscilloscopes employ unique Teledyne LeCroy HD4096 technology to achieve 12-bit resolution at up to 8 GHz bandwidth, for the lowest noise and unmatched signal fidelity. Up to 5 Gpt of highly responsive acquisition memory gives more visibility into system behavior, and the exceptional analysis toolbox enables deep insight.
keywords: [oscilloscopes, Teledyne, InstrumentKit]
slug: /instruments-database/oscilloscopes/teledyne/wavepro-hd
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719258/Instruments/Oscilloscopes/WavePro-HD/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WavePro HD

## Instrument Card

<div className="flex">

<div>

WavePro HD High-Definition oscilloscopes employ unique Teledyne LeCroy HD4096 technology to achieve 12-bit resolution at up to 8 GHz bandwidth, for the lowest noise and unmatched signal fidelity. Up to 5 Gpt of highly responsive acquisition memory gives more visibility into system behavior, and the exceptional analysis toolbox enables deep insight.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719258/Instruments/Oscilloscopes/WavePro-HD/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://cdn.teledynelecroy.com/files/pdf/waveprohd-datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692812958/Instruments/Vendor%20Logos/Teledyne_technologies.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
  <li>Vendor Website: <a href="https://www.teledynelecroy.com/">here</a></li>
</ul>
</details>

## Connect to the WavePro HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a WavePro HD Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
address = "TCPIP0::192.168.0.10::INSTR"
oscilloscope = ik.teledyne.WaveProHD.open_visa(address)

# Perform operations on the oscilloscope
oscilloscope.run()
print(oscilloscope.trigger_state)

# Set time per division to 20 ns
oscilloscope.time_div = 20 * ik.units.ns

# Access the first channel
channel = oscilloscope.channel[0]
channel.trace = True
channel.coupling = channel.Coupling.dc50
channel.scale = 1 * ik.units.V

# Read waveform from the channel
xdat, ydat = channel.read_waveform()

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope at the specified IP address ("TCPIP0::192.168.0.10::INSTR") using the VISA protocol. It then performs operations on the oscilloscope, such as reading the waveform from a channel. Finally, it closes the connection to the oscilloscope.

Note: Make sure to replace "TCPIP0::192.168.0.10::INSTR" with the actual IP address of your WavePro HD Oscilloscope.

</TabItem>
</Tabs>