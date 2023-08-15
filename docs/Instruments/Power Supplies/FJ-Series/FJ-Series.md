
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FJ Series

## Instrument Card

<div className="flex">

<div>

FJ Series - 120W regulated high voltage AC-DC power supplies with outputs from 0 - 1kVDC to 0 - 60kVDC

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106959/Instruments/Power%20Supplies/FJ-Series/file.webp" style={{width:"256px", height: "200px"}} />

</div>

FJ Series - 120W regulated high voltage AC-DC power supplies with outputs from 0 - 1kVDC to 0 - 60kVDC>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125998/Instruments/Vendor%20Logos/Glassman.png" style={{ width:"200px", height: "150px"}} />

Looking for the leading manufacturer of AC-DC **power** supplies, DC-DC converters, high voltage, RF & custom **power** products? Discover our extensive range. <a href="https://www.xppower.com">Website</a>.

<ul>
  <li>Headquarters: Singapore</li>
  <li>Yearly Revenue (millions, USD): 295.0</li>
</ul>
</details>

## Connect to the FJ Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a FJ Series Power Supply using Instrumentkit, you can use the `GlassmanFR` class from the `instruments.glassman.glassmanfr` module. Here's an example script:

```python
import instruments as ik

# Connect to the power supply
psu = ik.glassman.GlassmanFR.open_serial('/dev/ttyUSB0', 9600)

# Set the output voltage to 100V
psu.voltage = 100

# Turn on the power supply
psu.output = True

# Read the output voltage
voltage = psu.voltage
print(voltage)
```

This script first imports the `instruments` module from Instrumentkit. Then, it creates an instance of the `GlassmanFR` class by calling the `open_serial` method and passing the serial port and baud rate as arguments.

Next, it sets the output voltage of the power supply to 100V by assigning a value to the `voltage` property of the `psu` object.

After that, it turns on the power supply by assigning `True` to the `output` property of the `psu` object.

Finally, it reads the output voltage by accessing the `voltage` property of the `psu` object and prints the result.

Note that you may need to modify the serial port and baud rate values according to your specific setup.

</TabItem>
</Tabs>