
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore Model 335

## Instrument Card

<div className="flex">

<div>

The Model 335 supports the industry's most advanced line of cryogenic temperature sensors as manufactured by Lake Shore, including diodes, resistance temperature detectors (RTDs), and thermocouples. The controller's zone tuning feature allows you to measure and control temperatures seamlessly from 300 mK to over 1,500 K. This feature automatically switches temperature sensor inputs when your temperature range goes beyond the usable range of a given sensor.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077800/Instruments/Temperature%20Controllers/Lakeshore-Model-335/Lakeshore-Model-335.png" style={{ width: "325px" }} />

</div>

The Model 335 supports the industry's most advanced line of cryogenic temperature sensors as manufactured by Lake Shore, including diodes, resistance temperature detectors (RTDs), and thermocouples. The controller's zone tuning feature allows you to measure and control temperatures seamlessly from 300 mK to over 1,500 K. This feature automatically switches temperature sensor inputs when your temperature range goes beyond the usable range of a given sensor.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width: "100%", objectFit: "cover" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore Model 335 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

Here is a Python script that uses Qcodes to connect to a Lakeshore Model 335 Temperature Controller:

```python
import qcodes as qc
from qcodes.instrument_drivers.Lakeshore.Model_335 import LakeshoreModel335

# Create an instance of the Lakeshore Model 335 driver
lakeshore = LakeshoreModel335("lakeshore", "TCPIP::192.168.1.1::INSTR")

# Connect to the instrument
lakeshore.connect()

# Print the instrument ID
print("Instrument ID:", lakeshore.IDN())

# Set the temperature setpoint of channel A to 300 K
lakeshore.channels["A"].setpoint(300)

# Get the temperature reading of channel A
temperature = lakeshore.channels["A"].temperature()
print("Temperature:", temperature, "K")

# Disconnect from the instrument
lakeshore.disconnect()
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual address of your Lakeshore Model 335 Temperature Controller.

</TabItem>
</Tabs>