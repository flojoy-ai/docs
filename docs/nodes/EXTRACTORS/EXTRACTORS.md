---
sidebar_label: ETL- Extractors
slug: /nodes/EXTRACTORS/
sidebar_position: 2
---

# EXTRACTORS in Python

Welcome to the Extractor nsodes page!

Here you can find a list of all the Flojoy ETL nodes extract data from a remote or local data source for use within Flojoy apps.

If interested in Flojoy's ETL capabilities, please also see the [Extractor](/nodes/EXTRACTORS/) and [Transformer](/nodes/TRANSFORMERS/) nodes.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Local files'
    blockquote = 'No-code Flojoy nodes for extracting data from local files on disk.'
    sectionRoot = 'EXTRACTORS/FILE'
    nodes = {['OPEN_IMAGE', 'OPEN_PARQUET', 'READ_CSV', 'READ_S3']}
/>

<AppThumbnailSection
    sectionName = 'Dataframes'
    blockquote = 'AFlojoy nodes for extracting a subset of columns from an in-memory dataframe.'
    sectionRoot = 'EXTRACTORS/DATAFRAME'
    nodes = {['EXTRACT_COLUMNS']}
/>
