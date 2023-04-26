---
layout: project
title: "LEGO-Net: Learning Regular Rearrangements of Objects in Rooms"
authors:
  - author:
      - name: "Qiuhong Anna Wei"
      - affiliation: 1
      - link: "https://qiuhongannawei.me/"
  - author:
      - name: "Sijie Ding"
      - affiliation: 1
      - link: "https://sjdingcn.github.io"
  - author:
      - name: "Jeong Joon Park"
      - affiliation: 2
      - link: "https://jjparkcv.github.io/"
  - author:
      - name: "Rahul Sajnani"
      - affiliation: 1
      - link: "https://scholar.google.com/citations?user=HAtfBjoAAAAJ&hl=en&oi=ao"
  - author:
      - name: "Adrien Poulenard"
      - affiliation: 2
      - link:
  - author:
      - name: "Srinath Sridhar"
      - affiliation: 1
      - link: "https://cs.brown.edu/people/ssrinath/"
  - author:
      - name: "Leonidas Guibas"
      - affiliation: 2
      - link: "https://geometry.stanford.edu/member/guibas/"
affiliations:
  - 1: "Brown University"
  - 2: "Stanford University"
journal: CVPR 2023
---

{% include full_image.html path="/assets/images/projects/lego-net/teaser.png" alt="Lego-Net Teaser" %}

## Overview

Humans universally dislike the task of cleaning up a messy room. If machines were to help us with this task, they must understand human criteria for regular arrangements, such as several types of symmetry, co-linearity or co-circularity, spacing uniformity in linear or circular patterns, and further inter-object relationships that relate to style and functionality. Previous approaches for this task relied on human input to explicitly specify goal state, or synthesized scenes from scratch – but such methods do not address the rearrangement of existing messy scenes without providing a goal state. In this paper, we present LEGO-Net, a data-driven transformer-based iterative method for LEarning reGular rearrangement of Objects in messy rooms. LEGO-Net is partly inspired by diffusion models--it starts with an initial messy state and iteratively “denoises” the position and orientation of objects to a regular state while reducing distance traveled. Given randomly perturbed object positions and orientations in an existing dataset of professionally-arranged scenes, our method is trained to recover a regular re-arrangement. Results demonstrate that our method is able to reliably rearrange room scenes and outperform other methods. We additionally propose a metric for evaluating regularity in room arrangements using number-theoretic machinery.

## Method Overview

LEGO-Net takes an input messy scene and attempts to clean the scene via iterative denoising. Given the current scene state, it computes the denoising gradient towards the clean manifold, and makes changes to the scene accordingly. This denoising step is taken repeatedly until the scene is "regular". On the right, we show our backbone transformer block f_theta that computes the denoising gradient at each step. This transformer takes the scene attributes of the current state and outputs 2D transformations of each object that would make the scene "cleaner".

{% include full_image.html path="/assets/images/projects/lego-net/pipeline_overview.png" alt="Pipeline Overview" %}

## Results - Iterative Denoising Without Noise

Videos may appear smaller when viewed on Firefox, it is optimized for Edge and Chrome. Double click on the videos (2nd col.) to view full-screen.

## Results - Iterative Denoising With Noise

Videos may appear smaller when viewed on Firefox, it is optimized for Edge and Chrome. Double click on the videos (2nd col.) to view full-screen.

## Acknowledgements

This work was supported by AFOSR grant FA9550-21-1-0214, NSF CloudBank, an AWS Cloud Credits award, ARL grant W911NF-21-2-0104, a Vannevar Bush Faculty Fellowship, and a gift from the Adobe Corporation. We thank Kai Wang, Daniel Ritchie, Rao Fu, and Selene Lee.

## Contact

Qiuhong Anna Wei [qiuhong_wei@brown.edu](qiuhong_wei@brown.edu)

JJ (Jeong Joon) Park [jjparkcv@gmail.com](jjparkcv@gmail.com)
