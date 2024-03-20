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
  - "<sup>1</sup><a href="https://cs.brown.edu/" target="_blank">Brown University</a>"
  - "<sup>2</sup>CVIT, IIIT Hyderabad"
  - "<sup>3</sup>I3S-CNRS/Université Côte d’Azur"
  - "*[Equal Contribution]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2307.16897" code="https://github.com/brown-ivl/DiVa360" %}

<div class="center">
    <video autoplay="autoplay"
      style="margin: 1rem"
      width="800" 
      height="315"
      loop
      controls
      muted="muted">
      <source src="/assets/images/projects/diva/origami_all.mov" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

## Abstract

{% include full_image.html path="/assets/images/projects/diva/teaser.png" alt="DiVa Teaser" %}

Advances in neural fields are enablling high-fidelity capture of shape and appearance of dynamic 3D scenes. However, this capbabilities lag behind those offered by conventional representations such as 2D videos because of algorithmic challenges and the lack of large-scale multi-view real-world datasets. We address the dataset limitations with DiVa-360, a real-world 360° **d**ynam**i**c **v**isu**a**l dataset that contains synchronized high-resolution and long-duration multi-view video sequences of table-scale scenes captured using a customized low-cost system with 53 cameras. It contains 21 object-centric sequences categorized by different motion types, 25 intricate hand-object interaction sequences, and 8 long-duration sequences for a total of 17.4M frames. In addition, we provide foreground-background segmentation masks, synchronized audio, and text descriptions. We benchmark the state-of-the-art dynamic neural field methods on DiVa-360 and provide insights about existing methods and future challenges on long-duration neural field capture.

<div class="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eWDvmBQP7Uk?si=0TFsY7VMaA0LTUxS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Downloading Data
We store out dynamic and static dataset on AWS, so to download the data to your local machine, we use AWS CLI. You will first need to install AWS CLI. Follow the instructions depending on your machine. You can find the installation instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). 

To download all of the raw data, run the following commands (note that this is a total of 1.4 TB of data):
```
aws s3 cp s3://diva360/raw_data/ <path_to_destination> --recursive --no-sign-request
aws s3 cp s3://diva360/raw_data_long/ <path_to_destination> --recursive --no-sign-request
```

To download all of the processed data, run the following commands (note that this is a total of 1.8 TB of data):
```
aws s3 cp s3://diva360/processed_data/ <path_to_destination> --recursive --no-sign-request
aws s3 cp s3://diva360/processed_data_long/ <path_to_destination> --recursive --no-sign-request
```

To download all of the trained models, run the following commands (note that this is a total of 6 TB of data):
```
aws s3 cp s3://diva360/model_data/ <path_to_destination> --recursive --no-sign-request
aws s3 cp s3://diva360/model_data_long/ <path_to_destination> --recursive --no-sign-request
aws s3 cp s3://diva360/model_data_exp/ <path_to_destination> --recursive --no-sign-request
```

To download all resulting videos, run the following command (note that this is 63.1 GB of data):
```
aws s3 cp s3://diva360/all_videos/ <path_to_destination> --recursive --no-sign-request
```

## Dynamic Data Examples

Note: These videos have sound

{% include video.html path="/assets/images/projects/diva/drum_data.mov" alt="[Drum Data]" %}
{% include video.html path="/assets/images/projects/diva/penguin_data.mov" alt="[Penguin Data]" %}

## Dynamic Baseline Examples

### Object Centric Sequence

Note: This video has sound

{% include video.html path="/assets/images/projects/diva/dog_results.mov" alt="[Dog Results]" %}

### Hand-Object Interaction Sequence

Note: This video has sound

{% include video.html path="/assets/images/projects/diva/xylophone_results.mov" alt="[Xylophone Results]" %}

### Long Duration Sequence

Note: This video has sound

{% include video.html path="/assets/images/projects/diva/legos_results.mov" alt="[Legos Results]" %}

## Citations
    @inproceedings{diva360,
        title={DiVa-360: The Dynamic Visual Dataset for Immersive Neural Fields},
        author={Cheng-You Lu and Peisen Zhou and Angela Xing and Chandradeep Pokhariya and Arnab Dey and Ishaan N Shah and Rugved Mavidipalli and Dylan Hu and Andrew Comport and Kefan Chen and Srinath Sridhar},
        booktitle = {Conference on Computer Vision and Pattern Recognition 2024},
        year={2024}
    }

## Acknowledgements
This work was supported by NSF grants CAREER #2143576 and CNS #2038897, ONR grant N00014-22-1-259, ONR DURIP grant N00014-23-1-2804, a gift from Meta Reality Labs, an AWS Cloud Credits award, and NSF CloudBank. Arnab Dey was supported by H2020 COFUND program BoostUrCareer under Marie SklodowskaCurie grant agreement #847581. We thank George Konidaris, Stefanie Tellex, and Rohith Agaram.

## Contact

Cheng-You Lu ([cheng-you.lu@student.uts.edu.au](cheng-you.lu@student.uts.edu.au))

Peisen Zhou ([peisen_zhou@alumni.brown.edu](peisen_zhou@alumni.brown.edu))

Angela Xing ([angela_xing@brown.edu](angela_xing@brown.edu))
