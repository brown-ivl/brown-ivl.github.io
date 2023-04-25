---
layout: project
title: "CLIP-Sculptor: Zero-Shot Generation of High-Fidelity and Diverse Shapes from Natural Language"
authors: Aditya Sanghi, Rao Fu, Vivian Liu, Karl Willis, Hooman Shayani, Amir H. Khasahmad, Srinath Sridhar, Daniel Ritchie
journal: CVPR 2023
bibtex: ADD A STRING HERE
---

{% include full_image.html path="/assets/images/projects/clip-sculptor/teaser_new.png" alt="CLIP-Sculptor teaser" %}

## Overview

Recent works have demonstrated that natural language can be used to generate and edit 3D shapes. However, these methods generate shapes with limited fidelity and diversity. We introduce CLIP-Sculptor, a method to address these constraints by producing high-fidelity and diverse 3D shapes without the need for (text, shape) pairs during training. CLIP-Sculptor achieves this in a multi-resolution approach that first generates in a low-dimensional latent space and then upscales to a higher resolution for improved shape fidelity. For improved shape diversity, we use a discrete latent space which is modeled using a transformer conditioned on CLIP’s image-text embedding space. We also present a novel variant of classifier-free guidance, which improves the accuracy-diversity trade-off. Finally, we perform extensive experiments demonstrating that CLIP-Sculptor outperforms state-of-the-art baselines.

[comment]: TODO: link to paper here !!

## Method Overview

The CLIP-Sculptor architecture during training (top) and inference (bottom). CLIP-Sculptor is trained in three stages. In Stage 1, we train two separate VQ-VAE models for low and high resolution voxel grids. In Stage 2 we train a coarse transformer conditioned on a CLIP embedding to generate low resolution VQ-VAE latent grids. In Stage 3, we train a fine transformer to perform super resolutionon these latent grids. During inference, a text prompt is passed through the CLIP text encoder and used to condition the coarse transformer to generate a coarse latent grid. This coarse grid is then used to condition the fine transformer to generate a fine latent grid. Finally, this fine latent grid is then passed through the Training Stage 1 high resolution VQ-VAE decoder to generate the output shape.".

[comment]: TODO: add image here

## Results on ShapeNetCore (13 Categories)

Multiple generated 3D shapes by CLIP-Sculptor with different text input. The text inputs are (sub-)category names of ShapeNet13, and phases with semantic attributes.

[comment]: TODO: add images here

## Results on ShapeNetCore (55 Categories)

[comment]: TODO: add images here

## Citation

## Contact
