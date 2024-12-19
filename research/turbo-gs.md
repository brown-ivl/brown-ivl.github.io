---
layout: project
title: "Turbo-GS: Accelerating 3D Gaussian Fitting for High-Quality Radiance Fields"
authors:
  - author:
      name: "Tao Lu"
      affiliation: 1*
      link: 
  - author:
      name: "Ankit Dhiman"
      affiliation: 2*
      link: 
  - author:
      name: "Srinath R"
      affiliation: 2*
      link: 
  - author:
      name: "Emre Arslan"
      affiliation: 1
      link: 
  - author:
      name: "Angela Xing"
      affiliation: 1
      link: 
  - author:
      name: "Yuanbo Xiangli"
      affiliation: 3
      link: 
  - author:
      name: "Venkatesh Babu Radhakrishnan"
      affiliation: 2
      link: 
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: 
affiliations:
  - "<sup>1</sup>[Brown University]"
  - "<sup>2</sup>[Indian Institute of Science, Bangalore]"
  - "<sup>3</sup>[Cornell University]"
  - "*[Equal Contributions]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2412.13547" code="https://github.com/inspirelt/Turbo-GS"%}

{% include video.html path="/assets/images/projects/turbo-gs/main_long.mp4" alt="[Video Teaser]" %}

**TL;DR** We introduce Turbo-GS, which employs frequent and effective densification, better initialization, and batched training to achieve higher quality results with fewer iterations.

# Abstract

Novel-view synthesis is an important problem in computer vision with applications in 3D reconstruction, mixed reality, and robotics. Recent methods like 3D Gaussian Splatting (3DGS) have become the preferred method for this task, providing high-quality novel views in real time. However, the training time of a 3DGS model is slow, often taking 30 minutes for a scene with 200 views. In contrast, we aim to reduce optimization time by training for fewer steps while maintaining high rendering quality. Specifically, we combine the guidance from both postion and appearance error to achieve a more effective densification. To balance the rate between adding new Gaussians and fitting old Gaussians, we develop a convergence-aware budget control mechanism. Moreover, to make the densification process more reliable, we selectively add new Gaussians from mostly visited regions. With these designs, we reduce the Gaussian optimization steps to one-third of the previous approach while achieve comparable or even better novel view rendering quality. To further facilitate the rapid fitting of 4K resolution images, we introduce a dilation-based rendering technique. Our method, **Turbo-GS**, speeds up optimization for typical scenes and scales well to high-resolution (4K) scenarios on standard datasets. Through extensive experiments, we show that our method is significantly faster in optimization than other methods while retaining quality.

{% include full_image.html path="/assets/images/projects/turbo-gs/teaser-figure.png" alt="[Teaser Figure]" %}

# Method

Our method fits 3DGS **several times faster** than current state of the art methods while **matching or surpassing** visual quality on high resolution (4k) scenes. Our method performs well on challenging scenes, especially in **high-frequency** and **texture-less** areas. 

**Effective and Frequent Densification.** We first improve the densification criteria by employing a ***position-appearance based strategy***. The position and appearance gradients are thresholded to determine which areas need densification. New anchors are then added in accordance with multi-resolution voxels. Additionaly, we develop a ***convergence-aware training schedule*** based on a power-law dominated system. We check whether newly added Gaussian points have caused the convergence process to deviate from the power law to balance the growing speed of new Gaussians and opimization of old Gaussians. Finally, we employ ***selective densification*** where frequently visited Gaussians are eligible to spawn new Gaussians based on an adaptive threshold.

**Initialization.** We employ a KD-tree based densification strategy to address the sparsity of the initial SfM point cloud. Creating a denser initialization creates a more robust foundation for training.

**Batching.** In the final stage, we accumulate gradients across multiple iterations before updating parameters to create a more stable optimization process and improve performance. 

**High Resolution Images.** For high resolution images, we introduct a ***dilated rendering pipeline***. We render a selective subset of pixels in a chessboard pattern to reduce the computation burdden for differentiable training.

# Results
{% include video.html path="/assets/images/projects/turbo-gs/turbo_flowers.mp4" alt="[Flower Results]" %}
{% include video.html path="/assets/images/projects/turbo-gs/turbo_stump.mp4" alt="[Stump Results]" %}

## Comparisons
{% include video.html path="/assets/images/projects/turbo-gs/bicycle_comp.mp4" alt="[Bicycle Comparison Results]" %}
{% include video.html path="/assets/images/projects/turbo-gs/garden_comp.mp4" alt="[Garden Comparison Results]" %}

# Citations
    @misc{lu2024turbogs,
          title={Turbo-GS: Accelerating 3D Gaussian Fitting for High-Quality Radiance Fields}, 
          author={Tao Lu and Ankit Dhiman and Srinath R and Emre Arslan and Angela Xing and Yuanbo Xiangli and Venkatesh Babu Radhakrishnan and Srinath Sridhar},
          year={2024},
          archivePrefix={arXiv},
          primaryClass={cs.CV}
    }

# Acknowledgements
This research was supported by NASA grant #80NSSC23M0075, and NSF CAREER grant #2143576. Collaboration between Brown and IISc was facilitated through Kotak Mahindra Bank's Visiting Chair Professorship for Srinath.

# Contact
Tao Lu ([contact email](tao_lu@brown.edu))
