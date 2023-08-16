
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fluke 7341

## Instrument Card

<div className="flex">

<div>

Deep-Well Compact Bath, –45 °C to 150 °C

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692120092/Instruments/Temperature%20Controllers/Fluke-7341/Fluke-7341.png" style={{ width: "325px" }} />

</div>

Deep-Well Compact Bath, –45 °C to 150 °C>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125987/Instruments/Vendor%20Logos/Fluke.png" style={{ width: "100%", objectFit: "cover" }} />

**Fluke** Corporation is the world leader in professional electronic test tools and software for measuring and condition monitoring. <a href="https://us.flukecal.com/">Website</a>.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 700.0</li>
</ul>
</details>

## Connect to the Fluke 7341 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

```python
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import strict_discrete_set, strict_range

class Fluke7341(Instrument):
    """ Represents the compact constant temperature bath from Fluke.
    """

    def __init__(self, adapter, name="Fluke 7341", **kwargs):
        kwargs.setdefault('timeout', 2000)
        kwargs.setdefault('write_termination', '\r\n')
        super().__init__(
            adapter,
            name,
            includeSCPI=False,
            asrl={'baud_rate': 2400},
            **kwargs
        )

    def read(self):
        """Read up to (excluding) `read_termination` or the whole read buffer.

        Extract the value from the response string.

        Responses are in the format "`type`: `value` `optional information`".
        Optional information is for example the unit (degree centigrade or Fahrenheit).
        """
        return super().read().split(":")[-1]

    set_point = Instrument.control("s", "s=%g",
                                   """Control the temperature setpoint (float from -40 to 150 °C)
                                   The unit is as defined in property :attr:`~.unit`.""",
                                   validator=strict_range,
                                   values=(-40, 150),
                                   preprocess_reply=lambda x: x.split()[0],
                                   )

    unit = Instrument.control(
        "u", "u=%s",
        """Control the temperature unit: `c` for Celsius and `f` for Fahrenheit`.""",
        validator=strict_discrete_set,
        values=('c', 'f'),
    )

    temperature = Instrument.measurement("t",
                                         """Measure the current bath temperature.
                                         The unit is as defined in property :attr:`unit`.""",
                                         preprocess_reply=lambda x: x.split()[0],
                                         )

    id = Instrument.measurement("*ver",
                                """Get the instrument model.""",
                                cast=str,
                                get_process=lambda x: f"Fluke,{x[0][4:]},NA,{x[1]}",
                                )
```

The code defines a class `Fluke7341` that represents the compact constant temperature bath from Fluke. It inherits from the `Instrument` class provided by the `pymeasure.instruments` module.

The `Fluke7341` class has several methods and properties:

- `__init__(self, adapter, name="Fluke 7341", **kwargs)`: Initializes the `Fluke7341` object. It sets default values for the timeout and write termination, and calls the parent `Instrument` class constructor.

- `read(self)`: Reads the response from the instrument and extracts the value from the response string. The response is expected to be in the format "`type`: `value` `optional information`".

- `set_point`: Represents the temperature setpoint of the bath. It is an `Instrument.control` property that allows setting and getting the setpoint value. It has a validator to ensure the value is within the range of -40 to 150 °C.

- `unit`: Represents the temperature unit of the bath. It is an `Instrument.control` property that allows setting and getting the unit value. It has a validator to ensure the value is either 'c' for Celsius or 'f' for Fahrenheit.

- `temperature`: Represents the current temperature of the bath. It is an `Instrument.measurement` property that allows getting the temperature value. It has a preprocess_reply function to extract the temperature value from the response string.

- `id`: Represents the instrument model. It is an `Instrument.measurement` property that allows getting the instrument model. It has a cast function to convert the response to a string and a get_process function to format the response string.

This code provides a convenient interface to interact with the Fluke 7341 Temperature Controller using the PyMeasure library.

</TabItem>
</Tabs>