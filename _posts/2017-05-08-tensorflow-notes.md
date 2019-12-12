---
layout: default
permalink: /:title
---

TensorFlow Notes
======================
Core data unit is **tensor**, a tensor is an object that one uses to organize information, a rank 2 tensor can be represented by a matrix well but it can have higher rank other than 2 which can not be represented by traditional matrix.

The computational graph plays the key role in TensorFlow. It represents the operations flow by a graph. The TensorFlow program can be therefore viewed as a 2 steps one, the first is constructing a computational graph, the second is running operations on this graph.

```python
c1_node = tf.constant(3.0)
c2_node = tf.constant(7.0)
mul_node = c1_node * c2_node

sess = tf.Session()
result = sess.run([mul_node, c1_node, c2_node])

print(result)
```

The first three lines constructs a graph consisting of three nodes: c1, c2, mul, the two following lines runs the graph. The output is **[21.0, 3.0, 7.0]**.

We've seen how TensorFlow processes constants, now let's take a look at how it manipulates variable. Here the variable can be viewed as the parameters to be trained in the context of machine learning.

```python
# define
W = tf.Variable([0.1, 0.1])
b = tf.Variable([0.2, 0.2])

# init
init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)

# run
result = sess.run([W, b])

print(result)

# assign
W = tf.assign(W, [0.3, 0.3])
result = sess.run([W, b])

print(result)
```

Note that a variable must be first initialized before being used and it can be later assigned to another value as long as that value has the same shape. The output are **[array([ 0.1,  0.1], dtype=float32), array([ 0.2,  0.2], dtype=float32)]** and **[array([ 0.30000001,  0.30000001], dtype=float32), array([ 0.2,  0.2], dtype=float32)]**.

The data in machine learning is something that we know we will feed to model when training, validating and testing the model, TensorFlow has the similar idea about it.

```python
D = 2
N = 3
# x is (N, D) tensor
x = tf.placeholder(tf.float32, shape=(N, D))

sess = tf.Session()
# the actual value of x is fed at runtime
result = sess.run(x, {x: [[2, 3],[5, 7], [11, 13]]})

print(result)
```

The output is

**[[  2.   3.]**
**[  5.   7.]**
 **[ 11.  13.]]**

Let's put things together. The following code uses what we have learned so far:

```python
x = tf.placeholder(dtype=tf.float32, shape=(1,2))
w = tf.Variable([[1.0], [2.0]])
c = tf.constant(5.0)
y = tf.matmul(x, w) + c

init = tf.global_variables_initializer()
sess = tf.Session()
sess.run(init)

result = sess.run(y, feed_dict={x:[[10.0, 20.0]]})

print(result)
```

The output is **[[ 55.]]**.

We know that in order to accomplish machine learning jobs, performing only tensor operations is not enough, more importantly, we need to train a model using some algorithm and use it to predict. Gradient decent is one of such algorithms that is very useful in practice and it turns out that TensorFlow makes it very easy to use it as we will see in a moment.

```python
# features in the data
x = tf.placeholder(dtype=tf.float32, shape=(4,))
# the only parameter we want to find
b = tf.Variable([0.1])
# target values in the data
y = tf.placeholder(dtype=tf.float32, shape=(4,))
# our model, the underlying model is y = x + 0.5
y_ = x + b

# init variable
sess = tf.Session()
init = tf.global_variables_initializer()
sess.run(init)

# squared loss
loss = tf.reduce_sum(tf.square(y_ - y))

# an optimizer with learning rate 0.01
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.01)
train = optimizer.minimize(loss)

for _ in range(1000):
    # sess.run() runs only one iteration of the algorithm
    sess.run(train, feed_dict={x:[1,2,3,4], y:[1.5,2.5,3.5,4.5]})

# after training, cur_b should be around the true value 0.5 and cur_loss should be around 0
cur_b, cur_loss = sess.run([b, loss], feed_dict={x:[1,2,3,4], y:[1.5,2.5,3.5,4.5]})

print(cur_b, cur_loss)
```

What's new in the above code?

First we define our loss function using squared loss

```python
loss = tf.reduce_sum(tf.square(y_ - y))
```

Second we define a gradient decent optimizer with learning rate 0.01

```python
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.01)
```

And our goal is to minimize it, it is expressed by

```python
train = optimizer.minimize(loss)
```

Then, we train our model iteratively given our toy data

```python
for _ in range(1000):
    # sess.run() runs only one iteration of the algorithm
    sess.run(train, feed_dict={x:[1,2,3,4], y:[1.5,2.5,3.5,4.5]})
```

Finally, we obtain our parameter **b** and **loss** by running the graph again.

```python
cur_b, cur_loss = sess.run([b, loss], feed_dict={x:[1,2,3,4], y:[1.5,2.5,3.5,4.5]})
```

 The final output is

**[ 0.49999976] 1.7053e-13**

tf.contrib.learn(1) v.s. TFLearn(2)
- (1) is within tensorflow package where as (2) is a thirdparty
- (1) includes machine learning algorithms other than deep learning where as (2) focuses on deep learning only