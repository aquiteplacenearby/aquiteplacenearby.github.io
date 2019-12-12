---
layout: default
permalink: /:title
---

Solving linear System
=====================
Let's start with solving a linear system $Ax=b$. The way we do it is put A and b together in a matrix and do row operations, the result is an echelon matrix or better, a reduced echelon matrix, if the result matrix doesn't contain rows like $\begin{pmatrix}0 & 0 \cdots 0 & b\end{pmatrix}$, the system has at least one solution, or in other words, the system is consistent.

The number of the solution of a linear system is none, one, infinite. Let's assume we have at least the same number of variable as that of the equations. The overdetermined system is out of discussion for this article.

$Ax=0$ always has at least one solution, because $\begin{pmatrix}0 & 0 \cdots 0 & b\end{pmatrix}$ is impossible as b is $0$. It will have non trivial solution only if the vectors in A are linearly dependent. When number of cols is bigger than the number of rows, the vectors in A are linearly dependent, so in this case $Ax=0$ has solutions. When it has solutions, the number will be infinite as there is at least one free variable x here. Geometrically, we can view the solution set as a line in case of one free variable, and as a plane in case of two free variables, etc. When number of cols is as same as number of rows, if after row operation, number of pivots is less than number of column, it has infinite solution.

$Ax=b$ is a little bit more complicated. It surely can have no solution case as talked above. One solution case arises when the vectors in A are linear independent. Infinite solution case arises when the vectors in A are linear dependent, note that in this case the system may have no solution as well. Furthermore, when it does have infinite solutions, the solution can be expressed as $x = p + v$, with p a particular solution of $Ax=b$ and v is the general solution of $Ax=0$.

A linear combination is denoted by $c_1v_1 + c_2v_2 + \cdots + c_pv_p$, given the definition of linear combination, we can then define the notion of span, $Span\{v_1,\cdots,v_p\}$ denotes all possible linear combinations of $v_1, v_2, \cdots v_p$. If every vector in $\mathbb{R}^m$ is a linear combination of $v_1$,$v_2$,...,$v_p$, we say $\begin{pmatrix}v_1 & v_2 \cdots v_p\end{pmatrix}$ spans $\mathbb{R}^m$ or $Span\{v_1,\cdots,v_p\}=\mathbb{R}^m$.

With the definition of linear combination, we can also give the definition of linear dependent. If a set of vectors satisfies $c_1v_1 + c_2v_2 + \cdots + c_pv_p=0$ with $c_i$ not all zero, then we say these vectors are linear dependent. If $c_1v_1 + c_2v_2 + \cdots + c_pv_p=0$ is true only when all $c_i$ are zero, they are called linearly independent.

Last, let's talk about linear transformation and matrix transformation. A transformation $T$ is called a linear transformation if $T(u+v)=T(u)+T(v)$ and $T(cu)=cT(u)$. Matrix transformation is an implementation(terminology borrowed from software engineering ) of linear transformation and it is of one-to-one correspondence with linear transformation.