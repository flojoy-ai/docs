---

sidebar_position: 4
id: pytorch-classifier
title: Integrating Your Custom PyTorch Image Classifier

---

In this guide, we will walk you through the process of leveraging the `TORCHSCRIPT_CLASSIFIER` node in Flojoy to integrate a custom image classification model. Specifically, we'll use a Colab notebook to train the `MobileNetV3` model on a cats and dogs dataset, export it as a `.torchscript` format, and then deploy it within the `TORCHSCRIPT_CLASSIFIER` node.

### 1. Train and Export Your Model

Start by accessing the provided Colab notebook which serves as an ideal foundation for training and exporting your model. This notebook is tailored for a cats vs. dogs dataset, but you can effortlessly modify it to suit different datasets with varying class numbers.

- **Colab Notebook**: [Link](https://colab.research.google.com/drive/1HCj3i43tYt4CTLPHq4BqVC2HL0lAN2-X?usp=sharing)

To use the notebook:

1. Open the notebook link.
2. Run all cells sequentially.
3. Upon completion, you'll find the `model.torchscript` file ready for download in the left sidebar, as illustrated here:

![image](../../static/img/advanced_tutorials/TORCHSCRIPT_TUTORIAL_SIDEBAR.png)

### 2. Deploy the Model in `TORCHSCRIPT_CLASSIFIER`

To utilize a trained model within the `TORCHSCRIPT_CLASSIFIER` node, ensure you have:

- The exported `.torchscript` model file.
- A `.csv` file mapping class names to class IDs.

For instance, your `csv` file for a cats vs. dogs classifier should look like this:

```
class_name
"cat"
"dog"
```

Now, with these files at hand, you're all set to integrate your custom PyTorch Image Classifier into Flojoy using the `TORCHSCRIPT_CLASSIFIER` node.