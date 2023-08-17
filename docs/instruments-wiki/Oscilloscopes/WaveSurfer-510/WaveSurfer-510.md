---
title: WaveSurfer 510
description: The WaveSurfer 510 combines the MAUI with OneTouch user interface with powerful waveform processing, in addition to advanced math, measurement, and debug tools, to quickly analyze and find the root cause of problems. The 12.1” touch-screen display of the WaveSurfer 510 is the largest in its class and makes viewing waveform abnormalities fast and easy.
keywords: [oscilloscopes, Teledyne, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/teledyne/wavesurfer-510
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201000/Instruments/Oscilloscopes/WaveSurfer-510/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveSurfer 510

## Instrument Card

<div className="flex">

<div>

The WaveSurfer 510 combines the MAUI with OneTouch user interface with powerful waveform processing, in addition to advanced math, measurement, and debug tools, to quickly analyze and find the root cause of problems. The 12.1” touch-screen display of the WaveSurfer 510 is the largest in its class and makes viewing waveform abnormalities fast and easy.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201000/Instruments/Oscilloscopes/WaveSurfer-510/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width: "100%", objectFit: "cover" }} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
</ul>
</details>

## Connect to the WaveSurfer 510 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a WaveSurfer 510 Oscilloscope using Instrumentkit, you can use the following code:

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

This code imports the `instrumentkit` library and uses the `open_visa` method from the `ik.teledyne.MAUI` module to connect to the oscilloscope. The IP address "192.168.0.10" is used as an example, and you should replace it with the actual IP address of your oscilloscope.

Once connected, you can perform operations on the oscilloscope, such as starting the trigger in automatic mode and printing the trigger state. Finally, you can close the connection to the oscilloscope using the `close` method.

</TabItem>
</Tabs>