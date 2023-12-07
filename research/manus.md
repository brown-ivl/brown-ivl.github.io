---
layout: project
title: "MANUS: Markerless Hand-Object Grasp Capture using Articulated 3D Gaussians"
authors:
  - author:
      name: "Chandradeep Pokhariya"
      affiliation: 1
      link:
  - author:
      name: "Ishaan N Shah"
      affiliation: 1*
      link:
  - author:
      name: "Angela Xing"
      affiliation: 2*
      link:
  - author:
      name: "Zekun Li" 
      affiliation: 2
      link:
  - author:
      name: "Kefan Chen"
      affiliation: 2
      link:
  - author:
      name: "Avinash Sharma"
      affiliation: 1
      link:
  - author:
      name: "Srinath Sridhar"
      affiliation: 2
      link:
affiliations:
  - "<sup>1</sup>[CVIT, IIIT Hyderabad]"
  - "<sup>2</sup>[Brown University]"
  - "*[Equal Contributions]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/pdf/2312.02137.pdf" %}

## Abstract

{% include full_image.html path="/assets/images/projects/manus/teaser.png" alt="[Teaser Figure]" %}

Understanding how we grasp objects with our hands has important applications in areas like robotics and mixed reality.
However, this challenging problem requires accurate modeling of the contact between hands and objects.
To capture grasps, existing methods use skeletons, meshes, or parametric models that can cause misalignments resulting in inaccurate contacts.
We present **MANUS**, a method for Markerless Hand-Object Grasp Capture using Articulated 3D Gaussians. 
We build a novel articulated 3D Gaussians representation that extends 3D Gaussian splatting for high-fidelity representation of articulating hands.
Since our representation uses Gaussian primitives, it enables us to efficiently and accurately estimate contacts between the hand and the object.
For the most accurate results, our method requires tens of camera views that current datasets do not provide.
We therefore build **MANUS Grasps** dataset, a new dataset that contains hand-object grasps viewed from 53 cameras across 30+ scenes, 3 subjects, and comprising over 7M frames.
In addition to extensive qualitative results, we also show that our method outperforms others on a quantitative contact evaluation method that uses paint transfer from the object to the hand.

## Method Overview

{% include full_image.html path="/assets/images/projects/manus/methodHand.png" alt="[MANUS Hand]" %}

{% include full_image.html path="/assets/images/projects/manus/methodManus.png" alt="[MANUS]" %}

## Qualitative Results

{% include video.html path="/assets/images/projects/manus/handResults.mp4" alt="[Hand Results]" %}

{% include video.html path="/assets/images/projects/manus/contactResults.mp4" alt="[Contact Results]" %}

## Qualitative Comparison

{% include full_image.html path="/assets/images/projects/manus/comparison.png" alt="[Comparison]" %}



## Citations
```
@misc{pokhariya2023manus,
      title={MANUS: Markerless Hand-Object Grasp Capture using Articulated 3D Gaussians}, 
      author={Chandradeep Pokhariya and Ishaan N Shah and Angela Xing and Zekun Li and Kefan Chen and Avinash Sharma and Srinath Sridhar},
      year={2023},
      eprint={2312.02137},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
}
```

## Acknowledgements
This work was supported by NSF CAREER grant #2143576, a gift from Meta Reality Labs, NSF CloudBank, and an AWS Cloud Credits award. We also thank Dingxi Zhang for helping us in hand pose estimation pipeline. 

## Contact

Chandradeep Pokhariya ([contact email](chandradeep.pokhariya@research.iiit.ac.in))
