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

Vincent Sitzmann recently shared a blog post titled “<a href="https://www.vincentsitzmann.com/blog/bitter_lesson_of_cv/" target="_blank">The flavor of the bitter lesson for computer vision</a>.” In it, he argues that computer vision as we currently know it may become obsolete, with its remaining elements being absorbed into end-to-end perception-action models. His post is timely, and reflects ongoing discussions in the community.

In this article, I will examine some of Vincent’s arguments, and provide an alternative perspective. Others have made overlapping points on <a href="https://x.com/vincesitzmann/status/2023420051182022774" target="_blank">this X post</a>, which I highly recommend reading.

## Is action the sole purpose of computer vision?

The post suggests that embodied intelligence, specifically action, is the sole purpose of computer vision. But in reality, computer vision has a wide range of applications.

Consider the following use cases, none of which require first-order action execution:

- **Metrology:** Engineers use computer vision to measure the physical world with high precision.
- **Media & Entertainment:** Creators leverage tools like face filters and generative video to make media content.
- **Virtual Reality:** VR artists utilize vision to create 3D content with accurate parallax for stereo headsets.
- **Cognitive Science:** Researchers apply vision to code and analyze animal behavior at scale.

More broadly, if computer vision is to remain a rigorous scientific discipline, we cannot consider action execution alone, or mandate action as a pre-training task for all problems. Computer vision must provide an **action-agnostic understanding** of the physical world. After all, the word *science* derives from the Latin *scientia*, meaning “knowledge, awareness, understanding.”

## Is computer vision obsolete for embodied intelligence?

The post argues that computer vision, as we know it today, is going to go away. This may hold true for narrow, well-defined embodied tasks—such as navigation or basic pick-and-place—where percepts are fully observed and actions are straightforward.

However, complex long-horizon physical tasks—the hallmarks of biological spatial intelligence—remain firmly out of reach. Consider **dexterous manipulation**: even the most advanced manipulators today are as clumsy as a dog’s jaw or an infant monkey’s hand. They are energy-intensive, slow, struggle with coordination, and frequently require task-specific modifications. Note that clumsy hands can still be useful and create economic value, especially if they are cheap and scalable. But we must acknowledge they are not as capable and general purpose as human hands.

I don’t believe that the currently-dominant paradigm of training robots solely on monocular 2D videos (‘raw 2D data’) will help us achieve **Artificial General Dexterity (AGD)**—robots with <a href="https://en.wikipedia.org/wiki/Hominidae" target="_blank">Great Ape</a>-level general-purpose hand dexterity. Even at scale, monocular 2D videos lack the necessary signal to capture the intricate contact dynamics and interactions required for fine-grained manipulation.

The path to AGD might actually rest on 3D data from a combination of real-world reconstructions, simulations, 4D world models, and contact/touch sensing. We see glimpses of this trend in recent work like <a href="https://maniptrans.github.io/" target="_blank">ManipTrans</a>, <a href="https://jc-bao.github.io/spider-project/" target="_blank">SPIDER</a> or <a href="https://project-dexmachina.github.io/" target="_blank">DexMachina</a>, which leverage 3D demonstrations from multi-view datasets like <a href="https://ivl.cs.brown.edu/research/gigahands.html" target="_blank">GigaHands</a> (created by my PhD student Rao Fu), or specialized hardware like the <a href="https://dex-umi.github.io/" target="_blank">DexUMI</a> gloves.

{% include full_image.html path="/assets/images/blogs/bittersweet/superdexterity.jpg" alt="Artificial Super Dexterity" %}
<center><i><b>Artificial Super Dexterity (ASD)</b>—robots with superhuman hand dexterity might be even further away than <b>Artificial General Dexterity (AGD)</b>.</i></center>

## Is 3D a ‘Hand-Crafted’ Representation?

The post calls 3D a ‘hand-crafted’ representation that the Bitter Lesson warns against. However, unlike human-developed linguistic grammars, ‘3D’ is not a hand-crafted inductive bias. It is a measurable physical property of the universe: objects, people, and machines move and interact in 3D/4D.

We must distinguish between two related concepts: **3D as a physical quantity** versus the **digital representation** of that quantity. Spatial properties—including geometry, reflectance, and material composition—are objective physical attributes. These can be measured and encoded through various representations, such as radiance fields, point clouds, meshes, or multi-view images.

