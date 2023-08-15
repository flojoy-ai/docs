
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34470A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107107/Instruments/Multimeters/Keysight-34470A-Submodules/file.jpg" style={{width:"256px", height: "200px"}} />

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

## Connect to the Keysight 34470A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 34470A Multimeter using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.Keysight.Keysight_344xxA import Keysight_34470A

# Create an instance of the Keysight 34470A driver
multimeter = Keysight_34470A('multimeter', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the multimeter
multimeter.connect()

# Perform measurements or other operations with the multimeter

# Disconnect from the multimeter
multimeter.disconnect()
```

This script imports the necessary modules and creates an instance of the `Keysight_34470A` driver. The `Keysight_34470A` class is a subclass of `_Keysight_344xxA`, which is a submodule of the `Keysight` module in the Qcodes library.

The `Keysight_34470A` class is an alias for `Keysight34470A` and is provided for backwards compatibility.

To connect to the multimeter, you call the `connect()` method on the `multimeter` instance. You can then perform measurements or other operations with the multimeter.

Finally, you can disconnect from the multimeter by calling the `disconnect()` method on the `multimeter` instance.

</TabItem>
</Tabs>