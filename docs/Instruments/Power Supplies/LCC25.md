
# LCC25

## Instrument Card

<div className="flex">

<div>

The LCC25 is a liquid crystal controller compatible with all Thorlabs LC Variable
Retarders. The LCC25 will drive most nematic liquid crystal devices. The liquid crystal
device is connected to the BNC voltage output port. The amplitude of the output voltage,
adjusted by the front panel knob, and external signal, and a computer via a USB interface,
controls the retardance of the LC device.

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/sICcrDp4kK8fiwaD2vA6MQ/j5bTX1-HNIn99WV8XleuUJ21cvrY4x_F60vAiu_63lQPaIei9r3NlBxyQvbwGz1rcAwfnV0snRYcLgDXXU7Bly7h_v-pBcRB54It5GayP5ScCGIsCZH3KEWLm5lf0RKN/PLvLdh6PrNNtWIOR4_SokOvd-g8XbwIryQ7Gt_nBiX4"/>

</div>

The LCC25 is a liquid crystal controller compatible with all Thorlabs LC Variable
Retarders. The LCC25 will drive most nematic liquid crystal devices. The liquid crystal
device is connected to the BNC voltage output port. The amplitude of the output voltage,
adjusted by the front panel knob, and external signal, and a computer via a USB interface,
controls the retardance of the LC device.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Thorlabs, Inc. is an American privately held optical equipment company headquartered in Newton, New Jersey. The company was founded in 1989 by Alex Cable, who serves as its current president and CEO. As of 2018, Thorlabs has annual sales of approximately $500 million. <a href="https://www.thorlabs.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 550.0</li>
</ul>
</details>

## Connect to the LCC25 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit


```python
from instrumentkit import Instrument, ConnectionType
from instrumentkit.contrib.thorlabs import LCC25

# Connect to the LCC25 Power Supply
instrument = Instrument(
    LCC25,
    connection_type=ConnectionType.SERIAL,
    port="COM1",  # Replace with the actual serial port
    baudrate=9600,  # Replace with the actual baudrate
)

# Initialize the instrument
instrument.initialize()

# Get the name and version number of the device
name = instrument.name
print(f"Device Name: {name}")

# Set the frequency at which the LCC oscillates between the two voltages
frequency = 10  # Hz
instrument.frequency = frequency

# Set the output mode of the LCC25
mode = LCC25.Mode.voltage1
instrument.mode = mode

# Enable the output
instrument.enable = True

# Set the voltage values for output 1 and output 2
voltage1 = 10  # Volts
voltage2 = 20  # Volts
instrument.voltage1 = voltage1
instrument.voltage2 = voltage2

# Perform other operations as needed

# Close the connection to the instrument
instrument.close()
```

Note: Replace `"COM1"` with the actual serial port that the LCC25 Power Supply is connected to, and replace `9600` with the actual baudrate if it's different.

