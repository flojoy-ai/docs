---
title: Flojoy | Build your own nodes
description: Follow our guides to write your own custom Flojoy functions ("nodes") and apps. Only beginner-level Python knowhow is required.
sidebar_label: Introduction
id: custom-nodes
sidebar_position: 1
hide_table_of_contents: true
---

# Building Flojoy nodes in Python

Functions in Flojoy are refererred to as "nodes." If you know a bit of Python, it's easy create your own proprietary nodes for Flojoy or contribute open-source ones.

This section details all the needed information to create a custom node in Flojoy. During your development, remember that your custom nodes are just functions in Python, and so you can import whatever you should need. The _de facto_ libraries for numeric and scientific processing in Python, `NumPy` and `SciPy`, as well as others such as `OpenCV` are installed by default with Flojoy.

<!-- Custom component -->
import CardCollection from '@site/src/components/CardCollection';

<CardCollection cardData ={[
    {
        cardHeader: 'DataContainers',
        cardLink: '/custom-nodes/data-container',
        cardEmoji: '🚢',
        cardContent: 'DataContainers are the objects that pass data from one Flojoy function ("node") to the next.',
    },
    {
        cardHeader: 'Tutorial',
        cardLink: '/custom-nodes/creating-custom-nodes',
        cardEmoji: '📄',
        cardContent: 'A short tutorial example for creating a custom node.',
    },
    {
        cardHeader: 'Categories',
        cardLink: '/custom-nodes/custom-category',
        cardEmoji: '📚',
        cardContent: 'Flojoy nodes are organized into categories that include AI, signal processing, hardware control, etc.',
    },
    {
        cardHeader: 'Testing',
        cardLink: '/custom-nodes/testing-nodes',
        cardEmoji: '⛏️',
        cardContent: 'Recommended best practices for writing tests for Flojoy functions ("nodes).',
    },
    {
        cardHeader: 'API reference',
        cardLink: '/custom-nodes/node-api-reference',
        cardEmoji: '🔎',
        cardContent: 'Guide to Flojoy function decorator parameters, input parameters, and return values.',
    },
    {
        cardHeader: 'Get help',
        cardLink: 'https://community.flojoy.ai/',
        cardEmoji: '🛟',
        cardContent: 'If you run into issues or have questions, please don\'t hesitate to ask on our user forum.',
    }           
]} />

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/custom-nodes/custom-nodes.md)
