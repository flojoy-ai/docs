
# LPS710E(/M)

## Instrument Card

The LPS710E(/M) Amplified Piezo Stage provides long range, fine focus Z-axis travel for a microscope slide while maintaining a compact, low-profile footprint. It features submicron repeatability, nanometer positioning resolution, low angular error, and fast millisecond response and settling times. When used with the LPSA1(/M) microscope slide holder, the stage is ideal for imaging modalities requiring sensitive sample positioning and sectioning, such as confocal laser scanning microscopy. This stage is not compatible with trans-illumination.

<details open>
<summary><h2>Manufacturer Card</h2></summary>
Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million. <a href="https://www.thorlabs.com/">Website</a>.
<br></br>
<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
</ul>
</details>

## Connect to the LPS710E(/M) in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit

To connect to a LPS710E(/M) Positional Controller using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the LPS710E(/M) Positional Controller
controller = ik.thorlabs.LPS710E.open_serial("/dev/ttyUSB0", baud=115200)

# Get the channel object for channel 1
channel = controller.channel[0]

# Enable the channel
channel.enabled = True

# Set the position of the channel to 1000 steps
channel.position = 1000

# Move the channel to the specified position
channel.move()

# Disconnect from the controller
controller.close()
```

This code connects to the LPS710E(/M) Positional Controller using the `open_serial` method, specifying the serial port and baud rate. It then gets the channel object for channel 1 and enables it. The position of the channel is set to 1000 steps, and then the channel is moved to the specified position using the `move` method. Finally, the code closes the connection to the controller using the `close` method.

