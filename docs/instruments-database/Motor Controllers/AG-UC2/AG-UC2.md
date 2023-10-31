---
title: Connecting to AG-UC2 by Newport in Python
sidebar_label: AG-UC2
description: The AG-UC2 Agilis™ Controller provides USB computer control for two Agilis axes. The AG-UC2 controller features two sets of push buttons for each Agilis axis; one set for step size settings, and the other set for precise low speed adjustments and fast coarse motion. Power is supplied through the USB port and if not available, the USB-CH power supply can independently power the Agilis controller. USB hubs may also be used for power and communication, but must provide the required 5 V supply, e.g. must feature an external power supply.
keywords: [motor controllers, Newport, InstrumentKit]
slug: /instruments-database/motor-controllers/newport/ag-uc2
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692387419/Instruments/Motor%20Controllers/AG-UC2/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AG-UC2

## Instrument Card

<div className="flex">

<div>

The AG-UC2 Agilis™ Controller provides USB computer control for two Agilis axes. The AG-UC2 controller features two sets of push buttons for each Agilis axis; one set for step size settings, and the other set for precise low speed adjustments and fast coarse motion. Power is supplied through the USB port and if not available, the USB-CH power supply can independently power the Agilis controller. USB hubs may also be used for power and communication, but must provide the required 5 V supply, e.g. must feature an external power supply.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692387419/Instruments/Motor%20Controllers/AG-UC2/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: NEWPORT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806178/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
  <li>Vendor Website: <a href="https://www.newport.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MOTOR_CONTROLLERS' manufacturer='NEWPORT'></FeaturedInstrumentVideo>


## Connect to the AG-UC2 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MOTOR_CONTROLLERS' manufacturer='NEWPORT'></NodeCardCollection>

</TabItem>
<TabItem value="InstrumentKit" label="InstrumentKit">


```python
from instrumentkit import SerialInstrument

# Define the AG-UC2 Motor Controller class
class AGUC2MotorController(SerialInstrument):
    # Define the instrument-specific properties
    baudrate = 9600
    timeout = 1

    # Define the instrument-specific commands
    def move_forward(self, speed):
        self.send_command(f"FORWARD {speed}")

    def move_backward(self, speed):
        self.send_command(f"BACKWARD {speed}")

    def stop(self):
        self.send_command("STOP")

# Create an instance of the AGUC2MotorController class
motor_controller = AGUC2MotorController("COM1")

# Connect to the motor controller
motor_controller.connect()

# Move the motor forward at speed 50
motor_controller.move_forward(50)

# Wait for 2 seconds
time.sleep(2)

# Stop the motor
motor_controller.stop()

# Disconnect from the motor controller
motor_controller.disconnect()
```

In this example, we define a custom `AGUC2MotorController` class that inherits from `SerialInstrument` provided by Instrumentkit. We set the baudrate and timeout properties specific to the AG-UC2 Motor Controller.

We also define three instrument-specific commands: `move_forward`, `move_backward`, and `stop`. These commands send the appropriate commands to the motor controller via the `send_command` method.

We then create an instance of the `AGUC2MotorController` class, specifying the serial port to which the motor controller is connected. We connect to the motor controller using the `connect` method.

We can then use the defined commands to control the motor. In this example, we move the motor forward at speed 50 for 2 seconds, and then stop the motor.

Finally, we disconnect from the motor controller using the `disconnect` method.

</TabItem>
</Tabs>