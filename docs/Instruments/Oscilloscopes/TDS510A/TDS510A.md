
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TDS510A

## Instrument Card

<div className="flex">

<div>

The TDS510A Digital Oscilloscope is a full-featured, cost-effective, versatile oscilloscope which meets the measurement requirements for general-purpose research and design. Its industry-preferred graphical user interface makes it easy to learn and efficient to use. The TDS510A advanced trigger capability allows the user to trigger and view signals in a wide variety of simple as well as complex design and analysis settings. With four channels, 50 K points per channel record length, and powerful waveform acquisition modes, the TDS510A can satisfy most complex design, debug, and analysis requirements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106892/Instruments/Oscilloscopes/TDS510A/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The TDS510A Digital Oscilloscope is a full-featured, cost-effective, versatile oscilloscope which meets the measurement requirements for general-purpose research and design. Its industry-preferred graphical user interface makes it easy to learn and efficient to use. The TDS510A advanced trigger capability allows the user to trigger and view signals in a wide variety of simple as well as complex design and analysis settings. With four channels, 50 K points per channel record length, and powerful waveform acquisition modes, the TDS510A can satisfy most complex design, debug, and analysis requirements.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125954/Instruments/Vendor%20Logos/Tektronix.png" style={{ width:"200px", height: "150px"}} />

Tektronix, Inc., historically widely known as Tek, is an American company best known for manufacturing test and measurement devices such as [oscilloscopes](https://en.wikipedia.org/wiki/Oscilloscope), [logic analyzers](https://en.wikipedia.org/wiki/Logic_analyzer), and video and mobile test protocol equipment. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5800.0</li>
</ul>
</details>

## Connect to the TDS510A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a TDS510A Oscilloscope using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the TDS510A Oscilloscope
scope = ik.tektronix.TDS510A.open_gpibusb("/dev/ttyUSB0", 1)

# Perform operations on the oscilloscope
# For example, you can query the instrument's identification
print(scope.identification)

# Close the connection to the oscilloscope
scope.close()
```

In this script, we import the `instrumentkit` module as `ik`. Then, we use the `open_gpibusb` method of the `ik.tektronix.TDS510A` class to connect to the TDS510A Oscilloscope. The first argument is the device path (`/dev/ttyUSB0` in this example) and the second argument is the GPIB address of the instrument.

After connecting, you can perform various operations on the oscilloscope. In the example, we query the instrument's identification using the `identification` property and print the result.

Finally, we close the connection to the oscilloscope using the `close` method.

</TabItem>
</Tabs>