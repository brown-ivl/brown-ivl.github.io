---
layout: project
title: "ShapeCrafter: A Recursive Text-Conditioned 3D Shape Generation Model"
authors:
  - author:
      name: "Rao Fu"
      affiliation: 1
      link:
  - author:
      name: "Xiao Zhan"
      affiliation: 1
      link:
  - author:
      name: "Yiwen Chen"
      affiliation: 1
      link:
  - author:
      name: "Daniel Ritchie"
      affiliation: 1
      link:
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link:
affiliations:
  - "<sup>1</sup> Brown University"
journal: NeurIPS 2022
redirect_from:
  - /projects/shapecrafter
  - /projects/shapecrafter/
---

{% include icons.html paper="https://arxiv.org/pdf/2207.09446.pdf" code="https://github.com/FreddieRao/ShapeCrafter.git" supplementary="https://arxiv.org/pdf/2207.09446.pdf" dataset="https://github.com/FreddieRao/ShapeCrafter.git" %}

## Overview

<div class="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HhYN8Y6etkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Results

{% include full_image.html path="/assets/images/projects/shapecrafter/chair.gif" alt="Chair" %}

{% include full_image.html path="/assets/images/projects/shapecrafter/table.gif" alt="Table" %}

## Abstract

We present ShapeCrafter, a neural network for recursive text-conditioned 3D shape generation. Existing methods to generate text-conditioned 3D shapes consume an entire text prompt to generate a 3D shape in a single step. However, humans tend to describe shapes recursively-we may start with an initial description and progressively add details based on intermediate results. To capture this recursive process, we introduce a method to generate a 3D shape distribution, conditioned on an initial phrase, that gradually evolves as more phrases are added. Since existing datasets are insufficient for training this approach, we present Text2Shape++, a large dataset of 369K shape-text pairs that supports recursive shape generation. To capture local details that are often used to refine shape descriptions, we build on top of vector-quantized deep implicit functions that generate a distribution of high-quality shapes. Results show that our method can generate shapes consistent with text descriptions, and shapes evolve gradually as more phrases are added. Our method supports shape editing, extrapolation, and can enable new applications in human-machine collaboration for creative design.

## Recursive Text-Conditioned 3D Shape Generation

Recursive generation starts with an initial description of an object, and progressively adds phrases to better describe it or modify it. The shapes can be generated from scratch as well as edited using text input.

{% include full_image.html path="/assets/images/projects/shapecrafter/teaser.gif" alt="ShapeCrafter Teaser" %}

ShapeCrafter is composed of three sub-models: a text feature extraction model, a feature concatenation model, and a shape feature refinement model.

{% include full_image.html path="/assets/images/projects/shapecrafter/pipeline.png" alt="ShapeCrafter Pipeline" %}

## Text2Shape++ Dataset

Constituency parser decompose a sentence into phrases with meaningful semantic attributes. Text2Shape++ contains phrase sequences, and each phrase sequence corresponds to one or more shapes.

{% include full_image.html path="/assets/images/projects/shapecrafter/dataset.png" alt="Dataset" %}

## Citation

    @inproceedings{NEURIPS2022_3a33ae4d,
    author = {Fu, Rao and Zhan, Xiao and CHEN, YIWEN and Ritchie, Daniel and Sridhar, Srinath},
    booktitle = {Advances in Neural Information Processing Systems},
    editor = {S. Koyejo and S. Mohamed and A. Agarwal and D. Belgrave and K. Cho and A. Oh},
    pages = {8882--8895},
    publisher = {Curran Associates, Inc.},
    title = {ShapeCrafter: A Recursive Text-Conditioned 3D Shape Generation Model},
    url = {https://proceedings.neurips.cc/paper_files/paper/2022/file/3a33ae4d634b49b0866b4142a1f82a2f-Paper-Conference.pdf},
    volume = {35},
    year = {2022}}

## Acknowledgements

This research was supported by AFOSR grant FA9550-21-1-0214, NSF CNS2038897, and the Google Research Scholar Program.

## Contact

Rao Fu rao_fu@brown.edu
