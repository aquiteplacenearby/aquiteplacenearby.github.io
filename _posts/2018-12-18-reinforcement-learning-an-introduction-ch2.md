---
layout: default
permalink: /:title
---

# Reinforcement Learning An Introduction
# Chapter 2
## Exercise
### 2.1
In $\epsilon$-greedy action selection, for the case of two actions and $\epsilon$= 0.5, what is
the probability that the greedy action is selected?

$P(greedy\_action)=1-\epsilon + 0.5\epsilon = 1 - 0.5 + 0.5*0.5=0.5 + 0.25=0.75$

## Exercise
### 2.2
Bandit example Consider a k-armed bandit problem with k = 4 actions,
denoted 1, 2, 3, and 4. Consider applying to this problem a bandit algorithm using
"-greedy action selection, sample-average action-value estimates, and initial estimates
of Q1(a) = 0, for all a. Suppose the initial sequence of actions and rewards is A1 = 1,
R1 = −1, A2 = 2, R2 = 1, A3 = 2, R3 = −2, A4 = 2, R4 = 2, A5 = 3, R5 = 0. On some
of these time steps the " case may have occurred, causing an action to be selected at
random. On which time steps did this definitely occur? On which time steps could this
possibly have occurred?

Possibly: $t_1$, $t_2$, $t_3$ and $t_5$

Definitely: $t_4$

## Exercise
### 2.3
In the long run, say after $t_1$ steps, both methods find the same underlying best rewarded action, but apparently the
greedy method with $\epsilon=0.01$ will outperform that with $\epsilon=0.01$ as it has more chance to choose the best rewarded
action.

Quantitatively:  
Let $D_i$ denote difference of the rewards during $i$ steps, we have $D_n=nD_1$ as it's stationary.
$$\begin{align}D_1 & = 0.99 * Q(a_{best}) + 0.01 * Q(a_{avg\_all}) - 0.9 * Q(a_{best}) - 0.1 * Q(a_{avg\_all}) \\
  & = 0.09 * Q(a_{best}) - 0.09 * Q(a_{avg_all}) \\
  & = 0.09(Q(a_{best})-Q(a_{avg\_all})) \end{align}$$  
where  
$Q(a_{avg\_all})=\frac{1}{10}\sum{Q(a_i)}=0.1Q(a\_best)+0.1\sum{Q(a_{exclude\_best})}$  
so  
$D_1=0.09(Q(a_{best})-0.1Q(a_{best})-0.1\sum{Q(a_{exclude\_best})}=0.081Q(a_{best})-0.009\sum{Q(a_{exclude\_best})}$  
$D_n=nD_1=0.081nQ(a_{best})-0.009n\sum{Q(a_{exclude\_best})}$  

$Q(a_{avg\_all})=\frac{1}{10}\sum{Q(a_i)}=0.1Q(a\_best)+0.1\sum{Q(a_{exclude\_best})}$

## Exercise
### 2.4
$$\begin{align}Q_{n+1}=Q_1\prod_{i=1}^{n}(1-\alpha_i)+\sum_{i=1}^{n}\alpha_{i}(1-\alpha_{i+1})^{n-i}R_i\end{align}$$

## Exercise
### 2.6
when t=11 average reward is high because very likely at this step, we will choose the best action. This is because
during first 10 steps, each action has been selected sequentially once as the initial value is almost always larger than
that after being updated. At t=11, Q(a), after being updated, is approximated by C - alpha(q(a) - C), the order of which
matches the real q(a). At t=12, Q(a_best) becomes smaller comparing to other Q(a) because it's picked up in the last step,
and the update made it smaller. As a result, it's unlikely to be picked up at t=12.

## Exercise
### 2.7
It's easy to verify that Q2=R1 which doesn't depend on Q1.

## Exercise
### 2.8
when t=11 average reward is high because very likely at this step, we will choose the best action. This is because
during first 10 steps, each action has been selected sequentially once as N(a)==0 each time, and Q(a) is approximated by
q(a) as all N(a) are equal to each other(=1), this is a very good estimation. But when t=12, N(a_best) = 2, so Q(a_best)
becomes smaller comparing to the other actions, so it's very possible we will not choose the best action. c=2 is worse than
c=1 is because it amplifies the uncertainty and make the Q(a) we got in the last step less important.

## Exercise
### 2.9
sigmoid:
$f(x)=\frac{1}{1+e^{-x}}$
when used in binary classification
$P(Y=1)=f(x)=\frac{1}{1+e^{-x}}$
$P(Y=0)=1-f(x)=1-\frac{1}{1+e^{-x}}=\frac{1}{1+e^{x}}$

softmax:
$P(Y=1)=\frac{e^{s}}{e^{s}+e^{t}}=\frac{1}{1+e^{-(s-t)}}$
$P(Y=0)=\frac{e^{t}}{e^{s}+e^{t}}=\frac{1}{1+e^{-(t-s)}}$

for every possible $s$, $t$, let $x=s-t$, we can see that softmax becomes sigmoid.

## Summary
We've learned through this chapter how to make decision(choose good action) when facing a system which gives evaluative results(rewards)
each time we act on it. The system is simple in the sense that the actions it receives won't change the inherent status of it. That being
said, the system can also be non-stationary.

Several aspects of the algorithm can effectively influences the performances of the algorithm including
1. Q initial estimates
2. Q update rule
3. action selection strategy
