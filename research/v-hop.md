---
layout: project
title: "V-HOP: Visuo-Haptic 6D Object Pose Tracking"
authors:
  - author:
      name: "Hongyu Li"
      affiliation: 1
      link: https://lhy.xyz/
  - author:
      name: "Mingxi Jia"
      affiliation: 1
      link: https://saulbatman.github.io/
  - author:
      name: "Tuluhan Akbulut"
      affiliation: 1
      link: https://scholar.google.com/citations?user=Zddf-sEAAAAJ&hl=en
  - author:
      name: "Yu Xiang" 
      affiliation: 2
      link: https://yuxng.github.io/
  - author:
      name: "George Konidaris"
      affiliation: 1
      link: https://cs.brown.edu/people/gdk/
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: https://cs.brown.edu/people/ssrinath/
affiliations:
  - "<sup>1</sup>[Brown University]"
  - "<sup>2</sup>[The University of Texas at Dallas]"
journal: "RSS 2025"
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://www.arxiv.org/abs/2502.17434" codecoming="#" %}

{% include full_image.html path="/assets/images/projects/v-hop/v-hop-teaser.png" alt="[Teaser Figure]" %}

---
# Abstract
Humans naturally **integrate vision and haptics** for robust object perception during manipulation. The loss of either modality significantly degrades performance. Inspired by this multisensory integration, prior object pose estimation research has attempted to combine visual and haptic/tactile feedback. Although these works demonstrate improvements in controlled environments or synthetic datasets, they often underperform vision-only approaches in real-world settings due to poor generalization across diverse grippers, sensor layouts, or sim-to-real environments. Furthermore, they typically estimate the object pose for each frame independently, resulting in less coherent tracking over sequences in real-world deployments. To address these limitations, we introduce a novel unified haptic representation that effectively **handles multiple gripper embodiments**. Building on this representation, we introduce a new visuo-haptic transformer-based object pose tracker that seamlessly integrates visual and haptic input. We validate our framework in our dataset and the Feelsight dataset, demonstrating significant performance improvement on challenging sequences. Notably, our method achieves superior generalization and robustness across novel embodiments, objects, and sensor types (**both taxel-based and vision-based tactile sensors**). In real-world experiments, we demonstrate that our approach outperforms state-of-the-art visual trackers by a large margin. We further show that we can achieve precise manipulation tasks by incorporating our real-time object tracking result into motion plans, underscoring the advantages of visuo-haptic perception.

---
# Methodology
{% include full_image.html path="/assets/images/projects/v-hop/overview.png" alt="[Method Figure]" %}

The visual modality, based on FoundationPose, uses a visual encoder to process RGB-D observations (real and rendered) into feature maps, which are concatenated and refined through a ResBlock to produce visual embeddings. The haptic modality encodes a unified hand-object point cloud, derived from 9D hand and object point clouds, into a haptic embedding that captures hand-object interactions. These visual and haptic embeddings are processed by Transformer encoders to estimate 3D translation and rotation.

---
# Tracking results

## Power Drill
{% include video.html path="/assets/images/projects/v-hop/tracking-videos/drill.mp4" alt="[Dataset]" %}

## Sugar Box
{% include video.html path="/assets/images/projects/v-hop/tracking-videos/sugarbox.mp4" alt="[Dataset]" %}

## Tomato Can
{% include video.html path="/assets/images/projects/v-hop/tracking-videos/tomato.mp4" alt="[Dataset]" %}

## Mug
{% include video.html path="/assets/images/projects/v-hop/tracking-videos/mug.mp4" alt="[Dataset]" %}

---

# Supplementary Video
<div class="center">
<iframe width="946" height="532" src="https://www.youtube.com/embed/Q-NWmvfo-Tc?si=7CPX6XoDZUQKCzhR"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
</div>

---
# Citations
```
@inproceedings{li2025vhop,
    title={V-HOP: Visuo-Haptic 6D Object Pose Tracking}, 
    author={Hongyu Li and Mingxi Jia and Tuluhan Akbulut and Yu Xiang and George Konidaris and Srinath Sridhar},
    booktitle={Proceedings of Robotics: Science and Systems},
    year={2025}
}

```

# Acknowledgements
This work is supported by the National Science Foundation (NSF) under CAREER grant #2143576, grant #2346528, and the Office of Naval Research (ONR) grant #N00014-22-1-259.
We thank Ying Wang, Tao Lu, Zekun Li, and Xiaoyan Cong for their valuable discussions. We thank the area chair and the reviewers for providing constructive feedback on improving the quality and clarity of our paper. 
This research was conducted using computational resources and services at the Center for Computation and Visualization, Brown University.

# Contact
Hongyu Li ([contact email](hli230@cs.brown.edu))
