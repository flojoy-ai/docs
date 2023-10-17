---
title: Connecting to Triton by Oxford Instruments in Python
sidebar_label: Triton
description: The Triton family of cryogen free dilution refrigerators has ledthe way in ultra-low temperature experiment-readiness with itsleading-edge superconducting magnet integration, sample loadingmechanisms and sample wiring options.With over 300 systems installed worldwide, Triton is used in worldleading science across quantum technology, spintronics, optics andmany other cutting-edge applications of condensed matter physics.
keywords: [dilution refrigerators, Oxford Instruments, QCodes]
slug: /instruments-database/dilution-refrigerators/oxford-instruments/triton
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395692/Instruments/Dilution%20Refrigerators/Triton/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Triton

## Instrument Card

<div className="flex">

<div>

The Triton family of cryogen free dilution refrigerators has led
the way in ultra-low temperature experiment-readiness with its
leading-edge superconducting magnet integration, sample loading
mechanisms and sample wiring options.
With over 300 systems installed worldwide, Triton is used in worldleading science across quantum technology, spintronics, optics and
many other cutting-edge applications of condensed matter physics.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395692/Instruments/Dilution%20Refrigerators/Triton/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

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


## Connect to the Triton in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='DILUTION_REFRIGERATORS' manufacturer='OXFORD'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">


```python
import qcodes as qc
from qcodes.instrument_drivers.oxford.triton import Triton

# Connect to the Triton Dilution Refrigerator
triton = Triton("triton", "TCPIP0::192.168.1.100::5000::SOCKET")

# Initialize the instrument
triton.init()

# Set the temperature of the mixing chamber to 100 mK
triton.mixing_chamber.temperature(0.1)

# Close the connection to the Triton Dilution Refrigerator
triton.close()
```

In this example, we import the necessary modules and classes from Qcodes. We then create an instance of the `Triton` class, passing the IP address and port number of the Triton Dilution Refrigerator as arguments. 

Next, we initialize the instrument using the `init()` method. This step is important to establish communication with the instrument and ensure that it is ready for use.

We can then use various methods provided by the `Triton` class to control the instrument. In this example, we set the temperature of the mixing chamber to 100 mK using the `temperature()` method of the `mixing_chamber` attribute.

Finally, we close the connection to the Triton Dilution Refrigerator using the `close()` method.

Note that you may need to modify the IP address and port number in the `Triton` constructor to match the actual address and port of your Triton Dilution Refrigerator.

</TabItem>
</Tabs>