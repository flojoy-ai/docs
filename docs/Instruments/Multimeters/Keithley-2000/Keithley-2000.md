
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2000

## Instrument Card

<div className="flex">

<div>

The Model 2000 6_-Digit Multimeter is part of Keithleys family of high performance DMMs. Based on the same high speed, low noise A/D converter technology as the Model 2001 and 2002, the 2000 is a fast, accurate, and highly stable instrument thats as easy to operate as it is to afford. It combines broad measurement ranges with superior accuracy specifications DC voltage from 100nV to 1kV (with 0.002% 90-day basic accuracy) and DC resistance from 100 to 100M (with 0.008% 90-day basic accuracy). Optional switch cards enable multiplexing up to 20 different input signals for multipoint measurement applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106780/Instruments/Multimeters/Keithley-2000/file.webp" style={{width:"256px", height: "200px"}} />

</div>

The Model 2000 6_-Digit Multimeter is part of Keithleys family of high performance DMMs. Based on the same high speed, low noise A/D converter technology as the Model 2001 and 2002, the 2000 is a fast, accurate, and highly stable instrument thats as easy to operate as it is to afford. It combines broad measurement ranges with superior accuracy specifications DC voltage from 100nV to 1kV (with 0.002% 90-day basic accuracy) and DC resistance from 100 to 100M (with 0.008% 90-day basic accuracy). Optional switch cards enable multiplexing up to 20 different input signals for multipoint measurement applications.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width:"200px", height: "150px"}} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2000 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

To connect to a Keithley 2000 Multimeter using Pymeasure, you can use the following Python script:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2000

# Create a VISA adapter for the instrument
adapter = VISAAdapter("GPIB::1")

# Connect to the Keithley 2000 Multimeter
meter = Keithley2000(adapter)

# Perform measurements or configure the instrument as needed
meter.measure_voltage()
print("Voltage:", meter.voltage)

meter.measure_current()
print("Current:", meter.current)

meter.measure_resistance()
print("Resistance:", meter.resistance)

# Disconnect from the instrument
meter.disconnect()
```

This script creates a `VISAAdapter` object to connect to the instrument using the GPIB address "GPIB::1". Then, a `Keithley2000` object is created using the adapter. You can perform measurements or configure the instrument as needed using the provided methods and properties. Finally, the `disconnect()` method is called to disconnect from the instrument.

</TabItem>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keithley 2000 Multimeter using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.tektronix.Keithley_2000 import Keithley_2000

# Create an instance of the Keithley 2000 driver
keithley = Keithley_2000("keithley", "TCPIP0::192.168.1.1::INSTR")

# Connect to the instrument
keithley.connect()

# Print the instrument ID
print(keithley.IDN())

# Set the mode to DC voltage
keithley.mode("dc voltage")

# Set the range to 10V
keithley.range(10)

# Enable auto range
keithley.auto_range_enabled(True)

# Set the NPLC to 1
keithley.nplc(1)

# Trigger a measurement
keithley.trigger()

# Read the measured value
value = keithley.amplitude()
print("Measured value:", value)

# Disconnect from the instrument
keithley.disconnect()
```

This script creates an instance of the `Keithley_2000` driver and connects to the instrument using the specified address (`TCPIP0::192.168.1.1::INSTR`). It then sets various parameters such as mode, range, auto range, and NPLC, triggers a measurement, and reads the measured value.

Note: Make sure to replace `"TCPIP0::192.168.1.1::INSTR"` with the actual address of your Keithley 2000 Multimeter.

</TabItem>
</Tabs>