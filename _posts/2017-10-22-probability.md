---
layout: default
permalink: /:title
---

Probability
===========
Probability is a function of set, its domain is the class of sets(all subsets of $\Omega$)  

$P: S \rightarrow P(S)$  

$\Omega$ must be finite or **countably infinite**, a set is called countably infinite if it can be put into 1-to-1 correspondence with the set of positive integers.  

Probability function must satisfy 3 axioms:  
i) $P(A) \geq 0$  
ii) $P(A+B) = P(A)+P(B)$ if  $AB=\emptyset$  
iii) $P(\Omega)=1$  

Event: any subset of $\Omega$ is called event. $\Omega=\{\omega_1,\omega_2,...,\omega_n,...\}$  
Associate each sample point $\omega_n$ with a weight $p_n$ which satisfies $p_n \geq 0$ and $\sum_n{p_n}=1$, we put
$$P(\{\omega_n\})=p_n$$  
and for every subset $A$ of $\Omega$, we have  
$$P(A)=\sum_{\omega_n \in A}p_n=\sum_{\omega_n \in A}P(\{\omega_n\})$$

By doing this, we construct a probability measure for any $\Omega$.

When there are $m$ sample points in $\Omega$, and each weight $p_n = \frac{1}{m}$, we're in a **equally likely** situation, but in general, $p_n$ could not be equal and $\Omega$ can also be countably infinite.

Two events $A$ and $B$ are said to be independent if $P(AB)=P(A)P(B)$, more general, any $n$ events are said to be independent if the intersection of any subset of them has as the probability the product of probabilities of the individual events.

**Example** A coin is tossed repeatedly $n$ times, how to verify each trial is independent?  
Assume $n=2$, $A$:Head, $B$:Tail, $\Omega=2 \times 2=4$
$\vert A \vert=2$
$\vert B \vert=2$
$\vert AB \vert=1$
$P(A)=\frac{\vert A \vert}{\vert \Omega \vert}=\frac{1}{2}=P(B)$
$P(AB)=\frac{\vert AB \vert}{\vert \Omega \vert}=\frac{1}{4}$
so we have $P(AB)=P(A)P(B)$
Given first two trials $A$ and $B$, verify $P(AB)=P(A)P(B)$

**Exercises**  
*7  
If $P$ is a probability measure, show that the function $P/2$ satisfies Axioms(i) and (ii) but not (iii). The function $P^2$ satisfies (i) and (iii) but not necessarily (ii); give a counterexample to (ii) by using Example 1.  

a) Let $Q=P/2$, $Q(\Omega)=P(\Omega)/2=1/2 \neq 1$  

b) Let $Q=P^2$, $Q(A)+Q(B)=(28/550)^2+(47/550)^2 \neq ((28+47)/550)^2$

Counting
=======

#### Fundamental Rule

A series of choices are to made, each has $m_1$, $m_2$, ... possibilities,  if the choices can be combined freely, then there are $m_1 * m_2 * ...$ possibilities in total.

#### Sampling
Draw $n$ balls from $m$ balls 

**Sampling with replacement and with ordering**

$$m^n$$

**Sampling without replacement and with ordering**

$$(m)_n$$

**Permutation $n$ balls**

$$n!$$

**Sampling without replacement and without ordering**

$$C_m^n=\binom{n}{m}=\frac{m!}{n!(m-n)!}$$

**Permutation m balls that are distinguishable by groups** 

$$\frac{m!}{m_1!m_2!m_3!...}$$

When there are only 2 groups, it reduces to $C_m^{m_1}$. Think of choosing $m_1$ positions out of $m$ positions

**Sampling with replacement and without ordering**

$$C_{m+n+1}^n$$

Think of inserting $n$ sticks into $m+n-1$ slots
