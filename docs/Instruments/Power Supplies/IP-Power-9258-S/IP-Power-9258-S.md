
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IP Power 9258 S

## Instrument Card

<div className="flex">

<div>

IP9258 is a web controller which can be easily used in the industry field

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107055/Instruments/Power%20Supplies/IP-Power-9258-S/file.png" style={{width:"256px", height: "200px"}} />

</div>

IP9258 is a web controller which can be easily used in the industry field>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126000/Instruments/Vendor%20Logos/Aviosys.png" style={{ width:"200px", height: "150px"}} />

**Aviosys** IP POWER is a remote power management device that allows you to control power on/off and monitor power status of connected devices. <a href="https://www.aviosys.com/">Website</a>.

<ul>
  <li>Headquarters: Taiwan</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the IP Power 9258 S in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to an Aviosys IP Power 9258S power supply using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.Aviosys_IP_Power_9258S import Aviosys_IP_Power_9258S

# Create a station to hold the instrument
station = Station()

# Define the instrument settings
instrument_name = 'power_supply'
address = 'http://<ip_address>'
login_name = '<login_name>'
login_password = '<login_password>'

# Create the instrument instance
power_supply = Aviosys_IP_Power_9258S(instrument_name, address, login_name, login_password)

# Add the instrument to the station
station.add_component(power_supply)

# Connect to the instrument
power_supply.connect()

# Now you can use the instrument to control the power channels
# For example, to turn on channel A:
power_supply.channels.A.power_enabled('on')

# To turn off channel B:
power_supply.channels.B.power_enabled('off')

# Disconnect from the instrument
power_supply.disconnect()
```

Make sure to replace `<ip_address>`, `<login_name>`, and `<login_password>` with the actual IP address, login name, and login password of your Aviosys IP Power 9258S power supply.

</TabItem>
</Tabs>