---
layout: project
title: "EgoSonics: Generating Synchronized Audio for Silent Egocentric Videos"
authors:
  - author:
      name: "Aashish Rai"
      affiliation:
      link: https://aashishrai3799.github.io
  - author:
      name: "Srinath Sridhar"
      affiliation:
      link: https://cs.brown.edu/people/ssrinath/index.html

affiliations:
  - "Brown University"
journal: Arxiv 2024
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/pdf/2407.20592" code="https://github.com/aashishrai3799/EgoSonics" %}

<div class="center">
    <video autoplay="autoplay"
      style="margin: 1rem"
      width="800" 
      height="315"
      loop
      controls
      muted="muted">
      <source src="/assets/images/projects/egosonics/videos/teaser.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

## Abstract

{% include full_image.html path="/assets/images/projects/egosonics/teaser.jpg" alt="EgoSonics Teaser" %}

We introduce EgoSonics, a method to generate semantically meaningful and synchronized audio tracks conditioned on silent egocentric videos. Generating audio for silent egocentric videos could open new applications in virtual reality, assistive technologies, or for augmenting existing datasets. Existing work has been limited to domains like speech, music, or impact sounds and cannot easily capture the broad range of audio frequencies found in egocentric videos. EgoSonics addresses these limitations by building on the strength of latent diffusion models for condi- tioned audio synthesis. We first encode and process audio and video data into a form that is suitable for generation. The encoded data is used to train our model to generate audio tracks that capture the semantics of the input video. Our proposed SyncroNet builds on top of ControlNet to provide control signals that enables temporal synchronization to the synthesized audio. Extensive evaluations show that our model outperforms existing work in audio quality, and in our newly proposed synchronization evaluation method. Furthermore, we demonstrate downstream applications of our model in improving video summarization.


<div class="row aligned-items-div" style="align-items: center">
    <video
        class="content-item-two-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/anyhome/layout.mov"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
    <video
        class="content-item-two-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/anyhome/inpaint.mov"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
</div>

## Generated Samples from EgoSonics (our method)

Following is a set of uncurated examples of video-to-audio generation on unseen Ego4D clips using EgoSonics (our method).

<div class="row aligned-items-div" style="align-items: center">
<!--   <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/tea_topdown.png" alt="/assets/images/projects/anyhome/tea_topdown.png"/> -->
<!--   <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/tea_ego.png" alt="/assets/images/projects/anyhome/tea_ego.png"/> -->
    <video
        class="content-item-three-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/egosonics/videos/example1.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
  <video
        class="content-item-three-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/egosonics/videos/example1.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
  <video
        class="content-item-three-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/egosonics/videos/example1.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
</div>





## Results: Open-Vocabulary Editing

Examples showcase the capability to modify room types, layouts, object appearances, and overall design through free-form user input. AnyHome also supports comprehensive style alterations and sequential edits, all made possible by its hierarchical structured geometric representation and robust text controllability.


{% include full_image.html path="/assets/images/projects/anyhome/edit.jpg" alt="AnyHome Editing" %}

## Method
{% include full_image.html path="/assets/images/projects/anyhome/pipeline.png" alt="AnyHome Pipeline" %}

Taking a free-form textual input, our pipeline generates the house-scale scene by: (i) comprehending and elaborating on the user's textual input through querying an LLM with templated prompts; (ii) converting textual descriptions into base geometry using structured intermediate representations; (iii) employing an SDS process with a differentiable renderer to refine object placements; and (iv) applying depth-conditioned texture inpainting for egocentric texture generation.

## Citations
    @article{rai2024egosonics,
  title={EgoSonics: Generating Synchronized Audio for Silent Egocentric Videos},
  author={Rai, Aashish and Sridhar, Srinath},
  journal={arXiv preprint arXiv:2407.20592},
  year={2024}
}

## Acknowledgements
This research was supported by AFOSR grant FA9550-21-1-0214. The authors thank Dylan Hu, Selena Ling, Kai Wang and Daniel Ritchie

## Contact

Aashish Rai ([rao_fu@brown.edu](rao_fu@brown.edu))

