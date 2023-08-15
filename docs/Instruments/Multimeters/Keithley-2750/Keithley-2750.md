
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2750

## Instrument Card

<div className="flex">

<div>

The 2750 offers a cost-effective, high performance, affordable alternatives to separate digital multimeters and switch systems, dataloggers/recorders, plug-in card data acquisition equipment, and VXI/PXI systems. System builders can create test solutions with a combination of channel count, cost per channel, and system performance unmatched by any other singlebox measurement system. The input modules provide the flexibility to vary the channel count from 20 to 200 (2-pole), apply a stimulus to the device under test, route signals, control system components, and make precision measurements with up to 14 functions. Robust digital I/O capabilities can be used for triggering, handshaking with other automation equipment, and alarm limit outputs. Scan rates of up to 500 channels/second (up to 3500 readings/second on a single channel) will increase test productivity.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107030/Instruments/Multimeters/Keithley-2750/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The 2750 offers a cost-effective, high performance, affordable alternatives to separate digital multimeters and switch systems, dataloggers/recorders, plug-in card data acquisition equipment, and VXI/PXI systems. System builders can create test solutions with a combination of channel count, cost per channel, and system performance unmatched by any other singlebox measurement system. The input modules provide the flexibility to vary the channel count from 20 to 200 (2-pole), apply a stimulus to the device under test, route signals, control system components, and make precision measurements with up to 14 functions. Robust digital I/O capabilities can be used for triggering, handshaking with other automation equipment, and alarm limit outputs. Scan rates of up to 500 channels/second (up to 3500 readings/second on a single channel) will increase test productivity.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width:"200px", height: "150px"}} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2750 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Keithley 2750 Multimeter:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2750

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::22::INSTR")

# Create an instance of the Keithley2750 instrument
multimeter = Keithley2750(adapter)

# Open a connection to the instrument
multimeter.open()

# Perform measurements or other operations with the instrument
# For example, to read the list of closed channels:
closed_channels = multimeter.closed_channels

# Close the connection to the instrument
multimeter.close()
```

Note: Make sure to replace `"GPIB0::22::INSTR"` with the appropriate address for your instrument.

</TabItem>
</Tabs>