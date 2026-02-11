---
layout: project
title: "DyTact: Capturing Dynamic ConTacts in Hand-Object Manipulation"
authors:
  - author:
      name: "Xiaoyan Cong"
      affiliation: 1
      link: https://oliver-cong02.github.io/
  - author:
      name: "Angela Xing"
      affiliation: 1
      link: https://xing-angela.github.io/
  - author:
      name: "Chandradeep Pokhariya"
      affiliation: 2
      link: https://coreqode.github.io/
  - author:
      name: "Rao Fu" 
      affiliation: 1
      link: https://freddierao.github.io/
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: https://cs.brown.edu/people/ssrinath/
affiliations:
  - "<sup>1</sup>[Brown University]"
  - "<sup>2</sup>[IIT Delhi]"
journal: "3DV 2026 (<span style=\"color:red\">Oral</span>)"
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2506.03103" code="https://github.com/Oliver-Cong02/DyTact"%}

{% include full_image.html path="/assets/images/projects/dytact/teaser.png" alt="[Teaser Figure]" %}

---
# Abstract
Reconstructing dynamic hand-object contacts is essential for realistic manipulation in AI character animation, XR, and robotics, yet it remains challenging due to heavy occlusions, complex surface details, and limitations in existing capture techniques. In this paper, we introduce **DyTact**, a markerless capture method for accurately capturing dynamic contact in hand–object manipulations in a non-intrusive manner. Our approach leverages a dynamic, articulated representation based on 2D Gaussian surfels to model complex manipulations. By binding these surfels to MANO meshes, DyTact harnesses the inductive bias of template models to stabilize and accelerate optimization. A refinement module addresses time-dependent high-frequency deformations, while a contact-guided adaptive sampling strategy selectively increases surfel density in contact regions to handle heavy occlusion. Extensive experiments demonstrate that DyTact not only achieves state-of-the-art dynamic contact estimation accuracy but also significantly improves novel view synthesis quality, all while operating with fast optimization and efficient memory usage.


---
# Methodology
{% include full_image.html path="/assets/images/projects/dytact/pipeline.png" alt="[Method Figure]" %}

DyTact captures dynamic contacts with a markerless system using a surface-aware dynamic articulated Gaussian representation. Given multi-view RGB videos, it initializes Gaussian surfels on the hand by binding them to the tracked MANO mesh locally, which remain rigged throughout optimization. For objects, Gaussians are initialized by placing a coarse point cloud in the global coordinate space. A refinement module addresses time-dependent high-frequency deformations. A contact-guided adaptive sampling strategy selectively refines surfel density in contact regions to handle heavy occlusion, and further optimization of the surfels’ geometry and appearance parameters ensures high-fidelity reconstructions that enable accurate contact estimation.


---

# Supplementary Video
{% include video.html path="/assets/images/projects/dytact/supp_video.mp4" alt="[Supp Video]" %}


---
# Citations
```
@article{cong2025dytact,
  title={DyTact: Capturing Dynamic Contacts in Hand-Object Manipulation},
  author={Cong, Xiaoyan and Xing, Angela and Pokhariya, Chandradeep and Fu, Rao and Sridhar, Srinath},
  journal={arXiv preprint arXiv:2506.03103},
  year={2025}
}

```

# Acknowledgements
This work was supported by NSF CAREER grant #2143576, ONR DURIP grant N00014-23-1-2804, a gift from Meta Reality Labs, and an AWS Cloud Credits award.

# Contact
Xiaoyan Cong ([contact email](mailto:xiaoyan_cong@brown.edu))
