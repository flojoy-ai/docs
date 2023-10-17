---
title: Connecting to SMA100A by Rohdes&Schwarz in Python
sidebar_label: SMA100A
description: This Class Handles Rohdes And Schwarz Sma Signal Generators. Supported Model Is-> -Sma100A. Signal quality, speed and flexibility these are the criteria by which signal generators are measured today. The R&S SMA100A perfectly meets these criteria, and thus is a premium-class analog generator that sets standards due to its outstanding characteristics.
keywords: [rf signal generators, Rohdes&Schwarz, PyTango]
slug: /instruments-database/rf-signal-generators/rohdes-schwarz/sma100a
image: https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692395500/Instruments/RF%20Signal%20Generators/SMA100A/file.jpg
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SMA100A

## Instrument Card

<div className="flex">

<div>

This Class Handles Rohdes And Schwarz Sma Signal Generators. Supported Model Is: -Sma100A. Signal quality, speed and flexibility these are the criteria by which signal generators are measured today. The R&S SMA100A perfectly meets these criteria, and thus is a premium-class analog generator that sets standards due to its outstanding characteristics.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395500/Instruments/RF%20Signal%20Generators/SMA100A/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="https://scdn.rohde-schwarz.com/ur/pws/dl_downloads/dl_common_library/dl_brochures_and_datasheets/pdf_1/SMA100A_dat-sw_en_5213-6412-22_v0700.pdf">here</a></p>

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


## Connect to the SMA100A in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)

import NodeCardCollection from '@site/src/components/NodeCardCollection';

<Tabs>

<TabItem value="Flojoy" label="Flojoy" className="flojoy-instrument-tabs">

<NodeCardCollection category='RF_SIGNAL_GENERATORS' manufacturer='ROHDES&SCHWARZ'></NodeCardCollection>

</TabItem>
<TabItem value="PyTango" label="PyTango">

Here is a Python script that uses Pytango to connect to a SMA100A RF Signal Generator:

```python
import time
import numpy as np
import PyTango as pt

def my_transfer_handler(args):
    total_size = args.total_size if args.total_size is not None else "unknown"
    print(f"Context: '{args.context}{'with opc' if args.opc_sync else ''}', "
          f"chunk {args.chunk_ix}, "
          f"transferred {args.transferred_size} bytes, "
          f"total size {total_size}, "
          f"direction {'reading' if args.reading else 'writing'}, "
          f"data '{args.data}'")
    if args.end_of_transfer:
        print('End of Transfer')
    time.sleep(0.1)

# Connect to the SMA100A RF Signal Generator
smab = pt.DeviceProxy('sma100a/inst1')

# Reset the instrument
smab.Reset()

pc_file = r'c:\temp\bigFile.bin'
instr_file = '/var/user/bigFileInstr.bin'
pc_file_back = r'c:\temp\bigFileBack.bin'

# Generate a random file of 20MB size
x1mb = 1024 * 1024
with open(pc_file, 'wb') as file:
    for x in range(20):
        file.write(np.random.bytes(x1mb))

# Send the file to the instrument with events
smab.events.on_write_handler = my_transfer_handler
smab.utilities.data_chunk_size = x1mb
print(f'Sending file to the instrument...')
smab.utilities.send_file_from_pc_to_instrument(pc_file, instr_file)
smab.events.on_write_handler = None
print(f'Receiving file from the instrument...')
smab.events.on_read_handler = my_transfer_handler
smab.utilities.read_file_from_instrument_to_pc(instr_file, pc_file_back)
smab.events.on_read_handler = None

# Close the connection to the instrument
smab = None
```

Please note that you need to have PyTango installed in order to run this script.

</TabItem>
</Tabs>
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit this page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/instruments-database/RF%20Signal%20Generators/SMA100A/SMA100A.md)
