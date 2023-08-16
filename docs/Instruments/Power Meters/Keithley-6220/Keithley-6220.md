
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6220

## Instrument Card

<div className="flex">

<div>

The Model 6220 DC Current Source and Model 6221 AC and DC Current Source combine ease of use with exceptionally low current noise. Low current sourcing is critical to applications in test environments ranging from R&D to production, especially in the semiconductor, nanotechnology, and superconductor industries. High DC power supply sourcing accuracy and built-in control functions make the Models 6220 and 6221 ideal for applications like Hall measurements, resistance measurements using delta mode, pulsed measurements, and differential conductance measurements.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118566/Instruments/Power%20Meters/Keithley-6220/Keithley-6220.png" style={{ width: "325px" }} />

</div>

The Model 6220 DC Current Source and Model 6221 AC and DC Current Source combine ease of use with exceptionally low current noise. Low current sourcing is critical to applications in test environments ranging from R&D to production, especially in the semiconductor, nanotechnology, and superconductor industries. High DC power supply sourcing accuracy and built-in control functions make the Models 6220 and 6221 ideal for applications like Hall measurements, resistance measurements using delta mode, pulsed measurements, and differential conductance measurements.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 6220 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Keithley 6220 Power Meter using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Keithley 6220 Power Meter
power_meter = ik.keithley.Keithley6220.open_gpibusb('/dev/ttyUSB0', 12)

# Perform a measurement
measurement = power_meter.measure()

# Print the measurement result
print(measurement)
```

This script imports the `instrumentkit` module and uses the `open_gpibusb` method from the `ik.keithley.Keithley6220` class to connect to the Keithley 6220 Power Meter. The `open_gpibusb` method takes the device path (`/dev/ttyUSB0`) and the GPIB address (12) as arguments.

After connecting to the power meter, the script calls the `measure` method to perform a measurement. The measurement result is stored in the `measurement` variable.

Finally, the script prints the measurement result using the `print` function.

</TabItem>
</Tabs>