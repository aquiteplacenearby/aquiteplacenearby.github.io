---
layout: default
permalink: /:title
---

Vector Space
=====================
Let's talk about vector space.

A vector space $V$ is a nonempty set of objects(vectors), on which only addition and multiplication by scalar are defined. Any vector space must satisfy the following 8 properties.
THE 8 PROPERTIES

$R^n$ is a vector space in which the vector has n components. But the word vector can be more general, any space on which addition and multiplication by scalar are defined with the above 8 properties met is a vector space too, for example, real valued function is a vector space.

A subspace is a subset of vectors in vector space that satisfies
(i) if u and v are in the subspace, so is u+v
(ii) if u is in the subspace, so is cu, where c is a scalar

zero vector must be in any subspace as (ii) implies.

It is not explicitly stated but a vector space is in fact the one in which linear combination operation is defined, and a subspace is one that the linear combination of the vectors in it stays in it.

The column space is all linear combinations of columns of matrix A. It is a subspace of $R^m$. $Ax=b$ is solvable if and only if b is in the column space of A.

The null space of A is the solution set of Ax=0. It is a subspace of $R^n$.

Let H be a subspace of V, B={b_1,...,b_n} is a basis for H if B is linearly independent and H = Span{b_1,...,b_n}. In particular, {e1,...,en} is the standard basis for $R^n$. The size of basis can't be larger nor be smaller.

The pivot columns form a basis for Col A. The vectors in solution set of Ax=0 from a basis for Nul A.

Given a vector space $V$,The coordinates of x relative to B is the coefficients c1,...,cn such that x=c1x1+...+cnbn.
$\lbrack x \rbrack_B =\begin{pmatrix}c1 \\ ... \\ cn\end{pmatrix}$ is the B-coordinate vector of x. The mapping $x  \lbrack x \rbrack_B$ is called coordinate mapping determined by B. It is easy to see that this mapping is a linear transformation that verifies $\lbrack u+v \rbrack_{B}=\lbrack u \rbrack_{B}+ \lbrack v \rbrack_{B}$. It occurs sometimes that it is easier to solve one problem in one basis than in another, in this case we may want to change basis accordingly. If two basis $B={b1,..,bn}$ and $C={c1,..,cn}$ are given, there is a unique $n \times n$ matrix p that can transform the coordinates in B to those in C, this transformation matrix is noted as $\underset{C\leftarrow{B}}{P}$ and it is of the value $\lbrack b_1 \rbrack_C,...,\lbrack b_n \rbrack_C$. We have $\lbrack x \rbrack_C=\underset{C\leftarrow{B}}{P}\lbrack x \rbrack_B$. If the vectors $b_i$ are expressed explicitly by the linear combination of $c_i$, we have $\underset{C\leftarrow{B}}{P}$ with each column $\lbrack b_i \rbrack_C$ the value of the coefficients in the linear combination. When only two bases are given, finding transformation $P$ involves solving linear system $Bx=C$.