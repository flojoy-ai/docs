
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Agilis

## Instrument Card

<div className="flex">

<div>

Agilis™ Piezo Motion Controllers provide convenient and compact fine positioning control of the Agilis family of piezo motion stages and mounts.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106862/Instruments/Positional%20Controller/Agilis/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

Agilis™ Piezo Motion Controllers provide convenient and compact fine positioning control of the Agilis family of piezo motion stages and mounts.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125992/Instruments/Vendor%20Logos/Newport.png" style={{ width:"200px", height: "150px"}} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications. <a href="https://www.newport.com/">Website</a>.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
</ul>
</details>

## Connect to the Agilis in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to an Agilis Positional Controller using Instrumentkit, you can use the following code:

```python
from instrumentkit import serial
from instrumentkit import newport

# Connect to the controller
port = serial.SerialPort("COM5", baudrate=921600)
controller = newport.AGUC2(port)

# Reset the controller
controller.reset_controller()

# Print the firmware version
print(controller.firmware_version)

# Move the X axis relative by 1000 steps
controller.axis[newport.AGUC2.Axes.X].move_relative(1000)

# Activate jogging in mode 3 for the X axis
controller.axis[newport.AGUC2.Axes.X].jog = 3

# Stop the X axis
controller.axis[newport.AGUC2.Axes.X].stop()

# Query the step amplitude for the X axis
step_amplitude = controller.axis[newport.AGUC2.Axes.X].step_amplitude
print(step_amplitude)

# Set the positive step amplitude to +10 and the negative step amplitude to -20 for the X axis
controller.axis[newport.AGUC2.Axes.X].step_amplitude = (10, -20)
```

Note: This code assumes that you have already installed the Instrumentkit library.

</TabItem>
</Tabs>