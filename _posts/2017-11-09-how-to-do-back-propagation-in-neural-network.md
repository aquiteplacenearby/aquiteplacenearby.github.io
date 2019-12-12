---
layout: default
permalink: /:title
---

How To Do Back Propagation In Neural Network
===========
I will illustrate how to do this by solving 2.(g) question in assignment 1 of cs224n, here is the assignment link: http://web.stanford.edu/class/cs224n/assignment1/index.html.

Before getting into the question, let's warm up a little bit.

Given:
$x$: m-elements vector
$y$: n-elements vector
$A$: n x m matrix
$y=Ax$

We have:
$$\frac{\partial{y}}{\partial{x}}=
\begin{pmatrix}
     \frac{\partial{y_1}}{\partial{x_1}} & \frac{\partial{y_1}}{\partial{x_2}} & ... & \frac{\partial{y_1}}{\partial{x_m}}\\
\frac{\partial{y_2}}{\partial{x_1}} & \frac{\partial{y_2}}{\partial{x_2}} & ... & \frac{\partial{y_2}}{\partial{x_m}}\\
 ... \\
\frac{\partial{y_n}}{\partial{x_1}} & \frac{\partial{y_n}}{\partial{x_2}} & ... & \frac{\partial{y_n}}{\partial{x_m}}\\
\end{pmatrix}=A$$

The big matrix in the middle is called the Jacobian matrix of the transformation $A$. The proof can be found in here : https://atmos.washington.edu/~dennis/MatrixCalculus.pdf

If now we put many different $x$ in a matrix $X$, we have $Y=AX$ and $\frac{\partial{Y}} {\partial{X}}=A$, this is because though different $x$ is transformed to different $y$, but the transformation stays the same, which is $A$.

Also we have $\frac{\partial{Y}} {\partial{A}}=X^T$.

OK, let's get into business, in the exercise, we have
$X$: 20 x 10 matrix, where 20 is the number of records and 10 is the number of the dimension
$W_1$: 10 x 5 matrix
$b_1$: 1 x 5 matrix
$W_2$:  5 x 10 matrix
$b_2$: 1 x 10 matrix
$y$: 20 x 10 matrix
only one sigmoid hidden layer, and softmax for output, cross entropy for cost function.

We want to find out the $cost$, and the gradients of $W_1$, $b_1$, $W_2$, $b_2$ with respect to $cost$.

First the $cost$, we do it layer by layer:
$h_1 = X_1 W_1 + b_1$
$a_1 = sigmoid(h_1)$
$h_2 = a_1 W_2 + b_2$
$\hat{y} = softmax(h_2)$
$cost = \sum_n\sum_iy_i log (\hat{y_i})$

Mathematically, we use **chain rule** to help us solve the problem, that is

$$\frac{\partial{cost}}{\partial{W_2}} = \frac{\partial{cost}}{\partial{h_2}}\frac{\partial{h_2}}{\partial{W_2}}$$

The solution of 2(b) tells us that $\frac{\partial{cost}}{\partial{h_2}}=\hat{y}-y$, so it only needs to find out $\frac{\partial{h_2}}{\partial{W_2}}$, we will use the knowledge in the warm up, this gives us $\frac{\partial{h_2}}{\partial{W_2}}=a_1^T$, to make the multiplication feasible, we interchange the position of  $\frac{\partial{cost}}{\partial{h_2}}$ and $\frac{\partial{h_2}}{\partial{W_2}}$, so we get

$$\frac{\partial{cost}}{\partial{W_2}} =a_1^T (\hat{y} - y)$$

We can draw a computational graph corresponding to the neural network, it helps a lot when you wan to visualize how the gradients flow backward through the network:

![computational graph](http://oz3wz2jgr.bkt.clouddn.com/computational_graph.png)

I won't write all the solutions here(you can find it in the code at the end of this blog), I just give some notes that I find useful when solving this:

- As being said, when two factors in the chain rule are matrices, try to put them in the right order so that the multiplication of them is feasible, I use the trick that if you partial derivative the right factor of a product, e.g. the $W$ in $XW$, you don't need to interchange the its position and that of the previous gradient, but if you partial derivative the left one, you'll need to do it, and don't forget to transform it before putting it ahead.

- It is not always matrix multiplication when applying the chain rule, it depends on the operation you are at, when it is a matrix multiplication, e.g. the $*$ circle in the above, you need to do matrix multiplication between the current gradient of the operation and the previous gradient, but when it is just a element-wise operation such as sigmoid circle, an element-wise multiplication of the two matrices works just fine.

- In any case, when you stuck in the process, you can always try to interchange the positions or transform one of them so that the multiplication of the two is feasible!

Here is the [code solution](https://github.com/pltc325/cs224n/tree/master/assignment1) for this exercise, you can find more details here.
