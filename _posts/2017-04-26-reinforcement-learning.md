---
layout: default
permalink: /:title
rl_grid_example: true
---

Reinforcement Learning
======================

A markov decision process(MDP) is an extension of markov chain([wiki](https://en.wikipedia.org/wiki/Markov_decision_process)). Let's first look at what a markov chain is.

## Markov Process
Markov chain is one type of markov process. A markov process is one satisfying markov property: we can predict the future state knowing only the current state and without knowing the past. Markov chain is special in that its state space is often discrete.

Given an initial state $s$ and a stochastic matrix $P$, we have

$$s_{t+1}  = Ps_{t}$$

A steady-state vector is a vector $q$ satisfying:

$$Pq=q$$

And if $P$ is regular, we have

$$\lim_{k \rightarrow \infty} P^{k} s_0=q$$


## Markov Decision Process

A markov decision process is determined by:

- $S$: a finit set of states
- $A$: a finit set actions that can be taken in state
- $T$: an $S \times A$ matrix $T \sim P(s_{t+1}\|s_t,a)$
- $R$: a real valued reward function for states
- $\gamma$: $[0,1]$, a discount value which puts weight on the future reward comparing to the present

Our goal is to find a policy $\pi: S \mapsto A$, that can maximize the expected total reward $R$ along time $t$.  One problem we may encounter is that the expected total reward could be infinite. One solution to this is that we penalize the reward of the states according to how far it is away from the present.

Our objective:
$$\pi^*=\underset{\pi}{argmax}\ R(s_0) + \gamma R(s_1) + \gamma^2 R(s_2) + ....$$

If $R$ is bounded by $R(s) \le M $, we have

$$R(s_0) + \gamma R(s_1) + \gamma^2 R(s_2) + .... \le M + \gamma M + \gamma^2 M = \frac{1}{1-\gamma}M$$

With our objective and policy, we introduce a value function $V^{\pi}(s)$ to represent the expected total reward starting from $s$ by following $\pi$, and then all policies can be sorted according to this value function, in particular, there exists at least one optimal policy and if there are many, all optimal policies lead to same value functions.

$$V^{\pi}(s)=E[R(s_0)+\gamma R(s_1)+\gamma^2R(s_2)+...| \pi, s_0=s]$$

Given a fixed policy $\pi$, the $V^{\pi}$ satisfies the **Bellman equations**:

$$V^{\pi}(s)=R(s)+\gamma \underset{s' \in S}{\sum}P_{\pi (s)}(s')V^{\pi}(s')$$

The first term $R(s)$ is the reward from by simply starting from $s$, the second term, is the expected reward **after** the first step. It is also worth noting that the sum in above equation is not over all possible actions since the policy here is already known, rather, it is over all possible states given a pair $(s, \pi)$.

By expressing $V^{\pi}(s)$ this way, we can easily calculate $V(s)$ for every possible $s$ as we have exactly $\|S\|$ unknowns and $\|S\|$ equations, e.g. if $\|S\| = 2$, the system of linear equations(simplified) will be:

$$\begin{cases} V^{\pi}(s_0) = R(s_0) + \gamma P_{\pi(s_0)}(s_1)V^{\pi}(s_1)\\ V^{\pi}(s_1) = R(s_1) + \gamma P_{\pi(s_1)}(s_0)V^{\pi}(s_0) \end{cases}$$

The optimal $V^{\pi}(s)$ is given by

$$V^{*}(s) = \underset{\pi}{max}V^{\pi}(s)$$

The above definition signifies that if ever $V^{\*}(s)$ exists, we have $V^{\*}(s) \ge V^{\pi}(s)$ for every $s$ in $S$, this is quite remarkable!

The corresponding Bellman equation of $V^{*}(s)$ is:

$$V^{*}(s)=R(s)+ \underset{a \in A}{max}\ \gamma \underset{s' \in S}{\sum}P_{as}(s')V^{*}(s')$$

The second term this time is the maximum expected reward over all possible actions that can be taken from $s$.

We can also define the optimal policy with respect to this second term:

$$\pi^{*}=\underset{a \in A}{argmax}\ \gamma \underset{s' \in S}{\sum}P_{as}(s')V^{*}(s')$$

Some algorithms can help us to find $\pi^{*}$.

#### Value iteration  

- initialize $V(s)=0$
- while $|V^{i+1}(s) - V^i(s) \ge\epsilon|$  
do $V(s)=R(s)+ \underset{a \in A}{max}\ \gamma \underset{s' \in S}{\sum}P_{as}(s')V(s')$

#### Policy iteration  

- initialize $\pi$ randomly
- while $|V^{i+1}(s) - V^i(s) \ge\epsilon|$  
   a) compute $V^{\pi}(s)$ by solving the system of linear equations  
   b) do $\pi(s)=\underset{a \in A}{argmax}\ \gamma \underset{s' \in S}{\sum}P_{as}(s')V(s')$  


Let's do some exercises to help us to understand Bellman equation better!  

[cs229 ProblemSet #4 Q5.](http://cs229.stanford.edu/materials/ps4.pdf)  
#### a) Prove that the Bellman update operator is a [gamma-contraction](https://en.wikipedia.org/wiki/Contraction_mapping) in the max-norm.  

Let $s^{\*}$ be the state that maximizes $\lVert(B(V_1)-B(V_2)\rVert_{\infty}$  
Let $s^{\*\*}$ be the state that maximizes $\lVert V_1-V_2\rVert_{\infty}$  

$$\begin{aligned}\lVert B(V_1)-B(V_2) \rVert_{\infty}  = & \lvert R(s^{*})+\gamma\sum{PV_1(s')}-(R(s^{*})+\gamma\sum{PV_2(s')}) \rvert \\ = & \gamma \lvert \underset{a}{max}\sum P V_1(s')-\underset{a}{max}\sum P V_2(s') \rvert\end{aligned}$$

Let's divide the above equation into 2 cases:  
i) if the two actions that maximize the expected reward are the same, in this case  

$\begin{align}\gamma \lvert \underset{a}{max}\sum P V_1(s')-\underset{a}{max}\sum P V_2(s') \rvert =  \gamma \lvert \sum{P(V_1(s^{})-V_2(s^{}))} \rvert \\ \le \lVert V_1-V_2 \rVert_{\infty}\end{align}$

ii) if the two actions that maximize the expected reward are not the same, we let the one of $V_2$ be as the same as that of $V_1$(we make the subtrahend smaller), as a result:
  
$\begin{align}\gamma \lvert \underset{a}{max}\sum P V_1(s')-\underset{a}{max}\sum P V_2(s') \rvert \le & \gamma \lvert \sum{P(V_1(s^{})-V_2(s^{}))} \rvert \\ \le \lVert V_1-V_2\rVert_{\infty}\end{align}$

#### b) Prove there is at most one fixed point $V$ that $B(V)=V$

Suppose that there are 2 fixed points $V_1$ and $V_2$. Since they are fixed points, we have

$\lVert B(V_1)-B(V_2) \rVert_{\infty}=\lVert V_1-V_2\rVert_{\infty}$

By the conclusion of a) we have

$\lVert B(V_1)-B(V_2)\rVert_{\infty}=\lVert V_1-V_2\rVert_{\infty} \le \lVert V_1-V_2\rVert_{\infty}$

This holds only when $V_1 = V_2$.

This exercise tells us that the reasons why Bellman equation works:  
- It actually helps to decrease the max difference between iterations  
- It will reach an unique fixed point

We now have tools to help us to find optimal policy when states are discrete, but when they are continuous, the above method can not work out or can not be applied directly. One straightforward way is to do discretization, this transforms our problem to a solved one, but since it brings loss of information and suffers from curse of dimensionality, its performance is limited, it performs much better in low dimensions such as 2d or 3d than in higher dimensions.

Another way is to do value function approximation. To do this, we assume that there is a model or a simulator $f$:
$$s_{t+1}=f(s_{t},a)$$

The model can be obtained in 2 ways:

- using physics simulator
- learn one

Now suppose that we have the model, the value function approximation goes like the following:

[The algo goes here]

It looks a little bit more scary than the original value iteration algorithm, but essentially they are almost identical. Some modifications are:
- the initial investigated $m$ states are sampled from continuous state space $S$
- use $\frac{1}{k}\sum_k{R(s^{(i)}))+\gamma{V(s')}}$ to estimate $R(s^{(i)})+E_{s'\sim P_{s^{(i)}a}}[V(s')]$
- use a supervised learning algorithm to make $V(s^{(i)})$ close to $y^{(i)}$

One may raise the question that why using supervised learning algorithm to make $V(s)$ as close to $y^{(i)}$ as possible? The answer is that in discrete case, $V(s_i)=y^{(i)}$, this works because the number of $s$ is limited, we can enumerate them all, but in continuous case, we can't do it as there are infinite many states, it's impossible to do the same thing, however, we can find a function $f$ in hope that it can output a value $f(s_i)$ as close to the $y^{(i)}$ as possible each time we feed an $s_i$ to it. And the supervised learning algorithm helps us to find $f$.

Once we have $V^{\star}$, we can do similar thing as before to find $\pi^{\star}$, again here we need to first sample $s'$ using MDP model and then computer $max_a V(s')$ using this sampled $s'$, if the model has the form $s_{t+1}=f(s_t,a) + \epsilon$ , we can make the approximation that $E_{s'\sim P_sa}(V(s'))=V(f(s,a))$.

Exercise helps.
[cs229 ProblemSet #4 Q6.](http://cs229.stanford.edu/materials/ps4.pdf) helps me to know better about how to proceed when $MDP$ is not available with the help of a physics simulator though writing MatLab code is a bit of a pain. What also surprised me is that while doing value iteration algorithm, the values in the value functions were continuously **decreasing** until converge. This means that though ultimately the value function will converge to its max, the direction in which it goes is not necessarily upward.  Another thing I found out is that reward function is something tricky in RL, for example, in the exercise, the R(state_fall) = -1 and R(the_rest) = 0, but if you change it to  R(state_fall) = 0 and R(the_rest) = 1, which also sounds reasonable and isn't quite different from the previous one, the algorithm suddenly can not learn at all. It worth noting also that the initialization of value function can also affect the performance of the algorithm, I tried initialize them with small values between 0 and 0.01 as indicated in the comment, but it didn't work so well, then I tried all zero, thing suddenly becomes much better.

I also made a javascript demo on the grid example mentioned by many online courses and tutorials, you can slide the handle, you will see a clear value propagation from the green grid to the grids around it.


<table id="myTable"></table>


<div align="center">
<div id="slider"  >
    <div id="custom-handle" class="ui-slider-handle"></div>
</div>
</div>
### References

- [https://www.cs.rice.edu/~vardi/dag01/givan1.pdf](https://www.cs.rice.edu/~vardi/dag01/givan1.pdf)
- [https://people.eecs.berkeley.edu/~pabbeel/cs287-fa12/slides/mdps-exact-methods.pdf](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa12/slides/mdps-exact-methods.pdf)
- [Udacity Reinforcement Learning](https://classroom.udacity.com/courses/ud600)
- [Andrew Ng cs229 notes on reinforcement learning](http://cs229.stanford.edu/notes/cs229-notes12.pdf)
