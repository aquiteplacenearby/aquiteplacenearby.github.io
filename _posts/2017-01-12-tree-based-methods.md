---
layout: default
permalink: /:title
---

Tree-Based Method
=====================
### Single Tree
Tree-based method tries to partition the feature space into many rectangles and fit a simple model(constant) for each region. 

$$\hat{f}(x)=\sum_{m=1}^{M}c_m I\{x \in R_m\}$$

#### Regression
Given a region $R_m$, the best $\hat{c}_m$ is given by
$$\hat{c}_m=avg(y_i|x_i \in R_m)$$

To find the best split $s$ in feature $j$, first, as a consequence of split, it produces two regions,
$R_1(s, j)=\{X_j|X_j \leq s\}$ and $R_2(s, j)=\{X_j|X_j \gt s\}$ and we want to

$$\underset{s,j}{min}\{\underset{c_1}{min}\{ \sum (y_i - c_1)^2  \} + \underset{c_2}{min}\{ \sum (y_i - c_2)^2  \}\}$$

The inner two $min$ can be achieved using above $\hat{c_m}$ estimation, the outer $min$ can be obtained by iterating every possible split $s$ in $j$. The impurity measure is weighted sum $\frac{1}{N_m}\sum (y_i - c_m)^2$.

#### Classification
The main idea doesn't change for classification problem using tree-based method, somethings need to be adapted though.

- Impurity measure
Entropy: $\sum_k p_k \log{p_k}$  
Gini: $\sum_k p_k(1-p_k)$  

- $\hat{c}_m$  
Given a region $R_m$, $\hat{c}_m= \underset{k}{\text{argmax}} N_k$, that is the output class is the one that the most number of records have.


### Generized additive model
$f(x)=\sum_{m=1}^{M}\beta_m b_m(x;\gamma_m)$

$\beta_m$ and $\gamma_m$ are two parameters we want to determine. We estimate them by associating it with a loss function.
$(\beta_m, \gamma_m)=argmin\sum_{i=1}^{N} L(y_i, \sum_{m=1}^{M}\beta_m b_m(x_i;\gamma_m))$

The loss function above is difficult to optimize but if we focus on optimizing $\beta_m b_m(x;\gamma_m)$ at each time and leave the parameters already estimated unchanged, it's much easier. So the above loss function becomes
$(\beta_m, \gamma_m)=argmin\sum_{i=1}^{N} L(y_i, \beta_m b_m(x_i;\gamma_m))$

So a forward stagewise additive modeling algorithm goes as following:

- $f_0(x)=0$

- for $m$ from $1$ to $M$:  

&ensp;&ensp;&ensp;&ensp;$(\beta_m, \gamma_m)=argmin\sum_{i=1}^{N} L(y_i, f_{m-1}+\beta_m b_m(x_i;\gamma_m))$    
&ensp;&ensp;&ensp;&ensp;$f_{m}=f_{m-1} + \beta_m b_m(x;\gamma_m)$  

Let's use it in classification task. We use exponential loss function and a classifier $G(x)$ with range ${-1, +1}$.

A exponential loss function is of form: $L=exp(-yf)$, it's easy to check that if y and f have the same sign, namely all -1 or all +1, L = exp(-1) and when they have different sign, L = exp(1), which is larger.

$argmin\sum_{i=1}^{N} L(y_i, \beta_m b_m(x;\gamma_m)) = argmin\sum_{i=1}^{N} exp(-y_i(f_{m-1} + \beta_m G_m(x_i)))$

Notice that $exp(-y_i f_{m-1})$ doesn't rely on $beta$ nor on $\gamma$, we can represent it as $w_i$, so the above becomes

$argmin\sum_{i=1}^{N} w_i exp(-y_i \beta_m G_m(x_i))$

Now it's clear to see that when $\beta$ is fixed, the above optimization problem involves finding a G with the prediction accuracy as high as possible. And when $G$ is found, the optimized $\beta$ is solution of $\frac{\partial \sum_{i=1}^{N} w_i exp(-y_i \beta_m G_m(x_i))}{\partial \beta}=0$

