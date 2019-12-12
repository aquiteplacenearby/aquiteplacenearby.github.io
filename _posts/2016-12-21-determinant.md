---
layout: default
permalink: /:title
---

Determinant
======

A determinant is a number we associate with a matrix. It has close relation with inverse of matrix: $A$ is invertible if and only if $det\ A \neq 0$.

Determinant can be calculated by a cofactor expansion along any row or any col of a matrix $A$. A cofactor of $A$ is the number $C_{ij}$ given by $C_{ij}=(-1)^{i+j}\ det\ A_{ij}$. By row expansion, $det\ A=a_{i1}C_{i1}+a_{i2}C_{i2}+...+a_{in}C_{in}$. Similarly, by col expansion, $det\ A=a_{1j}C_{1j}+a_{2j}C_{2j}+...+a_{nj}C_{nj}$. The flexibility of the choice of the place of the expansion can facilitate the computation of determinant, especially when the matrix has many zeros. In particular, when the matrix is a triangle one, the determinant is simply the product of all the entries in the main diagonal.

If we continue to think along this path, since all matrices can be transformed to triangle form by row operations, if these operations change little or change with some specific rules about the determinant of the matrix, that would be good. And we are lucky:

$det\ A=det\ B$ if $B$ is obtained by multiplied rows of $A$ first and then add the result to other rows
$det\ A=-det\ B$ if $B$ is obtained by a row interchange of $A$
$det\ B=cdet\ A$ if $B$ is obtained by factor c out of one row of $A$ 

Now we have a new way to compute determinant:

$\begin{equation}  det\ A=\begin{cases} (-1)^{r}(\text{product of pivots in U}) & \text{if A is invertible} \\ 0 & \text{if A is not invertible}.   \end{cases} \end{equation}$

Not surprisingly, the row operations we can do to facilitate the computation of the determinant can be done with columns too, thanks to the property of cofactor expansion. As a result,

$det\ A = det\ A^T$

We also have a nice property of determinant on matrix product, that is $det\ (AB)=det\ (A)det\ (B) \ \  \text{if both A,B are invertible}$. 

If we think $det\ A$ as a function of cols of A, we find that it has some linearities in it. Assume $x_j$ is the col that is a variable, let $T(x)=det\ \begin{pmatrix}a_1 & ... & a_{j-1} & x & a_{j+1} & ... & a_n\end{pmatrix}$, we have
$T(cx)=cT(x)$ 
$T(u+v)=T(u)+T(v)$

It turns out that determinant can be used to solve linear system. Let $A_i(b)$ be a matrix whose ith column is replaced by $b$, Cramer's rule states: for a linear system $Ax=b$, $x_i=\frac{det\ A_i(b)}{det\ A}$. To see why, by definition of multiplication, $AI_i(x)=\begin{pmatrix}Ae_1 & ... & Ax & ... & Ae_n\end{pmatrix}=\begin{pmatrix}a_1 & ... & b & ... & a_n\end{pmatrix}$, so $det\ AI_i(x) = det\ A_i(b) $, by the property of determinan of matrix product, $det\ Adet\ I_i(x) = det\ A_i(b) $ and $I_i(x)$ is just $x_i$. 

Using this, we can find another formula for $A^{-1}$. The definition of $A^{-1}$ is given by a product of two matrices, $AA^{-1}=I$, and matrix multiplication is just a bunch of matrix-vector multiplications, each is $Ax_j=e_j$, by determinant-ing two sizes of the equation, and knowing $det\ A_i(e_j)=(-1)^{i+j}A_ji=C_ji$, we will reach to the following formula:

$$A^{-1}=\frac{1}{det\ A}\begin{pmatrix}C_{11} & C_{21} & ... & C_{n1} \\ C_{12} & C_{22} & ... & C_{n2} \\ ... \\ ... \\ C_{1n} & C_{2n} & ... & C_{nn}\end{pmatrix}$$

Determinant is also useful in calculating the area in $R^2$ and the volume in $R^3$. The easiest one is the area of the rectangle. A rectangle can be determined by $A=\begin{pmatrix} a & 0 \\ 0 & b\end{pmatrix}$, its area is equal to $ab$ and hence to $det\ A$. Generally, a parallelogram in $R^2$ is determined by two vectors $v_1\ v_2$, since by column operations(interchange two columns or multiply one by scalar and add it to another) we can always transform a matrix to diagonal matrix, and they don't change the absolute value of the determinant, if we want to prove that the determinant of any two vectors is the area of the corresponding parallelogram, it suffices to prove that the parallelogram determined by $v_1$ and $v_2$ is of the same area as that determined by $v_1$ and $v_2 + cv_1$. It's easy to see that if $L$ is a line that is through 0 and $v1$, then $v2 + L$ is a line that is parallel to $L$ and $v2 + cv1$ lies in this line, point $v2$ and point $v2 + cv1$ have same perpendicular distance to $L$, so the areas are the same. This property can be easily extended to 3-dimension, where the area is changed to volume. Since any shape in 2-dimension can be approximated by a collection of rectangles, so with knowledge of calculus, the determinant can used to compute the area of any shape besides parallelogram or rectangle.  

Given a linear transformation $T$ with corresponding matrix $A$ and a parallelogram $S$ bounded by $b_1$ and $b_2$, we have $area\ of\ T(s)\ = |det\ A| \ area\ of\ S$, the volume formula is similar.
$\text{}$
So far what we've learned:
1. how to compute $det\ A$
2. relation between $det\ A$ and the inverse of $A$
3. relation between $det\ A$ and the solution of $Ax=b$
4. relation between $det\ A$ and the area or volume in $R^2$ and in $R^3$ respectively
5. the linearity in determinant if we let one column be a variable     
