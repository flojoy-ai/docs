
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Newmark - NSC-A1


## Instrument Card

<div className="flex">

<div>

The NSC-A1 Series motion controller is a powerful single axis stepper motor control system which combines a microstepping driver with a programmable controller into a compact envelope

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107020/Instruments/Motion/Newmark---NSC-A1/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The NSC-A1 Series motion controller is a powerful single axis stepper motor control system which combines a microstepping driver with a programmable controller into a compact envelope>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125976/Instruments/Vendor%20Logos/Newmark.png" style={{ width:"200px", height: "150px"}} />

**Newmark Systems** is a world leader in precision rotary table technology designed for critical positioning applications. <a href="https://www.newmarksystems.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 12.0</li>
</ul>
</details>

## Connect to the Newmark - NSC-A1
 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

Here is a Python script that uses Instrumental to connect to a Newmark - NSC-A1 Motion:

```python
from instrumental import instrument, list_instruments

# List available instruments
print(list_instruments())

# Connect to the Newmark - NSC-A1 Motion
motion = instrument('NSCA1', serial='COM1')

# Get the current angle of the stage
angle = motion.angle
print(f"Current angle: {angle}")

# Rotate the stage clockwise by 90 degrees
motion.cw(90)

# Set the velocity of the stage to 10 degrees per second
motion.velocity = 10

# Disconnect from the motion controller
motion.close()
```

Note: The `serial` parameter in the `instrument` function should be replaced with the actual serial port of the Newmark - NSC-A1 Motion controller.

</TabItem>
</Tabs>