
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight J7211/A/B/C-Series

## Instrument Card

<div className="flex">

<div>



</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692120073/Instruments/Lockin%20Amplifiers/Keysight-J7211-A-B-C-Series/Keysight-J7211-A-B-C-Series.png" style={{ width: "325px" }} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight J7211/A/B/C-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Keysight J7211/A/B/C-Series Lockin Amplifier using Qcodes, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument
from qcodes.utils.validators import Ints
from typing import Optional


class Keysight_J7211(VisaInstrument):
    r"""
    Qcodes driver for the Keysight J7211 Attenuation Control Unit.
    Tested with J7211B.

    Args:
        name: Instrument name
        address: Address or VISA alias of instrument
        attenuation: Optional attenuation level (in dB) to set on startup
        terminator: Termination character in VISA communication.
    """

    def __init__(self, name: str, address: str,
                 attenuation: Optional[int] = None,
                 terminator="\r", **kwargs):
        super().__init__(name=name, address=address,
                         terminator=terminator, **kwargs)

        model = self.IDN()['model']
        if model in ["J7211A", "J7211B"]:
            vals = Ints(0, 120)
        elif model in ["J7211C"]:
            vals = Ints(0, 100)
        else:
            raise RuntimeError(f"Model {model} is not supported.")

        self.add_parameter('attenuation', unit='dB',
                           set_cmd='ATT {:03.0f}',
                           get_cmd='ATT?',
                           get_parser=int,
                           vals=vals,
                           initial_value=attenuation)

        self.connect_message()


# Example usage
address = "TCPIP::192.168.1.1::INSTR"  # Replace with the actual instrument address
attenuation_level = 50  # Replace with the desired attenuation level

instrument = Keysight_J7211(name="my_instrument", address=address, attenuation=attenuation_level)

# Now you can use the instrument object to control the Lockin Amplifier
# For example, to get the current attenuation level:
current_attenuation = instrument.attenuation()

# To set a new attenuation level:
new_attenuation = 75
instrument.attenuation(new_attenuation)
```

Make sure to replace the `address` variable with the actual instrument address (e.g., `"TCPIP::192.168.1.1::INSTR"`) and the `attenuation_level` variable with the desired attenuation level.

</TabItem>
</Tabs>