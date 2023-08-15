
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MT Standard Interface Communication Software

## Instrument Card

<div className="flex">

<div>

Instrument class to communicate with Mettler Toledo balances using the MT-SICS Standared Interface Command Set.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692107000/Instruments/Miscellaneous/MT-Standard-Interface-Communication-Software/file.jpg" style={{width:"256px", height: "200px"}} />

</div>

Instrument class to communicate with Mettler Toledo balances using the MT-SICS Standared Interface Command Set.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692125974/Instruments/Vendor%20Logos/Mettler_Toledo.png" style={{ width:"200px", height: "150px"}} />

Mettler Toledo (NYSE: MTD) is a multinational manufacturer of scales and analytical instruments. It is the largest provider of weighing instruments for use in laboratory, industrial, and food retailing applications. The company also provides various analytical instruments, process analytics instruments, and end-of-line inspection systems. The company operates worldwide with 70% of net sales, derived in equal parts, from Europe and from the Americas. Asian business is included in the remaining 30%.[2] Mettler Toledo is headquartered in Switzerland and incorporated in the United States.[4]. <a href="https://www.mt.com/ca/en/home.html">Website</a>.

<ul>
  <li>Headquarters: Columbus, Ohio, USA</li>
  <li>Yearly Revenue (millions, USD): 2819.0</li>
</ul>
</details>

## Connect to the MT Standard Interface Communication Software in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

Here is an example Python script that uses Instrumentkit to connect to a Mettler Toledo balance using the MT Standard Interface Communication Software:

```python
import instrumentkit as ik

# Open a serial connection to the balance
inst = ik.mettler_toledo.MTSICS.open_serial('/dev/ttyUSB0', 9600)

# Perform operations on the balance
inst.clear_tare()
inst.reset()
inst.tare()
inst.zero()

# Get information from the balance
mt_sics_info = inst.mt_sics
mt_sics_commands = inst.mt_sics_commands
balance_name = inst.name
serial_number = inst.serial_number
tare_value = inst.tare_value
weight = inst.weight
weight_mode = inst.weight_mode

# Close the connection to the balance
inst.close()
```

Note: This script assumes that you have installed the `instrumentkit` package and imported it as `ik`.

</TabItem>
</Tabs>