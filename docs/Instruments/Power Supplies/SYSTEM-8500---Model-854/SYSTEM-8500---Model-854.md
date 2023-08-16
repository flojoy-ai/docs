
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SYSTEM 8500 - Model 854

## Instrument Card

<div className="flex">

<div>

The System 8500 Power Supply program offers the ultrastable Model 854 specially designed for powering magnets in MRI applications

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692118404/Instruments/Power%20Supplies/SYSTEM-8500---Model-854/SYSTEM-8500---Model-854.png" style={{ width: "325px" }} />

</div>

The System 8500 Power Supply program offers the ultrastable Model 854 specially designed for powering magnets in MRI applications>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125953/Instruments/Vendor%20Logos/Danfysik.png" style={{ width: "100%", objectFit: "cover" }} />

Danfysik accelerator system and accelerator components are in service at most particle accelerator facilities worldwide. <a href="https://www.danfysik.com/en">Website</a>.

<ul>
  <li>Headquarters: Denmark</li>
  <li>Yearly Revenue (millions, USD): 13.0</li>
</ul>
</details>

## Connect to the SYSTEM 8500 - Model 854 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments import SerialInstrument
from pymeasure.adapters import SerialAdapter
from pymeasure.instruments.danfysik import Danfysik8500

# Create a SerialAdapter for the instrument
adapter = SerialAdapter(port="/dev/danfysik", baudrate=9600)

# Create a Danfysik8500 instrument object
power_supply = Danfysik8500(adapter)

# Connect to the power supply
power_supply.open()

# Read the identification information
id_info = power_supply.id
print("Identification Information:", id_info)

# Set the current to 10 Amps
power_supply.current = 10

# Enable the flow of current
power_supply.enable()

# Wait for the current to stabilize
power_supply.wait_for_current()

# Read the actual current
actual_current = power_supply.current
print("Actual Current:", actual_current)

# Disable the flow of current
power_supply.disable()

# Close the connection to the power supply
power_supply.close()
```

This script first creates a `SerialAdapter` object to connect to the power supply using the specified serial port. Then, a `Danfysik8500` instrument object is created using the adapter. The script opens the connection to the power supply, reads the identification information, sets the current to 10 Amps, enables the flow of current, waits for the current to stabilize, reads the actual current, disables the flow of current, and finally closes the connection to the power supply.

Note: Make sure to replace `"/dev/danfysik"` with the actual serial port of your SYSTEM 8500 - Model 854 Power Supply.

</TabItem>
</Tabs>