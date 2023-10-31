---
title: Connecting to 2700A Bridge by Andeen Hagerling in Python
sidebar_label: 2700A Bridge
description: The Andeen-Hagerling AH 2700A offers unparalleled stability, resolution, linearity and accuracy in a multi-frequency capacitance/loss bridge. Its numerous state-of-the-art features make it an exceptionally user-friendly instrument, measuring capacitance and loss in medium and high impedance ranges, and thus allows using three-terminal rather than five-terminal connections to the DUT (Device Under Test).The new AH 2700A-E offers substantially improved resolution over the entire operating range, bringing a super-sensitivity that enables it to explore applications in calibration, scientific research, and manufacturing with a new precision.The AH2700A-E is the pinnacle of decades of Andeen-Hagerling experience in bridge design and manufacture, and is complemented by its sister model, the AH2700A-E-C that offers continuous frequency scanning.
keywords: [multimeters, Andeen Hagerling, PyMeasure]
slug: /instruments-database/multimeters/andeen-hagerling/2700a-bridge
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692386182/Instruments/Multimeters/2700A-Bridge/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2700A Bridge

## Instrument Card

<div className="flex">

<div>

The Andeen-Hagerling AH 2700A offers unparalleled stability, resolution, linearity and accuracy in a multi-frequency capacitance/loss bridge. Its numerous state-of-the-art features make it an exceptionally user-friendly instrument, measuring capacitance and loss in medium and high impedance ranges, and thus allows using three-terminal rather than five-terminal connections to the DUT (Device Under Test).

The new AH 2700A-E offers substantially improved resolution over the entire operating range, bringing a super-sensitivity that enables it to explore applications in calibration, scientific research, and manufacturing with a new precision.

The AH2700A-E is the pinnacle of decades of Andeen-Hagerling experience in bridge design and manufacture, and is complemented by its sister model, the AH2700A-E-C that offers continuous frequency scanning.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692386182/Instruments/Multimeters/2700A-Bridge/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="http://www.andeen-hagerling.com/ah2700a.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ANDEEN</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806198/Instruments/Vendor%20Logos/Andeen_Hagerling.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

**Andeen**-**Hagerling**, Inc. - manufacturers of the world's most accurate capacitance bridges and standards.

<ul>
  <li>Headquarters: US</li>
  <li>Yearly Revenue (millions, USD): 1.0</li>
  <li>Vendor Website: <a href="https://www.andeen-hagerling.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='MULTIMETERS' manufacturer='ANDEEN'></FeaturedInstrumentVideo>


## Connect to the 2700A Bridge in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MULTIMETERS' manufacturer='ANDEEN'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">

To connect to a 2700A Bridge Multimeter using Pymeasure, you can use the following Python script:

```python
from pymeasure.instruments import Instrument
from pymeasure.adapters import VISAAdapter
from pymeasure.instruments.validators import strict_range
from .ah2500a import AH2500A
from .ah2700a import AH2700A

# Create a VISA adapter for communication
adapter = VISAAdapter("GPIB0::12::INSTR")

# Create an instance of the AH2700A instrument
bridge = AH2700A(adapter)

# Connect to the instrument
bridge.open()

# Perform measurements or other operations
idn = bridge.id
print("Instrument ID:", idn)

config = bridge.config
print("Configuration:", config)

frequency = bridge.frequency
print("Frequency:", frequency)

# Reset the instrument
bridge.reset()

# Trigger a new measurement
bridge.trigger()
# Close the connection to the instrument
bridge.close()
```

This script creates a VISA adapter to establish communication with the instrument. Then, it creates an instance of the `AH2700A` class, which represents the Andeen Hagerling 2700A Precision Capacitance Bridge instrument. The `open()` method is used to connect to the instrument.

After connecting, you can perform various operations on the instrument. The `id` attribute retrieves the instrument identification, the `config` attribute reads out the configuration, and the `frequency` attribute gets or sets the test frequency used for measurements.

The `reset()` method resets the instrument, and the `trigger()` method triggers a new measurement without blocking. Finally, the `close()` method is used to close the connection to the instrument.

</TabItem>
</Tabs>