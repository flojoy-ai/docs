
# Pipekeithley

## Instrument Card

<div className="flex">

<div>

Class For Getting Data From The Keihtley Of The Photon-Ion Spectrometer (Pipe).

</div>

<img src={require("./Pipekeithley.jpg").default} width="256"/>

</div>

Class For Getting Data From The Keihtley Of The Photon-Ion Spectrometer (Pipe).>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Pipekeithley in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Pytango

```python
import PyTango

# Create a DeviceProxy object to connect to the Pipekeithley device
device_proxy = PyTango.DeviceProxy("device_name")

# Read a scalar attribute from the device
attribute_value = device_proxy.read_attribute("attribute_name").value

# Write a value to a scalar attribute of the device
device_proxy.write_attribute("attribute_name", attribute_value)

# Call a command on the device
device_proxy.command_inout("command_name")
```

In the code above, replace "device_name" with the actual name of the Pipekeithley device you want to connect to. Replace "attribute_name" with the name of the attribute you want to read or write, and replace "command_name" with the name of the command you want to call on the device.

