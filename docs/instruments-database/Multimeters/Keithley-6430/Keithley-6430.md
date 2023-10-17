---
title: Connecting to Keithley 6430 by Keithley in Python
sidebar_label: Keithley 6430
description: he 6½-digit Model 6430 Sub-Femtoamp Remote SourceMeter SMU Instrument can measure current with 1aA sensitivity. Its low noise and drift performance make it ideal for research on single electron devices, highly resistive nanowires and nanotubes, polymers, and electrochemical applications.
keywords: [multimeters, Keithley, QCodes Community]
slug: /instruments-database/multimeters/keithley/keithley-6430
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639161/Instruments/Multimeters/Keithley-6430/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keithley 6430

## Instrument Card

<div className="flex">

<div>

he 6½-digit Model 6430 Sub-Femtoamp Remote SourceMeter SMU Instrument can measure current with 1aA sensitivity. Its low noise and drift performance make it ideal for research on single electron devices, highly resistive nanowires and nanotubes, polymers, and electrochemical applications.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692639161/Instruments/Multimeters/Keithley-6430/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://download.tek.com/datasheet/6430.pdf">here</a></p>

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

<FeaturedInstrumentVideo category='MULTIMETERS' manufacturer='KEITHLEY'></FeaturedInstrumentVideo>


## Connect to the Keithley 6430 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='MULTIMETERS' manufacturer='KEITHLEY'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to a Keithley 6430 Multimeter using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.visa import VisaInstrument

# Create a class for the Keithley 6430 Multimeter
class Keithley6430(VisaInstrument):
    def __init__(self, name, address, **kwargs):
        super().__init__(name, address, terminator="\n", **kwargs)

        # Add parameters for the instrument
        self.add_parameter('source_current_compliance',
                           unit='A',
                           get_parser=float,
                           set_cmd='SENS:CURR:PROT {}',
                           get_cmd='SENS:CURR:PROT?',
                           vals=Numbers(1e-9, 105e-3)
                           )
        # Add more parameters here...

        self.connect_message()

# Connect to the Keithley 6430 Multimeter
keithley = Keithley6430('keithley', 'TCPIP0::192.168.1.1::INSTR')

# Set the source current compliance
keithley.source_current_compliance(0.1)

# Get the source current compliance
compliance = keithley.source_current_compliance()
print(f"Source current compliance: {compliance} A")

# Close the connection
keithley.close()
```

Note: Replace `'TCPIP0::192.168.1.1::INSTR'` with the actual address of your Keithley 6430 Multimeter.

</TabItem>
</Tabs>