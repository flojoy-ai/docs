
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore 425

## Instrument Card

<div className="flex">

<div>

Lake Shore Model 425 gaussmeter provides high-end functionality and performance in an affordable desktop instrument. Magnet testing and sorting have never been easier. When used in combination with the built-in relay and audible alarm features, the Model 425 takes the guesswork out of pass/fail criteria. Additional features including DC to 10 kHz AC frequency response, max hold and relative measurement make the Model 425 the ideal tool for your manufacturing, quality control and R&D flux density measurement applications. Put the Model 425 gaussmeter to use with confidence knowing it’s supported by industry leading experts in magnet measurement instrument, sensor, and Hall probe technology.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077842/Instruments/Power%20Meters/Lakeshore-425/Lakeshore-425.png" style={{ width: "325px", height: "200px" }} />

</div>

Lake Shore Model 425 gaussmeter provides high-end functionality and performance in an affordable desktop instrument. Magnet testing and sorting have never been easier. When used in combination with the built-in relay and audible alarm features, the Model 425 takes the guesswork out of pass/fail criteria. Additional features including DC to 10 kHz AC frequency response, max hold and relative measurement make the Model 425 the ideal tool for your manufacturing, quality control and R&D flux density measurement applications. Put the Model 425 gaussmeter to use with confidence knowing it’s supported by industry leading experts in magnet measurement instrument, sensor, and Hall probe technology.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width: "100%", objectFit: "cover" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore 425 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments import Instrument
from pymeasure.instruments.validators import strict_discrete_set, truncated_discrete_set

from time import sleep
import numpy as np


class LakeShore425(Instrument):
    """ Represents the LakeShore 425 Gaussmeter and provides
    a high-level interface for interacting with the instrument
    """

    field = Instrument.measurement(
        "RDGFIELD?",
        """ Returns the field in the current units """
    )
    unit = Instrument.control(
        "UNIT?", "UNIT %d",
        """ A string property that controls the units of the instrument,
        which can take the values of G, T, Oe, or A/m. """,
        validator=strict_discrete_set,
        values={'G': 1, 'T': 2, 'Oe': 3, 'A/m': 4},
        map_values=True
    )
    range = Instrument.control(
        "RANGE?", "RANGE %d",
        """ A floating point property that controls the field range in
        units of Gauss, which can take the values 35, 350, 3500, and
        35,000 G. """,
        validator=truncated_discrete_set,
        values={35: 1, 350: 2, 3500: 3, 35000: 4},
        map_values=True
    )

    def __init__(self, adapter, name="LakeShore 425 Gaussmeter", **kwargs):
        super().__init__(
            adapter,
            name,
            asrl={'write_termination': "\n",
                  'read_termination': "\n",  # from manual
                  'baud_rate': 57600,
                  'timeout': 500,
                  'parity': 1,  # odd
                  'data_bits': 7
                  },
            **kwargs
        )

    def auto_range(self):
        """ Sets the field range to automatically adjust """
        self.write("AUTO")

    def dc_mode(self, wideband=True):
        """ Sets up a steady-state (DC) measurement of the field """
        if wideband:
            self.mode = (1, 0, 1)
        else:
            self.mode(1, 0, 2)

    def ac_mode(self, wideband=True):
        """ Sets up a measurement of an oscillating (AC) field """
        if wideband:
            self.mode = (2, 1, 1)
        else:
            self.mode = (2, 1, 2)

    @property
    def mode(self):
        return tuple(self.values("RDGMODE?"))

    @mode.setter
    def mode(self, value):
        """ Provides access to directly setting the mode, filter, and
        bandwidth settings
        """
        mode, filter, band = value
        self.write("RDGMODE %d,%d,%d" % (mode, filter, band))

    def zero_probe(self):
        """ Initiates the zero field sequence to calibrate the probe """
        self.write("ZPROBE")

    def measure(self, points, has_aborted=lambda: False, delay=1e-3):
        """Returns the mean and standard deviation of a given number
        of points while blocking
        """
        data = np.zeros(points, dtype=np.float32)
        for i in range(points):
            if has_aborted():
                break
            data[i] = self.field
            sleep(delay)
        return data.mean(), data.std()


# Example usage
from pymeasure.adapters import SerialAdapter

# Create a serial adapter for the instrument
adapter = SerialAdapter(port='COM1')

# Create an instance of the LakeShore425 class
gauge = LakeShore425(adapter)

# Set the unit to Gauss
gauge.unit = 'G'

# Set the range to 350 G
gauge.range = 350

# Perform a measurement of 10 points
mean, std = gauge.measure(10)

# Print the results
print("Mean: ", mean)
print("Standard Deviation: ", std)
```

This script creates a class `LakeShore425` that represents the LakeShore 425 Gaussmeter. It provides methods and properties to interact with the instrument, such as setting the unit, range, and measurement mode, as well as performing measurements and retrieving the field value.

In the example usage section, it demonstrates how to connect to the instrument using a serial adapter, set the unit and range, and perform a measurement of 10 points. The mean and standard deviation of the measurements are then printed.

</TabItem>
<TabItem value="Pytango" label="Pytango">

To connect to a Lake Shore Model 425 Gaussmeter using Pytango, you can use the following code:

```python
import PyTango

# Create a DeviceProxy for the Lake Shore Model 425 Gaussmeter
device_proxy = PyTango.DeviceProxy("device_name")

# Connect to the device
device_proxy.Connect()

# Check if the device is connected
if device_proxy.State() == PyTango.DevState.ON:
    print("Device is connected.")
else:
    print("Device is not connected.")

# Disconnect from the device
device_proxy.Disconnect()
```

Replace `"device_name"` with the actual name of the device in your Tango database.

</TabItem>
</Tabs>