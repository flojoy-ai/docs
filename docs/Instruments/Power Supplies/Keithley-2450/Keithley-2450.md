
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2450

## Instrument Card

<div className="flex">

<div>

The 2450 is Keithley's next-generation SourceMeter source measure unit (SMU) instrument that truly brings Ohm's law (current, voltage, and resistance) testing right to your fingertips. Its innovative graphical user interface (GUI) and advanced, capacitive touchscreen technology allow intuitive usage and minimize the learning curve to enable engineers and scientists to learn faster, work smarter, and invent easier. The 2450 is the SMU for everyone: a versatile instrument, particularly well-suited for characterizing modern scaled semiconductors, nano-scale devices and materials, organic semiconductors, printed electronics, and other small-geometry and low-power devices.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106861/Instruments/Power%20Supplies/Keithley-2450/file.png" style={{width:"256px", height: "200px"}} />

</div>

The 2450 is Keithley's next-generation SourceMeter source measure unit (SMU) instrument that truly brings Ohm's law (current, voltage, and resistance) testing right to your fingertips. Its innovative graphical user interface (GUI) and advanced, capacitive touchscreen technology allow intuitive usage and minimize the learning curve to enable engineers and scientists to learn faster, work smarter, and invent easier. The 2450 is the SMU for everyone: a versatile instrument, particularly well-suited for characterizing modern scaled semiconductors, nano-scale devices and materials, organic semiconductors, printed electronics, and other small-geometry and low-power devices.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126010/Instruments/Vendor%20Logos/Keithley.png" style={{ width:"200px", height: "150px"}} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing. <a href="https://www.tek.com/en">Website</a>.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
</ul>
</details>

## Connect to the Keithley 2450 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">

Here is a Python script that uses Pymeasure to connect to a Keithley 2450 Power Supply:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.keithley import Keithley2450

# Create a connection to the instrument
adapter = VISAAdapter("GPIB::1")
keithley = Keithley2450(adapter)

# Configure the instrument
keithley.apply_current()
keithley.source_current_range = 10e-3
keithley.compliance_voltage = 10
keithley.source_current = 0
keithley.enable_source()

# Perform measurements
keithley.measure_voltage()
keithley.ramp_to_current(5e-3)
print(keithley.voltage)

# Shutdown the instrument
keithley.shutdown()
```

This script connects to the Keithley 2450 Power Supply using a VISA adapter with the GPIB address "GPIB::1". It then configures the instrument to apply a current, sets the current range, compliance voltage, and source current. It enables the source output and performs voltage measurements. It ramps the current to 5 mA and prints the measured voltage. Finally, it shuts down the instrument by ramping the current to 0 mA and disabling the output.

</TabItem>
<TabItem value="Qcodes" label="Qcodes">

To connect to a Keithley 2450 Power Supply using Qcodes, you can use the following Python script:

```python
import qcodes as qc
from qcodes.instrument_drivers.tektronix.Keithley_2450 import Keithley_2450

# Connect to the Keithley 2450 Power Supply
keithley = Keithley_2450("keithley", "TCPIP0::192.168.1.1::INSTR")

# Print the instrument ID
print(keithley.IDN())

# Set the source function to voltage
keithley.source_function("voltage")

# Set the voltage to 1V
keithley.source_voltage(1)

# Enable the output
keithley.output_enabled(True)

# Measure the current
current = keithley.sense_current()
print(f"Current: {current} A")

# Disable the output
keithley.output_enabled(False)

# Close the connection
keithley.close()
```

Make sure to replace `"TCPIP0::192.168.1.1::INSTR"` with the actual IP address or VISA resource string of your Keithley 2450 Power Supply.

</TabItem>
</Tabs>