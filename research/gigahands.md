---
layout: project
title: "GigaHands: A Massive Annotated Dataset of Bimanual Hand Activities"
authors:
  - author:
      name: "Rao Fu"
      affiliation: 1*
      link: https://freddierao.github.io/
  - author:
      name: "Dingxi Zhang"
      affiliation: 2*
      link: https://kristen-z.github.io/
  - author:
      name: "Alex Jiang"
      affiliation: 1
      link: https://www.alex-jiang.com/about/
  - author:
      name: "Wanjia Fu" 
      affiliation: 1
      link: https://wanjia-fu.com/
  - author:
      name: "Austin Funk"
      affiliation: 1
      link: https://austin-funk.github.io/
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
  - "<sup>2</sup>[ETH Zurich]"
  - "*[Equal Contributions]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/\f" code="https://github.com/brown-ivl/gigahands" dataset="https://github.com/brown-ivl/gigahands" %}


{% include video.html path="/assets/images/projects/gigahands/teaser_video_small.mp4" alt="[Video Teaser]" %}

---
# Abstract
Understanding bimanual human hand activities is a critical problem in AI and robotics. We cannot build large models of bimanual activities because existing datasets lack the scale, coverage of diverse hand activities, and detailed annotations. We introduce GigaHands, a massive annotated dataset capturing 34 hours of bimanual hand activities from 56 subjects and 417 objects, totaling 14k motion clips derived from 183 million frames paired with 84k text annotations. Our markerless capture setup and data acquisition protocol enable fully automatic 3D hand and object estimation while minimizing the effort required for text annotation. The scale and diversity of GigaHands enable broad applications, including text-driven action synthesis, hand motion
captioning, and dynamic radiance field reconstruction.

{% include full_image.html path="/assets/images/projects/gigahands/teaser.jpg" alt="[Teaser Figure]" %}

---
# Dataset Annotations
**To be released soon**

GigaHands is a diverse, massive, and fully-annotated 3D bimanual hand activities dataset. It includes **34hrs** of activities, **14k** hand motions clips paired with **84k** text annotation, and over **183M** unique hand images. All images in our dataset are fully annotated with: detailed activity text descriptions; 3D hand shape and pose; MANO hand meshes; 3D object shape, pose and appearance; hand/object segmentation masks; 2D/3D hand keypoints; camera pose.

{% include video.html path="/assets/images/projects/gigahands/example_video.mp4" alt="[Dataset]" %}

---
# Application: Text-driven Motion Generation
{% include video.html path="/assets/images/projects/gigahands/motion_generation_video.mp4" alt="[Motion Results]" %}

---
# Application: Motion Captioning

<b><u>Within Dataset</u></b>
{% include video.html path="/assets/images/projects/gigahands/motion_caption_video.mp4" alt="[Caption Result]" %}

<b><u>In-the-Wild Dataset</u></b>
{% include video.html path="/assets/images/projects/gigahands/motion_caption_itw_video.mp4" alt="[Caption in-th-wild Result]" %}

---
# Method Overview

{% include full_image.html path="/assets/images/projects/manus/methodHand.png" alt="[MANUS Hand]" %}

{% include full_image.html path="/assets/images/projects/manus/methodManus.png" alt="[MANUS]" %}


# Citations
```
@inproceedings{
  
}
```

# Acknowledgements
This research was supported by AFOSR grant FA9550-21-1-0214, NSF CAREER grant #2143576, and ONR DURIP grant N00014-23-1-2804. We would like to thank the OpenAI Research Access Program for API support and extend our gratitude to Ellie Pavlick, Tianran Zhang, Carmen Yu, Angela Xing, Chandradeep Pokhariya, Sudarshan Harithas, Hongyu Li, Chaerin Min, Xindi Qu, Xiaoquan Liu, Hao Sun, Melvin He and Brandon Woodard. 

# Contact
Rao Fu ([contact email](rao_fu@brown.edu))
