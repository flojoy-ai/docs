---
title: Connecting to R&S SGS100A by Rohdes&Schwarz in Python
sidebar_label: R&S SGS100A
description: The R&S®SGS100A is an RF source designed to meet the requirements of automated test systems. It is available as a CW source or as a vector signal generator with an integrated I/Q modulator. With its frequency range of up to 12.75 GHz, the vector signal generation version covers the essential digital signals. The CW version can be used as a flexible local oscillator and for interference testing against mobile radio standards.
keywords: [rf signal generators, Rohdes&Schwarz, QCodes]
slug: /instruments-database/rf-signal-generators/rohdes-schwarz/rs-sgs100a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395646/Instruments/RF%20Signal%20Generators/RS-SGS100A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# R&S SGS100A

## Instrument Card

<div className="flex">

<div>

The R&S®SGS100A is an RF source designed to meet the requirements of automated test systems. It is available as a CW source or as a vector signal generator with an integrated I/Q modulator. With its frequency range of up to 12.75 GHz, the vector signal generation version covers the essential digital signals. The CW version can be used as a flexible local oscillator and for interference testing against mobile radio standards.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395646/Instruments/RF%20Signal%20Generators/RS-SGS100A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="hhttps://www.axiomtest.com/documents/models/RS%20SGS100A%20Datasheet.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: ROHDES&SCHWARZ</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806194/Instruments/Vendor%20Logos/RohdeSchwarz.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Rohde & Schwarz GmbH & Co KG is an international electronics group specializing in the fields of electronic test equipment, broadcast & media, cybersecurity, radiomonitoring and radiolocation, and radiocommunication.

<ul>
  <li>Headquarters: Munich, Germany</li>
  <li>Yearly Revenue (millions, USD): 2500.0</li>
  <li>Vendor Website: <a href="https://www.rohde-schwarz.com/ca/home_48230.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='RF_SIGNAL_GENERATORS' manufacturer='ROHDES&SCHWARZ'></FeaturedInstrumentVideo>


## Connect to the R&S SGS100A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='ROHDES&SCHWARZ'></NodeCardCollection>

</TabItem>
<TabItem value="QCodes" label="QCodes">

Here is a Python script that uses Qcodes to connect to a R&S SGS100A RF Signal Generator:

```python
import qcodes as qc
from qcodes.instrument_drivers.rohde_schwarz.SGS100A import RohdeSchwarzSGS100A

# Create an instance of the instrument
sg = RohdeSchwarzSGS100A('sg', 'TCPIP0::192.168.1.1::inst0::INSTR')

# Connect to the instrument
sg.connect()

# Print the frequency of the signal generator
print(sg.frequency())

# Set the frequency to 1 GHz
sg.frequency(1e9)

# Turn on the RF output
sg.on()

# Turn off the RF output
sg.off()

# Disconnect from the instrument
sg.disconnect()
```

Note: Replace `'TCPIP0::192.168.1.1::inst0::INSTR'` with the actual address of your signal generator.

</TabItem>
</Tabs>