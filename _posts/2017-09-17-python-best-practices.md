---
layout: default
permalink: /:title
---

Python Best Practices
=====================

pip

try to use nearest download source:
sudo pip install something -i https://pypi.tuna.tsinghua.edu.cn/simple

when you don't have pip
curl https://bootstrap.pypa.io/get-pip.py > get.pip.py

always upgrade pip to its newest version
python -m pip install --upgrade --force pip


anaconda or virtualenv

choose anaconda when you really need to try something out very quickly
choose virtualenv when you want to fully control your packages and have some isolated python development environments

### with, decorator and generator

```python
from contextlib import contextmanager


@contextmanager
def given_context():
    print("setup")
    try:
        yield
    finally:
        print("finally")

with given_context():
    print("body")

```

The above code tries to execute "body" given certain context. The output is  

setup  
body  
finally  

Though being short, this piece of code combines the usages of 'with', 'decorator' and 'generator' and hence is a good example to illustrate how to use them together.

refs:
decorator:[https://realpython.com/blog/python/primer-on-python-decorators/](https://realpython.com/blog/python/primer-on-python-decorators/)
generator:[https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/](https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/)
with:[http://effbot.org/zone/python-with-statement.htm](http://effbot.org/zone/python-with-statement.htm)
