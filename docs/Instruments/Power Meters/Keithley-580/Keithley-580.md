
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 580

## Instrument Card

<div className="flex">

<div>

The Keithley 580 Micro-ohmmeter combines high accuracy, resolution, and sensitivity with three special capabilities that make micro-ohm measurements easier and more versatile than ever. When measuring contact and connector resistances, it is important not to puncture oxides and films that may have formed. The Model 580 ensures this dry-circuit condition by clamping the open-circuit test voltage to 20mV on the 200m, 2, and 20 ranges when the 20mV MAX button is pressed.

The Keithley 580 can test more devices by enabling both test current polarity and waveform (DC or pulsed) to be selected. When using pulsed test current, the Model 580 automatically compensates for thermoelectric EMFs. Tests on inductive devices are best performed using DC test current, as this avoids the effects of time constants on pulsed current resistance measurements. For temperature-sensitive components, a single trigger mode of operation minimizes power delivered to the device.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118417/Instruments/Power%20Meters/Keithley-580/Keithley-580.png" style={{ width: "325px", height: "200px" }} />

</div>

The Keithley 580 Micro-ohmmeter combines high accuracy, resolution, and sensitivity with three special capabilities that make micro-ohm measurements easier and more versatile than ever. When measuring contact and connector resistances, it is important not to puncture oxides and films that may have formed. The Model 580 ensures this dry-circuit condition by clamping the open-circuit test voltage to 20mV on the 200m, 2, and 20 ranges when the 20mV MAX button is pressed.

The Keithley 580 can test more devices by enabling both test current polarity and waveform (DC or pulsed) to be selected. When using pulsed test current, the Model 580 automatically compensates for thermoelectric EMFs. Tests on inductive devices are best performed using DC test current, as this avoids the effects of time constants on pulsed current resistance measurements. For temperature-sensitive components, a single trigger mode of operation minimizes power delivered to the device.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 580 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a Keithley 580 Power Meter using Instrumentkit, you can use the following Python script:

```python
import instrumentkit as ik

# Connect to the Keithley 580 Power Meter
power_meter = ik.keithley.Keithley580.open_gpibusb('/dev/ttyUSB0', 12)

# Set the measurement mode to power
power_meter.mode = power_meter.Mode.power

# Measure the power
power_measurement = power_meter.measure()

# Print the power measurement
print(power_measurement)
```

This script imports the `instrumentkit` module and uses the `open_gpibusb` method of the `Keithley580` class to connect to the Keithley 580 Power Meter. It then sets the measurement mode to power using the `mode` property and measures the power using the `measure` method. Finally, it prints the power measurement.

</TabItem>
</Tabs>