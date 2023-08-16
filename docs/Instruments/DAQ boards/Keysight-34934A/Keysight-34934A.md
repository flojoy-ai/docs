
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 34934A

## Instrument Card

<div className="flex">

<div>

The Keysight 34934A module for the 34980A Multifunction Switch/Measure Unit offers the highest density matrix for connecting paths between your device under test and your test equipment, allowing for multiple instrument connections to multiple points on your device under test at the same time.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118632/Instruments/DAQ%20boards/Keysight-34934A/Keysight-34934A.png" style={{ width: "325px" }} />

</div>

The Keysight 34934A module for the 34980A Multifunction Switch/Measure Unit offers the highest density matrix for connecting paths between your device under test and your test equipment, allowing for multiple instrument connections to multiple points on your device under test at the same time.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 34934A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight 34934A DAQ board using Qcodes, you can use the following Python script:

```python
from qcodes import VisaInstrument

# Connect to the DAQ board
daq = VisaInstrument('DAQ', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Create an instance of the Keysight34934A module
module = Keysight34934A(daq, 'module1', 1)

# Set the relay protection mode to 'AUTO100'
module.protection_mode('AUTO100')

# Get the relay protection mode
mode = module.protection_mode()

# Print the relay protection mode
print(f"Relay protection mode: {mode}")

# Disconnect from the DAQ board
daq.close()
```

Note: Make sure to replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual VISA address of your DAQ board.

</TabItem>
</Tabs>