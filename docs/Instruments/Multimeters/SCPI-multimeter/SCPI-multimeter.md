
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SCPI multimeter

## Instrument Card

<div className="flex">

<div>

All SCPI Multimeters

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692078041/Instruments/Multimeters/SCPI-multimeter/SCPI-multimeter.png" style={{ width: "325px" }} />

</div>

All SCPI Multimeters>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width: "100%", objectFit: "cover" }} />

. <a href="https://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments">Website</a>.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the SCPI multimeter in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here's an example Python script that uses Instrumentkit to connect to a SCPI multimeter:

```python
import instrumentkit as ik

# Connect to the multimeter
multimeter = ik.generic_scpi.SCPIInstrument.open_tcpip('192.168.0.2', 8888)

# Get the name of the multimeter
name = multimeter.name
print(name)

# Get the SCPI version supported by the multimeter
scpi_version = multimeter.scpi_version
print(scpi_version)

# Check if all operations have been completed
op_complete = multimeter.op_complete
print(op_complete)

# Get the power on status of the multimeter
power_on_status = multimeter.power_on_status
print(power_on_status)

# Set the power on status of the multimeter
multimeter.power_on_status = True

# Get the self test result of the multimeter
self_test_ok = multimeter.self_test_ok
print(self_test_ok)

# Reset the multimeter
multimeter.reset()

# Clear the multimeter
multimeter.clear()

# Trigger a software trigger event
multimeter.trigger()

# Wait for the multimeter to complete all received commands
multimeter.wait_to_continue()

# Get the power line frequency setting of the multimeter
line_frequency = multimeter.line_frequency
print(line_frequency)

# Set the power line frequency setting of the multimeter
multimeter.line_frequency = 50

# Check the error queue of the multimeter
error_queue = multimeter.check_error_queue()
print(error_queue)

# Get the brightness of the multimeter display
display_brightness = multimeter.display_brightness
print(display_brightness)

# Set the brightness of the multimeter display
multimeter.display_brightness = 0.5

# Get the contrast of the multimeter display
display_contrast = multimeter.display_contrast
print(display_contrast)

# Set the contrast of the multimeter display
multimeter.display_contrast = 0.8

# Close the connection to the multimeter
multimeter.close()
```

This script demonstrates how to connect to a SCPI multimeter using Instrumentkit and perform various operations such as getting the name and SCPI version, checking the power on status, setting the power on status, performing self tests, resetting and clearing the multimeter, triggering events, waiting for commands to complete, getting and setting the power line frequency, checking the error queue, getting and setting the display brightness and contrast, and closing the connection.

</TabItem>
</Tabs>