---
title: Connecting to Keithley 2612B by Keithley in Python
sidebar_label: Keithley 2612B
description: The 2612B from Keithley is a 2600B series dual channel system SourceMeter® (SMU) instrument (0.1fA, 10A pulse). It is an industry’s leading current/voltage source and measure solutions. This dual channel model combines the capabilities of a precision power supply, true current source, 6 1/2 digit DMM, arbitrary waveform generator, pulse generator and electronic load all into one tightly integrated instrument. The result is a powerful solution that significantly boosts productivity in applications ranging from bench-top I-V characterization through highly automated production test. It has 100mV to 40V voltage, 100nA to 10A current measurement range (source). This is tightly integrated, 4-quadrant voltage/current source and measure instrument which offers best in class performance with 6 1/2digit resolution. Built-in web browser based software enables remote control through any browser, on any computer, from anywhere in the world.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-database/power-supplies/keithley/keithley-2612b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692719321/Instruments/Power%20Supplies/Keithley-2612B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2612B

## Instrument Card

<div className="flex">

<div>

The 2612B from Keithley is a 2600B series dual channel system SourceMeter® (SMU) instrument (0.1fA, 10A pulse). It is an industry’s leading current/voltage source and measure solutions. This dual channel model combines the capabilities of a precision power supply, true current source, 6 1/2 digit DMM, arbitrary waveform generator, pulse generator and electronic load all into one tightly integrated instrument. The result is a powerful solution that significantly boosts productivity in applications ranging from bench-top I-V characterization through highly automated production test. It has 100mV to 40V voltage, 100nA to 10A current measurement range (source). This is tightly integrated, 4-quadrant voltage/current source and measure instrument which offers best in class performance with 6 1/2digit resolution. Built-in web browser based software enables remote control through any browser, on any computer, from anywhere in the world.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692719321/Instruments/Power%20Supplies/Keithley-2612B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-2612B-Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: KEITHLEY</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806202/Instruments/Vendor%20Logos/Keithley.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keithley Instruments is a measurement and instrument company headquartered in Solon, Ohio, that develops, manufactures, markets, and sells data acquisition products, as well as complete systems for high-volume production and assembly testing.

<ul>
  <li>Headquarters: Cleveland, Ohio, United States</li>
  <li>Yearly Revenue (millions, USD): 110.6</li>
  <li>Vendor Website: <a href="https://www.tek.com/en">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='POWER_SUPPLIES' manufacturer='KEITHLEY'></FeaturedInstrumentVideo>


## Connect to the Keithley 2612B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 2612B Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.tektronix.Keithley_2600 import Keithley2600
from qcodes.instrument_drivers.tektronix.Keithley_2612B import Keithley2612B

# Create an instance of the Keithley2612B driver
keithley = Keithley2612B('keithley', 'TCPIP::1.2.3.4::INSTR')

# Connect to the instrument
keithley.connect()

# Now you can use the Keithley2612B instrument for various operations
# For example, you can set the voltage and current limits
keithley.voltage_limit(10)  # Set the voltage limit to 10 V
keithley.current_limit(0.1)  # Set the current limit to 0.1 A

# You can also perform measurements
voltage = keithley.voltage()  # Measure the voltage
current = keithley.current()  # Measure the current

# Disconnect from the instrument
keithley.disconnect()
```

Note that you need to replace `'TCPIP::1.2.3.4::INSTR'` with the actual address of your Keithley 2612B Power Supply.

</TabItem>
</Tabs>