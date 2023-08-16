
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34411A Submodules

## Instrument Card

<div className="flex">

<div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118660/Instruments/Multimeters/Keysight-34411A-Submodules/Keysight-34411A-Submodules.png" style={{ width: "325px" }} />

</div>

The 34411A offers Temperature and Capacitance capabilities, in addition to those measurements you have come to expect, such as DCV, ACV, DCI, ACI, 2-wire and 4-wire Resistance, Frequency, Period, Continuity and Diode Test.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 34411A Submodules in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 34411A Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.Keysight.Keysight_34411A import Keysight_34411A

# Create an instance of the Keysight_34411A driver
multimeter = Keysight_34411A('multimeter', 'TCPIP0::192.168.1.1::INSTR')

# Connect to the multimeter
multimeter.connect()

# Perform measurements or other operations with the multimeter

# Disconnect from the multimeter
multimeter.disconnect()
```

In this script, we import the `Keysight_34411A` driver from the `qcodes.instrument_drivers.Keysight` module. We then create an instance of the driver by providing a name for the instrument and the address of the multimeter (in this case, a TCP/IP address).

After creating the instance, we can connect to the multimeter using the `connect()` method. This establishes the communication with the instrument.

You can then perform measurements or other operations with the multimeter using the methods provided by the driver.

Finally, when you are done, you can disconnect from the multimeter using the `disconnect()` method.

</TabItem>
</Tabs>