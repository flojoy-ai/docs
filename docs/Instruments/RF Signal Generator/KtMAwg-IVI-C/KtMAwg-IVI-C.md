
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# KtMAwg IVI-C

## Instrument Card

<div className="flex">

<div>



</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118755/Instruments/RF%20Signal%20Generator/KtMAwg-IVI-C/KtMAwg-IVI-C.png" style={{ width: "325px" }} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the KtMAwg IVI-C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a KtMAwg IVI-C RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.KtMAwg import KtMAwg

# Create an instance of the KtMAwg instrument
awg = KtMAwg('awg', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
awg.connect()

# Print the instrument IDN
print(awg.get_idn())

# Set the output terminal configuration of channel 1 to differential
awg.ch1.output_term_config('differential')

# Enable the output of channel 1
awg.ch1.output(True)

# Load a waveform file to channel 1
awg.ch1.load_waveform('waveform.dat')

# Play the waveform on channel 1
awg.ch1.play_waveform()

# Stop the waveform on channel 1
awg.ch1.stop_waveform()

# Disconnect from the instrument
awg.disconnect()
```

This script creates an instance of the `KtMAwg` instrument with the name 'awg' and the specified address ('TCPIP0::192.168.1.1::inst0::INSTR'). It then connects to the instrument using the `connect()` method.

The script demonstrates various operations on the instrument, such as getting the instrument IDN using the `get_idn()` method, setting the output terminal configuration and enabling the output of channel 1, loading a waveform file to channel 1, playing the waveform, and stopping the waveform.

Finally, the script disconnects from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>