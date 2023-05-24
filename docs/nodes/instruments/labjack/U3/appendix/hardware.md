Hardware required to use the LABJACKU3 node : 
- A LabJack U3 LV daq 
- N temperature sensors (This tutorial will present connections with LM34Caz/Nopb : https://www.digikey.com/en/products/detail/texas-instruments/LM34CAZ-NOPB/117873)
- Connections cables (USB, Electronic cables)


Connection between the devices

-Connect the LABJACKU3 Device to your computer with an USB cable. 
-Connect the temperature sensor to the Labjacku3 device :  
-If you use the LM34Caz/Nopb you'll need to add a small resistor between the Vout and the LabJack device to the circuit to protect the sensor (see pictures) :

PIN connections : (Left LabJackU3 and right Sensors pin) : 
VS --> +Vs pin (Power supply from the computer transferred to the sensor with this connection)
Ground --> Ground Pin 
Ground --> Resistor Pin (See photos)
FI0 (For your first sensor) --> Vout pin on the sensor (Voltage are received with these FIi port where i goes from 0 to 7)

After connecting,  place your sensor where you want to measure temperature and then run your flojoy app.