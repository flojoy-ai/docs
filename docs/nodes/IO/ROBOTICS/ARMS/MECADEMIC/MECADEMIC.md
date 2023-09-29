---
sidebar_label: Mecademic
slug: /nodes/ARMS/MECADEMIC/
sidebar_position: 3
---

# Mecademic Robotics Arm Nodes

Welcome to the Mecademic Arm nodes page!

Here you can explore various nodes related to the operations of the Mecademic robotic arm on the Flojoy platform. These nodes serve as the bridge between the Flojoy visual programming environment and the real-world mechanical operations carried out by the Mecademic robotic arm.

Each node corresponds to a specific action or setting of the Mecademic robotic arm, making it effortless to visually program and control the robot for various applications.

For a broader understanding of Flojoy's robotic interaction capabilities, consider exploring other [Robotics Nodes](/nodes/ROBOTICS).

Below is a breakdown of the Mecademic Arm nodes available:

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName='Connection Controls'
    blockquote='Nodes for establishing and managing connection with the Mecademic robotic arm.'
    sectionRoot='ARMS/MECADEMIC'
    nodes={['CONNECT', 'DISCONNECT']}
/>

<AppThumbnailSection
    sectionName='Operational Commands'
    blockquote='Nodes for executing various operational commands on the Mecademic robotic arm.'
    sectionRoot='ARMS/MECADEMIC'
    nodes={['ACTIVATE', 'DELAY', 'HOME', 'MOVE_JOINT', 'MOVE_LIN', 'MOVE_POSE', 'SET_CART_LIN_VEL', 'SET_JOINT_VEL']}
/>