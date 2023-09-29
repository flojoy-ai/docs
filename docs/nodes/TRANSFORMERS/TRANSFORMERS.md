---
sidebar_label: ETL - Transformers
slug: /nodes/TRANSFORMERS/
sidebar_position: 3
---

# TRANSFORMERS in Python

Welcome to the Transformer nodes page!

Here you can find a list of all the Flojoy ETL nodes that can transform input data.

Data in Flojoy is passed between nodes inside [DataContainers](https://docs.flojoy.ai/custom-nodes/data-container/). Transformer nodes can be used to convert one DataContainer type to another, perform mathematical operations on the data within a DataContainer, and much more.

If interested in Flojoy's ETL capabilities, please also see the [Extractor](/nodes/EXTRACTORS/) and [Loader](/nodes/LOADERS/) nodes.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Arithmetic'
    blockquote = 'No-code Flojoy nodes for basic arithmetic operations (eg addition, substraction, division, multiplication). Arithmetic nodes are applicable to DataContainers of types scalar, vector, matrix, and dataframe.'
    sectionRoot = 'TRANSFORMERS/ARITHMETIC'
    nodes = {['ABS', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE']}
/>

<AppThumbnailSection
    sectionName = 'Calculus'
    blockquote = 'No-code Flojoy nodes for basic calculus operations like differentiation and multiplication. Calculus nodes are applicable to DataContainers of types vector, matrix, and dataframe.'
    sectionRoot = 'TRANSFORMERS/CALCULUS'
    nodes = {['DIFFERENTIATE', 'INTEGRATE', 'DOUBLE_DEFINITE_INTEGRAL', 'DOUBLE_INDEFINITE_INTEGRAL']}
/>

<AppThumbnailSection
    sectionName = 'Image processing'
    blockquote = 'No-code Flojoy nodes for Python-based image processing, including nodes for RGB channel splitting, edge detection, and smoothing.'
    sectionRoot = 'TRANSFORMERS/IMAGE_PROCESSING'
    nodes = {['CHANNEL_MERGE', 'CHANNEL_SPLIT', 'EDGE_DETECTION', 'EXTREMA_DETERMINATION', 'IMAGE_SMOOTHING', 'REGION_PROPERTIES']}
/>

<AppThumbnailSection
    sectionName = 'Matrix manipulation'
    blockquote = 'No-code Flojoy nodes for Python-based matrix manipulation, including matrix multiplication, inversion, product, shuffling, and sorting.'
    sectionRoot = 'TRANSFORMERS/MATRIX_MANIPULATION'
    nodes = {['DOT_PRODUCT', 'INVERT', 'MATMUL', 'SHUFFLE_MATRIX', 'SORT_MATRIX']}
/>

<AppThumbnailSection
    sectionName = 'OrderedPair manipulation'
    blockquote = 'No-code Flojoy nodes for Python-based OrderedPair manipulation, including inversion.'
    sectionRoot = 'TRANSFORMERS/ORDERED_PAIR_MANIPULATION'
    nodes = {['ORDERED_PAIR_XY_INVERT']}
/>

<AppThumbnailSection
    sectionName = 'Text manipulation'
    blockquote = 'No-code Flojoy nodes for Python-based text manipulation, including concatenation of string.'
    sectionRoot = 'TRANSFORMERS/TEXT_MANIPULATION'
    nodes = {['TEXT_CONCAT']}
/>

<AppThumbnailSection
    sectionName = 'Digital signal processing (DSP)'
    blockquote = 'Flojoy nodes for Python-based DSP. Connect DSP nodes together on the Flojoy Studio canvas to create DSP data pipelines similar to Simulink or LabVIEW.'
    sectionRoot = 'TRANSFORMERS/SIGNAL_PROCESSING'
    nodes = {['BUTTER', 'FFT', 'FIR', 'IFFT', 'SAVGOL', 'TWO_DIMENSIONAL_FFT']}
/>

<AppThumbnailSection
    sectionName = 'Type casting'
    blockquote = 'Use these nodes to convert one DataContainer type to another.'
    sectionRoot = 'TRANSFORMERS/TYPE_CASTING'
    nodes = {['DF_2_NP', 'DF_2_ORDERED_TRIPLE', 'MAT_2_DF', 'NP_2_DF', 'ORDERED_TRIPLE_2_SURFACE', 'TWO_DIMENSIONAL_FFT', 'VECTOR_2_ORDERED_PAIR']}
/>

<AppThumbnailSection
    sectionName = 'Select'
    blockquote = 'Select subsets from structured, indexable data such as vectors (arrays), matrices, and json.'
    sectionRoot = 'TRANSFORMERS/SELECT_ARRAY'
    nodes = {['SELECT_ARRAY']}
/>

<AppThumbnailSection
    sectionName = 'Vector manipulation'
    blockquote = 'No-code Flojoy nodes for Python-based vector manipulation, including determining the length, sorting, splitting, and indexing.'
    sectionRoot = 'TRANSFORMERS/VECTOR_MANIPULATION'
    nodes = {['DECIMATE_VECTOR', 'INTERLEAVE_VECTOR', 'REMOVE_DUPLICATES_VECTOR', 'REVERSE_VECTOR', 'SHUFFLE_VECTOR', 'SORT_VECTOR', 'SPLIT_VECTOR', 'VECTOR_INDEXING', 'VECTOR_LENGTH']}
/>