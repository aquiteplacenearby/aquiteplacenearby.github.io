---
layout: default
permalink: /:title
---

Eigenvalue and Eigenvector
=====================
We know that $Ax$ transforms $x$ into another vector, probably of another direction. However, there may exist some vectors that $Ax$ will not change its direction, that is $Ax=\lambda x$. If $Ax=\lambda x$ has nontrivial solution, $\lambda$ is called the eignvalue of the matrix $A$ and vector $x$ is called the eigenvector corresponding to $\lambda$. The solution set of $(A-\lambda I)x=0$ is called the eigenspace corresponding to $\lambda$. This also means that given a $\lambda$, there may be infinite eigenvectors corresponding to it, e.g. a plane determined by two vectors $v_1$ and $v_2$. Although given $A$, we can not give immediately the eigenvalues and the corresponding eigenvectors, but for triangle matrix, it's very simple, the eigenvalues are the entries in main diagonal as only in this case will the system have nontrivial solution. Finally, the eigenvectors corresponding to  different $\lambda$ of a matrix are linearly independent.

But what if it's just a normal $n \times n$ matrix $A$, not a triangle one? How to find its eigenvalues and eigenvectors? The equation $(A-\lambda I)x=0$ involves two variables $x$ and $\lambda$ at a time, it's too hard. The answer is the determinant. Remember that $A$ is not invertible if and only if $det\ A=0$ and $A$ is not invertible if and only if $Ax=0$ has nontrivial solutions. So we can conclude that $(A$ has eigenvalues if and only if $det\ (A-\lambda I)=0$, and it's called the characteristic equation of $A$. Now we have two ways to verify whether a scalar is the eigenvalue of a matrix $A$: a) test whether $(A- \lambda I)x=0$ has nontrivial solution b) test whether $det\ $A-\lambda I$=0$. With this, we can easily prove that if $A=PBP^{-1}$, then $A$ and B have same characteristic equation. Now we can discuss $x_{k+1}=Ax_{x}$ with $x_0$ known a little bit deeper. Suppose $A$ is $2 \times 2$ matrix, using characteristic equation, we find $\lambda_1$ and $\lambda_2$ as eigenvalues and $v_1$, $v_2$ the eigenvectors corresponding to them respectively. Then we can find $c_1$ and $c_2$ so that $x_0=c_1v_1+c_2v_2$, then $x_1=c_1Av_1+c_2Av_2=c_1\lambda_1 v1 + c_2\lambda_2 v2$, so $x_k=c_1\lambda_1^k v1 + c_2\lambda_2^k v2$, if by chance $\lambda_1<1$, we have $x_k \rightarrow c_2\lambda_2^k v2$ when $k \rightarrow \infty$, in this case, this value is called the steady-state vector for $A$ (Markov chain).

It is easy to verify that if $A=PDP^{-1}$ with $D$ a diagonal matrix, then $A^{k}=PD^kP^{-1}$, and the computation of $D^k$ is fairly easy, it's just the k power of the diagonal entries of $D$, so it only leaves us to find out how this particular factorization is possible. In fact, $A$ can be written in the form of $PDP^{-1}$, if and only if $P$ is the matrix of n linearly independent eigenvectors and $D$ with the diagonal entries the value of corresponding eigenvalues. In other words, $A$ is diagonalizable if there are enough linearly independent eigenvectors that can form a basis of $R^n$. Moreover, we have the following theorems:
a) if $A$ has n different eigenvalues, then $A$is diagonalizable.
b) the dimension of one eigenspace is less or equal to the multiplicities of the corresponding eigenvalue.
c) $A$ is diagonalizable if and only if i) characteristic equation factors completely into linear factors ii) the dimension of each eigenspace equals the multiplicities of $\lambda$, in this case the sum of dimension of eigenspaces equals n.

From the transformation perspective, if $A$ is the matrix associated to $T$, $A=PDP^{-1}$ can be interpreted this way: $D$ is the B-matrix for $T$ where $b_1, b_2, ..., b_n$ are the vectors in $P$.

<a href="http://www.sineofthetimes.org/eigenvectors-of-2-x-2-matrices-a-geometric-exploration/" title="">This site</a> gives a geometric interpretation of eigenvalues and eigenvectors.

Proofs
a)
Prove If $A=PBP^{-1}$, then $A$ and $B$ have same characteristic equation.

Start Proof:

$$\begin{align}
A-\lambda I & =PBP^{-1} - \lambda I \\
& = PBP^{-1} - \lambda PP^{-1} \\
& = (PB - \lambda P)P^{-1} \\
& = PP^{-1}(PB - \lambda P)P^{-1} \\
& =P(B - \lambda I)P^{-1}
\end{align}$$
$det\ P(B - \lambda I)P^{-1} = det\ (P)det\ (P^{-1})det\ (B - \lambda I)$, and we know $det\ (PP^{-1})=1=det\ (P)det\ (P^{-1})$, so $det\ P(B - \lambda I)P^{-1}=det\ P(B - \lambda I)$.
End Proof.

b)
Prove if $A$ can be written in the form of $PDP^{-1}$, if and only if $P$ is the matrix of n linearly independent eigenvectors and $D$ with the diagonal entries the value of corresponding eigenvalues.

Start Proof:
If part
Let $P$ be any matrix of form $v_1,v_2,...,v_n$ and $D$ a matrix with diagonal entries the values $\lambda_1 , \lambda_2 , ... , \lambda_n$, $$A=PDP^{-1}$$ implies $AP=PDP$, so $(Av_1,Av_2,...,Av_n)=\lambda_1 v_1, \lambda_2 v_2 ,..., \lambda_n v_n$ (1). Since $P$ is invertible($A=PDP^{-1}$!), $v_1,..,v_n$ must be linearly independent. Also, since $v_1,..,v_n$ are nonzero vectors, (1) implies that $v_1,..,v_n$ are eigenvectors of $A$ and $\lambda_1 , \lambda_2 , ... , \lambda_n$ the eigenvalues corresponding to them.

Only If part
If $v_1,..,v_n$ are eigenvectors of $A$ and $\lambda_1 , \lambda_2 , ... , \lambda_n$ the eigenvalues corresponding to them, we have $AP=PD$, and if $P$ is invertible, we have $A=PDP^{-1}$.
End Proof.

Prove if $A$ is the matrix associated to $T$, $A=PDP^{-1}$ can be interpreted this way: $D$ is the B-matrix for $T$ where $b_1, b_2, ..., b_n$ are the vectors in $P$.

Start Proof:
Since $b_1, b_2, ..., b_n$ are the vectors in $P$, $[x]_B=P^{-1}x$

$$\begin{align}
[T]_B & = ([T(b_1)]_B, [T(b_2)]_B, ..., [T(b_n)]_B) \\
& =([Ab_1]_B, [Ab_2]_B, ..., [Ab_n]_B) \\
& =(P^{-1}Ab_1, P^{-1}Ab_2,..., P^{-1}Ab_n) \\
& =P^{-1}A(b_1,b_2,...,b_n) \\
& =P^{-1}AP \\
& =D
\end{align}$$
End Proof.