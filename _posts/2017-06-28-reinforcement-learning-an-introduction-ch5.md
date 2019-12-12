---
layout: default
permalink: /:title
---

# Reinforcement Learning An Introduction
# Chapter 5
## Exercises
### 5.1
a) They jump up for the last 2 rows because they represent the returns of a player having 20 and 21. Following the given policy, the player will stick at 20 or 21, which logically leads to win most of the time.  

b) The four subplots all drop off on the left because they represent the situation where the dealer having 21 at hand. Following the given policy, the dealer will stick at 21 which leads to at the worst case a natural.  

c)  They are higher because they represent the situation where the player has 12 in total and an usable ace. This usable ace provides more tolerance for further cards: if ever the total number blows up, it will behave like a normal card. 

### 5.2 
It is as the same as that of $v_{pi}$.

### 5.3
$$q(s,a)=\frac{\sum_{i=1}^{n_s}\frac{p_i(s,a)}{p'_i(s,a)}G_i(s,a)}{\sum_{i=1}^{n_s}\frac{p_i(s,a)}{p'_i(s,a)}}$$

Here we are interested particularly in the sequence starting at $s$ and **the action taken at $s$ is $a$**.

### 5.4
See code.

### 5.5
(a) make T larger so that $R_T \rightarrow 0$
(d) choose $argmax_aQ(s,a)$ with probability $1-\epsilon+\frac{\epsilon}{|A|}$, choose one of the rest actions with equal probability $\frac{\epsilon}{|A|}$

### 5.6
Initialization part is like before
Repeat
&ensp;&ensp;Generate an episode using $\pi$
&ensp;&ensp;For each state s appearing in the episode:
&ensp;&ensp;&ensp;&ensp;$G$   = return following the first occurrence of s
&ensp;&ensp;&ensp;&ensp;$V(s) = V(s) + \frac{1}{k}(G-V(s))$ where k is the number of first occurrences in all episodes so far 

### 5.7
$$\begin{align} 
V_{n} & = \frac{\sum_{k=1}^{n-1}{W_k G_k}}{\sum_{k=1}^{n-1}{W_k}} \\ 
& =  \frac{1}{\sum_{k=1}^{n-1}{W_k}}(W_{n-1}G_{n-1}+\sum_{k=1}^{n-2}W_kG_k) \\
& = \frac{1}{\sum_{k=1}^{n-1}{W_k}}(W_{n-1}G_{n-1}+\sum_{k=1}^{n-2}W_k V_{n-1}+W_{n-1}V_{n-1}-W_{n-1}V_{n-1} ) \\
& = \frac{1}{\sum_{k=1}^{n-1}{W_k}}(W_{n-1}G_{n-1} + \sum_{k=1}^{n-1}W_k V_{n-1} - W_{n-1}V_{n-1} ) \\
& = V_{n-1} + \frac{W_{n-1}}{\sum_{k=1}^{n-1}{W_k}}(G_{n-1}-V_{n-1})
\end{align}$$

### 5.8
$$Q(s,a)=Q(s,a)+\frac{W}{\sum{W}}(G_t-Q(s,a))$$