This perspective reframes 3D reconstruction not as a ‘task’ to be solved, but as a way to ‘measure’ the world. In medical imaging, volumetric 3D data, created using invisible techniques (e.g., CT, MRI), is treated as ‘raw data’ \[1\], not a ‘hand-crafted’ representation. Similarly, 3D reconstruction in the visible spectrum can be viewed as a measurement process. Once ‘raw 3D data’ is measured, we can leverage computation to solve problems following the Bitter Lesson.

## Could 3D be more sample efficient?

If we treat 3D as a measurable physical quantity, it could offer a significant advantage over 2D data: **sample efficiency**.

Empirically, large models trained on ‘raw 3D data’ seem to do well with much less data than their 2D counterparts. Video generation models require millions of hours of footage, robot world models like <a href="https://dreamdojo-world.github.io/" target="_blank">DreamDojo</a> are trained on 44k hours of videos, and image generation models are trained on <a href="https://laion.ai/laion-5b-a-new-era-of-open-large-scale-multi-modal-datasets/" target="_blank">billions of 2D images</a>. In contrast, 3D generation models like <a href="https://microsoft.github.io/TRELLIS.2/" target="_blank">TRELLIS</a> are trained on fewer than one million 3D assets. Feedforward 3D reconstruction methods like <a href="https://europe.naverlabs.com/research/publications/dust3r-geometric-3d-vision-made-easy/" target="_blank">DUSt3R</a> and <a href="https://vgg-t.github.io/" target="_blank">VGGT</a> are trained only on 8-20M image-point cloud pairs \[2\]. A <a href="https://arxiv.org/pdf/2501.09001" target="_blank">CT foundation model</a> can be trained with just 150k CT scans.

While the sample efficiency of 3D remains an empirical observation requiring further quantification, the implications could be significant. It could make ‘raw 3D data’ more important to the future of computer vision, especially when the marginal cost of acquiring 3D data converges with that of 2D \[3\].

## Bitter and Sweet

<a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" target="_blank">The Bitter Lesson</a> has been true in computer vision for some time now; even Sutton recognized it in his original essay. Many tasks that we considered fundamental in vision are turning out to be <a href="https://drive.google.com/file/d/1VodGljuEhBKwZIXQwN-ApH6g2wBAVAdK/view" target="_blank">fake tasks</a>.

Does this render computer vision as a discipline obsolete? I don’t believe so.

On the contrary, there is a flavor of sweetness to the lesson: an exciting opportunity to re-examine our community’s foundational assumptions about tasks, representations, data, and techniques. It is an opportunity to discover how the field can evolve in a world where leveraging computation is the most effective path. The insights born from this re-examination may be exactly what we need to solve problems like general-purpose dexterity, 4D spatial intelligence, and efficient continual learning.

At Brown IVL, we are really excited about what’s to come and curious to hear from others. We are co-organizing the <a href="https://ivl.cs.brown.edu/4dworldmodels/" target="_blank">4D World Models workshop</a> at CVPR which could offer a venue for further discussion and debate.

*Thanks to Rahul Sajnani, Aashish Rai, Arthur Chen, Rao Fu, and Sudarshan Harithas for their feedback on this post.*

### Notes

1. Measurement could involve ‘reconstruction’. CT scans are reconstructed from X-ray projections. Images are reconstructed from photoreceptor responses and <a href="https://en.wikipedia.org/wiki/Demosaicing" target="_blank">demosaicing</a> of the <a href="https://en.wikipedia.org/wiki/Bayer_filter" target="_blank">Bayer pattern</a> in color filter arrays.
2. Although DUSt3R and VGGT benefit from 2D pre-training that likely helps learn low-level features.
3. Methods like <a href="https://cat3d.github.io/" target="_blank">CAT3D</a>, <a href="https://sm0kywu.github.io/Amodal3R/" target="_blank">Amodal3R</a>, and commercial demos like <a href="https://marble.worldlabs.ai/" target="_blank">Marble</a> or <a href="https://www.spaitial.ai/blog/echo-release" target="_blank">Echo</a> can reconstruct 3D from sparse 2D images. We could think of these as methods for learning-based 3D measurement.
