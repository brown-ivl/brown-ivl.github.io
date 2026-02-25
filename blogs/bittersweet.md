---
layout: blog
title: "The flavor of the bittersweet lesson for computer vision"
date: February 24, 2026
authors:
  - author:
      name: "Srinath Sridhar"
      affiliation: 
      link: https://srinathsridhar.com/
affiliations:
  - ""
---

Vincent Sitzmann recently wrote a blog post on [the Flavor of the Bitter Lesson for Computer Vision](https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/). In it, he argues that computer vision, as we know it today, might go away, and what’s left of it might become part of end-to-end perception-action models. This post is timely, and reflects the conversations that many of us in the community have been having.

In this article, I will examine some of Vincent’s arguments, and provide an alternative perspective. Others have made overlapping points on [this X post](https://x.com/vincesitzmann/status/2023420051182022774) which I highly recommend reading.

## Is action the sole purpose of computer vision?

The post suggests that embodied intelligence, specifically action, is the sole purpose of computer vision. But in reality, computer vision has a wide range of applications that have nothing to do with action.

A metrologist uses computer vision to measure the world. Creators use computer vision (e.g., face filters, video generators) to make media for human consumption. VR artists use computer vision to create 3D content that can be displayed with the correct parallax on stereo headsets. A cognitive scientist might use computer vision to code animal behavior at scale. None of these examples involve first-order action execution.

More broadly, if computer vision is to continue being a scientific discipline, then we cannot just focus on what action to execute, nor can we make action a mandatory pre-training task for all problems. Computer vision must provide an action-agnostic *understanding* of the physical world. After all, the word *science* comes from the Latin *scientia*, meaning 'knowledge, awareness, understanding'.

## Is computer vision obsolete for embodied intelligence?

The post argues that computer vision, as we know it today, is going to go away. Within the narrow scope of simpler embodied intelligence tasks (e.g., navigation, pick and place) where percepts are fully observed and actions are clearly defined, this may turn out to be true.

However, complex long-horizon physical tasks, hallmarks of the **spatial intelligence** of humans and animals, remain firmly out of reach of robots. Take the example of dexterous manipulation: even the best manipulators today are as clumsy as a dog’s jaw or an infant monkey’s hand. These robot hands consume more energy, require more time to execute actions, struggle to coordinate, and often require task-specific modifications. Note that clumsy hands can still be useful and create economic value, especially if they are cheap and scalable. But we must acknowledge they are not as capable and general purpose as human hands.

I don’t believe that the currently-dominant paradigm of training robot manipulators only on monocular 2D videos (aka ‘raw data’) will help us achieve **artificial general dexterity**—robots with [Great Ape](https://en.wikipedia.org/wiki/Hominidae)-level general-purpose hand dexterity. There is not enough signal in monocular videos, even at scale, to learn the rich contact and interactions in fine-grained dexterous manipulation.

The solution to artificial general dexterity might actually rest on 3D data from a combination of real-world reconstructions, simulations, 4D world models, and contact/touch sensing. We see this in extant work like [ManipTrans](https://maniptrans.github.io/), [SPIDER](https://jc-bao.github.io/spider-project/) or [DexMachina](https://project-dexmachina.github.io/) that rely on 3D demonstration data. This information often comes from multi-view datasets like [GigaHands](https://ivl.cs.brown.edu/research/gigahands.html) (created by my PhD student Rao Fu), or special gloves like in [DexUMI](https://dex-umi.github.io/).

***Artificial super dexterity***—robots with superhuman hand dexterity might be even further away than artificial general dexterity.

## Is 3D a ‘Hand-Crafted’ Representation?

The post calls 3D a ‘hand-crafted’ representation that the Bitter Lesson warns against. However, unlike human-made language grammar, ‘3D’ is not a hand-crafted inductive bias. It is a measurable physical quantity of the world: objects, people, and machines move and interact in 3D/4D.

I believe that we are conflating two related concepts: 3D as a physical quantity versus the measurement/digital representation of this 3D quantity. Spatial properties (including geometry, color, materials) are fundamental physical quantities that can be measured and encoded using 3D representations like radiance fields, point clouds, meshes, or even multi-view images.

This signal processing perspective reframes 3D reconstruction not as a ‘task’ to solve, but as a way to ‘measure’ the world. In medical imaging, volumetric 3D data, created using invisible techniques (e.g., CT, MRI), is the de facto standard representation. Nobody debates whether 3D medical imaging data is ‘hand-crafted’ because that’s the ‘raw data’\[1\].

## Could 3D be more sample efficient?

If we treat 3D as a physical quantity and assume that we have methods to reliably measure it (e.g., via 3D reconstruction), it could offer a major advantage compared to 2D data: **sample efficiency**.

Empirically, large models trained on ‘raw’ 3D data seem to do well with much less data compared to models trained on 2D data. Video generation models are trained on millions of hours of 2D vides, robot world models like [DreamDojo](https://dreamdojo-world.github.io/) are trained on 44k hours of videos, and image generation models are trained on [billions of 2D images](https://laion.ai/laion-5b-a-new-era-of-open-large-scale-multi-modal-datasets/). In contrast, 3D generation models like [TRELLIS](https://microsoft.github.io/TRELLIS.2/) are trained on less than a million 3D assets. Feedforward 3D reconstruction methods like DUSt3R and VGGT are trained on 8-20M image-point cloud pairs\[2\]. A [CT foundation model](https://arxiv.org/pdf/2501.09001) can be trained with just 150k CT scans.

To be sure, the sample efficiency of 3D is an imperfect empirical observation at this point—more research is needed to study and quantify this efficiency. But if true, it would make 3D far more important to the future of computer vision, especially when the marginal cost of acquiring 3D data converges to 2D\[3\].

## Bitter and Sweet

[The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) has been true in computer vision for some time now; even Sutton recognized it in his original essay. Many tasks that we consider fundamental in vision are turning out to be Girshick’s [fake tasks](https://drive.google.com/file/d/1VodGljuEhBKwZIXQwN-ApH6g2wBAVAdK/view).

But is computer vision as a field now obsolete? I don’t think so.

In fact, there is a flavor of sweetness in the lesson: an exciting opportunity to re-examine what our community thinks of as fundamental problems, representations, data, and techniques. Perhaps the ideas that emerge from this re-examination will help us solve dexterous manipulation, general spatial intelligence, or efficient continual learning.

At Brown IVL, we are really excited about what’s to come and curious to listen to other perspectives. Perhaps we could organize a debate and discussion around this topic at the [4D World Models workshop](https://ivl.cs.brown.edu/4dworldmodels/) my students are co-organizing at CVPR this year.

*Thanks to Rahul Sajnani, Aashish Rai, Arthur Chen, Rao Fu, and Sudarshan Harithas for their feedback on a draft of this post.*

## Notes

*\[1\]: Note that measurement could involve ‘reconstruction’, i.e., CT scans are reconstructed from line integrals. Images are reconstructed from photoreceptor responses and [demosaicing](https://en.wikipedia.org/wiki/Demosaicing) of the [Bayer pattern](https://en.wikipedia.org/wiki/Bayer_filter) in color filter arrays.*

*\[2\]: It’s worth noting that DUST3R and VGGT benefit from 2D pre-training.*

*\[3\]: We are seeing early signs of methods that can reconstruct 3D in a single forward pass from a single image.*
