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
  - "<sup>1</sup>Brown University"
  - "<sup>2</sup>CVIT, IIIT Hyderabad"
  - "<sup>3</sup>I3S-CNRS/Université Côte d’Azur"
  - "*[Equal Contribution]"
journal: CVPR 2024 (Highlight)
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2307.16897" code="https://github.com/brown-ivl/DiVa360" dataset="#downloading-data"%}

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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/obeSJTUlXUs?si=f4IpuJFSkqgTI97s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Downloading Data
<!-- We store out dynamic and static dataset on AWS, so to download the data to your local machine, we use AWS CLI. You will first need to install AWS CLI. Follow the instructions depending on your machine. You can find the installation instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). 

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
``` -->

<!-- ### Setup
We store our dataset on Globus, so to download the data to your local machine, we use Globus Command Line Interface (Globus-CLI) and Globus Connect Personal (GCP). You will first need to install GCP. Follow these intructions depending on your machine: [Mac](https://docs.globus.org/globus-connect-personal/install/mac/), [Windows](https://docs.globus.org/how-to/globus-connect-personal-windows/), [Linux](https://docs.globus.org/how-to/globus-connect-personal-linux/).

Note: When you are installing GCP, you will have to name your collection/endpoint. You are free to name it however you choose, but we suggest naming it "&lt;name&gt; personal machine". 

Next, you will need to install Globus-CLI and login. Run the following commands:
```
$ pip install globus-cli
$ globus login
```
This will take you to a login page. You can either log in through a listed institution, through any Google account, or through an ORCID iD. After logging in, you will see a terms of service page. To continue, click "Allow".
To download the data, you will be copying the data from the DiVa360 endpoint to the endpoint you just created on your local machine when you installed GCP. First, setup the DiVa360 endpoint:
```
$ diva360_ep=8ac249c5-8d25-4faa-9247-745d0213c615
```
Next, setup your personal endpoint for your local machine:
```
$ globus endpoint local-id
$ personal_ep=<output of the above command>
```
**Important Note: To transfer to your GCP endpoint, the GCP software must be running and connected for the transfer to complete. However, you can close your terminal after the transfer has started.**

### Download
Downloading raw data (note that this is a total of 1.4 TB of data):
```
# Download all raw data
$ globus transfer $diva360_ep:/raw_data/ $personal_ep:<path to destination> --recursive
$ globus transfer $diva360_ep:/raw_data_long/ $personal_ep:<path to destination> --recursive
# Downloading a single sequence
$ globus transfer $diva360_ep:/raw_data/synced/2023-05-02_session_<sequence>_synced.tar.gz $personal_ep:<path to destination>/2023-05-02_session_<sequence>_synced.tar.gz
$ globus transfer $diva360_ep:/raw_data_long/synced/2023-10-21_session_<sequence>_synced.tar.gz $personal_ep:<path to destination>/2023-10-21_session_<sequence>_synced.tar.gz
```
Downloading processed data (note that this is a total of 1.8 TB of data):
```
# Download all processed data
$ globus transfer $diva360_ep:/processed_data/ $personal_ep:<path to destination> --recursive
$ globus transfer $diva360_ep:/processed_data_long/ $personal_ep:<path to destination> --recursive
# Downloading a single sequence
$ globus transfer $diva360_ep:/processed_data/<sequence>/ $personal_ep:<path to destination> --recursive
$ globus transfer $diva360_ep:/processed_data_long/<sequence>/ $personal_ep:<path to destination> --recursive
```
Downloading trained models (note that this is a total of 6 TB of data):
```
$ globus transfer $diva360_ep:/model_data/ $personal_ep:<path to destination> --recursive
$ globus transfer $diva360_ep:/model_data_long/ $personal_ep:<path to destination> --recursive
$ globus transfer $diva360_ep:/model_data_exp/ $personal_ep:<path to destination> --recursive
```
Downloading rendered videos (note that this is a total of 63.1 GB of data):
```
$ globus transfer $diva360_ep:/all_videos/ $personal_ep:<path to destination> --recursive
```
You can also transfer multiple files or folders at once using the batch transfer feature. Here is an example:
```
$ globus transfer --batch batch_transfer.txt $diva360_ep $personal_ep
```
Assuming you have the following `batch_transfer.txt` file:
```
# to copy a file
<path to file> <path to destination>/<file name>
# to copy a folder
<path to folder> <path to destination>/<folder name> --recursive
```
To check the status of your transfer, use the following command:
```
globus task show <task ID>
``` -->
You can download the data [here](https://www.dropbox.com/scl/fo/j68f78vlzt9q2z334294u/AHZ7i6znu9zQJXhs3n1Pmko?rlkey=7e59p9e9ex8lakyuslrhg9afj&st=e1ztwgmv&dl=0). Please note that the dataset is large. Here is a breakdown of required storage:

<div style="display: flex; flex-direction: row;">
    <div>
        <ul style="list-style: none;">
            <li>Raw Data: 1.4 TB</li>
            <li>Processed Data: 1.8 TB</li>
            <li>Trained Models: 6 TB</li>
            <li>Rendered Videos: 63.1 GB</li>
        </ul>
    </div>
</div>

### Sequences
<details>
<summary>Here are a list of sequences</summary>
    <div style="display: flex; flex-direction: row;">
        <div>
            <ul style="list-style: none;">
                <li>battery</li>
                <li>blue_car</li>
                <li>bunny</li>
                <li>chess</li>
                <li>clock</li>
                <li>dog</li>
                <li>drum</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>flip_book</li>
                <li>horse</li>
                <li>hour_glass</li>
                <li>jenga</li>
                <li>k1_double_punch</li>
                <li>k1_hand_stand</li>
                <li>k1_push_up</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>keyboard_mouse</li>
                <li>kindle</li>
                <li>maracas</li>
                <li>music_box</li>
                <li>pan</li>
                <li>peel_apple</li>
                <li>penguin</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>piano</li>
                <li>plasma_ball</li>
                <li>plasma_ball_clip</li>
                <li>poker</li>
                <li>pour_salt</li>
                <li>pour_tea</li>
                <li>put_candy</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>put_fruit</li>
                <li>red_car</li>
                <li>scissor</li>
                <li>slice_apple</li>
                <li>soda</li>
                <li>stirling</li>
                <li>tambourine</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>tea</li>
                <li>tornado</li>
                <li>trex</li>
                <li>truck</li>
                <li>unlock</li>
                <li>wall_e</li>
                <li>wolf</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>world_globe</li>
                <li>writing_1</li>
                <li>writing_2</li>
                <li>xylophone</li>
            </ul>
        </div>
    </div>
</details>

<details>
<summary>Here are a list of long sequences</summary>
    <div style="display: flex; flex-direction: row;">
        <div>
            <ul style="list-style: none;">
                <li>chess_long</li>
                <li>crochet</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>jenga_long</li>
                <li>legos</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>origami</li>
                <li>painting</li>
            </ul>
        </div>
        <div>
            <ul style="list-style: none;">
                <li>puzzle</li>
                <li>rubiks_cube</li>
            </ul>
        </div>
    </div>
</details>

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
