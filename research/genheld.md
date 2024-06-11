---
layout: project
title: "GenHeld: Generating and Editing Handheld Objects"
authors:
  - author:
      name: "Chaerin Min"
      affiliation: 1
      link: https://chaerinmin.github.io
  - author:
      name: "Srinath Sridhar"
      affiliation: 1+
      link: https://cs.brown.edu/people/ssrinath/index.html
affiliations:
  - "<sup>1</sup>[Brown University]"
  - "<sup>+</sup>[Corresponding Author]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2406.05059" code="https://github.com/ChaerinMin/GenHeld"%}

{% include full_image.html path="/assets/images/projects/genheld/teaser.png" alt="[teaser]" %}

**TL;DR** We present GenHeld, a model to synthesize held objects given 3D hand model or 2D hand image.
GenHeld 3D can select plausible and diverse objects from a large object repository, while GenHeld 2D can add or replace existing held objects in images.

# Abstract

Grasping is an important human activity that has long been studied in robotics, computer vision, and cognitive science.
Most existing works study grasping from the perspective of synthesizing hand poses conditioned on 3D or 2D object representations.
We propose GenHeld to address the inverse problem of synthesizing held objects conditioned on 3D hand model or 2D image.
Given a 3D model of hand, GenHeld 3D can select a plausible held object from a large dataset using compact object representations called _object codes_.
The selected object is then positioned and oriented to form a plausible grasp without changing hand pose.
If only a 2D hand image is available, GenHeld 2D can edit this image to add or replace a held object.
GenHeld 2D operates by combining the abilities of GenHeld 3D with diffusion-based image editing.
Results and experiments show that we outperform baselines and can generate plausible held objects in both 2D and 3D.
Our experiments demonstrate that our method achieves high quality and plausibility of held object synthesis in both 3D and 2D.

# Method

## GenHeld 3D

We encode the 3D hand model to estimate **object codes** that act as a compact representation of plausible held objects.
These object codes can be used to retrieve diver objects from a much larger dataset like Objaverse.
This is followed by an object fitting step to position and orient objects to form the grasp without changing the initial hand pose.

{% include full_image.html path="/assets/images/projects/genheld/3D_arch.png" alt="[3D_arch]" %}

### Object Codes

We use object codes -- compact representations of object shapes learned from a real dataset of grasps.

{% include full_image.html path="/assets/images/projects/genheld/shape_code.png" alt="[shape_code]" %}

## GenHeld 2D

GenHeld 2D enables us to add or replace held objects to 2D hand images.
We do this by first lifting hand images to 3D hand and object using GenHeld 3D.
This is then following by 2D keypoint projection and alignment to create a 3D guidance image that is used to edit the image.

{% include full_image.html path="/assets/images/projects/genheld/2D_arch.png" alt="[2D_arch]" %}

# Results

## GenHeld 3D

The ablation study of the Object Selection network is provided below. For quantitative results, please refer to the paper. From this result, we observe that the Object Selection is a valid step to ensure the plausibility of generated held objects.

{% include video.html path="/assets/images/projects/genheld/ablation.mp4" alt="[ablation]" %}

## GenHeld 2D

We demonstrates the held object addition results. The results are compared against Imagic and InstructPix2Pix, which can only rely on text prompts. Our proposed framework that guides GenHeld2D with GenHeld3D successfully improves upon image editing only by text.

{% include video.html path="/assets/images/projects/genheld/addition.mp4" alt="[addition]" %}

### Object replacement

Below, we demonstrate the held object replacement application, that can be easily built on top of the GenHeld2D held object addition.

{% include video.html path="/assets/images/projects/genheld/replacement.mp4" alt="[replacement]" %}

## More Results

The Object Code enables querying multiple and diverse objects that are in the same category from a large 3D database. 

{% include video.html path="/assets/images/projects/genheld/diversity.mp4" alt="[diversity]" %}

The proposed method not only work with a large 3D dataset, but also it can be done with existing popular dataset, like YCB.

{% include video.html path="/assets/images/projects/genheld/ycb.mp4" alt="[ycb]" %}

We provide more comparison results. Even with giving the object category as text prompts, the previous methods incur notable performance overhead, when asked to generate a handheld object. On the other hand, ours is able to synthesize a high fidelty grasped object on input images.

{% include full_image.html path="/assets/images/projects/genheld/famous_comparison.png" alt="[famous_comparison]" %}


# Citations
    @misc{min2024genheld,
          title={GenHeld: Generating and Editing Handheld Objects}, 
          author={Chaerin Min and Srinath Sridhar},
          year={2024},
          eprint={2406.05059},
          archivePrefix={arXiv},
          primaryClass={cs.CV}
    }

# Acknowledgements
This work was supported by NASA grant #80NSSC23M0075, and NSF CAREER grant #2143576.

# Contact

Chaerin Min ([contact email](chaerin_min@brown.edu))
