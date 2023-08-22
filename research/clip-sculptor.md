---
layout: project
title: "CLIP-Sculptor: Zero-Shot Generation of High-Fidelity and Diverse Shapes from Natural Language"
authors:
  - author:
      name: "Aditya Sanghi"
      affiliation: 1
      link: "https://www.autodesk.com/research/people/aditya-sanghi"
  - author:
      name: "Rao Fu"
      affiliation: 2
      link: "https://freddierao.github.io/"
  - author:
      name: "Vivian Liu"
      affiliation: 3
      link: "https://vivian-liu.com/"
  - author:
      name: "Karl Willis"
      affiliation: 1
      link: "https://www.karlddwillis.com/"
  - author:
      name: "Hooman Shayani"
      affiliation: 1
      link: "https://www.autodesk.com/research/people/hooman-shayani"
  - author:
      name: "Amir H. Khasahmad"
      affiliation: 1
      link: "https://www.autodesk.com/research/people/amir-hosein-khasahmadi"
  - author:
      name: "Srinath Sridhar"
      affiliation: 2
      link: "https://cs.brown.edu/people/ssrinath/"
  - author:
      name: "Daniel Ritchie"
      affiliation: 2
      link: ""
affiliations:
  - "<sup>1</sup> Autodesk AI Research"
  - "<sup>2</sup> Brown University"
  - "<sup>3</sup> Columbia University"
journal: CVPR 2023
redirect_from: 
  - /projects/clip-sculptor
  - /projects/clip-sculptor/
---

{% include icons.html paper="https://arxiv.org/pdf/2211.01427.pdf" %}

## Overview

{% include full_image.html path="/assets/images/projects/clip-sculptor/teaser_new.png" alt="CLIP-Sculptor teaser" %}

Recent works have demonstrated that natural language can be used to generate and edit 3D shapes. However, these methods generate shapes with limited fidelity and diversity. We introduce CLIP-Sculptor, a method to address these constraints by producing high-fidelity and diverse 3D shapes without the need for (text, shape) pairs during training. CLIP-Sculptor achieves this in a multi-resolution approach that first generates in a low-dimensional latent space and then upscales to a higher resolution for improved shape fidelity. For improved shape diversity, we use a discrete latent space which is modeled using a transformer conditioned on CLIP’s image-text embedding space. We also present a novel variant of classifier-free guidance, which improves the accuracy-diversity trade-off. Finally, we perform extensive experiments demonstrating that CLIP-Sculptor outperforms state-of-the-art baselines.

## Method Overview

The CLIP-Sculptor architecture during training (top) and inference (bottom). CLIP-Sculptor is trained in three stages. In Stage 1, we train two separate VQ-VAE models for low and high resolution voxel grids. In Stage 2 we train a coarse transformer conditioned on a CLIP embedding to generate low resolution VQ-VAE latent grids. In Stage 3, we train a fine transformer to perform super resolutionon these latent grids. During inference, a text prompt is passed through the CLIP text encoder and used to condition the coarse transformer to generate a coarse latent grid. This coarse grid is then used to condition the fine transformer to generate a fine latent grid. Finally, this fine latent grid is then passed through the Training Stage 1 high resolution VQ-VAE decoder to generate the output shape.".

{% include full_image.html path="/assets/images/projects/clip-sculptor/method_diagram.jpg" alt="CLIP-Sculptor Method Diagram" %}

## Results on ShapeNetCore (13 Categories)

Multiple generated 3D shapes by CLIP-Sculptor with different text input. The text inputs are (sub-)category names of ShapeNet13, and phases with semantic attributes.

<div class="center">
    <h4>"an airplane"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a airplane_combined.gif" alt="Airplane" %}

<div class="center">
    <h4>"a ak-47"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a ak-47_combined.gif" alt="ak-47" %}

<div class="center">
    <h4>"a delta wing"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a delta wing_combined.gif" alt="delta-wing" %}

<div class="center">
    <h4>"an jet"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a jet_combined.gif" alt="Jet" %}

<div class="center">
    <h4>"a machine gun"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a machine gun_combined.gif" alt="machine gun" %}

<div class="center">
    <h4>"a office chair"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a office chair_combined.gif" alt="office chair" %}

<div class="center">
    <h4>"a round shaped lamp"</h4>
</div>
{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a round shaped lamp_combined.gif" alt="round shaped lamp" %}

<div class="center">
    <h4>"a round table"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a round table_combined.gif" alt="round table" %}

<div class="center">
    <h4>"an egg chair"</h4>
</div>
{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/an egg chair_combined.gif" alt="egg chair" %}

## Results on ShapeNetCore (55 Categories)

<div class="center">
    <h4>"a truck"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a truck_combined.gif" alt="truck" %}

<div class="center">
    <h4>"a bathtub"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a bathtub_combined.gif" alt="bathtub" %}

<div class="center">
    <h4>"a bowl"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a bowl_combined.gif" alt="bowl" %}

<div class="center">
    <h4>"a formula one car"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a formula one car_combined.gif" alt="formula one car" %}

<div class="center">
    <h4>"a motor bike"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a motor bike_combined.gif" alt="motor bike" %}

<div class="center">
    <h4>"a round guitar"</h4>
</div>

{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a round guitar_combined.gif" alt="round guitar" %}

<div class="center">
    <h4>"a round jar"</h4>
</div>
{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a round jar_combined.gif" alt="round jar" %}

<div class="center">
    <h4>"a trash can"</h4>
</div>
{% include full_image.html path="/assets/images/projects/clip-sculptor/combined-gifs/a trash can_combined.gif" alt="trash can" %}

## Citation

    @InProceedings{sanghi2023clipsculptor,
    title={CLIP-Sculptor: Zero-Shot Generation of High-Fidelity and Diverse Shapes from Natural Language},
    author={Sanghi, Aditya and Fu, Rao and Liu, Vivian and Willis, Karl and Shayani, Hooman and Khasahmadi, Amir Hosein and Sridhar, Srinath and Ritchie, Daniel},
    booktitle = {The IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
    year = {2023}}

## Acknowledgements

This work was supported by AFOSR grant FA9550-21-1-0214.

## Contact

Aditya Sanghi ([aditya.sanghi@autodesk.com](aditya.sanghi@autodesk.com))

Rao Fu ([rao_fu@brown.edu](rao_fu@brown.edu))
