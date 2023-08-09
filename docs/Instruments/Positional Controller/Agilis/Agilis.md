
# Agilis

## Instrument Card

<div className="flex">

<div>

Agilis™ Piezo Motion Controllers provide convenient and compact fine positioning control of the Agilis family of piezo motion stages and mounts.

</div>

<img src={require("./Agilis.jpg").default} width="256"/>

</div>

Agilis™ Piezo Motion Controllers provide convenient and compact fine positioning control of the Agilis family of piezo motion stages and mounts.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications. <a href="https://www.newport.com/">Website</a>.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
</ul>
</details>

## Connect to the Agilis in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit

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
controller.axis["X"].move_relative = 1000

# Activate jogging in mode 3 for the Y axis
controller.axis["Y"].jog = 3

# Stop the Y axis jogging
controller.axis["Y"].stop()

# Query the step amplitude for the X axis
step_amplitude = controller.axis["X"].step_amplitude
print(step_amplitude)

# Set the positive step amplitude for the X axis to +10 and the negative step amplitude to -20
controller.axis["X"].step_amplitude = (10, -20)

# Close the connection
controller.close()
```

This code connects to the Agilis Positional Controller on COM5 with a baud rate of 921600. It then performs various operations such as resetting the controller, printing the firmware version, moving the X axis relative by 1000 steps, activating jogging in mode 3 for the Y axis, stopping the Y axis jogging, querying and setting the step amplitude for the X axis, and finally closing the connection.

