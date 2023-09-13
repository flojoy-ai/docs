---
sidebar_label: Logic
slug: /nodes/LOGIC_GATES/
sidebar_position: 5
---

# LOGIC EXPRESSIONS in Python

Welcome to the Logic nodes page!

Here you can find information about all the Flojoy nodes that can be used as logic gates to control the execution flow of Flojoy nodes.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Conditionals'
    blockquote = 'A no-code Flojoy logic nodes for "if statements." Use this node to make the execution flow of a Flojoy app conditional on a True/False statement.'
    sectionRoot = 'LOGIC_GATES/CONDITIONALS'
    nodes = {['CONDITIONAL']}
/>

<AppThumbnailSection
    sectionName = 'Loops'
    blockquote = 'No-code Flojoy logic nodes for "loops." Use these nodes to execute a collection of nodes a desired number of times.'
    sectionRoot = 'LOGIC_GATES'
    nodes = {['LOOPS/APPEND', 'LOOPS/LOOP', 'LOOP_TOOLS/BREAK', 'LOOP_TOOLS/LOOP_INDEX']}
/>

<AppThumbnailSection
    sectionName = 'Timers'
    blockquote = 'A time node introducing delays in between Flojoy node execution.'
    sectionRoot = 'TIMERS'
    nodes = {['TIMER']}
/>
