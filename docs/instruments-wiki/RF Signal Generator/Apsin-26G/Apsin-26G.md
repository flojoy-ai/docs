---
title: Apsin 26G
description: The APSINXXG is an analog signal generator (analog signal source) series covering RF and microwave frequency ranges from 9 kHz to 12, 20 and 26.5 GHz
keywords: [rf signal generator, Anapico, Pymeasure]
slug: /instruments-wiki/rf-signal-generator/anapico/apsin-26g
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200841/Instruments/RF%20Signal%20Generator/Apsin-26G/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Apsin 26G

## Instrument Card

<div className="flex">

<div>

The APSINXXG is an analog signal generator (analog signal source) series covering RF and microwave frequency ranges from 9 kHz to 12, 20 and 26.5 GHz

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200841/Instruments/RF%20Signal%20Generator/Apsin-26G/file.png" style={{ width: "325px" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125957/Instruments/Vendor%20Logos/Anapico.png" style={{ width: "100%", objectFit: "cover" }} />

**AnaPico** is an ISO 9001:2015 certified technology leader, developing, manufacturing and supplying RF and MW test & measurement instruments. <a href="https://www.anapico.com/">Website</a>.

<ul>
  <li>Headquarters: Switzerland</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the Apsin 26G in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

```python
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import strict_range, strict_discrete_set


class APSIN26G(Instrument):
    """ Represents the Anapico APSIN26G Signal Generator with option 9K,
    HP and GPIB. """
    FREQ_LIMIT = [9e3, 26e9]
    POW_LIMIT = [-30, 27]

    power = Instrument.control(
        "SOUR:POW:LEV:IMM:AMPL?;", "SOUR:POW:LEV:IMM:AMPL %gdBm;",
        """ A floating point property that represents the output power
        in dBm. This property can be set. """,
        validator=strict_range,
        values=POW_LIMIT
    )
    frequency = Instrument.control(
        "SOUR:FREQ:CW?;", "SOUR:FREQ:CW %eHz;",
        """ A floating point property that represents the output frequency
        in Hz. This property can be set. """,
        validator=strict_range,
        values=FREQ_LIMIT
    )
    blanking = Instrument.control(
        ":OUTP:BLAN:STAT?", ":OUTP:BLAN:STAT %s",
        """ A string property that represents the blanking of output power
        when frequency is changed. ON makes the output to be blanked (off) while
        changing frequency. This property can be set. """,
        validator=strict_discrete_set,
        values=['ON', 'OFF']
    )
    reference_output = Instrument.control(
        "SOUR:ROSC:OUTP:STAT?", "SOUR:ROSC:OUTP:STAT %s",
        """ A string property that represents the 10MHz reference output from
        the synth. This property can be set. """,
        validator=strict_discrete_set,
        values=['ON', 'OFF']
    )

    def __init__(self, adapter, name="Anapico APSIN26G Signal Generator", **kwargs):
        super().__init__(
            adapter,
            name,
            **kwargs
        )

    def enable_rf(self):
        """ Enables the RF output. """
        self.write("OUTP:STAT 1")

    def disable_rf(self):
        """ Disables the RF output. """
        self.write("OUTP:STAT 0")
```

This code defines a new class `APSIN26G` that represents the Anapico APSIN26G Signal Generator. It inherits from the `Instrument` class provided by PyMeasure.

The class defines several properties such as `power`, `frequency`, `blanking`, and `reference_output`, which are used to control various settings of the signal generator. These properties are defined using the `Instrument.control` decorator, which specifies the SCPI commands to get and set the corresponding values.

The `power` property represents the output power in dBm, and it is validated using the `strict_range` validator with the limits specified in `POW_LIMIT`.

The `frequency` property represents the output frequency in Hz, and it is validated using the `strict_range` validator with the limits specified in `FREQ_LIMIT`.

The `blanking` property represents the blanking of output power when the frequency is changed. It is validated using the `strict_discrete_set` validator with the allowed values of 'ON' and 'OFF'.

The `reference_output` property represents the 10MHz reference output from the signal generator. It is also validated using the `strict_discrete_set` validator with the allowed values of 'ON' and 'OFF'.

The `enable_rf` method enables the RF output of the signal generator by sending the corresponding SCPI command.

The `disable_rf` method disables the RF output of the signal generator by sending the corresponding SCPI command.

The `APSIN26G` class can be used to connect to and control an Anapico APSIN26G Signal Generator using PyMeasure.

</TabItem>
</Tabs>