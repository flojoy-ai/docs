
# M2j

## Instrument Card

<div className="flex">

<div>

The M2j module is a low noise amplifier initially designed for use in reflectometry. It has been optimised for use with the F1d IQ Demodulator with a 40 MHz to 1.5 GHz frequency range. This is reflected in the gain flatness of M2j: within 3dB from 40 MHz to 1.4 GHz.

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/iCiZI1zB1n4E5DV6n0K10A/zpkUj0Leg2XrMtKXWYZdFYtvmS0aqOqUkJwGzaMl4UBBuYJ4DKNt7Gno95gKwn8D6l5tP6nhIRzns-dCy_kLJqxTwq8c4vOxpWraSPXJuJQ/h5bckmfg5W0CIyIoQdJw3qmzrYjxLWzNRQbwulS_HBU"/>

</div>

The M2j module is a low noise amplifier initially designed for use in reflectometry. It has been optimised for use with the F1d IQ Demodulator with a 40 MHz to 1.5 GHz frequency range. This is reflected in the gain flatness of M2j: within 3dB from 40 MHz to 1.4 GHz.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics. <a href="https://qutech.nl/">Website</a>.

<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
</ul>
</details>

## Connect to the M2j in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to an M2j Lockin Amplifier using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Numbers
import numpy as np

try:
    from spirack import M2j_module, SPI_rack
except ImportError:
    raise ImportError(('The M2j_module class could not be found. '
                       'Try installing it using pip install spirack'))


class M2j(Instrument):
    # The code for the M2j class is provided in the question

# Create an instance of the SPI_rack class
spi_rack = SPI_rack()

# Connect to the M2j Lockin Amplifier module
m2j_module = M2j('m2j', spi_rack, module=1)

# Set the gain of the amplifier
m2j_module.gain(50)

# Get the RF level after amplification
rf_level = m2j_module.RF_level()

# Clear RF clip
m2j_module.clear_rf_clip()

# Check if RF is clipped
is_rf_clipped = m2j_module.is_rf_clipped()
```

This script creates an instance of the `SPI_rack` class and connects to the M2j Lockin Amplifier module using the `M2j` class. It then sets the gain of the amplifier to 50 dB, gets the RF level after amplification, clears RF clip, and checks if RF is clipped.

