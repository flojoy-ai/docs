
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34410A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106837/Instruments/Multimeters/Keysight-34410A-Submodules/file.webp" style={{width:"256px", height: "200px"}} />

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

## Connect to the Keysight 34410A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 34410A Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_344xxA import Keysight34410A

# Create an instance of the Keysight34410A driver
multimeter = Keysight34410A('multimeter', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the multimeter
multimeter.connect()

# Perform measurements or other operations with the multimeter

# Disconnect from the multimeter
multimeter.disconnect()
```

This script imports the `Keysight34410A` class from the `qcodes.instrument_drivers.Keysight.Keysight_344xxA` module. It then creates an instance of the `Keysight34410A` driver, passing the name and address of the multimeter as arguments to the constructor.

The `connect()` method is called to establish a connection to the multimeter. You can then perform measurements or other operations using the methods provided by the driver.

Finally, the `disconnect()` method is called to close the connection to the multimeter.

</TabItem>
</Tabs>