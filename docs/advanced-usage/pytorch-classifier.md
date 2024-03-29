---

sidebar_position: 4
id: pytorch-classifier
title: Integrating Your Custom PyTorch Image Classifier

---

In this guide, we will walk you through the process of leveraging the [`TORCHSCRIPT_CLASSIFIER`](../nodes/AI_ML/CLASSIFICATION/TORCHSCRIPT_CLASSIFIER/TORCHSCRIPT_CLASSIFIER.md) node in Flojoy to integrate a custom image classification model. 

Solely for illustration purposes, we will use a companion [Colab](https://research.google.com/colaboratory/) notebook to train a [`MobileNetV3`](https://arxiv.org/abs/1905.02244) model on a cats and dogs dataset, export it as a `.torchscript` format, and then deploy it within the `TORCHSCRIPT_CLASSIFIER` node. Flojoy users do not have to use the same notebook, nor even use Colab at all, though it is a great place to help users get started with a reference implementation example.


### 1. Train and Export Your Model

Start by accessing the provided [Colab notebook](https://colab.research.google.com/drive/1HCj3i43tYt4CTLPHq4BqVC2HL0lAN2-X?usp=sharing) which serves as an ideal foundation for training and exporting your model. This notebook is tailored for a cats vs. dogs dataset, but you can effortlessly modify it to suit different datasets with varying class numbers.


To use the notebook:

1. Open the notebook link.
2. Create a your own copy of the Notebook using **File** -> **Save a copy in Drive**
2. Run all cells sequentially.
3. Upon completion, you'll find the `model.torchscript` file ready for download in the left sidebar, as illustrated here:

![In the Google Colab UI, the left panel contains the list of directories and files, including the newly created TorchScript-serialized model: `model.torchscript`.](../../static/img/advanced_tutorials/TORCHSCRIPT_TUTORIAL_SIDEBAR.png)

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

Now, with these files at hand, you are all set to integrate your custom PyTorch Image Classifier into Flojoy using the `TORCHSCRIPT_NODE` node.

### 3. [Optional] Train the model on your own data

If you want like to train the model on your own data, your dataset needs to be compatible with the PyTorch [`torch.vision.datasets.ImageFolder`](https://pytorch.org/vision/stable/generated/torchvision.datasets.ImageFolder.html#torchvision.datasets.ImageFolder) dataset format. This essentially means that your images need to be structured as shown below, where the folder names (`class_1`, `class_2`, etc...) represent the ground truth label of the images they contain:

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

#### Instructions:

1. Curate your `training_set` and `validation_set` folders separately, and ensure that both folders respect the `ImageFolder` format (described above).

2. Compress both `training_set` and `validation_set` into a `.zip` folder that you may call `datasets.zip` for example. 
    
    _Example_

    ```
    datasets.zip/
    ├── training_set/
    │   ├── ... 
    ├── validation_set/
    │   ├── ...
    ```

3. Drag and drop `datasets.zip` into Google Colab's left file sidebar, and wait until the upload completes.

4. If `training_set` and `validation_set` folders already exist in your Colab file tree, make sure to delete them before you proceed.

5. In the "Download dataset" section, comment (add `#` at the beginning of each line) the two original lines that download and unzip `cats_and_dogs.zip` and uncomment the `!unzip datasets.zip` command
```
# The two lines below download and unzip 'cats_and_dogs.zip'
#!gdown  https://drive.google.com/uc?id=1TIme-TSfRFwVvBVaGymV4-9CX4voThIg
#!unzip cats_and_dogs.zip

# [Advanced tutorial - Optional section 3]
# Comment the 2 lines above and uncomment the line below to use your own dataset 
!unzip datasets.zip
```

6. Re-run all cells of your notebook sequentially from the first cell to the last cell

7. Wait till the training finishes, then download your exported `model.torchscript` which you can find in Colab's file sidebar. 

**IMPORTANT: Closing your Colab webpage during training will cause your training to be interrupted, and you will need to restart the process from the beginning. This may not happen if you already have a paid Colab subscription.**