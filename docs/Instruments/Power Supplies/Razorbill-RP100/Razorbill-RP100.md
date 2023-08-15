
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Razorbill RP100

## Instrument Card

<div className="flex">

<div>

The RP100 is a two channel, sink-source power supply
designed to drive the CS100 series strain cells and the FC100
series stress cells. This power supply can be used in conjunction
with the corresponding range of compatible Razorbill Instruments
products to tune the electronic properties of materials by applying
controlled strains and stresses to the material.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106838/Instruments/Power%20Supplies/Razorbill-RP100/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The RP100 is a two channel, sink-source power supply
designed to drive the CS100 series strain cells and the FC100
series stress cells. This power supply can be used in conjunction
with the corresponding range of compatible Razorbill Instruments
products to tune the electronic properties of materials by applying
controlled strains and stresses to the material.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125964/Instruments/Vendor%20Logos/Razorbill_Instruments.png" style={{ width:"200px", height: "150px"}} />

Manufacturer of precision instruments intended for use in fundamental physics and space applications. The company manufactures electromechanical mechanisms to apply tunable uniaxial strains at low temperatures and high magnetic fields and provides expertise in the field of design for cryogenic environments, compliant mechanisms and compact systems for applying and measuring strain, enabling clients to incorporate a number of unique key technologies that allow them to have such high performance and repeatability. <a href="https://razorbillinstruments.com/">Website</a>.

<ul>
  <li>Headquarters: Edinburgh, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the Razorbill RP100 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

```python
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import (strict_discrete_set,
                                              strict_range)


class razorbillRP100(Instrument):
    """Represents Razorbill RP100 strain cell controller

    .. code-block:: python

        scontrol = razorbillRP100("ASRL/dev/ttyACM0::INSTR")

        scontrol.output_1 = True      # turns output on
        scontrol.slew_rate_1 = 1      # sets slew rate to 1V/s
        scontrol.voltage_1 = 10       # sets voltage on output 1 to 10V

    """

    output_1 = Instrument.control("OUTP1?", "OUTP1 %d",
                                  """Turns output of channel 1 on or off""",
                                  validator=strict_discrete_set,
                                  values={True: 1, False: 0},
                                  map_values=True)

    output_2 = Instrument.control("OUTP2?", "OUTP2 %d",
                                  """Turns output of channel 2 on or off""",
                                  validator=strict_discrete_set,
                                  values={True: 1, False: 0},
                                  map_values=True)

    voltage_1 = Instrument.control("SOUR1:VOLT?", "SOUR1:VOLT %g",
                                   """Sets or queries the output voltage of channel 1""",
                                   validator=strict_range,
                                   values=[-230, 230])

    voltage_2 = Instrument.control("SOUR2:VOLT?", "SOUR2:VOLT %g",
                                   """Sets or queries the output voltage of channel 2""",
                                   validator=strict_range,
                                   values=[-230, 230])

    slew_rate_1 = Instrument.control(
        "SOUR1:VOLT:SLEW?", "SOUR1:VOLT:SLEW %g",
        """Sets or queries the source slew rate in volts/sec of channel 1""",
        validator=strict_range,
        values=[0.1 * 10e-3, 100 * 10e3]
    )

    slew_rate_2 = Instrument.control(
        "SOUR2:VOLT:SLEW?", "SOUR2:VOLT:SLEW %g",
        """Sets or queries the source slew rate in volts/sec of channel 2""",
        validator=strict_range,
        values=[0.1 * 10e-3, 100 * 10e3]
    )

    instant_voltage_1 = Instrument.measurement(
        "SOUR1:VOLT:NOW?",
        """Returns the instantaneous output of source one in volts"""
    )

    instant_voltage_2 = Instrument.measurement(
        "SOUR2:VOLT:NOW?",
        """Returns the instanteneous output of source two in volts"""
    )

    contact_voltage_1 = Instrument.measurement(
        "MEAS1:VOLT?",
        """Returns the Voltage in volts present at the front panel output of channel 1"""
    )

    contact_voltage_2 = Instrument.measurement(
        "MEAS2:VOLT?",
        """Returns the Voltage in volts present at the front panel output of channel 2"""
    )

    contact_current_1 = Instrument.measurement(
        "MEAS1:CURR?",
        """Returns the current in amps present at the front panel output of channel 1"""
    )

    contact_current_2 = Instrument.measurement(
        "MEAS2:CURR?",
        """Returns the current in amps present at the front panel output of channel 2"""
    )

    def __init__(self, adapter, name="Razorbill RP100 Piezo Stack Powersupply", **kwargs):
        super().__init__(
            adapter, name, **kwargs
        )
        self.timeout = 20
```

This code defines a class `razorbillRP100` that represents a Razorbill RP100 strain cell controller. It inherits from the `Instrument` class provided by the `pymeasure.instruments` module.

The class provides various control and measurement properties for interacting with the Razorbill RP100 power supply. Here's a summary of the properties:

- `output_1`: Controls the output of channel 1. Can be set to `True` or `False` to turn the output on or off.
- `output_2`: Controls the output of channel 2. Can be set to `True` or `False` to turn the output on or off.
- `voltage_1`: Sets or queries the output voltage of channel 1. The value should be within the range of -230 to 230.
- `voltage_2`: Sets or queries the output voltage of channel 2. The value should be within the range of -230 to 230.
- `slew_rate_1`: Sets or queries the source slew rate in volts/sec of channel 1. The value should be within the range of 0.1 * 10e-3 to 100 * 10e3.
- `slew_rate_2`: Sets or queries the source slew rate in volts/sec of channel 2. The value should be within the range of 0.1 * 10e-3 to 100 * 10e3.
- `instant_voltage_1`: Returns the instantaneous output voltage of source one in volts.
- `instant_voltage_2`: Returns the instantaneous output voltage of source two in volts.
- `contact_voltage_1`: Returns the voltage present at the front panel output of channel 1 in volts.
- `contact_voltage_2`: Returns the voltage present at the front panel output of channel 2 in volts.
- `contact_current_1`: Returns the current present at the front panel output of channel 1 in amps.
- `contact_current_2`: Returns the current present at the front panel output of channel 2 in amps.

The `razorbillRP100` class also has an `__init__` method that initializes the instrument with the provided adapter and sets a timeout of 20 seconds.

</TabItem>
</Tabs>