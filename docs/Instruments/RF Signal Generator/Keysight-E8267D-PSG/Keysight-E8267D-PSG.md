
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8267D PSG

## Instrument Card

<div className="flex">

<div>

The E8267D PSG Vector Signal Generator is the highest performance, fully-integrated microwave vector signal generator from 100 kHz to 44 GHz, allowing you to create realistic wideband radar, electronic warfare (EW), and satellite communications (SATCOM) waveforms.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106951/Instruments/RF%20Signal%20Generator/Keysight-E8267D-PSG/file.png" style={{width:"256px", height: "200px"}} />

</div>

The E8267D PSG Vector Signal Generator is the highest performance, fully-integrated microwave vector signal generator from 100 kHz to 44 GHz, allowing you to create realistic wideband radar, electronic warfare (EW), and satellite communications (SATCOM) waveforms.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E8267D PSG in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Keysight E8267D PSG RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.instrument_drivers.Keysight.Keysight_E8267D import Keysight_E8267D

# Connect to the instrument
instrument = Keysight_E8267D("instrument_name", "TCPIP0::192.168.1.1::inst0::INSTR")

# Set the frequency
instrument.frequency(1e9)

# Set the power
instrument.power(-10)

# Enable the RF output
instrument.output_rf("ON")

# Close the connection
instrument.close()
```

Make sure to replace `"instrument_name"` with the desired name for your instrument and `"TCPIP0::192.168.1.1::inst0::INSTR"` with the appropriate VISA address for your instrument.

</TabItem>
</Tabs>