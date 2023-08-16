
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8267D

## Instrument Card

<div className="flex">

<div>

E8267D PSG Vector Signal Generator, 100 kHz to 44 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077889/Instruments/RF%20Signal%20Generator/Keysight-E8267D/Keysight-E8267D.png" style={{ width: "325px" }} />

</div>

E8267D PSG Vector Signal Generator, 100 kHz to 44 GHz>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E8267D in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight E8267D RF Signal Generator using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_E8267D import Keysight_E8267D

# Create an instance of the instrument
signal_generator = Keysight_E8267D("signal_generator", "TCPIP0::192.168.1.1::inst0::INSTR")

# Connect to the instrument
signal_generator.connect()

# Now you can use the instrument to perform operations
frequency = signal_generator.frequency()
print("Current frequency:", frequency)

# Set a new frequency
signal_generator.frequency(1e9)

# Disconnect from the instrument
signal_generator.disconnect()
```

Note that you need to replace `"TCPIP0::192.168.1.1::inst0::INSTR"` with the actual address of your Keysight E8267D RF Signal Generator.

</TabItem>
</Tabs>