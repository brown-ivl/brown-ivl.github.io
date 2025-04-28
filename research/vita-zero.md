---
layout: project
title: "ViTa-Zero: Zero-shot Visuotactile Object 6D Pose Estimation"
authors:
  - author:
      name: "Hongyu Li"
      affiliation: "1,2"
      link: https://lhy.xyz/
  - author:
      name: "James Akl"
      affiliation: 1
      link: https://jamesakl.com/
  - author:
      name: "Srinath Sridhar"
      affiliation: "1,2"
      link: https://cs.brown.edu/people/ssrinath/
  - author:
      name: "Tye Brady" 
      affiliation: 2
      link: http://tyebrady.com/
  - author:
      name: "Taskin Padir"
      affiliation: "1,3"
      link: https://coe.northeastern.edu/people/padir-taskin/
affiliations:
  - "<sup>1</sup>[Amazon Fulfillment Technologies & Robotics]"
  - "<sup>2</sup>[Brown University]"
  - "<sup>3</sup>[Northeastern University]"
journal: "ICRA 2025"
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2504.13179" %}

---
# Abstract
Object 6D pose estimation is a critical challenge in robotics, particularly for manipulation tasks. While prior research combining visual and tactile (visuotactile) information has shown promise, these approaches often struggle with generalization due to the **limited availability of visuotactile data**. In this paper, we introduce ViTa-Zero, a **zero-shot** visuotactile pose estimation framework. Our key innovation lies in leveraging a visual model as its backbone and performing feasibility checking and test-time optimization based on physical constraints derived from tactile and proprioceptive observations. Specifically, we model the gripper-object interaction as a spring–mass system, where tactile sensors induce attractive forces, and proprioception generates repulsive forces. We validate our framework through experiments on a real-world robot setup, demonstrating its **effectiveness across representative visual backbones** and manipulation scenarios, including grasping, object picking, and bimanual handover. Compared to the visual models, our approach overcomes some drastic failure modes while tracking the in-hand object pose. In our experiments, our approach shows an average increase of 55% in AUC of ADD-S and 60% in ADD, along with an 80% lower position error compared to FoundationPose.

---
# Methodology
{% include full_image.html path="/assets/images/projects/vita-zero/method.png" alt="[Method Figure]" %}

Our framework consists of three modules: visual estimation, feasibility checking, and tactile refinement. 
1. Initially, a visual model estimates the pose. 
2. Then, we assess the feasibility of the pose using constraints derived from the tactile signals and proprioception. 
3. If the pose does not meet these constraints, we refine it through our test-time optimization algorithm using tactile and proprioceptive observations, yielding the final pose estimate.

---
# Supplementary Video

{% include video.html path="/assets/images/projects/vita-zero/supp.mp4" alt="[Method Figure]" %}

---
# Citations
```
@inproceedings{li2025vitazero,
  title={ViTa-Zero: Zero-shot Visuotactile Object 6D Pose Estimation},
  author={Li, Hongyu and Akl, James and Sridhar, Srinath and Brady, Tye and Padir, Taskin},
  booktitle={IEEE International Conference on Robotics and Automation (ICRA)},
  year={2025},
}

```

# Acknowledgements
The work was done when Hongyu Li was an intern at Amazon.
Taskin Padir holds concurrent appointments as a Professor of Electrical and Computer Engineering at Northeastern University and as an Amazon Scholar. This paper describes work performed at Amazon and is not associated with Northeastern University.

# Contact
Hongyu Li ([contact email](mailto:hli230@cs.brown.edu))
