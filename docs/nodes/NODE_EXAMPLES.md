---
sidebar_label: All Node Examples
sidebar_position: 1
slug: /nodes/
---

# Flojoy Studio App examples

Apps in Flojoy Studio are comprised of nodes - which are simply Python scripts under-the-hood 

Connect Flojoy nodes together in the Flojoy Studio canvas with drag-and-drop. As you'll see in the examples below, it takes only a few nodes to build powerful DAQ, robotics, data science, or AI apps. Flojoy is the easiets, fastest way for no-code or low-code engineers suchs as mechanical engineers, chemical engineers, aerospace engineers, fluidics engineers, or applied biologists to build powerful, Python-based data pipelines without coding.

[Download Flojoy Studio](/)

Below you will find all nodes that are available out-of-the-box in Flojoy Studio. If you're a proficient Python developer, you can also build your own, custom nodes by [following this guide](/custom-nodes/creating-custom-node/). You can also [contact us](https://www.flojoy.ai/professional-services).

All of the nodes in the examples below are free to use, open-source (MIT licensed), and available on GitHub at https://github.com/flojoy-ai/nodes/.

***

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

## AI & ML examples

Here you can find a list of all the Flojoy nodes that you can use to produce an output with Artificial Intelligence and Machine Learning.

You can also find all of these nodes in the sidebar.

<AppThumbnailSection
    sectionName = 'Classification'
    blockquote = 'No-code Flojoy AI nodes for SVM, one-hot encoding, and more.'
    sectionRoot = 'AI_ML/CLASSIFICATION'
    nodes = {['ACCURACY', 'ONE_HOT_ENCODING', 'SUPPORT_VECTOR_MACHINE', 'TRAIN_TEST_SPLIT']}
/>

<AppThumbnailSection
    sectionName = 'AI-assisted image processing'
    blockquote = 'No-code Flojoy AI nodes for image captioning (ViT + GPT2), object detection (YOLOv3), and image segmentation (DEEPLAB).'
    sectionRoot = 'AI_ML'
    nodes = {['IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2', 'OBJECT_DETECTION/OBJECT_DETECTION', 'SEGMENTATION/DEEPLAB_V3']}
/>

<AppThumbnailSection
    sectionName = 'Natural Language Processing (NLP)'
    blockquote = 'No-code Flojoy AI nodes for text processing and NLP.'
    sectionRoot = 'AI_ML'
    nodes = {['NLP/COUNT_VECTORIZER', 'TEXT_SUMMARIZATION/BART_LARGE_CNN']}
/>

<AppThumbnailSection
    sectionName = 'Predictive analytics'
    blockquote = 'No-code Flojoy AI nodes for predictive analytics.'
    sectionRoot = 'AI_ML'
    nodes = {['PREDICT_TIME_SERIES/PROPHET_PREDICT', 'REGRESSION/LEAST_SQUARES']}
/>
