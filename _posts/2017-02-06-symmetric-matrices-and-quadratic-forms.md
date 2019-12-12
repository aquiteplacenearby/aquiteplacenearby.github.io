---
layout: default
permalink: /:title
---

Symmetric Matrices and Quadratic Forms
============================
A symmetric matrix has the property that $A^T = A$, it looks cooler when it's diagonalized. In fact, it guarantees to be orthogonally diagonalized. A normal diagonalization is $A=PDP^{-1}$, and an
orthogonal diagnolization is $A=PDP^{T}$, which also means $P$ is an orthogonal matrix(with orthonormal columns). Since $P$ is an orthogonal matrix and its columns are the eigenvectors of the corresponding matrix, these eigenvectors are orthogonal now. Note this is true for the eigenvectors to the distinct eigenvalues, for those produced with the same eigenvalues, it needs to do an orthogonalization for these eigenvectors.

One of the application of this property is in the change of variable. Having a quadratic form $x^{T}Ax$, we want to find a change of variable $x=Py$ that eliminates the cross-produnction term. First we do an orthogonal diagonalization $A=PDP^{T}$, then we have $x^{T}Ax=\sum_i{\lambda_i y_i^2}$ and $y = P^T x$.

The columns of $P$ are are also called principal axes of the quadratic form $xAx^T$, the vector $y$ is is the coordinate of $x$ relative to this orthonomal basis.

Given $x$, the quadratic form $xAx^T$ is just a value, so we can classify it by the following rules:
a) positive definite, if $Q(x)>0$ for all $x$ except $x=0$
b) negative definite, if $Q(x)<0$ for all $x$ except $x=0$
c) indefinite, if $Q(x)$ can have both positive and negative values
d) positive semidefinite, if $Q(x) \geq 0$ for all $x$
d) negative semidefinite, if $Q(x) \leq 0$ for all $x$

When we say a matrix $A$ is positive definite, we mean the quadratic form $xAx^T$ is positive definite. And we can see from the above definitions that if a quadratic form is positive definite, it is also positive semidefinite.

Since $Q(x)=\lambda_1y_1^2+\lambda_2y_2^2+..$ with certain change of variable, the eigenvalues $\lambda_1,\lambda_2,...$ can control the $Q(x)$ in the way that:
a) if all eigenvalues are positive, $Q(x)$ is positive definite
b) if all eigenvalues are negative, $Q(x)$ is negative definite
c) if eigenvalues have positive and negative, $Q(x)$ is indefinite

Given a quadratic form $Q(x)=xAx^T$, and some constraints on $x$, we may want to know that what's the maximum and minimum value of $Q(x)$ under these constraints, particularly, when the constraint is $xx^T=1$. The answer is the maximum and minimum values is equal to the max eigenvalue and min eigenvalue of $A$, and they're attained when $x$ equals to the corresponding eigenvectors.

Rough proof:
$xAx^t=yDy^T=\lambda_1 y_1^2+\lambda_2 y_2^2+... \leq \lambda_1(y_1^2 + y_2^2+...) = \lambda_1$ but $yDy^T$ could attain $\lambda_1$ when $y=e_1$, so $M=\lambda_1$, the same reasoning goes for $m$.

If further we have the constraint $xu_1=0$ where $u_1$ is the eigenvector corresponding to $\lambda_1$, then the maximun of $Q$ is attained when $x=u_2$ and the maximum value at this time is $\lambda_2$. If we continue to accumulate constraint till $xu_k=0$, then each time the maximum value is attained when $x=u_{k+1}$ and the corresponding maximum value is $\lambda_{k+1}$.

Def: the singular value of $A$ is $\sigma_i=\sqrt{\lambda_i}=\|{Av_i}\|$ where $\lambda_i$ is the ith eigenvalue(descending order) of $A^TA$.

Theo: If $(v_1,...v_n)$ is an orthogomal basis of $R^n$ consisting of eigenvectors of $A^TA$ and $A$ has $r$ non-zero singular value, then $(Av_1,...,Av_r)$ forms a orthogonal basis for $Col\ A$ and $rank\ A = r$.

Proof:
Since $(v_1,...v_n)$ is an orthogomal basis of $R^n$ and they are eigenvetors of $A^TA$, then $(Av_i)^T(Av_j)=v_i(A^TA)v_j=v_i\lambda_jv_j=0$, so $(Av_1,...,Av_r)$ forms  a orthogonal set.
Given any $x$ in $R^n$, $x=c_1v_1+....+c_2v_2$, as $(v_1,...v_n)$ is a basis of $R^n$,$Ax=c_1Av_1+..+c_rAv_r+0..+0$, also $Ax$ is in the $Col A$,
So $(Av_1,...,Av_r)$ forms a orthogonal basis for $Col\ A$ and $rank\ A = r$

Theo: Let $A$ be $m \times n$ matrix with rank $r$. There exists an $m \times n$ matrix $\Sigma$ with the entris in $D$ are $r$ singular values of $A$, and there exists $m \times m$ matrix $U$ and $n \times n$ matrix $V$ such that
$$A=U\Sigma V^T$$

Proof:
We know $\|Av_i\|=\sigma_i$, let $u_i=\frac{Av_i}{\|Av_i\|}$
So $\|Av_i\|=\frac{Av_i}{u_i}=\sigma_i$, that is
$$Av_i=\sigma_i u_i$$
If we extend $u$ to $n$ vectors instead of just $r$, with constraints that $U$ stays as an orthogonal matrix, we have
$$AV=U\Sigma$$
And Since $V$ is an orthogonal matrix, $V^{-1}=V^T$, we arrive at
$$A=U\Sigma V^T$$


The following code demonstrates the process of SVD:
```python
import numpy as np
'''
Demonstration of SVD using numpy
'''

'''
A = [
4, 11, 14
8, 7,  -2
]
'''
A = np.array([[4, 11, 14],[8, 7, -2]])
'''
Eigen-decompose A,
w: eigenvalues:
[360, 0, 90]
v: normalized eigenvectors:
[[-0.33333333 -0.66666667 -0.66666667]
 [-0.66666667  0.66666667 -0.33333333]
 [-0.66666667 -0.33333333  0.66666667]]
'''
w,v = np.linalg.eig(np.dot(np.transpose(A), A))
'''
Reorder V by eigenvalues order
'''
V = np.array([v[:,0],v[:,2],v[:,1]])
'''
Constructing Sigma
'''
Sigma = np.array([[np.sqrt(w[0]), 0, 0],[0, np.sqrt(w[2]),0]])

AV = np.dot(A, V)
'''
Constructing U, note m = r in this example, so no need to extend U
'''
u1 = AV[:, 0] / np.linalg.norm(AV[:, 0])
u2 = AV[:, 1] / np.linalg.norm(AV[:, 1])
U = np.transpose(np.array([u1,u2]))

'''
SVD
A = USigmaV^T
'''
A1 = np.dot(np.dot(U,Sigma), np.transpose(V))
print("Is A equal to A1:",np.allclose(A1, A))
```