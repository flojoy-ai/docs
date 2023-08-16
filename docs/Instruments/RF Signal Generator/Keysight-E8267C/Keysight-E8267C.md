
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight E8267C

## Instrument Card

<div className="flex">

<div>

E8267C PSG Vector Signal Generator, up to 20 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118498/Instruments/RF%20Signal%20Generator/Keysight-E8267C/Keysight-E8267C.png" style={{ width: "325px" }} />

</div>

E8267C PSG Vector Signal Generator, up to 20 GHz>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight E8267C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keysight E8267C RF Signal Generator using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument

# Create a class for the Keysight E8267C RF Signal Generator
class KeysightE8267C(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\n", **kwargs)
        # Add parameters and commands specific to the Keysight E8267C
        self.add_parameter(
            name="frequency",
            label="Frequency",
            unit="Hz",
            get_cmd="FREQ?",
            set_cmd="FREQ {}",
            get_parser=float,
            vals=Numbers(min_value=100e3, max_value=40e9),
        )
        # Add other parameters and commands as needed

# Create an instance of the Keysight E8267C RF Signal Generator
signal_generator = KeysightE8267C("signal_generator", "TCPIP0::192.168.1.1::INSTR")

# Connect to the signal generator
signal_generator.connect()

# Example usage: Set the frequency to 1 GHz
signal_generator.frequency(1e9)

# Example usage: Get the current frequency
current_frequency = signal_generator.frequency()

# Disconnect from the signal generator
signal_generator.disconnect()
```

Note: Replace `"TCPIP0::192.168.1.1::INSTR"` with the actual address of your Keysight E8267C RF Signal Generator.

</TabItem>
</Tabs>