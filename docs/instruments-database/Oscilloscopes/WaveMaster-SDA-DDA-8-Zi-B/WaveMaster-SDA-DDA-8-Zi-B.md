---
title: Connecting to WaveMaster-SDA-DDA 8 Zi-B by Teledyne in Python
sidebar_label: WaveMaster-SDA-DDA 8 Zi-B
description: The WaveMaster 8 Zi-B combines the performance, signal fidelity and feature set needed for today’s high-speed measurements with the ease of use of a standard benchtop oscilloscope. Featuring the highest-speed serial data triggers, the only complete multi-lane serial data analysis and eye diagram solution, and the most comprehensive set of compliance packages, the WaveMaster 8 Zi-B simplifies the most complex testing.
keywords: [oscilloscopes, Teledyne, InstrumentKit]
slug: /instruments-database/oscilloscopes/teledyne/wavemaster-sda-dda-8-zi-b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719256/Instruments/Oscilloscopes/WaveMaster-SDA-DDA-8-Zi-B/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveMaster-SDA-DDA 8 Zi-B

## Instrument Card

<div className="flex">

<div>

The WaveMaster 8 Zi-B combines the performance, signal fidelity and feature set needed for today’s high-speed measurements with the ease of use of a standard benchtop oscilloscope. Featuring the highest-speed serial data triggers, the only complete multi-lane serial data analysis and eye diagram solution, and the most comprehensive set of compliance packages, the WaveMaster 8 Zi-B simplifies the most complex testing.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719256/Instruments/Oscilloscopes/WaveMaster-SDA-DDA-8-Zi-B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://cdn.teledynelecroy.com/files/pdf/wavemaster-8zi-b-datasheet.pdf">here</a></p>

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

## Connect to the WaveMaster-SDA-DDA 8 Zi-B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="InstrumentKit" label="InstrumentKit">

To connect to a WaveMaster/SDA/DDA 8 Zi-B Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
address = "TCPIP0::192.168.0.10::INSTR"
oscilloscope = ik.teledyne.MAUI.open_visa(address)

# Perform operations on the oscilloscope
oscilloscope.run()
print(oscilloscope.trigger_state)

# Close the connection
oscilloscope.close()
```

In this code, we first import the `instrumentkit` module as `ik`. Then, we specify the address of the oscilloscope we want to connect to. Next, we use the `open_visa` function from the `ik.teledyne.MAUI` module to establish a connection to the oscilloscope.

Once the connection is established, we can perform operations on the oscilloscope. In this example, we start the oscilloscope by calling the `run` method and then print the current trigger state using the `trigger_state` property.

Finally, we close the connection to the oscilloscope by calling the `close` method.

Note: Make sure to replace the `address` variable with the actual IP address or VISA resource string of your oscilloscope.

</TabItem>
</Tabs>