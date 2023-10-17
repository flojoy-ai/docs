---
title: Connecting to Model 331 by Lakeshore in Python
sidebar_label: Model 331
description: The Model 331 cryogenic temperature controller combines the easy operation and unsurpassed reliability of the Model 330 with improved sensor input and interface flexibility, including compatibility with negative temperature coefficient (NTC) resistance temperature detectors (RTDs). Backed by the Lake Shore tradition of excellence in cryogenic sensors and instrumentation, the Model 331 temperature controller sets the standard for mid-price range temperature control instruments.
keywords: [temperature controllers, Lakeshore, QCodes Community]
slug: /instruments-database/temperature-controllers/lakeshore/model-331
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395781/Instruments/Temperature%20Controllers/Model-331/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Model 331

## Instrument Card

<div className="flex">

<div>

The Model 331 cryogenic temperature controller combines the easy operation and unsurpassed reliability of the Model 330 with improved sensor input and interface flexibility, including compatibility with negative temperature coefficient (NTC) resistance temperature detectors (RTDs). Backed by the Lake Shore tradition of excellence in cryogenic sensors and instrumentation, the Model 331 temperature controller sets the standard for mid-price range temperature control instruments.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395781/Instruments/Temperature%20Controllers/Model-331/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.lakeshore.com/docs/default-source/product-downloads/331_manual.pdf?sfvrsn=5ed3bf08_1">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: LAKESHORE</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692813206/Instruments/Vendor%20Logos/Lakeshore_Cryotronics.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Supporting advanced scientific research, Lake Shore is a leading global innovator in measurement and control solutions.

<ul>
  <li>Headquarters: Westerville, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 21.4</li>
  <li>Vendor Website: <a href="https://www.lakeshore.com/home">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='TEMPERATURE_CONTROLLERS' manufacturer='LAKESHORE'></FeaturedInstrumentVideo>


## Connect to the Model 331 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='TEMPERATURE_CONTROLLERS' manufacturer='LAKESHORE'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Model 331 Temperature Controller using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.Lakeshore.Model_331 import Model_331

# Create a station to hold the instruments
station = Station()

# Connect to the Model 331 Temperature Controller
model_331 = Model_331('model_331', 'GPIB0::1::INSTR')
station.add_component(model_331)

# Print the heater output
print(model_331.heater_output())

# Set the heater range to 5W
model_331.heater_range('5W')

# Print the temperature of channel A
print(model_331.channels.ChanA.temperature())

# Set the setpoint temperature to 300 K
model_331.setpoint(300)

# Print the setpoint temperature
print(model_331.setpoint())

# Disconnect from the instruments
station.close_all_registered_instruments()
```

This script creates a `Station` object to hold the instruments. It then connects to the Model 331 Temperature Controller using the `Model_331` class from the `qcodes.instrument_drivers.Lakeshore` module. The instrument is added to the station using the `add_component` method.

The script then demonstrates some basic operations with the instrument. It prints the heater output using the `heater_output` parameter, sets the heater range to 5W using the `heater_range` parameter, prints the temperature of channel A using the `temperature` parameter of the `SensorChannel` class, sets the setpoint temperature to 300 K using the `setpoint` parameter, and finally prints the setpoint temperature.

Note that you may need to adjust the GPIB address (`'GPIB0::1::INSTR'`) to match the actual address of your instrument.

</TabItem>
</Tabs>