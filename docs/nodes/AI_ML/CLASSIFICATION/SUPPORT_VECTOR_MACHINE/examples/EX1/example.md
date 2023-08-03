---
title: SUPPORT_VECTOR_MACHINE
description: Train a support vector machine model for classification tasks by taking two dataframes of label and feature from labelled training data and a dataframe of unlabelled input data.
keywords: [AI, Classification, Python, DataFrame, Train, Vector, Machine Model]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/CLASSIFICATION/SUPPORT_VECTOR_MACHINE/examples/EX1/output.jpeg
---

In this example, the `SUPPORT_VECTOR_MACHINE` node is passed the [iris dataset](https://archive.ics.uci.edu/dataset/53/iris), split into two parts. The training data contains 120 labels, while the input dataset contains 30 samples with the labels removed.

This data is read from disk with two `READ_CSV` nodes, and the output predictions made by the classifier are visualised with the `TABLE` node.