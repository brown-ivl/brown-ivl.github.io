---
layout: project
title: "GenHSI: Controllable Generation of Human-Scene Interaction Videos"
authors:
  - author:
      name: "Zekun Li"
      affiliation: 1
      link: https://kunkun0w0.github.io/
  - author:
      name: "Rui Zhou"
      affiliation: 1
      link: https://www.linkedin.com/in/rui-zhou-354646200/
  - author:
      name: "Rahul Sajnani"
      affiliation: 1
      link: https://rahulsajnani.github.io/
  - author:
      name: "Xiaoyan Cong" 
      affiliation: 1
      link: https://oliver-cong02.github.io/
  - author:
      name: "Daniel Ritchie"
      affiliation: 1
      link: https://dritchie.github.io/
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: https://cs.brown.edu/people/ssrinath/
affiliations:
  - "<sup>1</sup>[Brown University]"
journal: "WACV 2026"
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2506.19840" code="https://kunkun0w0.github.io/project/GenHSI/"%}

{% include full_image.html path="/assets/images/projects/genhsi/pipeline.png" alt="[Teaser Figure]" %}

---
# Abstract
Large-scale pre-trained video diffusion models have exhibited remarkable capabilities in diverse video generation. However, existing solutions face several challenges in generating long videos with rich human–scene interactions (HSI), including unrealistic dynamics and affordance, lack of subject identity preservation, and the need for expensive training. To this end, we propose GenHSI, a training-free method for controllable generation of long HSI videos with 3D awareness. Taking inspiration from movie animation, we subdivide the video synthesis into three stages: (1) script writing, (2) pre-visualization, and (3) animation. Given an image of a scene and a character with a user description, we use these three stages to generate long videos that preserve human identity and provide rich and plausible HSI. Script writing converts a complex text prompt involving a chain of HSI into simple atomic actions that are used in the pre-visualization stage to generate 3D keyframes. To synthesize plausible human interaction poses in 3D keyframes, we utilize pre-trained 2D inpainting diffusion models to generate plausible 2D human interactions based on view canonicalization, which eliminates the need for multi-view fitting in previous works. We then extend these interactions to 3D using robust iterative optimization, informed by contact cues and reasoning from VLMs. Prompted by these 3D keyframes, the pretrained video diffusion models can better generate consistent long videos with plausible dynamics and affordance in a 3D-aware manner. We are the first to synthesize a long video sequence with a chain of HSI actions without training based on the image references of the scene and character. Experiments demonstrate that our method can generate HSI videos that effectively preserve scene content and character identity with plausible human-scene interaction from a single image scene.

---
# Methodology
Our method including three stages: (1) script writing, (2) pre-visualization, and (3) animation.
We first parse a high-level text description into simple atomic tasks using a VLM under image scene context, which includes physical interactions and state transitions based on the affordances in the image scene.

{% include full_image.html path="/assets/images/projects/genhsi/VLM.png" alt="[Method Figure 1]" %}

After obtaining the detailed and structured motion script, we prompt human-object interaction using a novel zero-shot pose generation that leverages a pretrained inpainting model. We then compose the scene and human in 3D under affordance constraints that lead to physically plausible interactions between the character and the environment.

{% include full_image.html path="/assets/images/projects/genhsi/pose_generation.png" alt="[Method Figure 2]" %}

To render them into a holistic 3D-aware keyframes and interpolate as HSI video via video generative models, we use the estimated depth point cloud as initialization for scene 3D Gaussian fitting and feed-forward 3D Gaussian avatar generation model to obtain character assets.

---
# Video Resutls

## "A man sits on the bed, then sits on the chair."

<div style="display: flex; gap: 4px; width: 100%;">
  <div style="flex: 1; min-width: 0;">
    <img src="/assets/images/projects/genhsi/video1/scene.jpg" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="Scene"/>
  </div>
  <div style="flex: 1; min-width: 0;">
    <img src="/assets/images/projects/genhsi/video1/avatar.jpg" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="Avatar"/>
  </div>
  <div style="flex: 1; min-width: 0;">
    <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;">
      <source src="/assets/images/projects/genhsi/video1/genhsi.mp4" type="video/mp4"/>
    </video>
  </div>
  <div style="flex: 1; min-width: 0;">
    <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;">
      <source src="/assets/images/projects/genhsi/video1/kling_elements.mp4" type="video/mp4"/>
    </video>
  </div>
</div>
<div style="display: flex; gap: 4px; width: 100%; text-align: center; font-size: 0.85em; color: #555;">
  <div style="flex: 1;">Scene</div>
  <div style="flex: 1;">Avatar</div>
  <div style="flex: 1;">GenHSI</div>
  <div style="flex: 1;">Kling</div>
</div>

## "The girl stands next to the chair, then sits on it. After that, she approaches the table and touches it."

<div style="display: flex; gap: 4px; width: 100%;">
  <div style="flex: 1; min-width: 0;">
    <img src="/assets/images/projects/genhsi/video2/scene.png" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="Scene"/>
  </div>
  <div style="flex: 1; min-width: 0;">
    <img src="/assets/images/projects/genhsi/video2/avatar.png" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="Avatar"/>
  </div>
  <div style="flex: 1; min-width: 0;">
    <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;">
      <source src="/assets/images/projects/genhsi/video2/genhsi.mp4" type="video/mp4"/>
    </video>
  </div>
  <div style="flex: 1; min-width: 0;">
    <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block;">
      <source src="/assets/images/projects/genhsi/video2/kling_elements.mp4" type="video/mp4"/>
    </video>
  </div>
</div>
<div style="display: flex; gap: 4px; width: 100%; text-align: center; font-size: 0.85em; color: #555;">
  <div style="flex: 1;">Scene</div>
  <div style="flex: 1;">Avatar</div>
  <div style="flex: 1;">GenHSI</div>
  <div style="flex: 1;">Kling</div>
</div>

---

# 3D HSI Results
{% include full_image.html path="/assets/images/projects/genhsi/comparison_3D.png" alt="[Results Figure 1]" %}

---
# Citations
```
@inproceedings{li2025genhsi,
    title={GenHSI: Controllable Generation of Human-Scene Interaction Videos}, 
    author={Li, Zekun and Zhou, Rui and Sajnani, Rahul and Cong, Xiaoyan and Ritchie, Daniel and Sridhar, Srinath},
    booktitle={The IEEE/CVF Winter Conference on Applications of Computer Vision 2026},
    year={2026}
}

```

# Acknowledgements
This work was supported by Meta, and an AWS Cloud Credits award.

# Contact
Zekun Li ([contact email](mailto:zekun_li1@brown.edu))
