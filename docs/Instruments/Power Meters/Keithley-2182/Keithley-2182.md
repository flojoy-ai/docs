
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2182

## Instrument Card

<div className="flex">

<div>

The two-channel Model 2182A Nanovoltmeter is optimized for making stable, low noise voltage measurements and for characterizing low resistance materials and devices reliably and repeatably. It provides higher measurement speed and significantly better noise performance than alternative low voltage measurement solutions. It offers a simplified delta mode for making resistance measurements in combination with a reversing current source, such as the Model 6220 or 6221.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118362/Instruments/Power%20Meters/Keithley-2182/Keithley-2182.png" style={{ width: "325px" }} />

</div>

The two-channel Model 2182A Nanovoltmeter is optimized for making stable, low noise voltage measurements and for characterizing low resistance materials and devices reliably and repeatably. It provides higher measurement speed and significantly better noise performance than alternative low voltage measurement solutions. It offers a simplified delta mode for making resistance measurements in combination with a reversing current source, such as the Model 6220 or 6221.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2182 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Keithley 2182 Power Meter using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Keithley 2182 Power Meter
power_meter = ik.keithley.Keithley2182.open_gpibusb('/dev/ttyUSB0', 12)

# Perform a measurement
measurement = power_meter.measure()

# Print the measurement result
print(measurement)
```

This script imports the `instrumentkit` module and uses the `open_gpibusb` method from the `ik.keithley.Keithley2182` class to connect to the Keithley 2182 Power Meter. The `open_gpibusb` method takes the device path (`/dev/ttyUSB0`) and the GPIB address (12) as arguments.

After connecting to the power meter, the script calls the `measure` method to perform a measurement. The measurement result is stored in the `measurement` variable.

Finally, the script prints the measurement result using the `print` function.

</TabItem>
</Tabs>