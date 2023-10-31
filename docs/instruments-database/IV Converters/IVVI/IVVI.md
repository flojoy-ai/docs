---
title: Connecting to IVVI by Qutech in Python
sidebar_label: IVVI
description: An ohmmeter is an electrical instrument that measures electrical resistance (the opposition offered by a circuit or component to the flow of electric current). Multimeters also function as ohmmeters when in resistance-measuring mode. An ohmmeter applies current to the circuit or component whose resistance is to be measured. It then measures the resulting voltage and calculates the resistance using Ohm’s law	https->//en.wikipedia.org/wiki/Ohmmeter
keywords: [iv converters, Qutech, QCodes Community]
slug: /instruments-database/iv-converters/qutech/ivvi
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/v1692395733/Instruments/IV%20Converters/IVVI/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IVVI

## Instrument Card

<div className="flex">

<div>

An ohmmeter is an electrical instrument that measures electrical resistance (the opposition offered by a circuit or component to the flow of electric current). Multimeters also function as ohmmeters when in resistance-measuring mode. An ohmmeter applies current to the circuit or component whose resistance is to be measured. It then measures the resulting voltage and calculates the resistance using Ohm’s law	https://en.wikipedia.org/wiki/Ohmmeter

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692395733/Instruments/IV%20Converters/IVVI/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: QUTECH</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806156/Instruments/Vendor%20Logos/QuTech.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics.

<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
  <li>Vendor Website: <a href="https://qutech.nl/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='IV_CONVERTERS' manufacturer='QUTECH'></FeaturedInstrumentVideo>


## Connect to the IVVI in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='IV_CONVERTERS' manufacturer='QUTECH'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">


```python
from qcodes.instrument_drivers.ivvi import IVVI

# Create an instance of the IVVI instrument
ivvi = IVVI('ivvi', 'ASRL1::INSTR')

# Connect to the instrument
ivvi.connect()

# Set the voltage of DAC 1 to 1000 mV
ivvi.dac1(1000)

# Get the voltage of DAC 1
voltage = ivvi.dac1()

# Print the voltage
print(f"Voltage of DAC 1: {voltage} mV")

# Disconnect from the instrument
ivvi.disconnect()
```

In this example, we first import the `IVVI` class from the `qcodes.instrument_drivers.ivvi` module. We then create an instance of the `IVVI` instrument with a name and the address of the instrument (in this case, 'ASRL1::INSTR').

Next, we connect to the instrument using the `connect()` method. We can then use the `dac1()` method to set the voltage of DAC 1 to 1000 mV. We can also use the `dac1()` method without any arguments to get the voltage of DAC 1.

Finally, we disconnect from the instrument using the `disconnect()` method.

Note: Make sure to replace 'ASRL1::INSTR' with the actual address of your IVVI IV Converter.

</TabItem>
</Tabs>