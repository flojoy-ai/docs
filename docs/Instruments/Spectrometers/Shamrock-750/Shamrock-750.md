
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Shamrock 750

## Instrument Card

<div className="flex">

<div>

The Andor Shamrock SR-750 is based on Czerny-Turner optical design. The Shamrock is available as a pre-aligned detector/spectrometer option allowing for seamless integration of software, electronics, optics and detector. There is also a fast and interactive graphical software interface allowing full control of all the spectrograph functions.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107080/Instruments/Spectrometers/Shamrock-750/file.png" style={{width:"256px", height: "200px"}} />

</div>

The Andor Shamrock SR-750 is based on Czerny-Turner optical design. The Shamrock is available as a pre-aligned detector/spectrometer option allowing for seamless integration of software, electronics, optics and detector. There is also a fast and interactive graphical software interface allowing full control of all the spectrograph functions.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125995/Instruments/Vendor%20Logos/Andor.png" style={{ width:"200px", height: "150px"}} />

Leaders In The Development & Manufacture of Cameras, Microscopy and Spectroscopy Systems. <a href="https://andor.oxinst.com/">Website</a>.

<ul>
  <li>Headquarters: UK</li>
  <li>Yearly Revenue (millions, USD): 230.0</li>
</ul>
</details>

## Connect to the Shamrock 750 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Qcodes Community" label="Qcodes Community">

To connect to a Shamrock 750 spectrometer using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes.instrument_drivers.shamrock.shamrock import Shamrock_SR750

# Create a station to hold the instrument
station = Station()

# Create an instance of the Shamrock_SR750 instrument
shamrock = Shamrock_SR750('shamrock', dll_path='C:\\Program Files\\Andor SDK\\Shamrock64\\ShamrockCIF.dll', device_id=0)

# Add the instrument to the station
station.add_component(shamrock)

# Connect to the instrument
shamrock.connect()

# Now you can use the instrument methods to control the spectrometer
# For example, to get the current grating:
grating = shamrock.grating()

# To set the grating to a specific value:
shamrock.grating(2)

# To get the wavelength:
wavelength = shamrock.wavelength()

# To set the wavelength:
shamrock.wavelength(500)

# Disconnect from the instrument
shamrock.disconnect()
```

Note that you need to provide the correct `dll_path` for the ShamrockCIF.dll file. Also, make sure you have the necessary dependencies installed, such as `qcodes` and `pywin32`.

</TabItem>
</Tabs>