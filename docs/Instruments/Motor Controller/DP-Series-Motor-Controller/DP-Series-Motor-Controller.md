
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DP Series Motor Controller

## Instrument Card

<div className="flex">

<div>

Anaheim Automation manufactures a variety of Stepper Motor Driver Packs with Programmable Controllers. The DPC50501 contains a single-axis bipolar microstep driver with an output capacity of 0.5 to 5 Amps, and incorporates a simple 18-command programmable controller, with a power supply in an enclosure. Models DPY50601 and DPY50611 each contain a single-axis bipolar microstep driver with an output capacity of 0.5 to 5 Amps, and a 40-command programmable controller, packaged with a power supply in an enclosure. The DPD75601 contains a single-axis bilevel driver with an output capacity of 1 to 7 Amps, and a 40-command programmable controller, with a power supply packaged in an enclosure.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077960/Instruments/Motor%20Controller/DP-Series-Motor-Controller/DP-Series-Motor-Controller.png" style={{ width: "325px" }} />

</div>

Anaheim Automation manufactures a variety of Stepper Motor Driver Packs with Programmable Controllers. The DPC50501 contains a single-axis bipolar microstep driver with an output capacity of 0.5 to 5 Amps, and incorporates a simple 18-command programmable controller, with a power supply in an enclosure. Models DPY50601 and DPY50611 each contain a single-axis bipolar microstep driver with an output capacity of 0.5 to 5 Amps, and a 40-command programmable controller, packaged with a power supply in an enclosure. The DPD75601 contains a single-axis bilevel driver with an output capacity of 1 to 7 Amps, and a 40-command programmable controller, with a power supply packaged in an enclosure.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125991/Instruments/Vendor%20Logos/Anaheim_Automation.png" style={{ width: "100%", objectFit: "cover" }} />

Unable to find Vendor Description. <a href="https://www.anaheimautomation.com/?gclid=Cj0KCQjwib2mBhDWARIsAPZUn_m78imRVeC4iew-ALEMOH2ABgkCznvLz8KJ7IP3DU4ltd1my9bdZrgaAo0jEALw_wcB">Website</a>.

<ul>
  <li>Headquarters: Anaheim, US</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the DP Series Motor Controller in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.adapters import SerialAdapter
from pymeasure.instruments import DPSeriesMotorController

# Create a SerialAdapter for communication with the motor controller
adapter = SerialAdapter(port='COM1', baudrate=38400)

# Create an instance of the DPSeriesMotorController instrument
motor_controller = DPSeriesMotorController(adapter)

# Set the motor controller's address
motor_controller.address = 1

# Set the motor controller's base speed
motor_controller.basespeed = 100

# Move the motor in the clockwise direction
motor_controller.move('CW')

# Wait for the motor to complete the movement
motor_controller.wait_for_completion()

# Stop the motor
motor_controller.stop()

# Read the current motor position in steps
position = motor_controller.step_position
print("Current position:", position)

# Reset the motor position to 0
motor_controller.reset_position()

# Close the connection to the motor controller
motor_controller.close()
```

This script connects to a DP Series Motor Controller using a SerialAdapter and creates an instance of the DPSeriesMotorController instrument. It then sets the motor controller's address and base speed, moves the motor in the clockwise direction, waits for the movement to complete, stops the motor, reads the current motor position, resets the motor position to 0, and finally closes the connection to the motor controller.

</TabItem>
</Tabs>