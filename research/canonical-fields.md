---
layout: project
title: "Canonical Fields: Self-Supervised Learning of Pose-Canonicalized Neural Fields"
authors:
  - author:
      name: "Rohith Agaram"
      affiliation: 1
      link: "https://scholar.google.com/citations?user=Ni6qG7wAAAAJ"
  - author:
      name: "Shaurya Dewan"
      affiliation: 1
      link: "https://scholar.google.com/citations?user=1FLYpxAAAAAJ"
  - author:
      name: "Rahul Sajnani"
      affiliation: 2
      link: "https://scholar.google.com/citations?user=HAtfBjoAAAAJ&hl=en&oi=ao"
  - author:
      name: "Adrien Poulenard"
      affiliation: 3
      link: "https://scholar.google.com/citations?hl=en&user=zsGbyGYAAAAJ"
  - author:
      name: "Madhava Krishna"
      affiliation: 1
      link: "https://scholar.google.com/citations?user=QDuPGHwAAAAJ"
  - author:
      name: "Srinath Sridhar"
      affiliation: 2
      link: "https://cs.brown.edu/people/ssrinath/"
affiliations:
  - "<sup>1</sup> RRC, IIIT-Hyderabad"
  - "<sup>2</sup> Brown University"
  - "<sup>3</sup> Stanford University"
journal: CVPR 2023 (Highlight Paper)
redirect_from: /projects/canonicalfields
---

{% include icons.html paper="https://arxiv.org/pdf/2212.02493.pdf" arXiv="https://arxiv.org/abs/2212.02493" code="https://github.com/brown-ivl/Cafi-Net/tree/main" dataset="https://nerf-fields.s3.amazonaws.com/final_fields/final_res_32.zip" %}

## Overview

{% include video.html path="/assets/images/projects/canonical-fields/teaser_grid.mov" %}

Coordinate-based implicit neural networks, or neural fields, have emerged as useful representations of shape and appearance in 3D computer vision. Despite advances, however, it remains challenging to build neural fields for categories of objects without datasets like ShapeNet that provide “canonicalized” object instances that are consistently aligned for their 3D position and orientation (pose). We present Canonical Field Network (<b>CaFi-Net</b>), a self-supervised method to canonicalize the 3D pose of instances from an object category represented as neural fields, specifically neural radiance fields (NeRFs). CaFi-Net directly learns from continuous and noisy radiance fields using a Siamese network architecture that is designed to extract equivariant field features for category-level canonicalization. During inference, our method takes pre-trained neural radiance fields of novel object instances at arbitrary 3D pose and estimates a canonical field with consistent 3D pose across the entire category. Extensive experiments on a new dataset of 1300 NeRF models across 13 object categories show that our method matches or exceeds the performance of 3D point cloud-based methods.

## Method Overview

{% include full_image.html path="/assets/images/projects/canonical-fields/method.jpg" alt="Method" %}

<b>CaFi-Net</b> samples a density field from NeRF and uses its <b>density</b>, <b>position</b> and <b>density gradients</b> as input signals (A) to canonicalize the field. We predict rotation equivariant features and weigh them by density (B) to guide our learning from the occupied regions of the scene. We then compute an invariant embedding by taking a dot product between equivariant features. This invariant embedding is used to canonicalize the field that enables rendering all the objects in the canonical frame (E). Our method also applies an inter-instance consistency loss (D) that aligns different instances of the same category in the canonical frame. <b>We do not assume pre-canonicalized fields, and canonicalize in a self-supervised manner</b>.

## Results

{% include video.html path="/assets/images/projects/canonical-fields/canonical_grid.mov" %}

## Citation

    @InProceedings{agaram2023_cafinet,
    author={Rohith Agaram and Shaurya Dewan and Rahul Sajnani and Adrien Poulenard and Madhava Krishna and Srinath Sridhar},
    title={Canonical Fields: Self-Supervised Learning of Pose-Canonicalized Neural Fields},
    booktitle = {The IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
    month = {June},
    year={2023}}

## Acknowledgements

This work was supported by AFOSR grant FA9550-21-1-0214, NSF grant CNS-2038897, an AWS Cloud Credits award, NSF CloudBank, and a gift from Meta Reality Labs. We thank Chandradeep Pokhariya and Ishaan Shah.

## Contact

Rohith Agaram rohithagaram@gmail.com \
Shaurya Dewan shauryadewanmanu@gmail.com
