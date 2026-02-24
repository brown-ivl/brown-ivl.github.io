---
layout: blog
title: "The flavor of the lesson might be bittersweet for Computer Vision"
date: February 24, 2026
authors:
  - author:
      name: "Srinath Sridhar"
      affiliation: 
      link: https://srinathsridhar.com/
affiliations:
  - ""
---

Vincent Sitzmann recently wrote a blog post on the Flavor of the Bitter Lesson for Computer Vision. In it, he argues that computer vision, as we know it today, might go away with what’s left becoming part of end-to-end perception-action models. This post is timely, and its questioning of 3D representations mirrors several of my group’s recent conversations.

In this post, I will dig into some of the arguments and provide alternative perspectives. Note that while this post was developed independently, others have made overlapping points on Vincent’s X post which is well worth a read.

The Bitter Lesson has been true in computer vision for some time now; even Sutton recognized it in his original essay. The gradual replacement of hand-crafted methods with models that leverage computation and visual data has been an indisputable trend. Per my interpretation, Vincent’s post generalizes the Bitter Lesson not just to tasks within computer vision but to computer vision itself.
Is action the sole purpose of computer vision?

The post suggests that embodied intelligence, specifically action, is the sole purpose of computer vision [1]. But in reality, computer vision has a wide range of applications that have nothing to do with action.

A metrologist uses computer vision to measure the world. Creators use computer vision (e.g., face filters, video generators) to make media for human consumption. VR artists use computer vision to create 3D content that can be displayed with the correct parallax on stereo headsets. A cognitive scientist might use computer vision to code animal behavior at scale. None of these examples involve first-order action execution.

More broadly, if computer vision is to continue being a scientific discipline, then we cannot just focus narrowly on what action can be executed by a seeing agent, nor can we make action a mandatory pre-training task for all problems. Computer vision must provide a task-agnostic common understanding of the reality behind what is being seen. After all, the word science comes from the Latin scientia, meaning  'knowledge, awareness, understanding'.
