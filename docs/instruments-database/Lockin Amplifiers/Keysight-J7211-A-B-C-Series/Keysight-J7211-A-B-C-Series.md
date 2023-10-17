---
title: Connecting to Keysight J7211-A-B-C-Series by Keysight in Python
sidebar_label: Keysight J7211-A-B-C-Series
description: Currently no description
keywords: [lockin amplifiers, Keysight, QCodes Community]
slug: /instruments-database/lockin-amplifiers/keysight/keysight-j7211-a-b-c-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395743/Instruments/Lockin%20Amplifiers/Keysight-J7211-A-B-C-Series/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight J7211-A-B-C-Series

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395743/Instruments/Lockin%20Amplifiers/Keysight-J7211-A-B-C-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-01788/technical-overviews/5989-8323.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEYSIGHT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125973/Instruments/Vendor%20Logos/Keysight.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='LOCKIN_AMPLIFIERS' manufacturer='KEYSIGHT'></FeaturedInstrumentVideo>


## Connect to the Keysight J7211-A-B-C-Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='LOCKIN_AMPLIFIERS' manufacturer='KEYSIGHT'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

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
```

This script defines a class `Keysight_J7211` that inherits from `VisaInstrument` in the `qcodes.instrument.visa` module. The class represents the Keysight J7211 Attenuation Control Unit.

To connect to the instrument, you can create an instance of the `Keysight_J7211` class by providing the necessary arguments:

```python
instrument = Keysight_J7211(name='my_instrument', address='GPIB0::1::INSTR', attenuation=50)
```

Here, `name` is the name of the instrument, `address` is the address or VISA alias of the instrument, and `attenuation` is an optional parameter to set the attenuation level in dB on startup.

Once the instrument is created, you can access and control its parameters. For example, to get the current attenuation level, you can use:

```python
attenuation = instrument.attenuation()
```

To set a new attenuation level, you can use:

```python
instrument.attenuation(60)
```

Remember to replace `'GPIB0::1::INSTR'` with the actual address of your instrument.

</TabItem>
</Tabs>