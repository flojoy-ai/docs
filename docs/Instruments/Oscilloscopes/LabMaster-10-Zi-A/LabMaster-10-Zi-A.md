
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LabMaster 10 Zi-A

## Instrument Card

<div className="flex">

<div>

The LabMaster 10 Zi is the world's highest-performance modular oscilloscope - it breaks channel count barriers and provides more "bandwidth density". The modular design provides the simplest upgrade path in bandwidth and channel count, with one acquisition module providing four channels at 36 GHz or two channels at 65 GHz, with capability for up to 20 acquisition modules

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118704/Instruments/Oscilloscopes/LabMaster-10-Zi-A/LabMaster-10-Zi-A.png" style={{ width: "325px" }} />

</div>

The LabMaster 10 Zi is the world's highest-performance modular oscilloscope - it breaks channel count barriers and provides more "bandwidth density". The modular design provides the simplest upgrade path in bandwidth and channel count, with one acquisition module providing four channels at 36 GHz or two channels at 65 GHz, with capability for up to 20 acquisition modules>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width: "100%", objectFit: "cover" }} />

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
oscilloscope = ik.teledyne.MAUI.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
# For example, you can read the waveform from a channel
channel = oscilloscope.channel[0]
xdat, ydat = channel.read_waveform()

# Close the connection to the oscilloscope
oscilloscope.close()
```

This code connects to the oscilloscope at the specified IP address ("TCPIP0::192.168.0.10::INSTR") using the VISA protocol. It then performs operations on the oscilloscope, such as reading the waveform from a channel. Finally, it closes the connection to the oscilloscope.

</TabItem>
</Tabs>