
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 485

## Instrument Card

<div className="flex">

<div>

The Keithley 485 Autoranging Picoammeter provides 100fA sensitivity with 4 1/2-digit resolution in a low-cost, highly sensitive, easy-to-use instrument. The 485 measures DC current on seven ranges covering 10 decades from 100fA to 2mA. The input can withstand overloads as high as 1000V (with 100kΩ limiting resistor) for flexibility in a wide range of applications in test, research, and student labs. An analog output linearly converts the incoming current to voltage for hard copy output or control loop applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106768/Instruments/Power%20Meters/Keithley-485/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The Keithley 485 Autoranging Picoammeter provides 100fA sensitivity with 4 1/2-digit resolution in a low-cost, highly sensitive, easy-to-use instrument. The 485 measures DC current on seven ranges covering 10 decades from 100fA to 2mA. The input can withstand overloads as high as 1000V (with 100kΩ limiting resistor) for flexibility in a wide range of applications in test, research, and student labs. An analog output linearly converts the incoming current to voltage for hard copy output or control loop applications.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width:"200px", height: "150px"}} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 485 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Keithley 485 Power Meter using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Keithley 485 Power Meter
power_meter = ik.keithley.Keithley485.open_gpibusb('/dev/ttyUSB0', 12)

# Set the measurement mode to power
power_meter.mode = power_meter.Mode.power

# Measure the power
power_measurement = power_meter.measure()

# Print the power measurement
print(power_measurement)
```

This script imports the `instrumentkit` module and uses the `open_gpibusb` method from the `ik.keithley.Keithley485` class to connect to the Keithley 485 Power Meter. It then sets the measurement mode to power using the `mode` property and measures the power using the `measure` method. Finally, it prints the power measurement.

</TabItem>
</Tabs>