---
layout: default
permalink: /:title
---

Logistic Regression
=====================

While linear regression does a good job in regression problem, logistic regression is suitable for binary classification problem.

logistic function:

$$y=\frac{1}{1+e^{-x}}$$

It's easy to see that $y \in (0,1)$ and when $x \geq 0$, $y \geq 0.5$ and when $x \lt 0$, $0 \lt y \lt 0.5$, and this is why it is suitable for probability model.

So the hypothesis here for logistic regression is:

$$h_{\theta}(x)=\frac{1}{1+e^{-\theta^{T}x}}$$

The interpretation of this equation is that $h_{\theta}(x)$ is used to estimate the $Pr(y=1\|x;\theta)$

Given $\theta$ and input $x$, we can compute the $Pr(y=1\|x;\theta)$, and if it is larger than 0.5, we can give a guess that $y=1$, otherwise $y=0$. The problem is that $\theta$  is unknown.

As usual, we associate a cost function to it and try to minimize it. At first glance, the squared error $\frac{1}{m}\sum_{i=1}^{m}(h_{\theta}(x)-y_i)^2$ may be good, but with the specific form of $h_{\theta}(x)$: $\frac{1}{1+e^{-\theta^{T}x}}$, it is not a good candidate since now the cost function is not convex, which has no guarantee to reach local minimum when being optimized.

One alternative cost function is the following:

$$\begin{equation} J(\theta) =\begin{cases} \frac{1}{m}\sum_{i=1}^{m}-log h_{\theta}(x^{(i)}) & y^{(i)}=1 \\ \frac{1}{m}\sum_{i=1}^{m}-log (1-h_{\theta}(x^{(i)})) & y^{(i)}=0 \end{cases} \end{equation}$$

which can be rewritten in a compact form as following:

$$J(\theta) = -\frac{1}{m}\sum_{i=1}^{m}(y^{(i)} log h_{\theta}(x^{(i)}) + (1-y^{(i)})log (1-h_{\theta}(x^{(i)})))$$

One way to find $\theta$ is using gradient descent, the general algo is:
start loop:
    $\quad  \text{compute}\ \frac{\partial J(\theta)}{\partial \theta_{j}}$
    $\quad  \theta_{j} = \theta_{j} - \alpha \frac{\partial J(\theta)}{\partial \theta_{j}}$
end loop

Note all $\theta_j$ should be updated simultaneously.

The problem is determine the term $\frac{\partial J(\theta)}{\partial \theta_{j}}$, the following differentiation is tedious, you can jump to the result if desired.

We put $-\frac{1}{m}\sum_{i=1}^{m}$ aside because it doesn't change the result of derivative much, let's focus on $ylog h_{\theta}(x) + (1-y)log(1-h_{\theta}(x))$. Note that we want the partial derivative of $\theta$ not $x$.

$$\frac{\partial ylog h_{\theta}(x) + (1-y)log(1-h_{\theta}(x))}{\partial \theta}=\frac{y}{h_{\theta(x)}}\frac{\partial h_{\theta}(x)}{\partial \theta}+\frac{1-y}{1-h_{\theta}(x)}(-1)\frac{\partial h_{\theta}(x)}{\partial \theta}\quad (1)$$

$$\frac{\partial h_{\theta}(x)}{\partial \theta}=-\frac{1}{(e^{-\theta^Tx+1})^2}e^{-\theta^Tx}(-x_j)=e^{-\theta^Tx}x_jh_{\theta}^2(x)\quad (2)$$

Substitute the term $\frac{\partial h_{\theta}(x)}{\partial \theta}$ in $(1)$ by $(2)$, we arrive something like

$$(\frac{y-1}{e^{-\theta^Tx+1}}+\frac{e^{-\theta^Tx}y}{e^{-\theta^Tx+1}})x_j$$

which is

$$(y-h_{\theta}(x))x_j$$

So the derivative is:
$$\frac{\partial J(\theta)}{\partial \theta_{j}} = \frac{1}{m}\sum_{i=1}^{m}(h_{\theta}(x^{(i)})-y^{(i)})x_j^{(i)}$$

Cool.