---
title: Connecting to D5a by Qutech in Python
sidebar_label: D5a
description: The D5a module contains 16 18-bit DACs (Digital to Analog Converters), initially created for setting gate-voltages on samples. In contrast to most commercial units, there are no processor or clock circuits present in this module. This to prevent interference. The only time any digital signals are present is when the DAC values are being changed. Afterwards the module goes back to being static. The DAC values are set via the controller module. As this module is generally used for gate voltage control, the use of an isolated controller module (C1b/C2 combination) is recommended.
keywords: [power supplies, Qutech, QCodes Community]
slug: /instruments-database/power-supplies/qutech/d5a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395712/Instruments/Power%20Supplies/D5a/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# D5a

## Instrument Card

<div className="flex">

<div>

The D5a module contains 16 18-bit DACs (Digital to Analog Converters), initially created for setting gate-voltages on samples. In contrast to most commercial units, there are no processor or clock circuits present in this module. This to prevent interference. The only time any digital signals are present is when the DAC values are being changed. Afterwards the module goes back to being static. The DAC values are set via the controller module. As this module is generally used for gate voltage control, the use of an isolated controller module (C1b/C2 combination) is recommended.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395712/Instruments/Power%20Supplies/D5a/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806156/Instruments/Vendor%20Logos/QuTech.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics.

<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
  <li>Vendor Website: <a href="https://qutech.nl/">here</a></li>
</ul>
</details>

## Connect to the D5a in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a D5a Power Supply using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Enum, Numbers
from qcodes_contrib_drivers.drivers.SPI_rack import SPI_rack

try:
    from spirack import D5a_module
except ImportError:
    raise ImportError(('The D5a_module class could not be found. '
                       'Try installing it using pip install spirack'))

from functools import partial


class D5a(Instrument):

    def __init__(self, name, spi_rack, module, inter_delay=0.1, dac_step=10e-3,
                 reset_voltages=False, mV=False, number_dacs=16, **kwargs):
                 
        super().__init__(name, **kwargs)

        self.d5a = D5a_module(spi_rack, module, reset_voltages=reset_voltages)
        self._number_dacs = number_dacs

        self._span_set_map = {
            '4v uni': 0,
            '4v bi': 2,
            '2v bi': 4,
        }

        self._span_get_map = {v: k for k, v in self._span_set_map.items()}

        self.add_function('set_dacs_zero', call_cmd=self._set_dacs_zero,
                          docstring='Reset all dacs to zero voltage. No ramping is performed.')

        if mV:
            self._gain = 1e3
            unit = 'mV'
        else:
            self._gain = 1
            unit = 'V'

        for i in range(self._number_dacs):
            validator = self._get_validator(i)

            self.add_parameter('dac{}'.format(i + 1),
                               label='DAC {}'.format(i + 1),
                               get_cmd=partial(self._get_dac, i),
                               set_cmd=partial(self._set_dac, i),
                               unit=unit,
                               vals=validator,
                               step=dac_step,
                               inter_delay=inter_delay)

            self.add_parameter('stepsize{}'.format(i + 1),
                               get_cmd=partial(self.d5a.get_stepsize, i),
                               unit='V',
                               docstring='Returns the smallest voltage step of the DAC.')

            self.add_parameter('span{}'.format(i + 1),
                               get_cmd=partial(self._get_span, i),
                               set_cmd=partial(self._set_span, i),
                               vals=Enum(*self._span_set_map.keys()),
                               docstring='Change the output span of the DAC. This command also updates the validator.')




    def set_dac_unit(self, unit: str) -> None:
        """Set the unit of dac parameters"""
        allowed_values = Enum('mV', 'V')
        allowed_values.validate(unit)
        self._gain = {'V': 1, 'mV': 1e3}[unit]
        for i in range(1, self._number_dacs + 1):
            setattr(self.parameters[f'dac{i}'], 'unit', unit)
            setattr(self.parameters[f'dac{i}'], 'vals', self._get_validator(i - 1))



    def _set_dacs_zero(self):
        for i in range(self._number_dacs):
            self._set_dac(i, 0.0)

    def _set_dac(self, dac, value):
        return self.d5a.set_voltage(dac, value / self._gain)

    def _get_dac(self, dac):
        return self._gain * self.d5a.voltages[dac]

    def _get_span(self, dac):
        return self._span_get_map[self.d5a.span[dac]]

    def _set_span(self, dac, span_str):
        self.d5a.change_span_update(dac, self._span_set_map[span_str])
        self.parameters['dac{}'.format(
            dac + 1)].vals = self._get_validator(dac)

    def _get_validator(self, dac):
        span = self.d5a.span[dac]
        if span == D5a_module.range_2V_bi:
            validator = Numbers(-2 * self._gain, 2 * self._gain)
        elif span == D5a_module.range_4V_bi:
            validator = Numbers(-4 * self._gain, 4 * self._gain)
        elif span == D5a_module.range_4V_uni:
            validator = Numbers(0, 4 * self._gain)
        else:
            msg = 'The found DAC span of {} does not correspond to a known one'
            raise Exception(msg.format(span))

        return validator

# Create an instance of the SPI_rack class
spi_rack = SPI_rack("SPI_rack", "COM1")  # Replace "COM1" with the appropriate port name

# Create an instance of the D5a class
d5a = D5a("D5a", spi_rack, module=1)

# Connect to the D5a Power Supply
d5a.connect()

# Now you can use the D5a Power Supply
# For example, to set DAC1 voltage to 2.5V:
d5a.dac1(2.5)

# To get the minimum step size of DAC2:
step_size = d5a.stepsize2()

# To change the output span of DAC3 to '4v bi':
d5a.span3('4v bi')

# To reset all DACs to zero voltage:
d5a.set_dacs_zero()

# Disconnect from the D5a Power Supply
d5a.disconnect()
```

Note: Replace `"COM1"` with the appropriate port name for your SPI rack connection.

<<<<<<< HEAD:docs/instruments-database/Power Supplies/D5a/D5a.md
</TabItem>
</Tabs>
=======
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/Power%20Supplies/D5a/D5a.md)
>>>>>>> 216cbc78 (feat: Added unique GitHub edit links to each .md file):docs/Instruments/Power Supplies/D5a.md
