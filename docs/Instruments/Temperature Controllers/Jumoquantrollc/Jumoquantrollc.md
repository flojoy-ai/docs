
# Jumoquantrollc

## Instrument Card

<div className="flex">

<div>

Control Of The Jumo Quantrol Lc100/Lc200/Lc300, Universal Pid Controller

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691782763/Instruments/Temperature%20Controllers/Jumoquantrollc/Jumoquantrollc.jpg" style={{width:"256px", height: "200px"}} />

</div>

Control Of The Jumo Quantrol Lc100/Lc200/Lc300, Universal Pid Controller>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1691786180/Instruments/Vendor%20Logos/Jumo.jpg.png" style={{ width:"200px", height: "150px"}} />

**JUMO** is your expert partner and manufacturer for industrial sensor technology up to the automation solution for temperature, pressure, and liquids. <a href="https://jumo.ca/">Website</a>.

<ul>
  <li>Headquarters: Canada</li>
  <li>Yearly Revenue (millions, USD): 69.0</li>
</ul>
</details>

## Connect to the Jumoquantrollc in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Pytango


```python
import PyTango

# Define the Tango device name for the Jumoquantrollc Temperature Controller
device_name = "tango://localhost:10000/sys/tg_test/1"

# Create a Tango device proxy for the Jumoquantrollc Temperature Controller
device_proxy = PyTango.DeviceProxy(device_name)

# Read the current temperature from the device
temperature = device_proxy.read_attribute("Temperature").value

# Print the temperature
print("Current temperature: {} °C".format(temperature))
```

In this script, we first import the `PyTango` module. Then, we define the Tango device name for the Jumoquantrollc Temperature Controller. This device name is in the format `tango://<host>:<port>/<device>`, where `<host>` is the hostname or IP address of the Tango server, `<port>` is the port number of the Tango server, and `<device>` is the device name.

Next, we create a Tango device proxy using the `PyTango.DeviceProxy()` function and pass in the device name. This creates a connection to the Jumoquantrollc Temperature Controller.

We then use the `read_attribute()` method of the device proxy to read the current temperature attribute of the device. The attribute name is specified as a string, in this case, "Temperature". The `read_attribute()` method returns a `PyTango.AttributeValue` object, from which we extract the value using the `value` attribute.

Finally, we print the current temperature using the `print()` function.

Note: Make sure to replace the `device_name` variable with the actual Tango device name of your Jumoquantrollc Temperature Controller.

