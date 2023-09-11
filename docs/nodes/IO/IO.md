---
sidebar_label: IO
slug: /nodes/IO/
sidebar_position: 8
---

# INSTRUMENTS in Python

Welcome to the I/O Nodes page!

Here you can find a list of all the Flojoy nodes that can be used with instruments, motor drivers, analog sensors, and other hardware devices.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->

import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
sectionName = 'Analog Sensors'
blockquote = 'Flojoy nodes for recording data from analog sensors'
sectionRoot = 'IO/ANALOG_SENSORS'
nodes = {['PRESSURE_SENSORS/FLEXIFORCE_25LB/FLEXIFORCE_25LB', 'THERMOCOUPLES/LM34/LM34']}
/>

<AppThumbnailSection
sectionName = 'Instruments'
blockquote = 'Flojoy nodes for connecting to benchtop scientific instruments and cameras.'
sectionRoot = 'IO/INSTRUMENTS'
nodes = {['SOURCEMETERS/KEITHLEY//24XX/BASIC/IV_SWEEP', 'SOURCEMETERS/KEITHLEY//24XX/BASIC/SET_VOLTAGE','DAQ_BOARDS_LABJACK/U3/BASIC/READ_A0_PINS/READ_A0_PINS', 'DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS/READ_N_PINS', 'MOCK/WEINSCHEL8320/WEINSCHEL8320']}
/>

<AppThumbnailSection
sectionName = 'Imaging'
blockquote = 'Flojoy nodes for connecting to USB cameras.'
sectionRoot = 'IO/IMAGING'
nodes = {['WEB_CAM/CAMERA']}
/>

<AppThumbnailSection
sectionName = 'PROTOCOLS'
blockquote = 'Flojoy nodes for connecting to hardware through the USB or RS-232 serial ports.'
sectionRoot = 'INSTRUMENTS/PROTOCOLS'
nodes = {['SERIAL/BASIC/SINGLE_MEASUREMENT/SINGLE_MEASUREMENT', 'SERIAL/BASIC/TIMESERIES1/TIMESERIES1']}
/>

<AppThumbnailSection
sectionName = 'Motion Control'
blockquote = 'Flojoy nodes for connecting to motor drivers and precision control of motor movement.'
sectionRoot = 'INSTRUMENTS/MOTION/MOTOR_DRIVER'
nodes = {['STEPPER/POLULU/TIC/TIC', 'STEPPER/POLULU/TIC_KNOB']}
/>
