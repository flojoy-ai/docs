---
title: Connecting to Gentec EO Maestro by Gentec Eo in Python
sidebar_label: Gentec EO Maestro
description: Touchscreen display device for power & energy measurement. Single-channel, multiple outputs (USB, Ethernet, analog).
keywords: [screen displays, Gentec Eo, QCodes Community]
slug: /instruments-database/screen-displays/gentec-eo/gentec-EO-maestro
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395720/Instruments/Screen%20Displays/Gentec-EO-Maestro/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gentec EO Maestro

## Instrument Card

<div className="flex">

<div>

Touchscreen display device for power & energy measurement. Single-channel, multiple outputs (USB, Ethernet, analog).

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395720/Instruments/Screen%20Displays/Gentec-EO-Maestro/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://downloads.gentec-eo.com/prod/cecfd555/MAESTRO-Product-specifications-Gentec-EO.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813160/Instruments/Vendor%20Logos/GentecEO.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Gentec-EO is a manufacturer of laser beam measurement technologies.

<ul>
  <li>Headquarters: Canada - QC</li>
  <li>Yearly Revenue (millions, USD): 14.0</li>
  <li>Vendor Website: <a href="https://www.gentec-eo.com/">here</a></li>
</ul>
</details>

## Connect to the Gentec EO Maestro in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Gentec EO Maestro Screen Display using Qcodes Community, you can use the following Python script:

```python
from qcodes import VisaInstrument
from qcodes.utils.helpers import create_on_off_val_mapping

class Gentec_Maestro(VisaInstrument):
    r"""
    Instrument driver for the Gentec Maestro powermeter.
    Args:
        name (str): Instrument name.
        address (str): ASRL address
        baud_rate (int): Baud rate for the connection.
    Attributes:
        model (str): Model identification.
        firmware_version (str): Firmware version.
    """

    def __init__(self, name, address, baud_rate=115200, **kwargs):
        super().__init__(name, address, **kwargs)

        # set baud rate
        self.visa_handle.baud_rate = baud_rate

        # get instrument information
        self.model, _, self.firmware_version = self._query_versions()

        # add parameters
        self.add_parameter('power',
                           get_cmd='*CVU',
                           get_parser=float,
                           label='Power',
                           unit='W')

        def wavelength_get_parser(ans):
            return int(ans[4:])
        self.add_parameter('wavelength',
                           get_cmd='*GWL',
                           set_cmd='*PWC{0:0>5}',
                           get_parser=wavelength_get_parser,
                           label='Wavelength',
                           unit='nm')

        def zero_offset_get_parser(ans):
            return int(ans[5:])
        self.add_parameter('zero_offset_enabled',
                           get_cmd='*GZO',
                           get_parser=zero_offset_get_parser,
                           val_mapping=create_on_off_val_mapping(on_val=1, off_val=0),
                           label='Zero offset enabled')

        # print connect message
        self.connect_message()

    # get methods
    def get_idn(self):
        return {'vendor': 'Gentec', 'model': self.model, 'firmware': self.firmware_version}

    # further methods
    def clear_zero_offset(self):
        self.write('*COU')

    def set_zero_offset(self):
        self.write('*SOU')

    def _query_versions(self):
        return self.ask('*VER').split()


# Connect to the Gentec EO Maestro powermeter
maestro = Gentec_Maestro('maestro', 'ASRL1::INSTR', baud_rate=115200)

# Get the power reading
power = maestro.power()
print(f"Power: {power} W")

# Get the wavelength setting
wavelength = maestro.wavelength()
print(f"Wavelength: {wavelength} nm")

# Check if zero offset is enabled
zero_offset_enabled = maestro.zero_offset_enabled()
print(f"Zero offset enabled: {zero_offset_enabled}")

# Clear the zero offset
maestro.clear_zero_offset()

# Set the zero offset
maestro.set_zero_offset()

# Disconnect from the powermeter
maestro.close()
```

This script creates a `Gentec_Maestro` class that inherits from `VisaInstrument` provided by Qcodes. It initializes the instrument by setting the baud rate, querying the instrument information, and adding parameters for power, wavelength, and zero offset enabled.

To connect to the Gentec EO Maestro powermeter, you can create an instance of the `Gentec_Maestro` class with the appropriate name, address, and baud rate. In the example above, it connects to the instrument with the name `'maestro'`, address `'ASRL1::INSTR'`, and baud rate `115200`.

You can then use the added parameters to retrieve the power reading, wavelength setting, and check if the zero offset is enabled. The `clear_zero_offset` and `set_zero_offset` methods can be used to clear or set the zero offset, respectively.

Finally, the script closes the connection to the powermeter using the `close` method.

Note: Make sure to replace `'ASRL1::INSTR'` with the correct address of your Gentec EO Maestro powermeter.

</TabItem>
</Tabs>