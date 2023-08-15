
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 3456A

## Instrument Card

<div className="flex">

<div>

3456A 6 1/2 Digit Digital Multimeter

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107100/Instruments/Multimeters/Keysight-3456A/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

3456A 6 1/2 Digit Digital Multimeter>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125999/Instruments/Vendor%20Logos/HP.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 3456A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is a Python script that uses Instrumentkit to connect to a Keysight 3456A Multimeter:

```python
from instrumentkit import hp

# Connect to the multimeter
dmm = hp.HP3456a.open_gpibusb("/dev/ttyUSB0", 22)

# Set the measurement mode to DC voltage
dmm.mode = dmm.Mode.dcv

# Perform a measurement
measurement = dmm.measure()

# Print the measurement result
print("Measurement: {}".format(measurement))
```

This script first imports the `hp` module from Instrumentkit. It then connects to the multimeter using the `open_gpibusb` function, specifying the device path and GPIB address of the multimeter.

Next, it sets the measurement mode to DC voltage using the `mode` property of the multimeter object. In this case, we are using the `Mode.dcv` option.

Finally, it performs a measurement using the `measure` method of the multimeter object and stores the result in the `measurement` variable. The measurement result is then printed to the console.

Note: Make sure to replace `"/dev/ttyUSB0"` with the correct device path for your system, and `22` with the correct GPIB address of your multimeter.

</TabItem>
</Tabs>