
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# NI PXIe-2597

## Instrument Card

<div className="flex">

<div>

26.5 GHz, 50 Ω, 6x1 (SP6T) Terminated PXI RF Multiplexer Switch Module—The PXI‑2597 is ideal for passing high-order harmonics from PXI RF Signal Upconverter modules or routing multiple sources to PXI RF Signal Downconverter modules. The internal termination of the PXI‑2597 helps prevent high-power reflections that arise from open channels on the module. You can use the PXI‑2597 onboard relay count tracking feature to predict relay lifetime and reduce unexpected system downtime.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692120042/Instruments/Multiplexer%20Switch%20Modules/NI-PXIe-2597/NI-PXIe-2597.png" style={{ width: "325px" }} />

</div>

26.5 GHz, 50 Ω, 6x1 (SP6T) Terminated PXI RF Multiplexer Switch Module—The PXI‑2597 is ideal for passing high-order harmonics from PXI RF Signal Upconverter modules or routing multiple sources to PXI RF Signal Downconverter modules. The internal termination of the PXI‑2597 helps prevent high-power reflections that arise from open channels on the module. You can use the PXI‑2597 onboard relay count tracking feature to predict relay lifetime and reduce unexpected system downtime.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125989/Instruments/Vendor%20Logos/National_Instruments.png" style={{ width: "100%", objectFit: "cover" }} />

A producer of automated test equipment and virtual instrumentation software. Common applications include data acquisition, instrument control and machine vision. <a href="https://www.ni.com/en-ca.html">Website</a>.

<ul>
  <li>Headquarters: Austin, Texas, USA</li>
  <li>Yearly Revenue (millions, USD): 1657.0</li>
</ul>
</details>

## Connect to the NI PXIe-2597 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a NI PXIe-2597 Multiplexer Switch Module using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.ni.NI_PXIe_2597 import NI_PXIe_2597

# Create a station to hold the instrument
station = Station()

# Connect to the NI PXIe-2597 switch module
switch = NI_PXIe_2597('switch', 'PXI1Slot2', reset_device=True)

# Add the switch to the station
station.add_component(switch)

# Print the available channels
print("Available channels:", switch.channel.vals)

# Set the active channel to 'ch1'
switch.channel('ch1')

# Get the active channel
active_channel = switch.channel()
print("Active channel:", active_channel)
```

This script creates a `Station` object to hold the instrument and then connects to the NI PXIe-2597 switch module using the `NI_PXIe_2597` driver. The `reset_device` argument is set to `True` to reset the device on initialization.

The script adds the switch to the station using the `add_component` method. It then prints the available channels using the `vals` attribute of the `channel` parameter.

The active channel is set to 'ch1' using the `channel` parameter as a function. The active channel is retrieved using the `channel` parameter as a function without any arguments.

Note: Make sure you have the necessary dependencies installed and the correct resource name for your specific setup.

</TabItem>
</Tabs>