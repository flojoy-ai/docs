
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# From MG3690C Series

## Instrument Card

<div className="flex">

<div>

The MG3690C series of broadband signal generators covers audio, HF, VHF, UHF, RF and microwave frequencies from 0.1 Hz to 70 GHz in single coaxial output and up to 500 GHz or beyond, with external multipliers

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106958/Instruments/RF%20Signal%20Generator/From-MG3690C-Series/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The MG3690C series of broadband signal generators covers audio, HF, VHF, UHF, RF and microwave frequencies from 0.1 Hz to 70 GHz in single coaxial output and up to 500 GHz or beyond, with external multipliers>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125977/Instruments/Vendor%20Logos/Anritsu.png" style={{ width:"200px", height: "150px"}} />

**Anritsu** Has Testing Solutions for Automotive, Government, Data Center, & IoT Industries. Test Solutions for IoT Devices, Government Radar, Automotive, & Signal Integrity. <a href="https://www.anritsu.com/en-us/">Website</a>.

<ul>
  <li>Headquarters: JAPAN</li>
  <li>Yearly Revenue (millions, USD): 670.0</li>
</ul>
</details>

## Connect to the From MG3690C Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.anritsu import AnritsuMG3692C

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB0::10::INSTR")

# Connect to the Anritsu MG3692C Signal Generator
signal_generator = AnritsuMG3692C(adapter)

# Set the output power to -10 dBm
signal_generator.power = -10

# Set the output frequency to 1 GHz
signal_generator.frequency = 1e9

# Enable the signal output
signal_generator.enable()

# Disable the signal output
signal_generator.disable()

# Shutdown the instrument
signal_generator.shutdown()
```

Explanation of the code:
- First, we import the necessary modules from Pymeasure.
- We create a `VISAAdapter` object, specifying the VISA address of the instrument. In this example, the address is "GPIB0::10::INSTR".
- We create an `AnritsuMG3692C` object, passing the adapter as an argument.
- We can then use the properties and methods of the `AnritsuMG3692C` object to control the signal generator. For example, we set the output power to -10 dBm using the `power` property, and the output frequency to 1 GHz using the `frequency` property.
- We can enable or disable the signal output using the `enable()` and `disable()` methods.
- Finally, we call the `shutdown()` method to put the instrument in a safe state.

Note: Make sure you have the necessary dependencies installed, such as `pymeasure` and the appropriate VISA library for your instrument.

</TabItem>
</Tabs>