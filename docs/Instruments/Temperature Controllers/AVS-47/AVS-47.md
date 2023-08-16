
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AVS 47

## Instrument Card

<div className="flex">

<div>

The Picowatt AVS 47 is a resistance bridge used to measure the resistance of low-temperature sensors.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692120064/Instruments/Temperature%20Controllers/AVS-47/AVS-47.png" style={{ width: "325px" }} />

</div>

The Picowatt AVS 47 is a resistance bridge used to measure the resistance of low-temperature sensors.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125957/Instruments/Vendor%20Logos/Picowatt.png" style={{ width: "100%", objectFit: "cover" }} />

RV-Elektroniikka Oy PICOWATT is specialized in manufacturing instruments for thermometry at ultralow temperatures. Founded in February 1978, we have gathered 45 years of experience in designing and manufacturing low-noise precision. <a href="https://www.picowatt.fi/index1.html">Website</a>.

<ul>
  <li>Headquarters: Finland</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the AVS 47 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is a Python script that uses Instrumentkit to connect to a AVS 47 Temperature Controllers:

```python
import instrumentkit as ik

# Connect to the AVS 47 Temperature Controller
bridge = ik.picowatt.PicowattAVS47.open_gpibusb('/dev/ttyUSB0', 1)

# Get the resistance of the first sensor
resistance = bridge.sensor[0].resistance

# Print the resistance
print(resistance)
```

This script imports the `instrumentkit` module as `ik`. It then uses the `open_gpibusb` method of the `PicowattAVS47` class to connect to the AVS 47 Temperature Controller. The method takes the device path (`'/dev/ttyUSB0'`) and the GPIB address (`1`) as arguments.

After connecting to the controller, the script retrieves the resistance of the first sensor by accessing the `resistance` property of the `Sensor` object. Finally, it prints the resistance value.

</TabItem>
</Tabs>