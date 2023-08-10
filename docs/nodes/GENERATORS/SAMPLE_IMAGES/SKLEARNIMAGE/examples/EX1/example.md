---
title: SKLEARNIMAGE
description: In this example, the `SKLEARNIMAGE` node takes one parameter and loads it from the `scikit-image` package. It then passes an `image` type object (r,g,b,a), from the `DataContainer` class, to the `OBJECT_DETECTION` node using the `opencv` Python library.
keywords: [Python, Generate, SklearnImage generator, Sample image data generation, Python image data simulation, Image dataset generation, Flojoy generator nodes, AI/ML image datasets, SklearnImage examples, Synthetic image data, Image data for training, Image data augmentation]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/GENERATORS/SAMPLE_DATASETS/SKLEARNIMAGE/examples/EX1/output.jpeg
---

In this example, the `SKLEARNIMAGE` node takes one parameter, `img_key`, which is the name of the sample image, and loads it from the `scikit-image` package. In this case, `astronaut` is the default value of this parameter. It then passes an `image` type object (r,g,b,a), from the `DataContainer` class, to the `OBJECT_DETECTION` node using the `opencv` Python library. Finally, the current script is terminated with the `END` node, which is the same as its parent node.