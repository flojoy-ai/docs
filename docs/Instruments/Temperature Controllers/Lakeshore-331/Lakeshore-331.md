
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore 331

## Instrument Card

<div className="flex">

<div>

The Model 331 cryogenic temperature controller combines the easy operation and unsurpassed reliability of the Model 330 with improved sensor input and interface flexibility, including compatibility with negative temperature coefficient (NTC) resistance temperature detectors (RTDs). Backed by the Lake Shore tradition of excellence in cryogenic sensors and instrumentation, the Model 331 temperature controller sets the standard for mid-price range temperature control instruments.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106835/Instruments/Temperature%20Controllers/Lakeshore-331/file.png" style={{width:"256px", height: "200px"}} />

</div>

The Model 331 cryogenic temperature controller combines the easy operation and unsurpassed reliability of the Model 330 with improved sensor input and interface flexibility, including compatibility with negative temperature coefficient (NTC) resistance temperature detectors (RTDs). Backed by the Lake Shore tradition of excellence in cryogenic sensors and instrumentation, the Model 331 temperature controller sets the standard for mid-price range temperature control instruments.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width:"200px", height: "150px"}} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore 331 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments.lakeshore import LakeShore331

# Connect to the Lakeshore 331 Temperature Controller
controller = LakeShore331("GPIB::1")

# Print the current setpoint for output 1
print(controller.output_1.setpoint)

# Change the setpoint for output 1 to 50 K
controller.output_1.setpoint = 50

# Change the heater range for output 1 to 'low'
controller.output_1.heater_range = 'low'

# Wait for the temperature at input A to stabilize
controller.input_A.wait_for_temperature()

# Print the temperature at input A
print(controller.input_A.temperature)
```

This script first imports the `LakeShore331` class from the `pymeasure.instruments.lakeshore` module. It then creates an instance of the `LakeShore331` class, passing the GPIB address of the temperature controller as the argument.

The script then demonstrates some basic operations with the temperature controller. It prints the current setpoint for output 1, changes the setpoint to 50 K, changes the heater range to 'low' for output 1, waits for the temperature at input A to stabilize, and finally prints the temperature at input A.

Note that you will need to have the `pymeasure` package installed in order to run this script.

</TabItem>
</Tabs>