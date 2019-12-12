---
layout: default
permalink: /:title
---

Linear Regression
=====================

The hypothesis we make in linear regression model is:

$$h(\theta)=\theta^Tx$$

where $\theta$ is the parameter vector, and $x$ is the feature vector.

It's been shown in linear algebra that we can compute $\theta$ analytically(using normal equation):

$$\theta = (X^TX)^{-1}X^Ty$$ where $X=\begin{pmatrix} {x^{(1)}}^{T} \\ {x^{(2)}}^{T} \\ ... \\ {x^{(m)}}^{T}  \end{pmatrix}$

Many linear algebra libraries handle the situations when $(X^{T}X)^{-1}$ doesn't exist, nevertheless, we can also check whether we are in the following situations which increase the possibility of producing a singular matrix $X^{T}X$:
a) features are correlated, e.g. $x_2 = 2x_1$
b) $n >> m$

The overall complexity of this method is $O(n^2m)+O(n^3)$, the complexity of the multiplication of an $n \times m$ matrix and an $m \times n$ plus the complexity of the inverse of an $n \times n$ matrix. So if $n$ is large, this method is doomed to quite slow.

Alternatively, we can use gradient decent to find $\theta$. The cost function we use here is squared error, a very basic one:
$$J(\theta)=\frac{1}{2m}\sum_{i=1}^m (h(\theta)-y)^2$$

the partial derivative of $\theta_j$ is:

$$\frac{\partial J(\theta)}{\partial \theta_j}=\frac{1}{m} \sum_{i=1}^m (h(\theta)-y)x_j$$

Using it in the following loop, with each time update every $\theta_j$ simultaneously, we will find $\theta$ after some number of iterations.

start loop:
    $\quad  \text{compute}\ \frac{\partial J(\theta)}{\partial \theta_{j}}$
    $\quad  \theta_{j} = \theta_{j} - \alpha \frac{\partial J(\theta)}{\partial \theta_{j}}$
end loop

Some practice notes
a) when using gradient decent, make sure each feature has approximately equal scale, for otherwise it takes much longer for $J(\theta)$ converges(graphically, in this case, contour of $J(\theta$) is very flat or narrow, convergence path becomes longer ).
b) learning rate, if set too small, converge slowly, too large, may not converge, better fix a range, and shrink it