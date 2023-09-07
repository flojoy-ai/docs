---
title: Connecting to IDUS 401 CCD by Andor in Python
sidebar_label: IDUS 401 CCD
description: The Scientific Grade, 1024 x 127 deep depletion spectroscopy CCD camera is ideally suited to rapid analysis, multi-channel and low-light applications including fluorescence and Raman spectroscopy.
keywords: [spectrometers, Andor, QCodes Community]
slug: /instruments-database/spectrometers/andor/idus-401-ccd
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395717/Instruments/Spectrometers/IDUS-401-CCD/file.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IDUS 401 CCD

## Instrument Card

<div className="flex">

<div>

The Scientific Grade, 1024 x 127 deep depletion spectroscopy CCD camera is ideally suited to rapid analysis, multi-channel and low-light applications including fluorescence and Raman spectroscopy.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395717/Instruments/Spectrometers/IDUS-401-CCD/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://andor.oxinst.com/assets/uploads/products/andor/documents/andor-idus-401-specifications.pdf">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806182/Instruments/Vendor%20Logos/Andor.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

Leaders In The Development & Manufacture of Cameras, Microscopy and Spectroscopy Systems.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 230.0</li>
  <li>Vendor Website: <a href="https://andor.oxinst.com/">here</a></li>
</ul>
</details>

## Connect to the IDUS 401 CCD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

Here is a Python script that uses Qcodes Community to connect to an Andor IDUS 401 CCD Spectrometer:

```python
from qcodes import Station
from qcodes.instrument_drivers.Andor.Andor_IDUS import Andor_IDUS

# Create a station to hold the instrument
station = Station()

# Connect to the IDUS 401 CCD Spectrometer
idus = Andor_IDUS("idus", dll_path="C:\\Program Files\\Andor SDK\\atmcd64d.dll", camera_id=0, setup=True)

# Add the instrument to the station
station.add_component(idus)

# Print the IDN of the instrument
print(idus.IDN())

# Set the exposure time to 1 second
idus.exposure_time(1)

# Start the acquisition
idus.start_acquisition()

# Wait for the acquisition to complete
idus.wait_for_acquisition()

# Get the acquired data
data = idus.get_acquired_data()

# Print the acquired data
print(data)

# Close the instrument connection
idus.close()
```

Note: Make sure to replace the `dll_path` with the correct path to the `atmcd64d.dll` file on your system.

</TabItem>
</Tabs>