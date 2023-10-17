---
title: Connecting to Kelvinox IGH by Oxford Instruments in Python
sidebar_label: Kelvinox IGH
description: Currently no description
keywords: [dilution refrigerators, Oxford Instruments, QCodes Community]
slug: /instruments-database/dilution-refrigerators/oxford-instruments/kelvinox-igh
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395738/Instruments/Dilution%20Refrigerators/Kelvinox-IGH/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kelvinox IGH

## Instrument Card

<div className="flex">

<div>

Currently no description

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395738/Instruments/Dilution%20Refrigerators/Kelvinox-IGH/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-database/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: OXFORD</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806167/Instruments/Vendor%20Logos/Oxford_Instruments.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Oxford Instruments plc is a United Kingdom manufacturing and research company that designs and manufactures tools and systems for industry and research. The company is headquartered in Abingdon, Oxfordshire, England, with sites in the United Kingdom, United States, Europe, and Asia.[2] It is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.[3].

<ul>
  <li>Headquarters: Abingdon, United Kingdom</li>
  <li>Yearly Revenue (millions, USD): 367.3</li>
  <li>Vendor Website: <a href="https://www.oxinst.com/">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='DILUTION_REFRIGERATORS' manufacturer='OXFORD'></FeaturedInstrumentVideo>


## Connect to the Kelvinox IGH in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='DILUTION_REFRIGERATORS' manufacturer='OXFORD'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">


```python
import qcodes as qc
from qcodes.instrument_drivers.oxford.Kelvinox_IGH import Kelvinox_IGH

# Connect to the dilution refrigerator
dilution_fridge = Kelvinox_IGH("dilution_fridge", "COM1")

# Print the current temperature of the mixing chamber
print(dilution_fridge.mixing_chamber.temperature())

# Close the connection to the dilution refrigerator
dilution_fridge.close()
```

In this example, we import the necessary modules from Qcodes and specifically import the `Kelvinox_IGH` instrument driver for the Kelvinox IGH Dilution Refrigerator. We then create an instance of the `Kelvinox_IGH` class, passing in the name of the instrument and the communication port (e.g., `"COM1"` for a serial connection).

We can then use the various methods provided by the `Kelvinox_IGH` instrument driver to interact with the dilution refrigerator. In this example, we print the current temperature of the mixing chamber using the `temperature()` method.

Finally, we close the connection to the dilution refrigerator using the `close()` method.

Note: Make sure to replace `"COM1"` with the appropriate communication port for your setup.

</TabItem>
</Tabs>