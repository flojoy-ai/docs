---
sidebar_position: 2
id: feedback
title: The feedback node
---

Before we get into another common version of looping, it is worth while now to mention the `feedback` node. Often in iterating, it is necessary to retrieve the result of a node in its most recent iteration. As we will flush out in more detail later with an example, we may wish to retrieve the most recent value from a subtraction operation in the last iteration of the loop, for example, to compare two different values and assess if we continue looping or not. 

The structure of the node requires a bit of knowledge on how Flojoy stores data internally. We mention [here](/getting-started/architecture) briefly that Redis is used as an internal datastore for Flojoy. Here, we flush out how we might retrieve data from Redis in real time.

### Accessing Redis

To create a node that can query the Redis db, our node will need to get some environment variables set at the boot of Flojoy, namely the host and port of the Redis instance.
```python
import os
from redis import Redis

#this retrives the host name of the Redis server, 
#and defaults to localhost should it not be defined...
REDIS_HOST = os.environ.get('REDIS_HOST', 'localhost')

#...while this gets the port Redis is running on,
#and has a default value likewise
REDIS_PORT = os.environ.get('REDIS_PORT', 6379)
```

Now that we can access the Redis db, we need access to the job itself, the computation sent to Flojoy to be executed by the node of interest. To do this, we import some help from the `rq` library. By passing in a parameter `referred_node` to `feedback`, we get the job id of the node which has the history we are interested in using.
```python
from rq.job import Job, NoSuchJobError
referred_node = params['referred_node']
try:
    job = Job.fetch(referred_node, connection=Redis(
        host=REDIS_HOST, port=REDIS_PORT))
    y = job.result.y
except (Exception, NoSuchJobError):
    print(traceback.format_exc())
    pass

```

Putting this altogether, we get the builtin `feedback` node:

```python {title='feedback.py'}
from flojoy import flojoy, DataContainer
import os
from redis import Redis
from rq.job import Job, NoSuchJobError
import traceback
REDIS_HOST = os.environ.get('REDIS_HOST', 'localhost')
REDIS_PORT = os.environ.get('REDIS_PORT', 6379)


@flojoy
def FEEDBACK(v, params):
    referred_node = params['referred_node']

    x = v[0].y

    try:
        job = Job.fetch(referred_node, connection=Redis(
            host=REDIS_HOST, port=REDIS_PORT))
        y = job.result.y
    except (Exception, NoSuchJobError):
        y = v[0].y if len(v) > 0 else [1, 2, 3]
        print(traceback.format_exc())
        pass

    return DataContainer(x=x, y=y)
```

We'll use the feedback node in an example soon.

