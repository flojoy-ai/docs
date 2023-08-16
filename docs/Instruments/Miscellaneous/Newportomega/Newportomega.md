
# Newportomega

## Instrument Card

<div className="flex">

<div>

Device Server To Show The Omega Strain Gage From Newport, In A Tango System.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077918/Instruments/Miscellaneous/Newportomega/Newportomega.png" style={{ width: "325px" }} />

</div>

Device Server To Show The Omega Strain Gage From Newport, In A Tango System.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125992/Instruments/Vendor%20Logos/Newport.png" style={{ width: "100%", height: "150px",objectFit: "cover" }} />

Newport provides a wide range of photonics technology and products designed to enhance the capabilities and productivity of our customers' applications. <a href="https://www.newport.com/">Website</a>.

<ul>
  <li>Headquarters: Irvine, California, United States</li>
  <li>Yearly Revenue (millions, USD): 3500.0</li>
</ul>
</details>

## Connect to the Newportomega in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Pytango

```python
import PyTango

# Create a DeviceProxy object to connect to the Newportomega device
device_proxy = PyTango.DeviceProxy("device_name")

# Read a device attribute
attribute_value = device_proxy.read_attribute("attribute_name").value

# Write a device attribute
device_proxy.write_attribute("attribute_name", attribute_value)

# Call a device command
device_proxy.command_inout("command_name")
```

In the code above, replace "device_name" with the actual name of the Newportomega device you want to connect to. Replace "attribute_name" with the name of the attribute you want to read or write, and replace "command_name" with the name of the command you want to call.

