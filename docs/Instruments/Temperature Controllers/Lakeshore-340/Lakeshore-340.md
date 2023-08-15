
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore 340

## Instrument Card

<div className="flex">

<div>

The Model 340 cryogenic temperature controller is our most advanced temperature controller and offers unsurpassed resolution, accuracy, and stability for temperature measurement and control applications to as low as 100 mK. Operating with diodes, platinum RTDs, and negative temperature coefficient (NTC) resistor sensors, the Model 340 is expandable to ten sensor inputs or to operate with thermocouple or capacitance sensors. It has two control loops, with the first loop powered to 100 W.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106962/Instruments/Temperature%20Controllers/Lakeshore-340/file.png" style={{width:"256px", height: "200px"}} />

</div>

The Model 340 cryogenic temperature controller is our most advanced temperature controller and offers unsurpassed resolution, accuracy, and stability for temperature measurement and control applications to as low as 100 mK. Operating with diodes, platinum RTDs, and negative temperature coefficient (NTC) resistor sensors, the Model 340 is expandable to ten sensor inputs or to operate with thermocouple or capacitance sensors. It has two control loops, with the first loop powered to 100 W.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width:"200px", height: "150px"}} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore 340 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Lakeshore 340 Temperature Controller using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Lakeshore 340 Temperature Controller
inst = ik.lakeshore.Lakeshore340.open_gpibusb('/dev/ttyUSB0', 1)

# Query the temperature of the first sensor
temperature = inst.sensor[0].temperature
print(temperature)
```

This script imports the `instrumentkit` module as `ik` and uses the `open_gpibusb` method of the `Lakeshore340` class to connect to the Temperature Controller. The `open_gpibusb` method takes the device path (`'/dev/ttyUSB0'`) and the GPIB address (`1`) as arguments.

After connecting, the script queries the temperature of the first sensor using `inst.sensor[0].temperature` and prints the result.

</TabItem>
</Tabs>