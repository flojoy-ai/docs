
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WaveMaster / SDA /DDA 8 Zi-B

## Instrument Card

<div className="flex">

<div>

The WaveMaster 8 Zi-B combines the performance, signal fidelity and feature set needed for today’s high-speed measurements with the ease of use of a standard benchtop oscilloscope. Featuring the highest-speed serial data triggers, the only complete multi-lane serial data analysis and eye diagram solution, and the most comprehensive set of compliance packages, the WaveMaster 8 Zi-B simplifies the most complex testing.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107089/Instruments/Oscilloscopes/WaveMaster---SDA--DDA-8-Zi-B/file.png" style={{width:"256px", height: "200px"}} />

</div>

The WaveMaster 8 Zi-B combines the performance, signal fidelity and feature set needed for today’s high-speed measurements with the ease of use of a standard benchtop oscilloscope. Featuring the highest-speed serial data triggers, the only complete multi-lane serial data analysis and eye diagram solution, and the most comprehensive set of compliance packages, the WaveMaster 8 Zi-B simplifies the most complex testing.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width:"200px", height: "150px"}} />

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
</ul>
</details>

## Connect to the WaveMaster / SDA /DDA 8 Zi-B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a WaveMaster / SDA / DDA 8 Zi-B Oscilloscope using Instrumentkit, you can use the following code:

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

This code connects to the oscilloscope at the specified address using the `open_visa` method from the `ik.teledyne.MAUI` module. It then performs some operations on the oscilloscope, such as starting the trigger and printing the trigger state. Finally, it closes the connection to the oscilloscope using the `close` method.

Note: Replace `"TCPIP0::192.168.0.10::INSTR"` with the actual IP address or VISA resource string of your oscilloscope.

</TabItem>
</Tabs>