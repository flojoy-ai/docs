
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight N5183B MXG

## Instrument Card

<div className="flex">

<div>

N5183B MXG X-Series microwave analog signal generator offers 9 kHz to 40 GHz frequency coverage and near PSG levels of phase noise performance.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107087/Instruments/RF%20Signal%20Generator/Keysight-N5183B-MXG/file.png" style={{width:"256px", height: "200px"}} />

</div>

N5183B MXG X-Series microwave analog signal generator offers 9 kHz to 40 GHz frequency coverage and near PSG levels of phase noise performance.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight N5183B MXG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight N5183B MXG RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.N51x1 import N51x1
from qcodes.instrument_drivers.Keysight.KeysightN5183B import KeysightN5183B

# Create an instance of the KeysightN5183B instrument
instrument = KeysightN5183B('my_instrument', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
instrument.connect()

# Now you can use the instrument to perform various operations
# For example, you can set the frequency and power level
instrument.frequency(1e9)  # Set the frequency to 1 GHz
instrument.power(-10)  # Set the power level to -10 dBm

# Disconnect from the instrument
instrument.disconnect()
```

Note that you need to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual IP address or VISA resource string of your instrument.

</TabItem>
</Tabs>