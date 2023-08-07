
# D5a

## Instrument Card

The D5a module contains 16 18-bit DACs (Digital to Analog Converters), initially created for setting gate-voltages on samples. In contrast to most commercial units, there are no processor or clock circuits present in this module. This to prevent interference. The only time any digital signals are present is when the DAC values are being changed. Afterwards the module goes back to being static. The DAC values are set via the controller module. As this module is generally used for gate voltage control, the use of an isolated controller module (C1b/C2 combination) is recommended.

<details open>
<summary><h2>Manufacturer Card</h2></summary>
At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics. <a href="https://qutech.nl/">Website</a>.
<br></br>
<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
</ul>
</details>

## Connect to the D5a in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

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
    # ... (the rest of the code provided in the question)

# Create an instance of the SPI_rack class
spi_rack = SPI_rack("SPI_rack", "COM1")  # Replace "COM1" with the appropriate port name

# Create an instance of the D5a class
d5a = D5a("D5a", spi_rack, module=1)

# Connect to the D5a Power Supply
d5a.connect()

# Now you can use the D5a Power Supply
# For example, to set DAC 1 to a voltage of 2.5V:
d5a.dac1(2.5)

# To get the current voltage of DAC 1:
voltage = d5a.dac1()

# To set all DACs to zero voltage:
d5a.set_dacs_zero()

# Disconnect from the D5a Power Supply
d5a.disconnect()
```

Note: Replace `"COM1"` with the appropriate port name for your SPI rack.

