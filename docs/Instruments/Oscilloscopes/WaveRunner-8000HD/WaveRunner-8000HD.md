
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveRunner 8000HD

## Instrument Card

<div className="flex">

<div>

Providing 12 bits all the time, more channels than any other oscilloscope, and long memory without tradeoffs – the WaveRunner 8000HD 8 channel oscilloscope captures every detail.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106877/Instruments/Oscilloscopes/WaveRunner-8000HD/file.webp" style={{width:"256px", height: "200px"}} />

</div>

Providing 12 bits all the time, more channels than any other oscilloscope, and long memory without tradeoffs – the WaveRunner 8000HD 8 channel oscilloscope captures every detail.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width:"200px", height: "150px"}} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
</ul>
</details>

## Connect to the WaveRunner 8000HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a WaveRunner 8000HD Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
oscilloscope = ik.teledyne.WaveRunner8000HD.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
# For example, you can read the waveform from a channel
channel = oscilloscope.channel[0]
xdat, ydat = channel.read_waveform()

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope at the specified IP address ("TCPIP0::192.168.0.10::INSTR") using the VISA backend. It then performs operations on the oscilloscope, such as reading the waveform from a channel. Finally, it closes the connection to the oscilloscope.

Note: The code assumes that you have already installed Instrumentkit and its dependencies.

</TabItem>
</Tabs>