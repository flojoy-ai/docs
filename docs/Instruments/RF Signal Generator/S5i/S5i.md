
# S5i

## Instrument Card

<div className="flex">

<div>

The S5i module is a RF source ranging from 40 MHz to 4 GHz, initially designed for reflectometry. The output power of the fundamental frequency ranges from -20 dBm to 14 dBm and can be controlled by both the front panel and via software. The RF output can be muted by an external source, which gives an on/off ratio of larger than 60 dB.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692078078/Instruments/RF%20Signal%20Generator/S5i/S5i.png" style={{ width: "325px" }} />

</div>

The S5i module is a RF source ranging from 40 MHz to 4 GHz, initially designed for reflectometry. The output power of the fundamental frequency ranges from -20 dBm to 14 dBm and can be controlled by both the front panel and via software. The RF output can be muted by an external source, which gives an on/off ratio of larger than 60 dB.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125978/Instruments/Vendor%20Logos/QuTech.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics. <a href="https://qutech.nl/">Website</a>.

<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
</ul>
</details>

## Connect to the S5i in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to an S5i RF Signal Generator using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Bool, Numbers
from spirack import S5i_module

class S5i(Instrument):
    # ... (same code as provided in the question)

# Create an instance of the SPI_rack class from the spirack package
spi_rack = SPI_rack()

# Create an instance of the S5i RF Signal Generator
s5i = S5i('s5i', spi_rack, module=1)

# Connect to the S5i RF Signal Generator
s5i.connect()

# Now you can use the S5i RF Signal Generator
# For example, to enable the RF output:
s5i.output_enabled(True)

# To set the frequency:
s5i.frequency(42e6)

# To set the output power:
s5i.power(10)

# To optimize the stepsize for the current frequency:
s5i.optimize_for_frequency()

# To disconnect from the S5i RF Signal Generator:
s5i.disconnect()
```

Note: In the above code, make sure to replace `SPI_rack()` with the appropriate initialization of the SPI_rack class from the spirack package.

