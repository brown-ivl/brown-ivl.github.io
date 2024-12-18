---
layout: project
title: "FoundHand: Large-Scale Domain-Specific Learning for Controllable Hand Image Generation"
authors:
  - author:
      name: "Kefan (Arthur) Chen"
      affiliation: 1,2*
      link: https://arthurchen0518.github.io/
  - author:
      name: "Chaerin Min"
      affiliation: 1*
      link: https://chaerinmin.github.io/
  - author:
      name: "Linguang Zhang"
      affiliation: 2
      link: https://lg-zhang.github.io/
  - author:
      name: "Shreyas Hampali"
      affiliation: 2
      link: https://shreyashampali.github.io/
  - author:
      name: "Cem Keskin"
      affiliation: 2
      link: https://scholar.google.co.uk/citations?user=9HoiYnYAAAAJ&hl=en
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: https://cs.brown.edu/people/ssrinath/
affiliations:
  - "<sup>1</sup>[Brown University]"
  - "<sup>2</sup>[Meta Reality Labs]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2412.02690" code="" %}
<img src="/assets/images/projects/foundhand/foundhand_teaser.png" alt="Method Teaser" width="100%"/>

We present **FoundHand**, a domain-specific image generation model that can synthesize realistic single and dual hand images.

# Overview
FoundHand is trained on our large-scale FoundHand-10M dataset which contains automatically extracted 2D keypoints and segmentation mask annotations (top left). FoundHand is formulated as a 2D pose-conditioned image-to-image diffusion model that enables precise hand pose and camera viewpoint control (top right). Optionally, we can condition the generation with a reference image to preserve its style (top right). Our model demonstrates exceptional in-the-wild generalization across hand-centric applications and has <span style="color:violet">core capabilities</span>. such
as gesture transfer, domain transfer, and novel view synthesis (middle row). This endows FoundHand with <span style="color:orange">zero-shot applications</span> to fix malformed hand images and synthesize coherent hand and hand-object videos, without explicitly giving object cues (bottom row).


# Methods

<img src="/assets/images/projects/foundhand/foundhand_method.png" alt="Method Figure" width="100%"/>

(Left) During training, we randomly sample two frames from a video sequence or two different views of a frame as the reference and target frame and encode them using a pretrained VAE as the latent diffusion model. We concatenate the encoded image features z with keypoint heatmaps H and hand mask M and encode them with a shared-weight embedder to acquire spatially-aligned feature patches
before feeding to transformer with 3D self-attention. The target hand mask is set to ∅ since it is not required at test time. y indicates if the two frames are from the synchronized views.

# Results

We test the generalization capability of our mdel across various 2D and 3D applications on in-the-wild web-sourced data. For more results and comparisons showing that our general model outperforms task-specific state-of-the-arts, please see our paper.

## Core Capability 1: Gesture Transfer

Given reference images, our model transforms hands to target poses while faithfully preserving appearance details such as fingernails and textures.

{% include video.html path="/assets/images/projects/foundhand/videos/gesture_transfer.mp4" alt="[Gesture Transfer]" %}


## Core Capability 2: Domain Transfer

Given a synthetic hand dataset, FoundHand can transform it to the in-the-wild domain with realistic appearance and background, improving existing 3D hand estimation after finetun-
ing on our generated data.

{% include video.html path="/assets/images/projects/foundhand/videos/doamin_transfer.mp4" alt="[Domain Transfer]" %}

## Core Capability 3: Novel View Synthesis

From a single input image, FoundHand generates diverse viewpoints, demonstrating robust generalization to unseen hands and camera poses.

{% include video.html path="/assets/images/projects/foundhand/videos/nvs.mp4" alt="[NVS]" %}

## Zero-Shot Application 1: Hand Fixer

FoundHand develops zero-shot ability to fix AI-gerenated malformed hands. It works with reliable preservation of the hand appearance and hand-object interaction.

{% include video.html path="/assets/images/projects/foundhand/videos/fixing_hand.mp4" alt="[Hand Fixing]" %}


## Zero-Shot Application 2: Video Synthesis

FoundHand can generate hand videos and achieves natural and anatomically plausible hand motions, without explicit video training.

{% include video.html path="/assets/images/projects/foundhand/videos/video_synthesis.mp4" alt="[Video Synthesis]" %}

## Citations
    @article{chen2024foundhand,
            title={FoundHand: Large-Scale Domain-Specific Learning for Controllable Hand Image Generation},
            author={Chen, Kefan and Min, Chaerin and Zhang, Linguang and Hampali, Shreyas and Keskin, Cem and Sridhar, Srinath},
            journal={arXiv preprint arXiv:2412.02690},
            year={2024}
    }

## Acknowledgements
Part of this work was done during Kefan (Arthur) Chen’s internship at Meta Reality Lab. This work was additionally supported
by NSF CAREER grant #2143576, NASA grant
#80NSSC23M0075, and an Amazon Cloud Credits Award.
