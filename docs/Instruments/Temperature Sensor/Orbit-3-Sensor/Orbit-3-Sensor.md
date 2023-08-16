
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Orbit 3 Sensor

## Instrument Card

<div className="flex">

<div>

Orbit 3 is a wireless sensor for ambient temperature and humidity monitoring. Install Orbit 3 at a suitable location, and it will wirelessly transmit temperature and humidity readings continuously. It can be used in precast factories, concrete laboratories, on-site – or wherever ambient climate creates value for you.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106941/Instruments/Humidity%20Sensor/Orbit-3-Sensor/file.webp" style={{width:"256px", height: "200px"}} />

</div>

Orbit 3 is a wireless sensor for ambient temperature and humidity monitoring. Install Orbit 3 at a suitable location, and it will wirelessly transmit temperature and humidity readings continuously. It can be used in precast factories, concrete laboratories, on-site – or wherever ambient climate creates value for you.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692142672/Instruments/Vendor%20Logos/FLOJOY_TEXT.png" style={{ width:"200px", height: "150px"}} />

Unable to find Vendor Description. <a href="https://www.solartronmetrology.com/">Website</a>.

<ul>
  <li>Headquarters: nan</li>
  <li>Yearly Revenue (millions, USD): nan</li>
</ul>
</details>

## Connect to the Orbit 3 Sensor in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pytango" label="Pytango">

```python
import PyTango

# Create a DeviceProxy object to connect to the Orbit 3 Sensor Temperature Sensor
device_proxy = PyTango.DeviceProxy("device_name")

# Read the temperature value from the sensor
temperature = device_proxy.read_attribute("attribute_name").value

# Print the temperature value
print("Temperature:", temperature)
```

In the code above, replace "device_name" with the actual name of the Orbit 3 Sensor Temperature Sensor device, and replace "attribute_name" with the actual name of the temperature attribute you want to read from the sensor.

</TabItem>
</Tabs>