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

Vincent Sitzmann recently wrote a blog post on [the Flavor of the Bitter Lesson for Computer Vision](https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/). In it, he argues that computer vision, as we know it today, might go away with what’s left of it becoming part of end-to-end perception-action models. This post is timely, and reflects the conversations that many of us in the community have been having the last few months.

In this article, I will dig into the arguments presented, and provide alternative perspectives. Note that others have made overlapping points on [Vincent’s X post](https://x.com/vincesitzmann/status/2023420051182022774) which I highly recommend reading.

[The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) has been true in computer vision for some time now; even Sutton recognized it in his original essay. The gradual replacement of hand-crafted methods with models that leverage computation and visual data has been an indisputable trend. The way I interpret it, Vincent’s post generalizes the Bitter Lesson not just to tasks within computer vision but to computer vision itself.

## Is action the sole purpose of computer vision?

The post suggests that embodied intelligence, specifically action, is the sole purpose of computer vision. But in reality, computer vision has a wide range of applications that have nothing to do with action.

A metrologist uses computer vision to measure the world. Creators use computer vision (e.g., face filters, video generators) to make media for human consumption. VR artists use computer vision to create 3D content that can be displayed with the correct parallax on stereo headsets. A cognitive scientist might use computer vision to code animal behavior at scale. None of these examples involve first-order action execution.

More broadly, if computer vision is to continue being a scientific discipline, then we cannot focus narrowly only on what action to execute, nor can we make action a mandatory pre-training task for all problems. Computer vision must provide a task-agnostic common *understanding* of the world around us. After all, the word *science* comes from the Latin *scientia*, meaning 'knowledge, awareness, understanding'.

## Is computer vision obsolete for embodied intelligence?

The post argues that computer vision, as we know it today, is going to go away. Within the narrow scope of simpler embodied intelligence tasks (e.g., navigation, pick and place) where percepts are fully observed and actions are readily obtained, this may turn out to be true.

However, complex long-horizon physical tasks, hallmarks of the **spatial intelligence** of humans and animals, remain firmly out of reach of robots. Take the example of dexterous manipulation: even the best manipulators today are as clumsy as a dog’s jaw or an infant monkey’s hand. These robot hands consume more energy, require more time to execute actions, struggle to coordinate, and often require task-specific modifications. Note that clumsy hands can still be useful and create economic value, especially if they are cheap and scalable. But we must acknowledge they are not as capable and general purpose as human hands.

I don’t believe that the currently dominant paradigm of training robot manipulators only on 2D videos (partial observations of the 3D world) will help us achieve **artificial general dexterity**—robots with [Great Ape](https://en.wikipedia.org/wiki/Hominidae)-level general-purpose hand dexterity. There is simply not enough signal in 2D videos to learn the rich contact and interaction in fine-grained dexterous manipulation. Synthetic data cannot help either because realistic simulators themselves require a deep understanding of interaction.

The solution to artificial general dexterity might actually rest on 3D data from real-world reconstructions or 4D world models, coupled with touch sensing. We see this trend already: extant wok on dexterous manipulation rely on 3D data, either from vision or specialized hardware.

*Artificial super dexterity*—robots with superhuman hand dexterity might be even further away than artificial general dexterity.

## Is 3D a ‘Hand-Crafted’ Representation?

The post calls 3D a ‘hand-crafted’ representation that the Bitter Lesson warns against. However, unlike human-made language grammar, ‘3D’ is not a hand-crafted inductive bias. It is a measurable physical quantity of the world: objects, people, and machines move and interact in 3D/4D.

I believe that we are conflating two related concepts: 3D as a physical quantity versus the measurement and digital representation of this 3D quantity. 3D properties (including geometry, color, material properties) constitute a fundamental physical quantity that can be measured and encoded using a representation like radiance field, point cloud, mesh, or even multi-view images.

This signal processing perspective reframes 3D reconstruction not as a ‘task’ to solve, but as a way to ‘measure’ the world. In medical imaging, volumetric 3D data, created using invisible techniques (e.g., X-rays), is the de facto standard representation. Nobody debates whether 3D medical imaging data is ‘hand-crafted’ because that’s the ‘raw data’ \[1\].

## Is 3D more sample efficient?

If we treat 3D as a physical quantity and assume that we have methods to reliably measure it (e.g., via learned or computed 3D reconstruction), it could offer a major advantage compared to ‘raw’ 2D data: **sample efficiency**.

Empirically, large models trained on 3D data seem to do well with much less data compared to models trained on 2D data. For example, 2D video generation models are trained on millions of hours of video data, while robot world models like DreamDojo are trained on 44k hours of videos. The best image generators are trained on billions of 2D images. In contrast, 3D generation models like Trellis are trained on less than a million 3D assets. Feedforward 3D reconstruction methods like DUSt3R and VGGT are trained on 8-20M image pairs \[2\]. A [CT foundation model](https://arxiv.org/pdf/2501.09001) can be trained on a mere 150k CT scans.

If we assume that the future marginal cost of acquiring 2D data is the same as 3D data, then it is much more sample efficient to train models on 3D than 2D. This is an imperfect empirical observation at this point—more research is needed to study and quantify this efficiency.

## Bitter and Sweet

In summary, I believe that there is certainly a flavor of bitterness in the lesson for computer vision. For simpler embodied intelligence tasks, we are going to see rapid advances with computer vision being part of an end-to-end model trained on fully observed percepts and action data.

However, there is also a flavor of sweetness in the lesson. This presents students and researchers with clarity and opportunity to explore alternative pathways to solve challenging problems in complex long-horizon physical tasks, spatial intelligence, and perhaps even explicit 3D representations to make learning more efficient.

In my lab, we are working on some of these problems. Come join us.

*Thanks to Rahul Sajnani, Aashish Rai, Arthur Chen, Rao Fu, and Sudarshan Harithas for their feedback.*

**Notes**
* \[1\]: Note that measurement could involve ‘reconstruction’, i.e., CT scans are reconstructed from line integrals. Images are reconstructed from photoreceptor responses and [demosaicing](https://en.wikipedia.org/wiki/Demosaicing) of the [Bayer pattern](https://en.wikipedia.org/wiki/Bayer_filter) in color filter arrays.
* \[2\]: It’s worth noting that DUST3R and VGGT benefit from 2D pre-training.

**References**
