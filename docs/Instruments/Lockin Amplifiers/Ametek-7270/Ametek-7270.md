
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ametek 7270

## Instrument Card

<div className="flex">

<div>

The model 7270 sets a new standard for general-purpose DSP lock-in amplifiers.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106926/Instruments/Lockin%20Amplifiers/Ametek-7270/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The model 7270 sets a new standard for general-purpose DSP lock-in amplifiers.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125962/Instruments/Vendor%20Logos/Ametek.png" style={{ width:"200px", height: "150px"}} />

Since 1930, our talented and diverse workforce has been delivering **differentiated technology solutions** to create strong, sustainable and profitable growth. <a href="https://www.ametek.com/">Website</a>.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 6200.0</li>
</ul>
</details>

## Connect to the Ametek 7270 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.ametek import Ametek7270

# Create a connection to the instrument
adapter = VISAAdapter("GPIB::1::INSTR")
lockin = Ametek7270(adapter)

# Set the instrument to voltage control mode
lockin.set_voltage_mode()

# Set the sensitivity to 100 nV
lockin.sensitivity = 100e-9

# Set the filter slope to 12 dB/octave
lockin.slope = 12

# Read the X and Y values
x_value = lockin.x
y_value = lockin.y

# Print the X and Y values
print("X value:", x_value)
print("Y value:", y_value)

# Close the connection to the instrument
lockin.shutdown()
```

This script connects to the Ametek 7270 Lockin Amplifier using a VISA adapter and sets the instrument to voltage control mode. It then sets the sensitivity to 100 nV and the filter slope to 12 dB/octave. The script reads the X and Y values from the lockin amplifier and prints them. Finally, it shuts down the instrument and closes the connection.

Note: Make sure to install the necessary dependencies (`pymeasure`, `pyvisa`, etc.) before running the script.

</TabItem>
</Tabs>