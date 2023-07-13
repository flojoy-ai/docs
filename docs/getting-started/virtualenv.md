---
sidebar_position: 2
id: Virtual env
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This tutorial will help you to setup your virtual environment to use Flojoy app
wihtout installing every required package on your local computer and avoiding conflicts between
different package versions. 


It'll cover everything you need to know about virtual environments and how to set one up with Virtualenv.

To break this down, when you activate a virtual environment for your project, your project becomes its own self contained application,
independent of the system installed Python and its modules.

Your new virtual environment has its own pip to install libraries, its own libraries folder,
where new libraries are added, and its own Python interpreter for the Python version you used to activate the environment.

INSTALLATION :

How to Install a Virtual Environment using Venv : 

`pip install virtualenv`  (Install the tool to manage Virtual env)

CREATION : 

Then you want to create a virtual environment within your project folder, run the following commands on your terminal: 

```bash
cd ProjectA 
python3.10 -m venv env  
```

"env" is the name of the virtual environment and also the name of the new folder. 
If we check the contents of env for a bit, on a Mac you will see a bin folder. 
You will also see scripts that are typically used to control your virtual environment, 
such as activate and pip to install libraries, and the Python interpreter for the Python version you installed, and so on. 
(This folder will be called Scripts on windows).

ACTIVATION : 

Now that you have created the virtual environment, you will need to activate it before you can use it in your project. 

<Tabs groupId="platform" queryString="platform">
  <TabItem value="unix" label="Mac & Linux">

MAC : 
`source env/bin/activate`
    
This will activate your virtual environment. Immediately, you will notice that your terminal path includes env, 
signifying an activated virtual environment

    
</TabItem>
<TabItem value="windows" label="Windows">
  
WINDOWS : 

 ```bash
 env/Scripts/activate.bat //In CMD
 env/Scripts/Activate.ps1 //In Powershel
  ```
  
  
 This will activate your virtual environment. Immediately, you will notice that your terminal path includes env, 
signifying an activated virtual environment
  
  </TabItem>
</Tabs>

USE: 

When your virtual environment is activated you can provide it to Flojoy script by using the -v argument 
followed by the path to the virtual environment folder : 

`bash flojoy -v $path/to/env/folder$`

With the path to the virtual environment folder 

or
`bash flojoy -v env`

With the name of the virtual environment folder. 

DEACTIVATION : 
To deactivate your virtual environment, simply run the following code in the terminal:

 `~ deactivate`



