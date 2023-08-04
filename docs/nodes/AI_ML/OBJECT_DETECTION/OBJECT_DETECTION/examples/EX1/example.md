---
title: OBJECT_DETECTION
description: Streamline object detection with Python using Flojoy's OBJECT_DETECTION node that detects objects in the input image,and returns an 'image' DataContainer with those objects highlighted.
keywords: [AI, ML, Python, Object Detection, Image, jpeg, DataContainer]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/OBJECT_DETECTION/OBJECT_DETECTION/examples/EX1/output.jpeg
---

In this example, a `LOCAL_FILE` node reads a .jpg image. The `OBJECT_DETECTION` node processes the image and identifies any significant objects (e.g. person, tie, etc.). The `IMAGE` node then displays the original image and the detected objects from the image separately.