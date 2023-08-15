
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 33250A

## Instrument Card

<div className="flex">

<div>

The 33250A 80 MHz Function/Arbitrary Waveform Generator uses direct digital-synthesis techniques to create a stable, accurate output on all waveforms, down to 1 µHz frequency resolution. The benefits are apparent in every signal you produce, from the sine wave frequency accuracy to the fast rise/fall times of square waves, to the ramp linearity.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106898/Instruments/RF%20Signal%20Generator/Keysight-33250A/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The 33250A 80 MHz Function/Arbitrary Waveform Generator uses direct digital-synthesis techniques to create a stable, accurate output on all waveforms, down to 1 µHz frequency resolution. The benefits are apparent in every signal you produce, from the sine wave frequency accuracy to the fast rise/fall times of square waves, to the ramp linearity.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 33250A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 33250A RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_33XXX import WaveformGenerator_33XXX

# Create an instance of the instrument
signal_generator = WaveformGenerator_33XXX('signal_generator', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
signal_generator.connect_message()
```

This script imports the `WaveformGenerator_33XXX` class from the `qcodes.instrument_drivers.Keysight.Keysight_33XXX` module. It then creates an instance of the instrument with the name "signal_generator" and the appropriate VISA address for your specific instrument. Finally, it calls the `connect_message()` method to establish a connection to the instrument and print a connection message.

</TabItem>
</Tabs>