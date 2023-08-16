
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kinetix sCMOS-all_cameras

## Instrument Card

<div className="flex">

<div>

The Kinetix sCMOS delivers the highest speed and largest field of view with near-perfect 96% quantum efficiency

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692077973/Instruments/Cameras/Kinetix-sCMOS-all_cameras/Kinetix-sCMOS-all_cameras.png" style={{ width: "325px" }} />

</div>

The Kinetix sCMOS delivers the highest speed and largest field of view with near-perfect 96% quantum efficiency>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125958/Instruments/Vendor%20Logos/Teledyne.png" style={{ width: "100%", objectFit: "cover" }} />

**Teledyne** provides enabling technologies to sense, transmit and analyze information for industrial growth markets. <a href="https://www.teledyne.com">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 4614.0</li>
</ul>
</details>

## Connect to the Kinetix sCMOS-all_cameras in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumental" label="Instrumental">

Unfortunately, the given code does not provide any implementation for connecting to a Kinetix sCMOS-all_cameras camera using Instrumental. The code is specific to Photometrics cameras and the PVCam driver.

To connect to a Kinetix sCMOS-all_cameras camera using Instrumental, you would need to find or develop a specific driver for that camera model. The driver should provide the necessary functions and methods to communicate with the camera and retrieve image data.

Once you have the driver, you can use Instrumental's `Instrument` class to connect to the camera and interact with it. Here's an example of how you can connect to a Kinetix sCMOS-all_cameras camera using Instrumental:

```python
from instrumental import instrument, list_instruments

# Find the Kinetix sCMOS-all_cameras camera in the list of available instruments
kinetix_cameras = [cam for cam in list_instruments() if cam['module'] == 'cameras.kinetix_scmos']

if len(kinetix_cameras) == 0:
    raise InstrumentNotFoundError("Kinetix sCMOS-all_cameras camera not found")

# Connect to the first Kinetix sCMOS-all_cameras camera found
camera = instrument(kinetix_cameras[0])

# Now you can use the camera object to control the camera and capture images
camera.start_live_video()
image = camera.get_captured_image()
camera.stop_live_video()

# Do something with the captured image
print(image)
```

Note that the above code assumes you have a driver for the Kinetix sCMOS-all_cameras camera and it is properly installed and accessible to Instrumental.

</TabItem>
</Tabs>