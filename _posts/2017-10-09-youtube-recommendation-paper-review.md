---
layout: default
permalink: /:title
---

Youtube Recommendation Paper Review
===================================

3.4 Label and Context Selection

Surrogate problem: a surrogate problem is one that can not be solved directly but needs to be transferred to  a more solvable problem. 

I think here it means that in the context of recommendation, our job is to recommend movies to users and hope they watch them, but even if they watch what we recommend, it doesn't mean that we're successful in doing our job, as many things can influence the choice of the user behavior, so here is the problem, how can we measure our system? Are recall or precision enough or we need something else such as MAP of rating, this kind of decision is crucial for recommendation system.

Training data selection:

- Use all movies instead of just those already recommended, this is to prevent overused exploitation
- Fixed number of training example per user, this puts equal weights on every user and can avoid the influence of the watch-too-many users.

Information should be used with great care

After typing a search query 'taylor swift', the next video the user will watch is probably the one on the search result page, since the recommendation system is trying to predict the next watch video, if this 'cause and effect' is used as input to the network, the system will recommend on the hompage the one in the search result, which is not much attractive to users. To avoid this, they use a bag of unordered tokens instead of directly use the search query.

Make the input and label chronologically logic

The nature of the user behavior of watching videos means the videos are often watched sequentially, so Youtube finds it's easier to recommend the next watch video than a random potential video, the key to achieve this is to make the input feature and the label chronologically logic, which means that the label must be put on right after user actions.

Features

Video feature + Search feature + Example age + Demographic feature > Video feature alone

More features require deeper and wider network, width and depth are added when incremental benefit diminished and convergence became difficult

Network structure

"Tower" network, each successive layer halves the number of neurons of previous one
