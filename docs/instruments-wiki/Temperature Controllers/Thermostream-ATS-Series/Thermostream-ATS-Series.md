---
title: Connecting to Thermostream ATS Series by Temptronic in Python
sidebar_label: Thermostream ATS Series
description: Temptronic ThermoStreams are portable systems that deliver clean dry air for precision temperature testing or conditioning of electronics (ICs, MEMS, transceivers, or circuits) and materials. No other systems can bring your test subjects to temperature faster with precise control
keywords: [temperature controllers, Temptronic, PyMeasure]
slug: /instruments-wiki/temperature-controllers/temptronic/thermostream-ats-series
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395182/Instruments/Temperature%20Controllers/Thermostream-ATS-Series/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Thermostream ATS Series

## Instrument Card

<div className="flex">

<div>

Temptronic ThermoStreams are portable systems that deliver clean dry air for precision temperature testing or conditioning of electronics (ICs, MEMS, transceivers, or circuits) and materials. No other systems can bring your test subjects to temperature faster with precise control

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395182/Instruments/Temperature%20Controllers/Thermostream-ATS-Series/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.intestthermal.com/temptronic/brochure-request?brochure_title=ATS-605%20THERMOSTREAM%C2%AE%20DATASHEET%20AND%20SPECIFICATIONS&brand_interest=Temptronic&brand_sub_folder=temptronic&file_name=TemperatureForcing_ATS605.pdf&product=ThermoStream&hsLang=en">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806163/Instruments/Vendor%20Logos/Temptronic.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Temptronic** temperature forcing systems, are designed for testing and characterization of semiconductors, ICs, chips, electronics, and materials.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 19.0</li>
  <li>Vendor Website: <a href="https://www.intestthermal.com/temptronic">here</a></li>
</ul>
</details>

## Connect to the Thermostream ATS Series in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="PyMeasure" label="PyMeasure">

Here is an example Python script that uses Pymeasure to connect to a Thermostream ATS Series Temperature Controller:

```python
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.thermostream import ATSBase

# Connect to the instrument
adapter = VISAAdapter("TCPIP::192.168.1.1::INSTR")  # Replace with the actual IP address of the instrument
instrument = ATSBase(adapter)

# Configure the instrument
instrument.configure(
    temp_window=1,
    dut_type='T',
    soak_time=30,
    dut_constant=100,
    temp_limit_air_low=-60,
    temp_limit_air_high=220,
    temp_limit_air_dut=50,
    maximum_test_time=1000
)

# Start the instrument
instrument.start()

# Set the temperature to 25 degrees Celsius
instrument.set_temperature(25)

# Wait for the instrument to settle
instrument.wait_for_settling()

# Check if the instrument is at temperature
if instrument.at_temperature():
    print("The instrument is at temperature")
else:
    print("The instrument is not at temperature")

# Stop the instrument
instrument.shutdown()
```

Note: Replace `"TCPIP::192.168.1.1::INSTR"` with the actual VISA address of the instrument, which can be found using the appropriate VISA resource manager software.

</TabItem>
</Tabs>