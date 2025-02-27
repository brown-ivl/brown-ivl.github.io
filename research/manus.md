---
layout: project
title: "MANUS: Markerless Grasp Capture using Articulated 3D Gaussians"
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

{% include icons.html paper="https://arxiv.org/pdf/2312.02137.pdf" code="https://github.com/brown-ivl/manus" dataset="https://github.com/brown-ivl/manus#manus-grasps-dataset" %}


{% include video.html path="/assets/images/projects/manus/webpage-teaser-second.mp4" alt="[Video Teaser]" %}

---
# Abstract

Understanding how we grasp objects with our hands has important applications in areas like robotics and mixed reality. However, this challenging problem requires accurate modeling of the contact between hands and objects. To capture grasps, existing methods use skeletons, meshes, or parametric models that does not represent hand shape accurately resulting in inaccurate contacts. We present **MANUS**, a method for Markerless Hand-Object Grasp Capture using Articulated 3D Gaussians. We build a novel articulated 3D Gaussians representation that extends 3D Gaussian splatting for high-fidelity representation of articulating hands. Since our representation uses Gaussian primitives optimized from the multi view pixel-aligned losses, it enables us to efficiently and accurately estimate contacts between the hand and the object. For the most accurate results, our method requires tens of camera views that current datasets do not provide. We therefore build **MANUSGrasps**, a new dataset that contains hand-object grasps viewed from 50+ cameras across 30+ scenes, 3 subjects, and comprising over 7M frames. In addition to extensive qualitative results, we also show that our method outperforms others on a quantitative contact evaluation method that uses paint transfer from the object to the hand.

{% include full_image.html path="/assets/images/projects/manus/teaser.png" alt="[Teaser Figure]" %}

---
# MANUS Grasps Dataset
**To be released soon**

MANUS-Grasps is a large multi-view RGB grasp dataset that captures hand-object interactions from 50+ cameras. It contains over 7 million frames and provides full 360-degree coverage of grasps in over 30 diverse everyday scenarios.
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

<b><u>Novel Evaluation Setup</u></b>
{% include video.html path="/assets/images/projects/manus/wetpaint.mp4" alt="[Evaluation Setup]" %}

<b><u>Comparison</u></b>
{% include full_image.html path="/assets/images/projects/manus/comparison.png" alt="[Comparison]" %}

---
# Method Overview

{% include full_image.html path="/assets/images/projects/manus/methodHand.png" alt="[MANUS Hand]" %}

{% include full_image.html path="/assets/images/projects/manus/methodManus.png" alt="[MANUS]" %}


# Citations
```
@inproceedings{pokhariya2024manus,
  title={MANUS: Markerless Grasp Capture using Articulated 3D Gaussians},
  author={Pokhariya, Chandradeep and Shah, Ishaan Nikhil and Xing, Angela and Li, Zekun and Chen, Kefan and Sharma, Avinash and Sridhar, Srinath},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={2197--2208},
  year={2024}
}
```

# Acknowledgements
This work was supported by NSF CAREER grant #2143576, ONR DURIP grant N00014-23-1-2804, ONR grant N00014-22-1-259, a gift from Meta Reality Labs, and an AWS Cloud Credits award. We would like to thank George Konidaris, Stefanie Tellex and Dingxi Zhang. Additionally, we thank Bank of Baroda for partially funding Chandradeep's travel expenses.

# Contact
Chandradeep Pokhariya ([contact email](chandradeep.pokhariya@research.iiit.ac.in))
