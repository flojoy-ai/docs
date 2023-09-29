---
sidebar_label: AI & ML
slug: /nodes/AI_ML/
sidebar_position: 1
---

# AI & ML in Python

Welcome to the AI & ML Nodes page!

Here you can find a list of all the Flojoy nodes that you can use to produce an output with Artificial Intelligence and Machine Learning.

You can also find all of these nodes in the sidebar.

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

<AppThumbnailSection
    sectionName = 'Classification'
    blockquote = 'No-code Flojoy AI nodes for SVM, one-hot encoding, and more.'
    sectionRoot = 'AI_ML/CLASSIFICATION'
    nodes = {['ACCURACY', 'ONE_HOT_ENCODING', 'SUPPORT_VECTOR_MACHINE', 'TORCHSCRIPT_CLASSIFIER', 'TRAIN_TEST_SPLIT']}
/>

<AppThumbnailSection
    sectionName = 'AI-assisted image processing'
    blockquote = 'No-code Flojoy AI nodes for image captioning (ViT + GPT2), image classification (Hugging Face pipeline), object detection (YOLOv3), and image segmentation (DEEPLAB).'
    sectionRoot = 'AI_ML'
    nodes = {['IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2', 'IMAGE_CLASSIFICATION/HUGGING_FACE_PIPELINE', 'OBJECT_DETECTION/OBJECT_DETECTION', 'SEGMENTATION/DEEPLAB_V3']}
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
    nodes = {['LOAD_MODEL/ONNX_MODEL', 'PREDICT_TIME_SERIES/PROPHET_PREDICT', 'REGRESSION/LEAST_SQUARES']}
/>