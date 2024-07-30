---
layout: project
title: "AnyHome: Open-Vocabulary Generation of Structured and Textured 3D Homes"
authors:
  - author:
      name: "Rao Fu"
      affiliation: 1*†
      link: https://freddierao.github.io/
  - author:
      name: "Zehao Wen"
      affiliation: 2*
      link:
  - author:
      name: "Zichen Liu"
      affiliation: 2*
      link:
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link:

affiliations:
  - "<sup>1</sup>Brown University"
  - "<sup>2</sup>Shenzhen College of International Education"
  - "*[Equal Contribution]"
  - "†[Corresponding Author]"
journal: ECCV 2024
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="https://arxiv.org/abs/2312.06644" code="https://github.com/FreddieRao/anyhome_github" %}

<div class="center">
    <video autoplay="autoplay"
      style="margin: 1rem"
      width="800" 
      height="315"
      loop
      controls
      muted="muted">
      <source src="/assets/images/projects/anyhome/teaser_video.mov" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</div>

## Abstract

{% include full_image.html path="/assets/images/projects/anyhome/teaser.png" alt="AnyHome Teaser" %}

We introduce AnyHome, a framework that translates open-vocabulary descriptions, ranging from simple labels to elaborate paragraphs, into well-structured and textured 3D indoor scenes at a house-scale. Inspired by cognition theories, AnyHome employs an amodal structured representation to capture 3D spatial cues from textual narratives and then uses egocentric inpainting to enrich these scenes. To this end, we begin by using specially designed template prompts for Large Language Models (LLMs), which enable precise control over the textual input. We then utilize intermediate representations to maintain the spatial structure's consistency, ensuring that the 3D scenes align closely with the textual description. Then, we apply a Score Distillation Sampling process to refine the placement of objects. Lastly, an egocentric inpainting process is incorporated to enhance the realism and appearance of the scenes. AnyHome stands out due to its hierarchical structured representation combined with the versatility of open-vocabulary text interpretation. This allows for extensive customization of indoor scenes at various levels of granularity. We demonstrate that AnyHome can reliably generate a range of diverse indoor scenes, characterized by their detailed spatial structures and textures, all corresponding to the free-form textual inputs.


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

## Results: Open-Vocabulary Generation

We show open-vocabulary generation results, including bird-eye view(left), egocentric views(middle), and egocentric tour(right). AnyHome comprehends and extends user's textual inputs, and produces structured scene with realistic texture. It can create a serene and culturally rich environment("tea house"), synthesize unique house types("cat cafe"), and render a more dramatic and stylized ambiance("haunted house").

<div class="row aligned-items-div" style="align-items: center">
  <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/tea_topdown.png" alt="/assets/images/projects/anyhome/tea_topdown.png"/>
  <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/tea_ego.png" alt="/assets/images/projects/anyhome/tea_ego.png"/>
    <video
        class="content-item-three-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/anyhome/tea.mov"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
</div>

<div class="row aligned-items-div" style="align-items: center">
  <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/haunted_topdown.png" alt="/assets/images/projects/anyhome/tea_topdown.png"/>
  <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/haunted_ego.png" alt="/assets/images/projects/anyhome/tea_ego.png"/>
    <video
        class="content-item-three-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/anyhome/haunted.mov"
            type="video/mp4"
        />
        Your browser does not support the video tag.
    </video>
</div>

<div class="row aligned-items-div" style="align-items: center">
  <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/cat_topdown.png" alt="/assets/images/projects/anyhome/tea_topdown.png"/>
  <img class="content-item-three-col img-fluid" src="/assets/images/projects/anyhome/cat_ego.png" alt="/assets/images/projects/anyhome/tea_ego.png"/>
    <video
        class="content-item-three-col"
        autoplay="autoplay"
        loop
        controls
        muted="muted"
        data-setup='{"fluid": true}'>
        <source
            src="/assets/images/projects/anyhome/cat.mov"
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
    @inproceedings{wen2023anyhome,
        title={AnyHome: Open-Vocabulary Generation of Structured and Textured 3D Homes}, 
        author={Rao Fu and Zehao Wen and Zichen Liu and Srinath Sridhar},
        booktitle={Proceedings of the European Conference on Computer Vision (ECCV)},
        year={2024},
    }

## Acknowledgements
This research was supported by AFOSR grant FA9550-21-1-0214. The authors thank Dylan Hu, Selena Ling, Kai Wang and Daniel Ritchie

## Contact

Rao Fu ([rao_fu@brown.edu](rao_fu@brown.edu))

