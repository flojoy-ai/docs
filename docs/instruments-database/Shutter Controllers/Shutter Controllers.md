--- 
sidebar_label: Shutter Controllers
sidebar_position: 3
slug: /instruments-database/shutter-controllers/
hide_table_of_contents: true
---

# Controlling Shutter Controllers in Python

Welcome to the Shutter Controllers page! Here you can find information about the Shutter Controllers instruments available in Flojoy.

You can find all the available instruments from the sidebar


## Shutter Controllers 

<details> 
<summary>Category Description</summary> 
Optical Shutters utilize a rotary, electro-mechanical actuator to provide millisecond shutter operation. During operation, these shutters remain in a closed position and then open when a pulse control signal is applied by an external controller. As long as the control voltage to the optical shutter remains high, the shutter stays open, but as soon as the voltage goes low, the shutter closes, providing inherent "fail-safe" operation. The frequency at which the device is opened and closed can be controlled. An optical sensor, which detects the shutter blade position in the housing, provides information that confirms the state of the optical shutter position. This makes it ideal in applications where a laser safety lockout is required. 
</details> 

<!-- Custom component -->
import AppThumbnail from '@site/src/components/AppThumbnail';

<div className="flex flex-wrap">

<AppThumbnail 
    path='shutter-controllers/thorlabs/sc10'
    img='https://res.cloudinary.com/dhopxs1y3/image/upload/w_600,q_auto,f_auto/e_bgremoval/v1692639435/Instruments/Shutter%20Controllers/SC10/file.jpg'
    instrument={true}
>
    SC10
</AppThumbnail>
</div>