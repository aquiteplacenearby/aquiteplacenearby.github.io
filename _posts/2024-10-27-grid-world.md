---
title: Grid World
date: 2024-10-26 20:08:20 +0800
categories: [reinforcement-learning]
tags: [grid-world]     # TAG names should always be lowercase
comments: true
grid_world: true
custom_css: /assets/css/grid-world.css
---

- being optimal
    - the optimal value function
        - $$v_{*}(s)$$ is the max value of it over all policy, so we can't find any policy make $$v(s)>v_{*}(s)$$
    - the optimal action value function
        - $$q_{*}(s,a)$$ is the max value of starting from $$s$$ and take action $$a$$, we can't find any other policy leading to a greater value. this is useful because, image we are at $$s$$, we have two possible actions $$a1$$ adnd $$a2$$, and we know $$q_{*}(s,a1)$$ < $$q_{*}(s,a2)$$, what should we do? we should pick the action $$a2$$ as it leads to greater longterm reward among all possible pocliy $$\pi$$(after taking action $$a2$$)
    - the optimal policy
        - is a policy $$\pi_{*}$$ that for EVERY state $$s$$, $$v_{\pi_{*}}(s)>v_{\pi}(s)$$
        - there is theorem that for EVERY MDP, there exists AT LEAST one optimal policy. this assures us that we won't be in the situation where we would combine two different policies to form an optimal policy
    - ^^the optimal value function^^ and ^^the optimal action value function^^ are the values that can be extracted from the envrionment when applying ^^the optimal policy^^
    - we can obtain the optimal policy by choosing the action that make s $$q_{*}(s,a)$$ max, this choice is ^^deterministic^^
    - $$q_{*}$$ now is essential
    - bellman optimal equation
        - in normal textbook, the [[bellman equation]] that solves MDP is really bellman optimal equation
        - $$v_{*}(s)=\max\limits_{a}(q_{*}(s,a))$$ (1) here $$\sum{\pi}$$ disappears because we choose to take action $$a$$, the probability is 1 and the sum terms reduces to 1 also
        - $$q_{*}(s,a)=R_{s}^{a}+\gamma\sum{P_{ss'}^{a}v_{*}(s')}$$ (2) here $$\sum$$ is still here because after taking action $$a$$, we don't fore sure which state we end up with, so we have average all cases
        - plugin (2) in (1)
            - $$v_{*}(s)=\max\limits_{a}(R_{s}^{a}+\gamma\sum{P_{ss'}^{a}v_{*}(s')})$$
        - plugin (1) in (2)
            - $$q_{*}(s,a)=R_{s}^{a}+\gamma\sum{P_{ss'}^{a'}\max\limits_{a'}(q_{*}(s',a'))}$$
        - $$\max$$ op gives non-linearity, so don't have closed form, we need other algorithms
- 在MDP中R和s和a有关时，silver举了一个例子说如果一个agent有两个action，buy和do nothing，buy会立刻花掉你1000元，这个就是immediate reward，相比之下do nothing的reward为0
- $$v_{\pi}(s)$$ is determined by the distribution of $$\pi$$, for each $$a$$, the $$q(s,a)$$ associated. $$v_{\pi}(s)=\sum_a{\pi(a|s)q_{\pi}(s,a)}$$
- $$q_{\pi}(s,a)$$ is determined by the immediate reward it gets after taking action $$a$$ and the state value it ends up with. $$q_{\pi}(s,a)=R_s^a+\gamma\sum{P_{ss'}^{a}v(s')}$$
- $$v(s)$$ can be represneted by $$v(s')$$
    - replace $$q_{\pi}(s,a)$$ by its representation by $$v(s)$$, we get
        - $$v_{\pi}(s)=\sum_a{\pi(a|s)(R_s^a+\gamma\sum{P_{ss'}^{a}v(s')})}$$
        - two steps expansion of $$v_{\pi}(s)$$
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fitsme%2FUJ39TCGxKq.png?alt=media&token=6a852768-2800-402e-bb2e-0b0eacf42977)
- $$q(s,a)$$ can be represneted by $$q(s',a')$$
    - replace v(s') by $$q(s,a)$$, we get
        - $$q_{\pi}(s,a)=R_s^a+\sum{P_{ss'}^{a}\sum_{a'}{\pi(a'|s')q_{\pi}(s',a')}}$$
        - note that $$P$$ use $$a$$ meaning that if we take action $$a$$ at $$s$$, we would end up being at different state $$s'$$ with probabilty $$P$$, $$a'$$ is used when expanding $$v(s')$$
        - two steps expansion of $$q_{\pi}(s,a)$$
        - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fitsme%2Fxgyb6qxjkS.png?alt=media&token=8a1af7e6-b20c-4053-bc45-a525ee8cbcde)
- MDP虽然有了pi，但通过应用pi，我们就可以得到MRP^{pi}，具体就是average pi distribution
- $$q_{\pi}(s,a)$$是一个reward expection along the way, the way
    - starts at state s
    - then taking action $$a$$ (after this action, we can get an immediate reward)
    - then following $$\pi$$ (after the above action, we just follow $$\pi$$)
- so we just tweak and investigate $$a$$ to see the outcome, the larger part stays unchanged(following $$\pi$$)
- 这张图是MDP，一个点是pub这个action指向了一个黑点，其他action都是指向圆形或者方形，这是因为pub这个action会走向三个不同的state，有各自的概率，所以黑点是一个中间态的东西，不是state。还有就是和原来MRP的图的不同，MRP里state里是具体的"action"，Facebook，Study等
- ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fitsme%2F-hUwGL0Tme.png?alt=media&token=4a3dd332-3c42-4cd0-9f59-9c92167efc12)





<div class="container">
      <div class="input-container">
        <label for="k-value">Enter k value:</label>
        <input type="number" id="k-value" min="0" step="1" />
        <button id="submit-k">Submit</button>
      </div>
      <div class="grid" id="grid"></div>
</div>