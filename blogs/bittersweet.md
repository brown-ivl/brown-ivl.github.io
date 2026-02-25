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

Vincent Sitzmann recently wrote a blog post on <a href="https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/" target="_blank">the Flavor of the Bitter Lesson for Computer Vision</a>. In it, he argues that computer vision, as we know it today, might go away, and what’s left of it might become part of end-to-end perception-action models. This post is timely, and reflects the conversations that many of us in the community have been having.

In this article, I will examine some of Vincent’s arguments, and provide an alternative perspective. Others have made overlapping points on <a href="https://x.com/vincesitzmann/status/2023420051182022774" target="_blank">this X post</a> which I highly recommend reading.

## Is action the sole purpose of computer vision?

The post suggests that embodied intelligence, specifically action, is the sole purpose of computer vision. But in reality, computer vision has a wide range of applications that have nothing to do with action.

A metrologist uses computer vision to measure the world. Creators use computer vision (e.g., face filters, video generators) to make media for human consumption. VR artists use computer vision to create 3D content that can be displayed with the correct parallax on stereo headsets. A cognitive scientist might use computer vision to code animal behavior at scale. None of these examples involve first-order action execution.

More broadly, if computer vision is to continue being a scientific discipline, then we cannot just focus on what action to execute, nor can we make action a mandatory pre-training task for all problems. Computer vision must provide an action-agnostic *understanding* of the physical world. After all, the word *science* comes from the Latin *scientia*, meaning 'knowledge, awareness, understanding'.

## Is computer vision obsolete for embodied intelligence?

The post argues that computer vision, as we know it today, is going to go away. Within the narrow scope of simpler embodied intelligence tasks (e.g., navigation, pick and place) where percepts are fully observed and actions are clearly defined, this may turn out to be true.

However, complex long-horizon physical tasks, hallmarks of the **spatial intelligence** of humans and animals, remain firmly out of reach of robots. Take the example of dexterous manipulation: even the best manipulators today are as clumsy as a dog’s jaw or an infant monkey’s hand. These robot hands consume more energy, require more time to execute actions, struggle to coordinate, and often require task-specific modifications. Note that clumsy hands can still be useful and create economic value, especially if they are cheap and scalable. But we must acknowledge they are not as capable and general purpose as human hands.

I don’t believe that the currently-dominant paradigm of training robot manipulators only on monocular 2D videos (‘raw data’) will help us achieve **artificial general dexterity**—robots with <a href="https://en.wikipedia.org/wiki/Hominidae" target="_blank">Great Ape</a>-level general-purpose hand dexterity. There is not enough signal in monocular videos, even at scale, to learn the rich contact and interactions in fine-grained dexterous manipulation.

The solution to artificial general dexterity might actually rest on 3D data from a combination of real-world reconstructions, simulations, 4D world models, and contact/touch sensing. We see glimpses of this trend in extant work on dexterous manipulation like <a href="https://maniptrans.github.io/" target="_blank">ManipTrans</a>, <a href="https://jc-bao.github.io/spider-project/" target="_blank">SPIDER</a> or <a href="https://project-dexmachina.github.io/" target="_blank">DexMachina</a> that all rely on 3D demonstrations from multi-view datasets like <a href="https://ivl.cs.brown.edu/research/gigahands.html" target="_blank">GigaHands</a> (created by my PhD student Rao Fu), or special gloves like in <a href="https://dex-umi.github.io/" target="_blank">DexUMI</a>.

{% include full_image.html path="/assets/images/blogs/bittersweet/superdexterity.jpg" alt="Artificial Super Dexterity" %}
<center><i><b>Artificial super dexterity</b>—robots with superhuman hand dexterity might be even further away than artificial general dexterity.</i></center>

## Is 3D a ‘Hand-Crafted’ Representation?

The post calls 3D a ‘hand-crafted’ representation that the Bitter Lesson warns against. However, unlike human-made language grammar, ‘3D’ is not a hand-crafted inductive bias. It is a measurable physical quantity of the world: objects, people, and machines move and interact in 3D/4D.

We are conflating two related concepts: 3D as a physical quantity versus the measurement/digital representation of this 3D quantity. Spatial properties (including geometry, color, materials) are fundamental physical quantities that can be measured and encoded using representations like radiance fields, point clouds, meshes, or even multi-view images.