We then divide the the data into 2 parts, those $y_i=G(x_i)$ and those $y_i \neq G(x_i)$, the above becomes:

$e^{-\beta_{m}}\sum_{y_i=G(x_i)}w_i+e^{\beta_{m}}\sum_{y_i \neq G(x_i)}w_i$

The following deduction is a little bit tedious, jump to the conclusion if desired

$$\begin{align}& e^{-\beta}\sum_{y_i=G(x_i)}w_i+e^{\beta}\sum_{y_i \neq G(x_i)}w_i \\
& = e^{-\beta}\sum_{y_i=G(x_i)}w_i+e^{-\beta}\sum_{y_i \neq G(x_i)}w_i - e^{-\beta}\sum_{y_i \neq G(x_i)}w_i + e^{\beta}\sum_{y_i \neq G(x_i)}w_i \\
& = e^{-\beta}\sum_{i=1}^{N}w_i + (e^{\beta}-e^{-\beta})\sum_{i=1}^{N}w_iI(y_i \neq G(x_i))\end{align}$$

If we denote $err=\frac{\sum_{i=1}^{N}w_iI(y_i \neq G(x_i))}{\sum_{i=1}^{N}w_i}$

we have
$e^{-\beta}=(e^{\beta}+e^{-\beta})err$
$1=(e^{2\beta}+1)err$
$\frac{1}{err}=(e^{2\beta}+1)$
$\frac{1-err}{err}=e^{2\beta}$, by log on both sides, we arrive
$\beta=\frac{1}{2}log\frac{1-err}{err}$

So the conclusion is that
$\beta=\frac{1}{2}log\frac{1-err}{err}$ with $err=\frac{\sum_{i=1}^N w_i I(y_i \neq G(x_i))}{\sum_{i=1}^N w_i}$

And for $w_i$, we have

$$\begin{align}w_i^{m} & = exp(-y_i f_{m}) \\
         & =exp(-y_if_{m-1}-y_i\beta G(x_i)) \\
         & =w_{i}^{m-1}exp(-y_i\beta G(x_i)) \\
         & =w_{i}^{m-1}exp(2\beta I(y_i \neq G(x_i)))exp(-\beta)\end{align}$$

Since $exp(-\beta)$ has equal effect on each record, we can ignore it, so we have

$w_{i}^{m+1}=\alpha w_{i}^{m}$ with $\alpha=exp(log\frac{1-err}{err} I(y_i \neq G(x_i)))$

This idea that exponential loss function plus a {-1, +1} plugged in a forward stagewise additive modeling is essentially the $Adaboost.M1$.

It's worth noting that:  

$$\beta = \frac{1}{2}\log(\frac{1-err}{err})$$

$$w_i=w_i*e^{-y_i\beta h(x_i)}$$

- whether $w_i$ increases or decreases depends on the sign of $-y_ih(x_i)$ 
- the magnitude of this change depends on $\alpha$

### Gradient Boosting
While Adaboost is suitable for classification problem, gradient boosting tree is handy when facing regression problem. 

Simply put, gradient boosting is an additive model, of which each tree tries to fit the gradient of the loss function with respect to the tree itself. If using squared error, 

$$\hat{\theta}_m=\underset{\theta}{\text{argmin}} \sum_{i=1}^{N}(-g_{im}-T(x_i;\theta))^2$$

where

$$g_{im}=\frac{\partial{L(y_i,f(x_i))}}{\partial{f(x_i)}}$$

If $L$ is also squared error, that is 

$$L(y_i, f(x_i))=\frac{1}{2}(y_i-f(x_i))^2$$

Then 

$$g_{im}=y_i-f(x_i)$$

This makes each tree fit the residual $y-f(x)$ 

References:
-----------

- <<The Elements of Statistical Learnin>>
- https://www.cs.cmu.edu/~epxing/Class/10701-08s/recitation/boosting.pdf