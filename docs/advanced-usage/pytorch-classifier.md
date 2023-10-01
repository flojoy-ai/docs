---
sidebar_position: 4
id: pytorch-classifier
title: Integrating Your Custom PyTorch Image Classifier
---

In this guide, we will walk you through the process of leveraging the [`TORCHSCRIPT_CLASSIFIER`](../nodes/AI_ML/CLASSIFICATION/TORCHSCRIPT_CLASSIFIER/TORCHSCRIPT_CLASSIFIER.md) node in Flojoy to integrate a custom image classification model. Specifically, we'll use a Colab notebook to train the `MobileNetV3` model on a cats and dogs dataset, export it as a `.torchscript` format, and then deploy it within the `TORCHSCRIPT_CLASSIFIER` node.

### 1. Train and Export Your Model

Start by accessing the provided Colab notebook which serves as an ideal foundation for training and exporting your model. This notebook is tailored for a cats vs. dogs dataset, but you can effortlessly modify it to suit different datasets with varying class numbers.

- **Colab Notebook**: [Link](https://colab.research.google.com/drive/1HCj3i43tYt4CTLPHq4BqVC2HL0lAN2-X?usp=sharing)

To use the notebook:

1. Open the notebook link.
2. Run all cells sequentially.
3. Upon completion, you'll find the `model.torchscript` file ready for download in the left sidebar, as illustrated here:

![In the Google Collab UI, the left panel contains the list of directories and files, including the newly created TorchScript-serialized model: `model.torchscript`.](../../static/img/advanced_tutorials/TORCHSCRIPT_TUTORIAL_SIDEBAR.png)

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

Now, with these files at hand, you're all set to integrate your custom PyTorch Image Classifier into Flojoy using the `TORCHSCRIPT_NODE` node.

### 3. [Optional] Train the model on your own data

If you want like to train the model on your own data, your dataset needs to be compatible with the PyTorch [`torch.vision.datasets.ImageFolder`](https://pytorch.org/vision/stable/generated/torchvision.datasets.ImageFolder.html#torchvision.datasets.ImageFolder) dataset format. This essentially means that your images need to be structured in a directory hierarchy such as:

```
dataset/
├── class_1
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── ...
├── class_2
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── ...
├── ...
```



You will need to curate both (a) training and (b) test sets with the format described above, and compress them together in a zip file containing a `training_set` folder and a `test_set` folder.

```
dataset.zip/
├── training_set/
│   ├── class_1
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── ...
│   ├── class_2
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── ...
│   ├── ...
├── test_set/
│   ├── class_1
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── ...
│   ├── class_2
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── ...
│   ├── ...
```