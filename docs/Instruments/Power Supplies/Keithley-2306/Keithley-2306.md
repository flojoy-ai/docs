
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2306

## Instrument Card

<div className="flex">

<div>

The dual channel Battery/Charger Simulator was designed specifically for development and test applications of portable, battery-operated products, such as cellular and cordless telephones, mobile radios, and pagers. This precision DC power supply product has ultrafast transient response so it can have output characteristics identical to actual batteries. This supply employs a unique variable output resistance so the voltage output can emulate a battery's response. It provides stable voltage outputs, even when a device-under-test (DUT) makes the rapid transition from the standby (low current) state to the RF transmission (high current) state. In addition, they can monitor DUT power consumption by measuring both DC currents and pulse load currents. The battery-simulator channel can be programmed to operate like a discharged rechargeable battery, sinking current from a separate charger.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118400/Instruments/Power%20Supplies/Keithley-2306/Keithley-2306.png" style={{ width: "325px" }} />

</div>

The dual channel Battery/Charger Simulator was designed specifically for development and test applications of portable, battery-operated products, such as cellular and cordless telephones, mobile radios, and pagers. This precision DC power supply product has ultrafast transient response so it can have output characteristics identical to actual batteries. This supply employs a unique variable output resistance so the voltage output can emulate a battery's response. It provides stable voltage outputs, even when a device-under-test (DUT) makes the rapid transition from the standby (low current) state to the RF transmission (high current) state. In addition, they can monitor DUT power consumption by measuring both DC currents and pulse load currents. The battery-simulator channel can be programmed to operate like a discharged rechargeable battery, sinking current from a separate charger.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", objectFit: "cover" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2306 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2306

# Create a VISA adapter for communication
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")

# Connect to the Keithley 2306 Power Supply
power_supply = Keithley2306(adapter)

# Enable both channels
power_supply.both_channels_enabled = True

# Set the voltage and current limits for channel 1
power_supply.ch(1).source_voltage = 5.0
power_supply.ch(1).source_current_limit = 1.0

# Set the voltage and current limits for channel 2
power_supply.ch(2).source_voltage = 3.3
power_supply.ch(2).source_current_limit = 0.5

# Enable the output for both channels
power_supply.ch(1).enabled = True
power_supply.ch(2).enabled = True

# Measure the voltage and current for channel 1
voltage = power_supply.ch(1).measured_voltage
current = power_supply.ch(1).measured_current

print(f"Channel 1: Voltage = {voltage} V, Current = {current} A")

# Measure the voltage and current for channel 2
voltage = power_supply.ch(2).measured_voltage
current = power_supply.ch(2).measured_current

print(f"Channel 2: Voltage = {voltage} V, Current = {current} A")

# Disconnect from the power supply
power_supply.disconnect()
```

This script connects to a Keithley 2306 Power Supply using a VISA adapter and sets the voltage and current limits for both channels. It then enables the output for both channels and measures the voltage and current for each channel. Finally, it disconnects from the power supply.

</TabItem>
</Tabs>