
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bluefors temperature controller


## Instrument Card

<div className="flex">

<div>

With a modern and intuitive user interface, you gain direct control and overview of the dilution refrigerator system’s temperature status.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106857/Instruments/Temperature%20Controllers/Bluefors-temperature-controller/file.png" style={{width:"256px", height: "200px"}} />

</div>

With a modern and intuitive user interface, you gain direct control and overview of the dilution refrigerator system’s temperature status.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126011/Instruments/Vendor%20Logos/Bluefors.png" style={{ width:"200px", height: "150px"}} />

**Bluefors** is the world's leading manufacturer of ultra-low temperature dilution refrigerator measurement systems. <a href="https://bluefors.com/">Website</a>.

<ul>
  <li>Headquarters: Finland</li>
  <li>Yearly Revenue (millions, USD): 32.0</li>
</ul>
</details>

## Connect to the Bluefors temperature controller
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Bluefors temperature controller using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument_drivers.BlueFors.BlueFors import BlueFors

# Create an instance of the BlueFors instrument
bluefors = BlueFors(name='bluefors',
                    folder_path='/path/to/log/folder',
                    channel_vacuum_can=1,
                    channel_pumping_line=2,
                    channel_compressor_outlet=3,
                    channel_compressor_inlet=4,
                    channel_mixture_tank=5,
                    channel_venting_line=6,
                    channel_50k_plate=7,
                    channel_4k_plate=8,
                    channel_still=9,
                    channel_mixing_chamber=10,
                    channel_magnet=11)

# Connect to the BlueFors instrument
bluefors.connect_message()

# Get the temperature and pressure readings
temperature_50k_plate = bluefors.temperature_50k_plate()
temperature_4k_plate = bluefors.temperature_4k_plate()
pressure_vacuum_can = bluefors.pressure_vacuum_can()
pressure_pumping_line = bluefors.pressure_pumping_line()

# Print the readings
print(f"Temperature of 50K plate: {temperature_50k_plate} K")
print(f"Temperature of 4K plate: {temperature_4k_plate} K")
print(f"Pressure of vacuum can: {pressure_vacuum_can} mBar")
print(f"Pressure of pumping line: {pressure_pumping_line} mBar")

# Disconnect from the BlueFors instrument
bluefors.disconnect()
```

Make sure to replace `/path/to/log/folder` with the actual path to the BlueFors log folder on your system. Also, adjust the channel numbers according to your specific setup.

</TabItem>
</Tabs>