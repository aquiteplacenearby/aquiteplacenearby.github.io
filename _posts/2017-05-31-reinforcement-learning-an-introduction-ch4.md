---
layout: default
permalink: /:title
---

# Reinforcement Learning An Introduction
# Chapter 4
## Exercises
### 4.1
$q_{\pi}(11,down)=r(11,down,terminal)=0$
$$\begin{align}
q_{\pi}(7,down) & = r(7,down,11)+\gamma(0.25*(q_{\pi}(11,down) \\
& + q_{\pi}(11,left)+q_{\pi}(11,up)+q_{\pi}(11,right))) \\
& = -1 + \frac{1}{4}(q_{\pi}(11,left)+q_{\pi}(11,up)+q_{\pi}(11,right))
\end{align}$$
$q_{\pi}(11,left)=r(11,left,10)+\gamma v_{\pi}(10)=-1 -18=-19$
$q_{\pi}(11,up)=-1-20=-21$
$q_{\pi}(11,right)=-1-14=-15$
$q_{\pi}(7,down)=-1+0.25(-19-21-15)=-14.75$

### 4.2
Since the transition from the original states stay unchanged, $v_{\pi}(s|s \in{1,2,..,14})$ is unchanged too. So

$$\begin{align}
v_{\pi}(15) & = \pi(up|15)p(15,up,13)(r(15,up,13)+v_{\pi}(13)) + \\
& \pi(left|15)p(15,left,12)(r(15,up,12)+v_{\pi}(12))+ \\
& \pi(right|15)p(15,right,14)(r(15,right,14)+v_{\pi}(14))+ \\
& \pi(down|15)p(15,down,15)(r(15,down,15)+v_{\pi}(15)) \\
& =0.25(-1-20)+0.25(-1-22)+0.25(-1-14)+0.25(-1+v_{\pi}(15)) \\
& = -15+0.25v_{\pi}(15)
\end{align}$$
$v_{\pi}(15)=-20$

Now that the transition probability of state 13 has been changed, my intuition is that we need to recompute the value function for all original states as well as the new one. After programming a little, the result is that
$v_{\pi}(15)=20$,..., too. Can this be coincidental? Yes, sort of. In the case of transition prob not being changed,
we have $v_{\pi}(9)=v_{\pi}(13)=v_{\pi}(15)=-20$, and the effects of the behaviors of state $13$ and $15$ differ only in that $\pi(13,up)=9$ and $\pi(15,up)=13$,if we let $v_\pi(13)=v_\pi(9)$, the effects of  the behaviors of state 13 and 15 are exactly the same, so we have $v_\pi(13)=v_\pi(15)=-20$. That being said, if $\pi(15,up) \neq 13$ at the first place, I think recomputation the $v_{\pi}$ under new transition prob is the only way.

### 4.3
analogue equation to (4.3):
$q_{\pi}(s,a)=E_{\pi}[R_{t+1}+\gamma q_{\pi}(S_{t+1},A_{t+1})|S_t=s, A_t=a]$

analogue equation to (4.4) has been given in ex3.8
$q_{\pi}(s,a)=E_{\pi}[Rt+1+\gamma q_{\pi}(St+1,At+1)|St=s,At=a]$

analogue equation to (4.5):
$q_{k+1}(s,a)=\sum_{s'}p(s,a,s')[r(s,a,s')+\gamma\sum_{a'}\pi(a'|s')q_{k}(s',a')]$