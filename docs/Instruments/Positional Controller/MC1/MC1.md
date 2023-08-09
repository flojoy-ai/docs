
# MC1

## Instrument Card

<div className="flex">

<div>



</div>

<img src={require("./MC1.jpg").default} style={{width:"256px", height: "200px"}} />

</div>

>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Qubitekk provides reliable products for generating, preparing, distributing, detecting, correlating and storing photonic qubits. The hardware that is needed to strengthen American leadership in quantum computing, communications, and sensing solutions is being developed and manufactured in San Diego County, CA. <a href="https://qubitekk.com/">Website</a>.

<ul>
  <li>Headquarters: Vista, California, United States</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the MC1 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit


```python
from instrumentkit import SerialConnection
from instrumentkit import MC1

# Create a serial connection to the MC1 Positional Controller
connection = SerialConnection(port='/dev/ttyUSB0', baudrate=9600)
mc1 = MC1(connection)

# Set the stepping increment value of the motor controller to 2 milliseconds
mc1.increment = 2

# Get the estimated motor position in millimeters
position = mc1.metric_position
print(f"Current position: {position}")

# Move the motor to a specified location
new_position = 500  # in milliseconds
mc1.move(new_position)

# Check if the motor is in its centering phase
is_centering = mc1.is_centering()
print(f"Is centering: {is_centering}")

# Command the motor to go to the center of its travel range
mc1.center()

# Reset the motor to the limit of its travel range
mc1.reset()

# Close the connection to the MC1 Positional Controller
connection.close()
```

Note: Make sure to replace `/dev/ttyUSB0` with the appropriate serial port for your MC1 Positional Controller.

