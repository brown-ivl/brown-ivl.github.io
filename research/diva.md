---
layout: project
title: "DiVa-360: The Dynamic Visual Dataset for Immersive Neural Fields"
authors:
  - author:
      name: "Cheng-You Lu"
      affiliation: 1*
      link:
  - author:
      name: "Peisen Zhou"
      affiliation: 1*
      link:
  - author:
      name: "Angela Xing"
      affiliation: 1*
      link:
  - author:
      name: "Chandradeep Pokhariya"
      affiliation: 2
      link:
  - author:
      name: "Arnab Dey"
      affiliation: 3
      link:
  - author:
      name: "Ishaan N Shah"
      affiliation: 2
      link:
  - author:
      name: "Rugved Mavidipalli"
      affiliation: 1
      link:
  - author:
      name: "Dylan Hu"
      affiliation: 1
      link:
  - author:
      name: "Andrew Comport"
      affiliation: 3
      link:
  - author:
      name: "Kefan Chen"
      affiliation: 1
      link:
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link:
affiliations:
  - "<sup>1</sup>[Brown University]"
  - "<sup>2</sup>[CVIT, IIIT Hyderabad]"
  - "<sup>3</sup>[I3S-CNRS/Université Côte d’Azur]"
  - "*[Equal Contributions]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2307.16897" code="https://github.com/brown-ivl/DiVa360" %}

<div class="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eWDvmBQP7Uk?si=0TFsY7VMaA0LTUxS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Abstract

{% include full_image.html path="/assets/images/projects/diva/teaser.png" alt="DiVa Teaser" %}

Advances in neural fields are enablling high-fidelity capture of shape and appearance of dynamic 3D scenes. However, this capbabilities lag behind those offered by conventional representations such as 2D videos because of algorithmic challenges and the lack of large-scale multi-view real-world datasets. We address the dataset limitations with DiVa-360, a real-world 360° **d**ynam**i**c **v**isu**a**l dataset that contains synchronized high-resolution and long-duration multi-view video sequences of table-scale scenes captured using a customized low-cost system with 53 cameras. It contains 21 object-centric sequences categorized by different motion types,25 intricate hand-object interaction sequences, and 8 long-duration sequences for a total of 17.4M frames. In addition, we provide foreground-background segmentation masks, synchronized audio, and text descriptions. We benchmark the state-of-the-art dynamic neural field methods on DiVa-360 and provide insights about existing methods and future challenges on long-duration neural field capture.

## Dynamic Data Examples

Note: These videos have sound

{% include video.html path="/assets/images/projects/diva/data/drum_data.mp4" alt="[Drum Data]" %}

{% include video.html path="/assets/images/projects/diva/data/penguin_data.mp4" alt="[Penguin Data]" %}

## Dynamic Baseline Examples

### Object Centric Sequence

Note: These videos have sounds

Dog PF-INGP
{% include video.html path="/assets/images/projects/diva/dog/ingp.mp4" alt="[Dog I-NGP]" %}

Dog K-Planes
{% include video.html path="/assets/images/projects/diva/dog/kplanes.mp4" alt="[Dog K-Planes]" %}

Dog MixVoxels
{% include video.html path="/assets/images/projects/diva/dog/mixvoxels.mp4" alt="[Dog MixVoxels]" %}

### Hand-Object Interaction Sequence

Note: These videos have sounds

Xylophone PF-INGP
{% include video.html path="/assets/images/projects/diva/xylophone/ingp.mp4" alt="[Xylophone I-NGP]" %}

Xylophone K-Planes
{% include video.html path="/assets/images/projects/diva/xylophone/kplanes.mp4" alt="[Xylophone K-Planes]" %}

Xylophone MixVoxels
{% include video.html path="/assets/images/projects/diva/xylophone/mixvoxels.mp4" alt="[Xylophone MixVoxels]" %}

### Long Duration Sequence

Note: These videos have sounds

Legos PF-INGP
{% include video.html path="/assets/images/projects/diva/legos/ingp.mp4" alt="[Legos I-NGP]" %}

Legos K-Planes
{% include video.html path="/assets/images/projects/diva/legos/kplanes.mp4" alt="[Legos K-Planes]" %}

Legos MixVoxels
{% include video.html path="/assets/images/projects/diva/legos/mixvoxels.mp4" alt="[Legos MixVoxels]" %}

## Citations
    @misc{diva360,
        title={DiVa-360: The Dynamic Visual Dataset for Immersive Neural Fields}, 
        author={Cheng-You Lu and Peisen Zhou and Angela Xing and Chandradeep Pokhariya and Arnab Dey and Ishaan N Shah and Rugved Mavidipalli and Dylan Hu and Andrew Comport and Kefan Chen and Srinath Sridhar},
        year={2024},
        eprint={2307.16897},
        archivePrefix={arXiv},
        primaryClass={cs.CV}
    }

## Acknowledgements
This work was supported by NSF grants CAREER #2143576 and CNS #2038897, ONR grant N00014-22-1-259, ONR DURIP grant N00014-23-1-2804, a gift from Meta Reality Labs, an AWS Cloud Credits award, and NSF CloudBank. Arnab Dey was supported by H2020 COFUND program BoostUrCareer under Marie SklodowskaCurie grant agreement #847581. We thank George Konidaris, Stefanie Tellex, and Rohith Agaram.

## Contact

Cheng-You Lu ([contact email](cheng-you_lu@brown.edu))

Peisen Zhou ([contact email](peisen_zhou@alumni.brown.edu))

Angela Xing ([contact email](angela_xing@brown.edu))