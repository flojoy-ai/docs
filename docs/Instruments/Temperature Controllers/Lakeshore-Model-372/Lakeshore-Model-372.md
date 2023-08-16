
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lakeshore Model 372

## Instrument Card

<div className="flex">

<div>

The Model 372 AC resistance bridge and temperature controller builds on the solid foundation provided by the original Lake Shore AC resistance bridge. The Model 372 provides the best possible temperature measurement and control capabilities for dilution refrigerators (DRs) that are intended to be operated below 100 mK. The Model 372 makes it easy to perform multiple tasks that were once very difficult to perform reliably at ultra-low temperatures:

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077747/Instruments/Power%20Meters/Lakeshore-Model-372/Lakeshore-Model-372.png" style={{ width: "325px", height: "150px" }} />

</div>

The Model 372 AC resistance bridge and temperature controller builds on the solid foundation provided by the original Lake Shore AC resistance bridge. The Model 372 provides the best possible temperature measurement and control capabilities for dilution refrigerators (DRs) that are intended to be operated below 100 mK. The Model 372 makes it easy to perform multiple tasks that were once very difficult to perform reliably at ultra-low temperatures:>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125966/Instruments/Vendor%20Logos/Lakeshore.png" style={{ width: "100%", objectFit: "cover" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions. <a href="https://www.lakeshore.com/home">Website</a>.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
</ul>
</details>

## Connect to the Lakeshore Model 372 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Lakeshore Model 372 Temperature Controller using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.Lakeshore.Model_372 import LakeshoreModel372

# Create an instance of the LakeshoreModel372 driver
lakeshore = LakeshoreModel372("lakeshore", "TCPIP::192.168.1.1::7777::SOCKET")

# Connect to the instrument
lakeshore.connect()

# Print the identification string of the instrument
print(lakeshore.IDN())

# Set the setpoint temperature of the sample heater to 300 K
lakeshore.sample_heater.setpoint(300)

# Close the connection to the instrument
lakeshore.disconnect()
```

In this script, we import the necessary modules and create an instance of the `LakeshoreModel372` driver. We then connect to the instrument using the `connect()` method. After that, we can interact with the instrument by calling its methods and parameters. In this example, we print the identification string of the instrument using the `IDN()` method and set the setpoint temperature of the sample heater to 300 K using the `setpoint()` method. Finally, we disconnect from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>