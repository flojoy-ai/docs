
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# IDUS 401 CCD

## Instrument Card

<div className="flex">

<div>

The Scientific Grade, 1024 x 127 deep depletion spectroscopy CCD camera is ideally suited to rapid analysis, multi-channel and low-light applications including fluorescence and Raman spectroscopy.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692078082/Instruments/Spectrometers/IDUS-401-CCD/IDUS-401-CCD.png" style={{ width: "325px" }} />

</div>

The Scientific Grade, 1024 x 127 deep depletion spectroscopy CCD camera is ideally suited to rapid analysis, multi-channel and low-light applications including fluorescence and Raman spectroscopy.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125995/Instruments/Vendor%20Logos/Andor.png" style={{ width: "100%", objectFit: "cover" }} />

Leaders In The Development & Manufacture of Cameras, Microscopy and Spectroscopy Systems. <a href="https://andor.oxinst.com/">Website</a>.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 230.0</li>
</ul>
</details>

## Connect to the IDUS 401 CCD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

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