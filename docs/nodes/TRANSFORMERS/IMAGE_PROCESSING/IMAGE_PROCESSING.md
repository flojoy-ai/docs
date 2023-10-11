---
title: Flojoy | No-code scientific image processing
description: Flojoy supports standard image processing functions such as logical and arithmetical operations between images, contrast manipulation, convolution, Fourier analysis, sharpening, smoothing, edge detection, and median filtering.
sidebar_label: Image Processing
sidebar_position: 1
slug: /nodes/transformers/image-processing/
hide_table_of_contents: true
---

# Image processing in Python

Welcome to the Image Processing nodes page!

Here you can find information about all Flojoy functions ("nodes") that can display, edit, analyze, process, save, and print grayscale and color images.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';
import UniversalAdmonition from '@site/src/components/UniversalAdmonition';

<UniversalAdmonition />

<AppThumbnailSection
    sectionName = 'Image processing'
    blockquote = 'No-code Flojoy nodes for Python-based image processing, including nodes for RGB channel splitting, edge detection, and smoothing.'
    sectionRoot = 'TRANSFORMERS/IMAGE_PROCESSING'
    nodes = {['CHANNEL_MERGE', 'CHANNEL_SPLIT', 'EDGE_DETECTION', 'EXTREMA_DETERMINATION', 'IMAGE_SMOOTHING', 'REGION_PROPERTIES']}
/>