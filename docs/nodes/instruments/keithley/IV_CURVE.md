---
sidebar_position: 2
id: IV_CURVE
title: IV with Keithley 2400 - Serial Communication
---

This tuto explain how to record an Iv curve, using the node IV Curve on Flojoy, a Keithley2400 sourcemeter and a computer. 

## HARDWARE ## : 
In order to record an IV curve from an electric device (LED, Solar cells, etc,..) with Flojoy, you'll need a setup with :

- A Sourcemeter Keithley 2400, which is able to send voltages to the electronic device and record current from it. It has its own nodes in the Flojoy application called KEITHLEY2400.
- A source of light that you'll use as a fake sun for calibrating the output of your solar cells. (You can also use the real sun by doing the experiment outside)
- A computer which is connected to the Keithley 2400 with a serial communication cable. 


![Keithley 2400 setup](https://res.cloudinary.com/dhopxs1y3/image/upload/v1682000222/flojoy-docs/Keithley2400/89A7FE5C-D466-424D-9A0A-FC99A38135A8_4_5005_c_szerj8.jpg)
*Setup with a computer, a Keithley2400 sourcemeter, a solar cell for testing and artificial sun*



## SOFTWARE ## :
In order to record an IV curve you'll need to use our software Flojoy, you can follow [these instructions](https://docs.flojoy.io/getting-started/install/) in order to use the software on your computer 


When Flojoy is running, select and add the nodes you need for your IV curve measurement :  

![Keithley2400-nodes](https://res.cloudinary.com/dhopxs1y3/image/upload/v1681999027/flojoy-docs/Keithley2400/KEITHLEY2400_nodes1_w8nnwd.png)
*Classical Flojoy app setup for an IV curve measurement*


- Then you have to set some parameters for your IV curve measurement : 
- The LINSPACE node allows you to create a range of voltages for your use for your IV curve : 
  LINSPACE START : Define your first Voltage 
  LINSPACE END : Define your last Voltage 
  LINSPACE STEP : Define the number of voltages between the first and the last one. 
  (Example : Start : 0, END : 1, STEP : 10 --> Will send 10 voltages between 0 and 1 Volts)
  
- Next step : setup your serial communication parameters for the Comport : 
  KEITHLEY2400 COMPORT : Define your communication port where the sourcemeter is connected (Default is : /dev/tty/USBO (Linux))
  KEITHLEY2400 BAUDRATE : DEfine the Baudrate of your communication protocol (Default is : 9600, the value has to corresponds to the Instrument settings)
    
- Start Measurement : When you have defined all your parameters, you should turn on your sourcemeter, place your solar cell under the light and click "PLAY" in order to start the experiment. Voltages will be transmit to the circuit and the sourcemeter will record the output current from the solar cell. 

- You can choose the visualization node you prefer to plot your results after the measurements. 
  
- When you are done you can save the Flojoy interface in your computer so you'll be able to use it again for other measurements. 
