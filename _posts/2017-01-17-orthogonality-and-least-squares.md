---
layout: default
permalink: /:title
---

Orthogonality and Least Squares
============================
Given two vectors $u=\begin{pmatrix} u_1 \\ u_2 \\ ... \\ u_n \end{pmatrix}$ and $v = \begin{pmatrix} v_1 \\ v_2 \\ ... \\ v_n \end{pmatrix}$, we define inner product of the two vectors a scalar given by $u^Tv$ the product of a $1 \times n$ matrix and a $n \times 1$. It can be also written as $u \cdot v$, called dot product.

Some properties
$u \cdot v = v \cdot u$
$u \cdot (v+w) = u \cdot v + u \cdot w$
$c(u \cdot v)=(cu)\cdot v = u \cdot (cv))$
$u \cdot u \geq 0,\ u \cdot u = 0 \text{ if and only if } u = 0 $

With the definition of inner product, we then define the length of a vector $v$
$$\|v\| = \sqrt{v \cdot v}$$

And the unit vector is the vector of length 1, by multiplying $\frac{1}{\|u\|}$, any vector $u$ can become unit vector.

And the distance of two vector $u$ and $v$
$dist(u,v)\ = \|u - v\| = \sqrt{(u - v) \cdot (u - v)} = \sqrt{\|u\|^2 + \|v\|^2 + 2u \cdot v} $

With help of the law of cosine: $c^2 = a^2 + b^2 - 2ab\cos\theta$, it's easy to see that $\cos\theta=\frac{u \cdot v}{\|u\|\|v\|}$.

If two vectors $u$ and $v$ are orthogonal, then distance from $u$ to $v$ is equal to $u$ to $-v$. Using the expansion of the definition of distance, we arrive at
$$u \cdot v = 0$$

This gives us the famous pythagorean theorem
$\| u + v \|^2 = \|u\|^2 + \|v\|^2$

If $z$ is orthogonal to every vector of subspace $W$ in $R^n$, then $z$ is said orthogonal to $W$, and the set of all vectors like $z$ is called orthogonal component of $W$ and is denoted by $W^{\perp}$.

It can be verified that $(Row\ A)^{\perp}=Nul\ A$ and $(Col\ A)^{\perp}=Nul\ A^T$

If the vectors in a set are pair-wise orthogonal, they form a orthogonal set. A orthogonal basis for a subspace $W$ of $R^n$ is a basis that is also a orthogonal set.

Given ${u_1,u_2,...,u_n}$ a orthogonal basis for subspace $W$ and $y = c_1u_1+c_2u_2+...+c_nu_n$, we have
$$c_j = \frac{y \cdot u_j}{u_j \cdot u_j}$$

If we decompose $y$ in the way that $y = \hat{y} + z$ with $\hat{y}=\alpha u$ and $z$ is orthogonal to $u$, we have
$\hat{y}=\frac{y \cdot u}{u \cdot u}u$ and $z=y - \frac{y \cdot u}{u \cdot u}u$

A orthonormal set is first a orthogonal set plus each vector is of length 1. A matrix with orthonormal columns has a nice property that $U^TU=I$, and the mapping $x \to Ux$ has the following properties:
a)$\|Ux\|=\|x\|$
b)$(Ux) \cdot (Uy)=x \cdot y$
c)$(Ux) \cdot (Uy) = 0$ if and only if $xy=0$

These properties imply that the related mapping preserves the length and the orthogonality of the original vectors.

A squared matrix is called a orthogonal matrix if $U^T = U^{-1}$, and it's easy to see that in this case it has orthonormal columns only. Surprisingly, it has orthonormal rows too.

Given $y$ a vector in $R^n$ and $W$ a subspace of $R^n$ with ${u_1,u_2,...,u_n}$ a orthogonal basis for $W$. There is an unique decomposition $y = \hat{y} + z$ such that $z$ is orthogonal to $W$ and $\hat{y}$ is on $W$, moreover
$$\hat{y} = \frac{y \cdot u_1}{u_1 \cdot u_1}u_1 + \frac{y \cdot u_2}{u_2 \cdot u_2}u_2 + ... + \frac{y \cdot u_n}{u_n \cdot u_n}u_n$$
We can interpret it as a linear combination of the orthogonal basis for $W$ where each coefficient is that of the projection of $\hat{y}$ onto the corresponding basis vector.

The $\hat{y}$ is sometimes called the best approximation of $y$ in $W$ as the length of $z$ is shortest.

If ${u_1,u_2,...,u_n}$ is not only a orthogonal basis for $W$, but also a orthonormal one, then
$$\hat{y} = y \cdot u_1u_1 + y \cdot u_2u_2 + ... + y \cdot u_nu_n$$

And more compactly
$$\hat{y} = UU^Ty$$

We have seen that orthogonal basis is very useful so given an arbitrary basis of $W$ we want to transform it into an orthogonal one. The method is called The "Gram-Schmidt Process":
Given \{x_1,x_2,...x_p\} a basis of $W$,
$v_1 = x_1$
$v_2 = x_2 - \frac{x_2 \cdot x_1}{x_1 \cdot x_1}x_1$
$v_3 = x_3 - \frac{x_3 \cdot v_1}{v_1 \cdot v_1}v_1 - \frac{x_3 \cdot v_2}{v_2 \cdot v_2}v_2$
$...$


With the help of "Gram-Schmidt Process", there is another factorization of matrix, called "QR" factorization, where Q is a orthonormal matrix and R an upper trianglar matrix.
To see why, let $A =(a_1,a_2,...a_n)$, after orthogonalization,  A is transformed into Q, and let  $Q = (u_1,u_2,...,u_n)$.  It's easy to see that $a1 = r11 u_1 + 0 u_2 + ... + 0 u_n$, $a2 = r21 u_1 + r22 u_2 + 0 u_3 + ... + 0 u_n$ and so on. $A = (Q r_1, Q r_2, ... Q r_n) = QR$. Since $Q$ is an orthonormal matrix, we have $Q^{-1}=Q^T$, by simple calculation, we arrive $R=Q^T A$.

Appendix
a) Given ${u_1,u_2,...,u_n}$ a orthogonal basis for subspace $W$ and $y = c_1u_1+c_2u_2+...+c_nu_n$, prove
$$c_j = \frac{y \cdot u_j}{u_j \cdot u_j}$$
Start Proof:
Assume $j=1$
$y \cdot u_1 = (c_1u_1+c_2u_2+...+c_nu_n) \cdot u_1 = c_1u_1 \cdot u_1 + c_2u_2 \cdot u_1 + ... + c_nu_nu_1$
Since ${u_1,u_2,...,u_n}$ is a orthogonal basis, $u_1u_p = 0 \ p \neq 1$
So $y \cdot u_1 = c_1u_1 \cdot u_1$, which results
$$c_1 = \frac{y \cdot u_1}{u_1 \cdot u_1}$$
End Proof

b) If U is a orthogonal matrix, prove $\|Ux\|=\|x\|$
Start Proof:
$\|Ux\|^2=(u_1x_1 + u_2x_2 + u_nx_n) \cdot (u_1x_1 + u_2x_2 + u_nx_n)$
Since $U$ is a orthogonal matrix, $u_i \cdot u_i = 1$ and $u_i \cdot u_j = 0$
The expansion of $(u_1x_1 + u_2x_2 + u_nx_n) \cdot (u_1x_1 + u_2x_2 + u_nx_n)$ has only two terms which are not zero, $x_1^2(u_1\cdot u_1)=x_1^2$ and $x_2^2(u_2\cdot u_2)=x_1^2$.
End Proof
