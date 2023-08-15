
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6514

## Instrument Card

<div className="flex">

<div>

6514 electrometer combines flexible interfacing capabilities with current sensitivity, charge measurement capabilities, resolution, and speed that are equal or superior to our earlier electrometers. The Model 6514’s built-in IEEE-488, RS-232, and digital I/O interfaces make it simple to configure fully automated, high speed systems for low-level testing. The 5½-digit Model 6514 is designed for applications that demand fast, yet precise measurements of low currents, voltages from high resistance sources, charges, or high resistances. The Model 6514’s exceptional measurement performance comes at an affordable price. While its cost is comparable with that of many high end DMMs, the Model 6514 offers far greater current sensitivity and significantly lower voltage burden (as low as 20μV) than other instruments can provide.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107054/Instruments/Power%20Meters/Keithley-6514/file.webp" style={{width:"256px", height: "200px"}} />

</div>

6514 electrometer combines flexible interfacing capabilities with current sensitivity, charge measurement capabilities, resolution, and speed that are equal or superior to our earlier electrometers. The Model 6514’s built-in IEEE-488, RS-232, and digital I/O interfaces make it simple to configure fully automated, high speed systems for low-level testing. The 5½-digit Model 6514 is designed for applications that demand fast, yet precise measurements of low currents, voltages from high resistance sources, charges, or high resistances. The Model 6514’s exceptional measurement performance comes at an affordable price. While its cost is comparable with that of many high end DMMs, the Model 6514 offers far greater current sensitivity and significantly lower voltage burden (as low as 20μV) than other instruments can provide.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width:"200px", height: "150px"}} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 6514 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Keithley 6514 Power Meter using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the power meter
power_meter = ik.keithley.Keithley6514.open_gpibusb('/dev/ttyUSB0', 12)

# Set the measurement mode to DC voltage
power_meter.mode = power_meter.Mode.voltage_dc

# Perform a measurement
measurement = power_meter.measure()

# Print the measurement result
print(measurement)
```

This code imports the `instrumentkit` module and uses the `open_gpibusb` method of the `Keithley6514` class to connect to the power meter. It then sets the measurement mode to DC voltage using the `mode` property and performs a measurement using the `measure` method. Finally, it prints the measurement result.

</TabItem>
</Tabs>