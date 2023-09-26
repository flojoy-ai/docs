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
nodes = {['DAQ_BOARDS_LABJACK/U3/BASIC/READ_A0_PINS/READ_A0_PINS', 'DAQ_BOARDS/PHIDGET/INTERFACEKIT/BASIC/READ_N_PINS/READ_N_PINS', 'MOCK/WEINSCHEL8320/WEINSCHEL8320', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/ADVANCED_MEASUREMENTS_MDO3XXX/ADVANCED_MEASUREMENTS_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/ADVANCED/TRIGGER_SETTINGS_MDO3XXX/TRIGGER_SETTINGS_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/EXTRACT_TRACE_MDO3XXX/EXTRACT_TRACE_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASURE_PHASE_MDO3XXX/MEASURE_PHASE_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/MEASUREMENTS_MDO3XXX/MEASUREMENTS_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TERMINATION_MDO3XXX/TERMINATION_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_CHANNEL_MDO3XXX/TRIGGER_CHANNEL_MDO3XXX', 'OSCILLOSCOPES/TEKTRONIX/MDO3XXX/BASIC/TRIGGER_LEVEL_MDO3XXX/TRIGGER_LEVEL_MDO3XXX', 'QCODES/CLOSE_ALL/CLOSE_ALL', 'QCODES/LIST_VISA/LIST_VISA', 'QCODES/VISA_IDENTITY/VISA_IDENTITY', 'SOURCEMETERS/KEITHLEY//24XX/BASIC/IV_SWEEP', 'SOURCEMETERS/KEITHLEY//24XX/BASIC/SET_VOLTAGE']}
/>

<AppThumbnailSection
sectionName = 'Imaging'
blockquote = 'Flojoy nodes for connecting to USB cameras.'
sectionRoot = 'IO/IMAGING'
nodes = {['WEB_CAM/CAMERA']}
/>

<AppThumbnailSection
sectionName = 'Protocols'
blockquote = 'Flojoy nodes for connecting to hardware through the USB or RS-232 serial ports.'
sectionRoot = 'INSTRUMENTS/PROTOCOLS'
nodes = {['CAN/CAN', 'SCPI/SCPI', 'SERIAL/BASIC/SERIAL_SINGLE_MEASUREMENT/SERIAL_SINGLE_MEASUREMENT', 'SERIAL/BASIC/SINGLE_MEASUREMENT/SINGLE_MEASUREMENT', 'SERIAL/BASIC/TIMESERIES/TIMESERIES', 'VISA/VISA']}
/>

<AppThumbnailSection
sectionName = 'Motion Control'
blockquote = 'Flojoy nodes for connecting to motor drivers and precision control of motor movement.'
sectionRoot = 'INSTRUMENTS/MOTION/MOTOR_DRIVER'
nodes = {['BLDC/LINENGINEERING/LINENGINEERING', 'BLDC/TINYMOVR/TINYMOVR', 'SERVO/TINYMOVR2/TINYMOVR2', 'STEPPER/ADAFRUIT/ADAFRUIT', 'STEPPER/POLULU/TIC/TIC', 'STEPPER/POLULU/TIC_KNOB', 'STEPPER/ZABER/ZABER']}
/>