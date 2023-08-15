
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Smaract - MCS2

## Instrument Card

<div className="flex">

<div>

The MCS2 is SmarAct’s most versatile and modular control system.

Its stringent modular design approach makes it the perfect choice for all field of applications

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107061/Instruments/Motion/Smaract---MCS2/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The MCS2 is SmarAct’s most versatile and modular control system.

Its stringent modular design approach makes it the perfect choice for all field of applications>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125996/Instruments/Vendor%20Logos/SmartAct.png" style={{ width:"200px", height: "150px"}} />

In our [Motion](https://www.smaract.com/en/motion) business unit, we develop and produce high-precision, compact products for nano-positioning that meet the highest demands while being easy to handle. <a href="https://www.smaract.com/en/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 15.0</li>
</ul>
</details>

## Connect to the Smaract - MCS2 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

Here is a Python script that uses Instrumental to connect to a Smaract - MCS2 Motion controller:

```python
from instrumental import instrument

# Get the list of available instruments
paramsets = list_instruments()

# Connect to the first instrument in the list
dev = instrument(paramsets[0])

# Move the device to the home position
dev.move_home()

# Check the current position of the device
pos = dev.check_position()
print("Current position:", pos)

# Close the connection to the device
dev.close()
```

This script imports the `instrument` function from the `instrumental` module and uses it to connect to the first available instrument in the list obtained from the `list_instruments` function. It then moves the device to the home position using the `move_home` method and checks the current position using the `check_position` method. Finally, it closes the connection to the device using the `close` method.

</TabItem>
</Tabs>