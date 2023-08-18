---
title: Connecting to Fluke 7341 by Fluke in Python
sidebar_label: Fluke 7341
description: Deep-Well Compact Bath, –45 °C to 150 °C
keywords: [temperature controllers, Fluke, Pymeasure]
slug: /instruments-wiki/temperature-controllers/fluke/fluke-7341
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201323/Instruments/Temperature%20Controllers/Fluke-7341/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fluke 7341

## Instrument Card

<div className="flex">

<div>

Deep-Well Compact Bath, –45 °C to 150 °C

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692201323/Instruments/Temperature%20Controllers/Fluke-7341/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125987/Instruments/Vendor%20Logos/Fluke.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

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

The provided code defines a class `Fluke7341` that represents a compact constant temperature bath from Fluke. It is a subclass of `Instrument` from the `pymeasure.instruments` module.

The class has the following methods:

1. `__init__(self, adapter, name="Fluke 7341", **kwargs)`: Initializes the `Fluke7341` object. It sets default values for the timeout and write termination, and calls the superclass `Instrument` constructor.

2. `read(self)`: Reads the response from the instrument and extracts the value from the response string. It splits the response string by ":" and returns the last element.

3. `set_point`: Represents the temperature setpoint control. It is an `Instrument.control` object that allows setting the temperature setpoint. It takes a float value between -40 and 150 as an argument. It also has a validator `strict_range` that ensures the value is within the specified range. The `preprocess_reply` function splits the reply string and returns the first element.

4. `unit`: Represents the temperature unit control. It is an `Instrument.control` object that allows setting the temperature unit. It takes a string value 'c' for Celsius or 'f' for Fahrenheit as an argument. It has a validator `strict_discrete_set` that ensures the value is one of the specified options.

5. `temperature`: Represents the measurement of the current bath temperature. It is an `Instrument.measurement` object that retrieves the temperature value from the instrument. The `preprocess_reply` function splits the reply string and returns the first element.

6. `id`: Represents the instrument model identification. It is an `Instrument.measurement` object that retrieves the instrument model from the instrument. The `cast` argument specifies the type of the returned value, and the `get_process` function formats the response string to the desired format.

To use this code, you would need to create an instance of the `Fluke7341` class and provide the appropriate adapter for communication with the instrument. Then, you can use the defined methods to control and measure the temperature bath.

</TabItem>
</Tabs>