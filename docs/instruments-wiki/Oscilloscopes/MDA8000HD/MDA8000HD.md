---
title: Connecting to MDA8000HD by Teledyne in Python
sidebar_label: MDA8000HD
description: The Motor Drive Analyzer is built on an 8 channel, 12-bit resolution oscilloscope platform. It acquires any signal and performs three-phase electrical and mechanical power calculations. It provides complete power section and embedded control test coverage.
keywords: [oscilloscopes, Teledyne, Instrumentkit]
slug: /instruments-wiki/oscilloscopes/teledyne/mda8000hd
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201092/Instruments/Oscilloscopes/MDA8000HD/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MDA8000HD

## Instrument Card

<div className="flex">

<div>

The Motor Drive Analyzer is built on an 8 channel, 12-bit resolution oscilloscope platform. It acquires any signal and performs three-phase electrical and mechanical power calculations. It provides complete power section and embedded control test coverage.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201092/Instruments/Oscilloscopes/MDA8000HD/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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

## Connect to the MDA8000HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a MDA8000HD Oscilloscope using Instrumentkit, you can use the following code:

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

This code imports the `instrumentkit` library and uses the `open_visa` function from the `ik.teledyne.MAUI` module to connect to the oscilloscope. The IP address "192.168.0.10" is used as an example, and you should replace it with the actual IP address of your oscilloscope.

Once connected, you can perform operations on the oscilloscope, such as starting the trigger in automatic mode and printing the trigger state. Finally, you can close the connection to the oscilloscope using the `close` method.

Note: This code assumes that you have already installed the necessary dependencies and have the correct VISA backend configured.

</TabItem>
</Tabs>