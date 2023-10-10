---
title: Flojoy | No-code AI & ML
description: Run pre-trained, foundation models on your data in Flojoy's drag & drop environment. Apply these models to data from the physical world by combining them with sensors, robotics, and benchtop instruments.
sidebar_label: AI & ML
slug: /nodes/AI-ML/
sidebar_position: 1
hide_table_of_contents: true
---

# AI & ML in Python

Welcome to the AI & ML nodes page! Here you can find a list of all the Flojoy functions ("nodes") and examples to produce no-code apps with Python-based AI (Artificial Intelligence) and ML (Machine Learning) models. You can also find all of these nodes in the sidebar.

<!-- Custom components -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';
import UniversalAdmonition from '@site/src/components/UniversalAdmonition';

<UniversalAdmonition />

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