This perspective reframes 3D reconstruction not as a ‘task’ to solve, but as a way to ‘measure’ the world. In medical imaging, volumetric 3D data, created using invisible techniques (e.g., CT, MRI), is ‘raw data’1, not a ‘hand-crafted’ representation. Similarly, 3D reconstruction in the visible spectrum can also be viewed as a measurement process. Once ‘raw 3D data’ is measured, we can continue to leverage computation to solve problems following the Bitter Lesson.

## Could 3D be more sample efficient?

If we treat 3D as a physical quantity and assume that we have methods to reliably measure it, there could be a major advantage compared to 2D data: **sample efficiency**.

Empirically, large models trained on ‘raw 3D data’ seem to do well with much less data compared to models trained on 2D data. Video generation models are trained on millions of hours of 2D vides, robot world models like <a href="https://dreamdojo-world.github.io/" target="_blank">DreamDojo</a> are trained on 44k hours of videos, and image generation models are trained on <a href="https://laion.ai/laion-5b-a-new-era-of-open-large-scale-multi-modal-datasets/" target="_blank">billions of 2D images</a>. In contrast, 3D generation models like <a href="https://microsoft.github.io/TRELLIS.2/" target="_blank">TRELLIS</a> are trained on less than a million 3D assets. Feedforward 3D reconstruction methods like <a href="https://europe.naverlabs.com/research/publications/dust3r-geometric-3d-vision-made-easy/" target="_blank">DUSt3R</a> and <a href="https://vgg-t.github.io/" target="_blank">VGGT</a> are trained on 8-20M image-point cloud pairs2. A <a href="https://arxiv.org/pdf/2501.09001" target="_blank">CT foundation model</a> can be trained with just 150k CT scans.

To be sure, the sample efficiency of 3D is an empirical observation at this point—more research is needed to study and quantify this efficiency. But if true, it would make ‘raw 3D data’ far more important to the future of computer vision, especially when the marginal cost of acquiring 3D data converges to 2D3.

## Bitter and Sweet

<a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" target="_blank">The Bitter Lesson</a> has been true in computer vision for some time now; even Sutton recognized it in his original essay. Many tasks that we considered fundamental in vision are turning out to be <a href="https://drive.google.com/file/d/1VodGljuEhBKwZIXQwN-ApH6g2wBAVAdK/view" target="_blank">fake tasks</a>.

Does that mean computer vision as a field now obsolete? I don’t think so.

In fact, there is a flavor of sweetness to the lesson: an exciting opportunity to re-examine what our community thinks of as fundamental problems, representations, data, and techniques—and how they can co-exist in a world where leveraging computation is the most effective path. Perhaps the ideas that emerge from this re-examination will help us solve dexterous manipulation, general 4D spatial intelligence, or efficient continual learning.

At Brown IVL, we are really excited about what’s to come and curious to listen to hear from others. We are co-organizing the <a href="https://ivl.cs.brown.edu/4dworldmodels/" target="_blank">4D World Models workshop</a> at CVPR which could offer a venue for further discussion and debate.

*Thanks to Rahul Sajnani, Aashish Rai, Arthur Chen, Rao Fu, and Sudarshan Harithas for their feedback on this post.*

## Notes

1.  Measurement could involve ‘reconstruction’. CT scans are reconstructed from X-ray projections. Images are reconstructed from photoreceptor responses and <a href="https://en.wikipedia.org/wiki/Demosaicing" target="_blank">demosaicing</a> of the <a href="https://en.wikipedia.org/wiki/Bayer_filter" target="_blank">Bayer pattern</a> in color filter arrays.
2.  It’s worth mentioning that DUSt3R and VGGT benefit from 2D pre-training that likely helps learn low-level features.
3.  Methods like <a href="https://sm0kywu.github.io/Amodal3R/" target="_blank">Amodal3R</a> and commercial demos like <a href="https://marble.worldlabs.ai/" target="_blank">Marble</a> or <a href="https://www.spaitial.ai/blog/echo-release" target="_blank">Echo</a> can reconstruct amodal 3D from a single 2D image. This is a form of 3D measurement that is as expensive as a single feedforward pass of a network.
