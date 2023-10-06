---
title: Flojoy | No-code benchtop instrument control
description: Flojoy provides apps and functions or configuring data acquisition hardware, reading data into Flojoy, and writing data to DAQ output channels. Flojoy supports a variety of hardware, including those from National Instruments®, Tektronix®, and others.
sidebar_label: I/O
slug: /nodes/io/
sidebar_position: 8
hide_table_of_contents: true
---

# Benchtop instrument control

Welcome to the I/O functions ("nodes") page!

Here you can find a list of all the Flojoy nodes that connect to benchtop instruments, motor drivers, analog sensors, and other scientific hardware devices.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->

import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
sectionName = 'Attenuators'
blockquote = 'Flojoy nodes for controling and reading signals from digital attenuators.'
sectionRoot = 'IO/INSTRUMENTS'
displayPath = {true}
nodes = {['ATTENUATORS/LDA/LDA602/ATTENUATION_LDA602/']}
/>

<AppThumbnailSection
sectionName = 'DAQ boards'
blockquote = 'Flojoy nodes for reading from DAQ boards.'
sectionRoot = 'IO/INSTRUMENTS'
displayPath = {true}
nodes = {['DAQ_BOARDS/LABJACK/U3/BASIC/READ_A0_PINS', 
        'DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS']}
/>

<AppThumbnailSection
sectionName = 'Function generators'
blockquote = 'Flojoy nodes for reading and writing to function generators.'
sectionRoot = 'IO/INSTRUMENTS'
sectionSubRoot = 'I/O > Function Generators'
displayPath = {true}
nodes = {[]}
/>

<AppThumbnailSection
sectionName = 'Digital multimeters (DMMs)'
blockquote = 'Flojoy nodes for controlling and reading from DMMs.'
sectionRoot = 'IO/INSTRUMENTS'
sectionSubRoot = 'I/O > Digital Multimeters'
displayPath = {true}
nodes = {[]}
/>

<AppThumbnailSection
sectionName = 'Oscilloscopes'
blockquote = 'Flojoy nodes for reading and writing to oscilloscopes.'
sectionRoot = 'IO/INSTRUMENTS'
sectionSubRoot = 'I/O > Oscilloscopes'
displayPath = {true}
nodes = {[]}
/>

<AppThumbnailSection
sectionName = 'Sourcemeters'
blockquote = 'Flojoy nodes for reading from the Keithley 2400 sourcemeter.'
sectionRoot = 'IO/INSTRUMENTS'
displayPath = {true}
nodes = {['SOURCEMETERS/KEITHLEY/24XX/BASIC/IV_SWEEP', 
        'SOURCEMETERS/KEITHLEY/24XX/BASIC/SET_VOLTAGE']}
/>

<AppThumbnailSection
sectionName = 'Analog Sensors'
blockquote = 'Flojoy nodes for recording data from analog sensors'
sectionRoot = 'IO/ANALOG_SENSORS'
displayPath = {true}
nodes = {['PRESSURE_SENSORS/FLEXIFORCE_25LB', 'THERMOCOUPLES/LM34']}
/>

<AppThumbnailSection
sectionName = 'Imaging'
blockquote = 'Flojoy nodes for connecting to USB cameras.'
sectionRoot = 'IO/IMAGING'
nodes = {['OPEN_WEBCAM', 'WEBCAM']}
/>

<AppThumbnailSection
sectionName = 'Protocols'
blockquote = 'Flojoy nodes for connecting to hardware through the USB or RS-232 serial ports.'
sectionRoot = 'IO/PROTOCOLS'
displayPath = {true}
nodes = {['SCPI/IDN', 
        'SCPI/MEASURE_VOLTAGE', 
        'SERIAL/BASIC/OPEN_SERIAL', 
        'SERIAL/BASIC/SERIAL_SINGLE_MEASUREMENT', 
        'SERIAL/BASIC/SERIAL_TIMESERIES']}
/>

<AppThumbnailSection
sectionName = 'Motion Control'
blockquote = 'Flojoy nodes for connecting to motor drivers and precision control of motor movement.'
sectionRoot = 'IO/MOTION/MOTOR_DRIVER'
nodes = {['STEPPER/POLULU/TIC', 'STEPPER/POLULU/TIC_KNOB']}
/>