---
sidebar_position: 2
id: Virtual env
title: Virtual Environment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This tutorial will help you to set up your virtual environment to use the Flojoy app wihtout installing every required package on your local computer and avoiding conflicts between
different package versions. 

It will cover everything you need to know about virtual environments and how to set one up with `virtualenv`.

To break this down, when you activate a virtual environment for your project, your project becomes its own self contained application, independent of the system installed Python and its modules.

Your new virtual environment has its own pip to install libraries, its own libraries folder,
where new libraries are added, and its own Python interpreter for the Python version that you used to activate the environment.

### Installation

To install a virtual environment using `venv`, run: 

```bash
pip install virtualenv  # Install the tool to manage Virtual env
```

### Creation 

Then, to create a virtual environment within your project folder, run the following commands in your terminal:

```bash
cd ProjectA 
python3.10 -m venv env  
```

`env` is the name of the virtual environment and also the name of the new folder. If we check the contents of `env`, on a Mac you will see a _bin_ folder. You will also see scripts that are typically used to control your virtual environment, such as _activate_ and _pip_ to install libraries, the Python interpreter for the Python version you installed, and so on. (This folder will be called _Scripts_ in Windows.)

### Activation 

Now that you have created the virtual environment, you will need to activate it before you can use it in your project. 

<Tabs groupId="platform" queryString="platform">
  <TabItem value="unix" label="Mac & Linux">

```bash
source env/bin/activate
```
    
This will activate your virtual environment. Immediately, you will notice that your terminal path includes `env`, signifying an activated virtual environment.
    
</TabItem>
<TabItem value="windows" label="Windows">
  
 ```bash
 env/Scripts/activate.bat //In CMD
 env/Scripts/Activate.ps1 //In Powershel
  ```
 
This will activate your virtual environment. Immediately, you will notice that your terminal path includes `env`, signifying an activated virtual environment.
  
  </TabItem>
</Tabs>

### Use

Once your virtual environment is activated, you can provide it to Flojoy script by using the `-v` argument, followed by the path to the virtual environment folder:

```bash
flojoy -v $path/to/env/folder$
```

with the path to the virtual environment folder, or

```bash
flojoy -v env
```
with the name of the virtual environment folder.

### Deactivation 

To deactivate your virtual environment, simply run the following in the terminal:
<SectionBreak />

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/getting-started/virtualenv.md)

 ```bash
 ~ deactivate
 ```