---
sidebar_label: Instruments
slug: /nodes/INSTRUMENTS/
sidebar_position: 8
---

# INSTRUMENTS in Python

Welcome to the Instruments Nodes page!

Here you can find a list of all the Flojoy nodes that can be used with instruments, motor drivers, analog sensors, and other hardware devices.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Instruments'
    blockquote = 'Flojoy nodes for connecting to benchtop scientific instruments and cameras.'
    sectionRoot = 'INSTRUMENTS'
    nodes = {['KEITHLEY/KEITHLEY2400', 'LABJACK/LABJACKU3', 'MOCK/MOCK_WEINSCHEL8320', 'PHIDGET/PHIDGET22', 'QCODES/CLOSE_ALL', 'WEB_CAM/CAMERA']}
/>

<AppThumbnailSection
    sectionName = 'Serial protocol'
    blockquote = 'Flojoy nodes for connecting to hardware through the USB or RS-232 serial ports.'
    sectionRoot = 'INSTRUMENTS'
    nodes = {['SERIAL_SINGLE_MEASUREMENT', 'SERIAL_TIMESERIES']}
/>

<AppThumbnailSection
    sectionName = 'Motor control'
    blockquote = 'Flojoy nodes for connecting to motor drivers and precision control of motor movement.'
    sectionRoot = 'INSTRUMENTS/STEPPER_MOTOR'
    nodes = {['STEPPER_DRIVER_TIC', 'STEPPER_DRIVER_TIC_KNOB']}
/>
