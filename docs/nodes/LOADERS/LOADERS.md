---
sidebar_label: ETL - Loaders
slug: /nodes/LOADERS/
sidebar_position: 4
---

# LOADERS in Python

Welcome to the Loader nodes page!

Here you can find information about all the no-code Flojoy ETL nodes that load data to a remote or local data store.

Data in Flojoy is passed between nodes inside [DataContainers](https://docs.flojoy.ai/custom-nodes/data-container/). DataContainers can be images, dataframes, matrices, vectors, data visualizations, and many other types of engineering data. Loader send DataContainers from Flojoy apps to local or remote data stores such as Flojoy Cloud, S3, and Snowflake.

If interested in Flojoy's ETL capabilities, please also see the [Extractor](/nodes/EXTRACTORS/) and [Transformer](/nodes/TRANSFORMERS/) nodes.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Cloud databases'
    blockquote = 'No-code Flojoy ETL nodes for retrieving and saving engineering data to and from cloud data storage.'
    sectionRoot = 'LOADERS/CLOUD_DATABASE'
    nodes = {['FLOJOY_CLOUD_DOWNLOAD', 'FLOJOY_CLOUD_UPLOAD']}
/>

<AppThumbnailSection
    sectionName = 'Flojoy Studio internal memory'
    blockquote = "A node for caching app data to Flojoy Studio's internal memory space."
    sectionRoot = 'LOADERS/INTERNAL_MEMORY'
    nodes = {['DS_LOAD']}
/>

<AppThumbnailSection
    sectionName = 'Local file system'
    blockquote = 'No-code Flojoy nodes for reading and writing data files to and from disk.'
    sectionRoot = 'LOADERS/LOCAL_FILE_SYSTEM'
    nodes = {['BATCH_PROCESSOR', 'LOCAL_FILE', 'OPEN_MATLAB']}
/>
