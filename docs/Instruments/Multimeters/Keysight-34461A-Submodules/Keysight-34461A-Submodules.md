
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34461A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107084/Instruments/Multimeters/Keysight-34461A-Submodules/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 34461A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_344xxA import Keysight34461A

# Create an instance of the Keysight34461A driver
dmm = Keysight34461A('dmm', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the instrument
dmm.connect()

# Perform measurements or other operations with the instrument

# Disconnect from the instrument
dmm.disconnect()
```

This code imports the necessary modules and creates an instance of the `Keysight34461A` driver. It then connects to the instrument using the specified address (`TCPIP0::192.168.1.1::INSTR`). After performing any desired measurements or operations, it disconnects from the instrument.

</TabItem>
</Tabs>