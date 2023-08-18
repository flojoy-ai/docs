---
title: Connecting to LabMaster 10 Zi-A by Teledyne in Python
sidebar_label: LabMaster 10 Zi-A
description: The LabMaster 10 Zi is the world's highest-performance modular oscilloscope - it breaks channel count barriers and provides more "bandwidth density". The modular design provides the simplest upgrade path in bandwidth and channel count, with one acquisition module providing four channels at 36 GHz or two channels at 65 GHz, with capability for up to 20 acquisition modules
keywords: [oscilloscopes, Teledyne, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/teledyne/labmaster-10-zi-a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201120/Instruments/Oscilloscopes/LabMaster-10-Zi-A/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LabMaster 10 Zi-A

## Instrument Card

<div className="flex">

<div>

The LabMaster 10 Zi is the world's highest-performance modular oscilloscope - it breaks channel count barriers and provides more "bandwidth density". The modular design provides the simplest upgrade path in bandwidth and channel count, with one acquisition module providing four channels at 36 GHz or two channels at 65 GHz, with capability for up to 20 acquisition modules

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201120/Instruments/Oscilloscopes/LabMaster-10-Zi-A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
</ul>
</details>

## Connect to the LabMaster 10 Zi-A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a LabMaster 10 Zi-A Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
address = "TCPIP0::192.168.0.1::INSTR"
oscilloscope = ik.teledyne.LabMaster10ZiA.open_visa(address)

# Perform operations on the oscilloscope
# For example, you can read the waveform from a channel
channel = oscilloscope.channel[0]
xdat, ydat = channel.read_waveform()

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope using the `open_visa` method from the `ik.teledyne.LabMaster10ZiA` class. You need to provide the appropriate VISA address for your oscilloscope.

Once connected, you can perform various operations on the oscilloscope. In the example code, it reads the waveform from the first channel using the `read_waveform` method of the channel object.

Finally, don't forget to close the connection to the oscilloscope using the `close` method to release any resources.

</TabItem>
</Tabs>