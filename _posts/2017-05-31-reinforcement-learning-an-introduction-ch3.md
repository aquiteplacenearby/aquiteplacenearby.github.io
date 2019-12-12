---
layout: default
permalink: /:title
---

# Reinforcement Learning An Introduction
# Chapter 3
## Exercises
### 3.1
#### flappy bird
**states**=[x_to_upper_sewer_pipe, y_to_upper_sewer_pipe, x_to_down_sewer_pipe, y_to_down_sewer_pipe]  
**actions**=[jump, do_nothing]  
**reward**={+1:'pass pipe', -1:'touch pipe', '0':otherwise}  

### 3.8
$q(s,a)=\sum_{s'}p(s,a,s')[r(s,a,s')+\gamma\sum_{a'}\pi(a'|s')q(s',a')]$

### 3.9
$0.25 *  0.9 * (2.3 + 0.7 + 0.4 - 0.4)  = 0.675 \approx 0.7$

### 3.10
$Gt'=(R_{t+1}+C) + \gamma (R_{t+2}+C) + ...=Gt+C\sum_{k=0}^{\infty}\gamma^{k}$
$K=Gt'-Gt=C\sum_{k=0}^{\infty}\gamma^{k}$

### 3.11
They are not equivalent. Consider two returns of two different states $s1$, $s2$, $G_{t1}$ and $G_{t2}$. Let $G_{t1} = G_{t2}$ with $t1<t2$. By the result of 3.10,we know that $G_{t1}' < G_{t2}'$ since extra values are gained for $G_{t2}'$ in the steps T2 - T1. This indicates that adding constant C may not preserve the relationship of the original returns between states.

### 3.12
$v_{\pi}(s)=E[q(s,a)|S_t=s,A_t=t]$
$v_{\pi}(s)=\sum_a\pi(a|s)q(s,a)$

### 3.13
$q_{\pi}(s,a)=E[R_{t+1}+\gamma v_{\pi}(S_{t+1})|S_t=s,A_t=a]$
$q_{\pi}(s,a)=\sum_{s'}p(s'|s,a)(r(s,a,s')+v_\pi(s'))$

### 3.16
$q_{\*}(h)=\{q_{\*}(h,s),q_{\*}(h,w)\}$
$q_{\*}(l)=\{q_{\*}(l,s),q_{\*}(l,w),q_{\*}(l,r)\}$
$q_{\*}(h,s)=r_{research}+\alpha \gamma \max(q_{\*}(h))+(1-\alpha) \gamma \max(q_{\*}(l))$
$q_{\*}(h,w)=r_{wait}+\gamma \max(q_{\*}(h))$
$q_{\*}(l,s)=3\beta-3+(1-\beta)\gamma \max(q_{\*}(h))+\beta r_{research} + \beta \gamma \max(q_{\*}(l))$
$q_{\*}(l,w)=r_{wait}+\gamma \max(q_{\*}(l))$
$q_{\*}(l,r)=\gamma \max(q_{\*}(h))$

### 3.17
$G_t=\sum_{k=0}^{\infty}\gamma^{k}R_{t+k+1}$
Since we have a policy(optimal) and reward function for all states, we can compute $G_t$, $G_{t+1}$, ... without difficulty.
In particular, for $S_t=A$  
$$\begin{align} G_t =  & r(A,any\ action,A')+ \\  & \gamma r(A',up,grid(3,1)) + \\ & \gamma^2 r(grid(3,1),up,grid(2,1)) + \\ & \gamma^3 r(grid(2,1),up,grid(1,1))+ \\ & \gamma^4 r(grid(1,1),up,A)+... \end{align}$$  
Since only $r(A,a,A') \neq 0$, this sum of infinite terms can be simplified as following:
$$\begin{align} G_t  = & r(A,a,A') + \gamma^5 r(A,a,A')+\gamma^{10} r(A,a,A')+.. \\  = & r(A,a,A')\frac{1}{1-\gamma^5} \\  = & 10*\frac{1}{1-0.9^5}\approx24.419 \end{align}$$