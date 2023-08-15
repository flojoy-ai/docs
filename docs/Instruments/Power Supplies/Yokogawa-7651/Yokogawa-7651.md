
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Yokogawa 7651

## Instrument Card

<div className="flex">

<div>

The 7651 is a general-purpose DC source developed on YOKOGAWA's state-of-the-art DC standard technology. The dual multiplying D/A converter has enabled the compatibility of high-speed response and high resolution. The 7651 also provides high accuracy and stability. In addition to the source function (current supply), the sink function (current absorption) is also available, so the 7651 can be used as not only DC voltage/current source but also high-precision electronic load. Further, a series of powerful functions to meet the system use such as the programming function up to 50 steps, the IC memory card capable of storing 7 patterns of programs, and GP-IB interface are provided as standard. This 7651 can be used for a wide range of fields from R & D to production line, service and maintenance.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692106761/Instruments/Power%20Supplies/Yokogawa-7651/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

The 7651 is a general-purpose DC source developed on YOKOGAWA's state-of-the-art DC standard technology. The dual multiplying D/A converter has enabled the compatibility of high-speed response and high resolution. The 7651 also provides high accuracy and stability. In addition to the source function (current supply), the sink function (current absorption) is also available, so the 7651 can be used as not only DC voltage/current source but also high-precision electronic load. Further, a series of powerful functions to meet the system use such as the programming function up to 50 steps, the IC memory card capable of storing 7 patterns of programs, and GP-IB interface are provided as standard. This 7651 can be used for a wide range of fields from R & D to production line, service and maintenance.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125993/Instruments/Vendor%20Logos/Yokogawa.png" style={{ width:"200px", height: "150px"}} />

Yokogawa is a leading provider of Industrial Automation and Test and Measurement solutions. Combining superior technology with engineering services, project management, and maintenance, Yokogawa delivers field proven operational efficiency, safety, quality, and reliability. <a href="https://www.yokogawa.com/">Website</a>.

<ul>
  <li>Headquarters: Japan</li>
  <li>Yearly Revenue (millions, USD): 318.0</li>
</ul>
</details>

## Connect to the Yokogawa 7651 in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

```python
Unfortunately, the provided code is for a Yokogawa 6370 Optical Spectrum Analyzer, not a Yokogawa 7651 Power Supply. Therefore, I cannot provide you with a Python script using Instrumentkit to connect to a Yokogawa 7651 Power Supply based on the given code.
```

</TabItem>
<TabItem value="Pymeasure" label="Pymeasure">


```python
from pymeasure.instruments.yokogawa import Yokogawa7651

# Connect to the Yokogawa 7651 Power Supply
yoko = Yokogawa7651("GPIB::1")

# Apply a current of 1 mA with a compliance voltage of 1 V
yoko.apply_current(max_current=1e-3, compliance_voltage=1)

# Enable the current output
yoko.enable_source()

# Ramp the current to 5 mA over 0.5 seconds
yoko.ramp_to_current(5e-3, steps=25, duration=0.5)

# Ramp the current back to 0 mA and disable the output
yoko.shutdown()
```

This script connects to the Yokogawa 7651 Power Supply using the GPIB address "GPIB::1". It applies a current of 1 mA with a compliance voltage of 1 V using the `apply_current()` method. Then, it enables the current output using the `enable_source()` method. Next, it ramps the current to 5 mA over 0.5 seconds using the `ramp_to_current()` method. Finally, it ramps the current back to 0 mA and disables the output using the `shutdown()` method.

Note: Make sure you have the necessary dependencies installed, such as `pymeasure` and the appropriate GPIB driver for your system.

</TabItem>
</Tabs>