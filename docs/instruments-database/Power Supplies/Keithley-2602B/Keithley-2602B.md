---
title: Connecting to Keithley 2602B by Keithley in Python
sidebar_label: Keithley 2602B
description: The 2602B from Keithley is a 2600B series dual channel system SourceMeter® (SMU) instrument (3A DC, 10A pulse). It is an industry’s leading current/voltage source and measure solutions. This dual channel model combines the capabilities of a precision power supply, true current source, 6 1/2 digit DMM, arbitrary waveform generator, pulse generator and electronic load all into one tightly integrated instrument. The result is a powerful solution that significantly boosts productivity in applications ranging from bench-top I-V characterization through highly automated production test. It has 100mV to 40V voltage, 100nA to 10A current measurement range (source). This is tightly integrated, 4-quadrant voltage/current source and measure instrument which offers best in class performance with 6 1/2digit resolution. Built-in web browser based software enables remote control through any browser, on any computer, from anywhere in the world.
keywords: [power supplies, Keithley, QCodes]
slug: /instruments-database/power-supplies/keithley/keithley-2602b
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395555/Instruments/Power%20Supplies/Keithley-2602B/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 2602B

## Instrument Card

<div className="flex">

<div>

The 2602B from Keithley is a 2600B series dual channel system SourceMeter® (SMU) instrument (3A DC, 10A pulse). It is an industry’s leading current/voltage source and measure solutions. This dual channel model combines the capabilities of a precision power supply, true current source, 6 1/2 digit DMM, arbitrary waveform generator, pulse generator and electronic load all into one tightly integrated instrument. The result is a powerful solution that significantly boosts productivity in applications ranging from bench-top I-V characterization through highly automated production test. It has 100mV to 40V voltage, 100nA to 10A current measurement range (source). This is tightly integrated, 4-quadrant voltage/current source and measure instrument which offers best in class performance with 6 1/2digit resolution. Built-in web browser based software enables remote control through any browser, on any computer, from anywhere in the world.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395555/Instruments/Power%20Supplies/Keithley-2602B/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.testequipmenthq.com/datasheets/KEITHLEY-2602-Datasheet.pdf">here</a></p>

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


## Connect to the Keithley 2602B in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='POWER_SUPPLIES' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

To connect to a Keithley 2602B Power Supply using Qcodes, you can use the following Python script:

```python
from qcodes.instrument_drivers.tektronix.Keithley_2600 import Keithley2602B

# Create an instance of the Keithley2602B instrument
keithley = Keithley2602B('keithley', 'TCPIP::192.168.1.1::INSTR')

# Connect to the instrument
keithley.connect()

# Perform operations with the instrument

# Disconnect from the instrument
keithley.disconnect()
```

In this script, we import the `Keithley2602B` class from the `qcodes.instrument_drivers.tektronix.Keithley_2600` module. We then create an instance of the `Keithley2602B` instrument, providing a name for the instrument ('keithley') and the connection string ('TCPIP::192.168.1.1::INSTR').

Next, we connect to the instrument using the `connect()` method. You can perform various operations with the instrument, such as setting voltage or current, measuring voltage or current, etc.

Finally, we disconnect from the instrument using the `disconnect()` method.

</TabItem>
</Tabs>