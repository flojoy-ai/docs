---
sidebar_position: 5
id: testing-nodes
title: Testing Nodes
---

### Writing automated tests for custom contributed nodes

In the previous section, we described how to contribute a custom node to Flojoy. In this section, we describe how to write automated tests for your custom node. 

Automated tests are the best way to ensure that your custom node works as expected, and they help you to quickly identify and fix bugs in your custom node. With Flojoy being a cross-platform system, automated tests will help you verify that your custom node works for all other Flojoy users on all supported platforms (Mac, Windows, and Linux).

#### Testing framework

For our unit tests, we use the standard [pytest](https://docs.pytest.org/en/stable/) framework. If you need an introduction to pytest, you can check out this [tutorial](https://realpython.com/pytest-python-testing/).

#### Naming convention

For a node named `MYNODE`, the test script should be located in the same folder as `MYNODE.py`, and it should carry the name `MYNODE_test_.py`. 

Following this naming convention will ensure that the test file is automatically recognized by `pytest` when (1) you run the tests locally, and (2) when the tests are run on the CI server. The test script should ideally include multiple test functions, each testing a specific aspect of the node.

Here is an example of a file tree for a node named `MYNODE`:

```
nodes
├── SECTION_NAME
│   ├── MYNODE
│   │   ├── MYNODE.py
│   │   ├── ...
│   │   └── MYNODE_test_.py
```

#### Test fixtures

A `pytest` fixture is a function that is run automatically before each test function. Fixtures are useful for setting up common objects that can be used in multiple tests. For example, if you want to test the `MYNODE` node, where multiple tests reuse the same test input data, you can create a fixture that loads the test input data and returns it to the test function. This way, you don't have to load the test input data in each test function. For instance:

```python
# MYNODE_test_.py
import pytest
import numpy as np

@pytest.fixture
def test_input():
    return np.zeros((42,))

def test_MYNODE_test_one_thing(test_input):
    # test_input is now available in this test function
    # do something with test_input
    pass


def test_MYNODE_test_another_thing(test_input):
    # test_input is now available in this test function
    # do something else with test_input
    pass
```

There are a number of handy `flojoy` testing fixtures available under `nodes/conftest.py`. You can use these fixtures in your test scripts. 

The following are some of the most useful fixtures that are currently available:

- `mock_flojoy_decorator`: This fixture mocks out the `flojoy` decorator. This fixture is useful for testing `@flojoy` decorated nodes outside of the Flojoy studio.
- `mock_flojoy_cache_directory`: This fixture mocks out the Flojoy cache directory. This fixture is useful for testing nodes that use the Flojoy cache directory `~/.flojoy`. It essentially substitutes the Flojoy cache directory with a temporary directory that is created for the duration of the test.

To use the above fixtures, simply include them as arguments to your test function. For example:

```python
# MYNODE_test_.py
import pytest

def test_MYNODE_test_a_third_thing(
    mock_flojoy_decorator,
    mock_flojoy_cache_directory
):
    # do something
    pass
```

#### Best practices

1. Test the node with a variety of inputs, and try to cover multiple test cases.
2. Feel free to include files to help with testing. For example, if your node is supposed to work with images, add a test image to the same directory as the test script, run it through your test and check for the expected output.
3. Your test should run successfully in our CI/CD pipeline. If you are not sure how to do this, please open an issue.
4. Feel free to mock out any moving part of the node that you do not need to test or that you cannot test. For example, if your node requires a remote API, make sure to mock that out in your test. You do not want to be making API calls in your test.
5. Always test your code locally before pushing it to the repository, this will save you time.

### Example walkthrough

Let's walk through an example of how to write a test for a custom node. 

We will use the `NLP_CONNECT_VIT_GPT2` node as an example. This node takes an `Image` input and produces a single-column single-row `DataFrame` that contains a caption for that image.

The test script looks as follows:

```python
import os
import pytest

import PIL.Image
import numpy as np

from flojoy import Image


# This is a test input fixture that reads an image from disk and returns it as a numpy array.
@pytest.fixture
def obama_image_array_rgb():
    _image_path = f"{os.path.dirname(os.path.realpath(__file__))}/assets/President_Barack_Obama.jpg"
    image = PIL.Image.open(_image_path).convert("RGB")
    return np.array(image)

# Don't worry about the marker below, it is only used to indicate that this test is slow.
@pytest.mark.slow
def test_NLP_CONNECT_VIT_GPT2(
    mock_flojoy_decorator, # mocks out the @flojoy decorator
    mock_flojoy_cache_directory, # mocks out the ~/.flojoy cache
    obama_image_array_rgb # tests the input fixture defined above
):
    # Import the node here.
    import NLP_CONNECT_VIT_GPT2

    # Build the test input Image object from the pytest fixture.
    input_img = Image(
        r=obama_image_array_rgb[:, :, 0],
        g=obama_image_array_rgb[:, :, 1],
        b=obama_image_array_rgb[:, :, 2],
        a=None,
    )
    # Execute the node and fetch the output DataFrame.
    output_df = NLP_CONNECT_VIT_GPT2.NLP_CONNECT_VIT_GPT2(input_img)

    # Test that the produced caption is what we expect for this specific test image.
    assert (
        output_df.m.iloc[0].caption
        == "a man in a suit and tie standing in front of a flag"
    )
```

[//]: # (Edit page on GitHub)

#### Edit page on GitHub

[Edit page here](https://github.com/flojoy-ai/docs/blob/main/docs/custom-nodes/testing-nodes.md)

