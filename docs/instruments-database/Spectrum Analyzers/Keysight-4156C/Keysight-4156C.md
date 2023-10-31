---
title: Connecting to Keysight (Agilent) 4156C by Agilent in Python
sidebar_label: Keysight (Agilent) 4156C
description: 4156C Precision Semiconductor Parameter Analyzer
keywords: [spectrum analyzers, Agilent, PyMeasure]
slug: /instruments-database/spectrum-analyzers/agilent/keysight-4156c
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395170/Instruments/Spectrum%20Analyzers/Keysight-4156C/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight (Agilent) 4156C

## Instrument Card

<div className="flex">

<div>

4156C Precision Semiconductor Parameter Analyzer

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395170/Instruments/Spectrum%20Analyzers/Keysight-4156C/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://www.keysight.com/us/en/assets/7018-02070/technical-overviews/5990-3672.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer card: AGILENT</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Keysight (Agilent) Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
  <li>Vendor Website: <a href="https://www.keysight.com/us/en/home.html">here</a></li>
</ul>
</details>

import FeaturedInstrumentVideo from '@site/src/components/FeaturedInstrumentVideo';

<FeaturedInstrumentVideo category='SPECTRUM_ANALYZERS' manufacturer='AGILENT'></FeaturedInstrumentVideo>


## Connect to the Keysight (Agilent) 4156C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/contribution/blocks/custom-flojoy-block/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='SPECTRUM_ANALYZERS' manufacturer='AGILENT'></NodeCardCollection>

</TabItem>
<TabItem value="PyMeasure" label="PyMeasure">


```python
from pymeasure.instruments.agilent import Agilent4156

# Connect to the instrument
instrument = Agilent4156("GPIB0::25")

# Reset the instrument
instrument.reset()

# Configure the instrument using a JSON configuration file
instrument.configure("configuration_file.json")

# Save the desired data variables
instrument.save(['VC', 'IC', 'VB', 'IB'])

# Perform a measurement
instrument.measure()

# Get the measured data as a pandas DataFrame
data = instrument.get_data()

# Print the data
print(data)
```

In this example, you would need to replace `"GPIB0::25"` with the appropriate address of your Keysight (Agilent) 4156C Spectrum Analyzer. You would also need to provide a valid JSON configuration file for the `configure` method.

The script connects to the instrument, resets it, configures it using the JSON file, saves the desired data variables, performs a measurement, and retrieves the measured data as a pandas DataFrame. Finally, it prints the data.

Note that you may need to install the `pandas` library if it's not already installed. You can do this by running `pip install pandas` in your terminal.

</TabItem>
</Tabs>