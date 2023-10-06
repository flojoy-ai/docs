---
title: TRIGGER_SETTINGS_MDO3XXX
description: The TRIGGER_SETTINGS_MDO3XXX node can extract many trace measurements from the MDO3000 series oscilloscopes.
keywords: [oscilloscope, python, extract, control, instrument, triggering]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/examples/EX1/output.jpeg
---

In this example, we demonstrate how to set the advanced trigger settings for the MDO3000 series. 

:::note
The MDO3XXX node should also work with the compatible Tektronix oscilloscopes MDO4XXX, MSO4XXX, and DPO4XXX. However, those have not been tested yet.
:::

We must first add the [`CONNECTION_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/) node. This will create the connection to the instrument at the beginning of the app. To allow this we must set the `VISA address` for this (and all subsequent `MDO3XXX` nodes). If the address does not appear in the parameters you may have to press `REFRESH` in the `HARDWARE MANAGER` tab.

The [`TRIGGER_SETTINGS_MDO3XXX`](https://github.com/flojoy-ai/nodes/tree/develop/IO/INSTRUMENTS/OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_SETTINGS_MDO3XXX) node is used to either set or query more advanced trigger settings such as triggering on an voltage rise and/or fall. 

The idea of triggering in an oscilloscope is simply to determine which repeating signal to look for in order to set the frequency of the oscilloscope (see [here](https://www.electronics-notes.com/articles/test-methods/oscilloscope/oscilloscope-trigger.php) for more information).

In this example, the triggering channel is set to CH2, the trigger level is set to 50 mV, and the advanced settings are set, for example, to trigger on a voltage rise only.
