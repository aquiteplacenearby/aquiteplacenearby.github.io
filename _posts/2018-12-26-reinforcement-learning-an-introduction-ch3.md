---
layout: default
permalink: /:title
---

# Reinforcement Learning An Introduction
# Chapter 3
## Exercise
### 3.6
Let $t_s$ be the terminal step
$\forall t \neq t_s\ G_t = 0 $
$t=t_s G_t=\gamma^t_s *(-1)=-\gamma^t_s$

for continuing task
Let $t_s=\{t_{s_{1}},t_{s_{2}},..\}$ be the set of all the terminal steps
$G_t=-\sum_{t\in{t_s}}\gamma^t$