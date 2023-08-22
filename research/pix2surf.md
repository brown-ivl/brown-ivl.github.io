---
layout: project
title: "Pix2Surf: Learning Parametric 3D Surface Models of Objects from Images"
authors:
  - author:
      name: "Jiahui Lei"
      affiliation: 1
      link:
  - author:
      name: "Srinath Sridhar"
      affiliation: 2
      link:
  - author:
      name: "Paul Guerrero"
      affiliation: 3
      link:
  - author:
      name: "Minhyuk Sung"
      affiliation: 3
      link:
  - author:
      name: "Niloy Mitra"
      affiliation: "4,3"
      link:
  - author:
      name: "Leonidas J. Guibas"
      affiliation: 2
      link:
affiliations:
  - "<sup>1</sup> Zhejiang University"
  - "<sup>2</sup> Stanford University"
  - "<sup>3</sup> Adobe Research"
  - "<sup>4</sup> University College London"
journal: ECCV 2020
redirect_from:
  - /projects/pix2surf
  - /projects/pix2surf/
---

{% include icons.html paper="https://geometry.stanford.edu/projects/pix2surf/pub/pix2surf.pdf" supplementary="https://geometry.stanford.edu/projects/pix2surf/pub/pix2surf_supp.pdf" code="https://github.com/JiahuiLei/Pix2Surf" dataset="https://github.com/JiahuiLei/Pix2Surf#dataset" %}

## Overview

<div class="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jaxB0VSuvms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Results

{% include full_image.html path="/assets/images/projects/pix2surf/car.jpeg" alt="Car" %}

{% include full_image.html path="/assets/images/projects/pix2surf/chair.jpeg" alt="Chair" %}

{% include full_image.html path="/assets/images/projects/pix2surf/airplane.jpeg" alt="Airplane" %}

## Abstract

We investigate the problem of learning to generate 3D parametric surface representations for novel object instances, as seen from one
or more views. Previous work on learning shape reconstruction from
multiple views uses discrete representations such as point clouds or
voxels, while continuous surface generation approaches lack
multi-view consistency. We address these issues by designing neural
networks capable of generating high-quality parametric 3D surfaces
which are also consistent between views. Furthermore, the generated
3D surfaces preserve accurate image pixel to 3D surface point
correspondences, allowing us to lift texture information to
reconstruct shapes with rich geometry and appearance. Our method is
supervised and trained on a public dataset of shapes from common
object categories. Quantitative results indicate that our method
significantly outperforms previous work, while qualitative results demonstrate the high quality of our reconstructions.

## Citation

    @inproceedings{pix2surf_2020,
    author = {Lei, Jiahui and Sridhar, Srinath and Guerrero, Paul and Sung, Minhyuk and Mitra, Niloy and Guibas, Leonidas J.},
    title = {Pix2Surf: Learning Parametric 3D Surface Models of Objects from Images},
    booktitle = {Proceedings of European Conference on Computer Vision ({ECCV})},
    url = {https://geometry.stanford.edu/projects/pix2surf},
    month = August,
    year = {2020}}

## Acknowledgements

We thank the anonymous reviewers for their comments and suggestions.
This work was supported by a Vannevar Bush Faculty Fellowship, NSF
grant IIS-1763268, grants from the Stanford GRO Program, the
SAIL-Toyota Center for AI Research, AWS Machine Learning Awards
Program, UCL AI Center, and a gift from the Adobe. We thank
[Supriya Krishnan](https://supadupa09.cargo.site/) for help with the voice over.

## Contact

Jiahui Lei ([lei_jiahui@zju.edu.cn](lei_jiahui@zju.edu.cn))

Srinath Sridhar ([ssrinath@cs.stanford.edu](ssrinath@cs.stanford.edu))
