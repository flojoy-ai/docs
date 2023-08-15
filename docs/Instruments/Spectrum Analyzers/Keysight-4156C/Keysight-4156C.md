
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keysight 4156C

## Instrument Card

<div className="flex">

<div>

4156C Precision Semiconductor Parameter Analyzer

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106960/Instruments/Spectrum%20Analyzers/Keysight-4156C/file.png" style={{width:"256px", height: "200px"}} />

</div>

4156C Precision Semiconductor Parameter Analyzer>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692126006/Instruments/Vendor%20Logos/Agilent.png" style={{ width:"200px", height: "150px"}} />

Keysight Technologies, or Keysight, is an American company that manufactures electronics test and measurement equipment and software. <a href="https://www.keysight.com/us/en/home.html">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5420.0</li>
</ul>
</details>

## Connect to the Keysight 4156C in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Pymeasure" label="Pymeasure">


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

In this example, you would need to replace `"GPIB0::25"` with the appropriate address of your Keysight 4156C Spectrum Analyzer. You would also need to provide a valid JSON configuration file for the `configure` method.

The script connects to the instrument, resets it, configures it using the JSON file, saves the desired data variables, performs a measurement, and then retrieves the measured data as a pandas DataFrame.

Note: This script assumes that you have already installed the `pymeasure` package and its dependencies.

</TabItem>
</Tabs>