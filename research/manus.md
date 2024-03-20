---
layout: project
title: "MANUS: Markerless Hand-Object Grasp Capture using Articulated 3D Gaussians"
authors:
  - author:
      name: "Chandradeep Pokhariya"
      affiliation: 1
      link:
  - author:
      name: "Ishaan Nikhil Shah"
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

{% include video.html path="/assets/images/projects/manus/webpage-teaser.mp4" alt="[Video Teaser]" %}

---
# Abstract

Understanding how we grasp objects with our hands has important applications in areas like robotics and mixed reality.
However, this challenging problem requires accurate modeling of the contact between hands and objects.
To capture grasps, existing methods use skeletons, meshes, or parametric models that can cause misalignments resulting in inaccurate contacts.
We present **MANUS**, a method for Markerless Hand-Object Grasp Capture using Articulated 3D Gaussians. 
We build a novel articulated 3D Gaussians representation that extends 3D Gaussian splatting for high-fidelity representation of articulating hands.
Since our representation uses Gaussian primitives, it enables us to efficiently and accurately estimate contacts between the hand and the object.
For the most accurate results, our method requires tens of camera views that current datasets do not provide.
We therefore build **MANUS Grasps** dataset, a new dataset that contains hand-object grasps viewed from 53 cameras across 30+ scenes, 3 subjects, and comprising over 7M frames.
In addition to extensive qualitative results, we also show that our method outperforms others on a quantitative contact evaluation method that uses paint transfer from the object to the hand.

{% include full_image.html path="/assets/images/projects/manus/teaser.png" alt="[Teaser Figure]" %}

---
# Method Overview

{% include full_image.html path="/assets/images/projects/manus/methodHand.png" alt="[MANUS Hand]" %}

{% include full_image.html path="/assets/images/projects/manus/methodManus.png" alt="[MANUS]" %}

---
# MANUS Grasps Dataset
**To be released soon**

MANUS-Grasps is a large multi-view RGB grasp dataset that captures hand-object interactions from 53 cameras. It contains over 7 million frames and provides full 360-degree coverage of 400+ grasps in over 30 diverse everyday scenarios.
A unique feature of the dataset is 15 evaluation sequences of the capture of ground truth contact through the use of wet paint on the object. The paint transfers to the hand during grasping, providing visual evidence of the contact area.
The dataset also includes 2D and 3D hand joint locations along with hand and object segmentation masks.

{% include video.html path="/assets/images/projects/manus/webpage-dataset.mp4" alt="[Dataset]" %}

---
# Qualitative Results
<b><u>MANUS-Hand Results</u></b>
{% include video.html path="/assets/images/projects/manus/handResults.mp4" alt="[Hand Results]" %}

<b><u>MANUS-Grasp Capture Results</u></b>
{% include video.html path="/assets/images/projects/manus/graspResults.mp4" alt="[Grasp Results]" %}

---
# Qualitative Comparison

<!-- <center> -->
<!-- <video width="800px" height="400px" controls>  -->
<!--     <source src="/assets/images/projects/manus/wetPaint.mp4" type="video/mp4"> -->
<!-- </video> -->
<!-- </center> -->

<b><u>Novel Evaluation Setup</u></b>
{% include video.html path="/assets/images/projects/manus/wetPaint.mp4" alt="[Evaluation]" %}

<b><u>Comparison</u></b>
{% include full_image.html path="/assets/images/projects/manus/comparison.png" alt="[Comparison]" %}

# Citations
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

# Acknowledgements
This work was supported by NSF CAREER grant #2143576, ONR DURIP grant N00014-23-1-2804, ONR grant N00014-22-1-259, a gift from Meta Reality Labs, and an AWS Cloud Credits award. We would like to thank George Konidaris, Stefanie Tellex and Dingxi Zhang. 

# Contact
Chandradeep Pokhariya ([contact email](chandradeep.pokhariya@research.iiit.ac.in))
