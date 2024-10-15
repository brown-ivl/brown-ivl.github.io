---
layout: project
title: "MotionGlot: A Multi-Embodied Motion Generation Model"
authors:
  - author:
      name: "Sudarshan Harithas"
      affiliation: "1"
      link: "https://sudarshan-s-harithas.github.io/"
  - author:
      name: "Srinath Sridhar"
      affiliation: "1"
      link: "https://cs.brown.edu/people/ssrinath/"
affiliations:
  - "<sup>1</sup> Brown University"
journal: 
redirect_from:
  - /projects/motionglot
  - /projects/motionglot/
---


{% include icons.html paper= "" code= "" %}


<div style="display: flex; justify-content: space-between; width: 100%;">
    <div style="text-align: center ">
<b>Tl;dr:</b>  Techniques from Multi-lingual LLMs can be adpated to train a GPT for motion generation across embodiments with different output dimensions. MotionGlot is a single GPT model capable of performing  a multitude of motion related tasks across multiple embodiments. 
    </div>
</div>
<p style="margin-bottom:0.3cm;"> </p>

<div class="center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/55h64Wv-F9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p style="margin-bottom:0.3cm;"> </p>

## Results 

#### Text to robot Motion
<p style="margin-bottom:0.3cm;"> </p>

<div class="gallery">
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> A robot walks backwards, turns right and walks forward. </b> 
    <img src="/assets/images/projects/motionglot/rt2m/BRF.gif" width="100%" alt="Back Right Foot Movement">
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> A robot walks forward, turns right, and then walks backward. </b>  
    <img src="/assets/images/projects/motionglot/rt2m/FLB.gif" width="100%" alt="Front Left Balance Motion">
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> A robot walks in a clockwise circular path. </b> 
    <img src="/assets/images/projects/motionglot/rt2m/CC.gif" width="100%" alt="Center of Mass Control">
  </div>
</div>

<p style="margin-bottom:0.5cm;"> </p>

#### Text to Human Motion

<div class="gallery">
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> A person is running on a treadmill. </b> 
    <img src="/assets/images/projects/motionglot/ht2m/treadmil.gif" width="100%" alt="Running on a Treadmill">
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> A person walks forward, and sits. </b>  
    <img src="/assets/images/projects/motionglot/ht2m/wfs.gif" width="100%" alt="Walking Forward and Sitting">
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> A person does cartwheel many times. </b> 
    <img src="/assets/images/projects/motionglot/ht2m/multiple_cartwheel2.gif" width="100%" alt="Multiple Cartwheels">
  </div>
</div>

<p style="margin-bottom:0.5cm;"> </p>

#### Q & A with Human Motion

<div class="gallery">
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> How to increase leg strength? </b> 
    <img src="/assets/images/projects/motionglot/ht2m/leg_strength.gif" width="100%" alt="Increasing Leg Strength">
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> How does a person practice in a gymnastics class? </b>  
    <img src="/assets/images/projects/motionglot/ht2m/gymnastics_class.gif" width="100%" alt="Practicing in a Gymnastics Class">
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <b style="color: #840058;"> Can you show me a move in a golf game? </b> 
    <img src="/assets/images/projects/motionglot/ht2m/golf_game.gif" width="100%" alt="Golf Game Move">
  </div>
</div>

<p style="margin-bottom:0.5cm;"> </p>

#### Robot Goal reaching 

{% include gallery.html 
img="/assets/images/projects/motionglot/goal_reaching/goal1_1.png, 
/assets/images/projects/motionglot/goal_reaching/goal2_1.png,
/assets/images/projects/motionglot/goal_reaching/goal3_1.png"
img_width="30.95%" %}

<p style="margin-bottom:0.1cm;"> </p>


#### Motion Captioning 

<div class="gallery">
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <img src="/assets/images/projects/motionglot/hmc/march.gif" width="100%" alt="Marching">
    <tt style="font-size: 14px; color: #840058;"> <b> A person marches forward with their arms swinging by the sides </b> </tt>
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <img src="/assets/images/projects/motionglot/hmc/waltz.gif" width="100%" alt="Waltz">
    <tt style="font-size: 14px; color: #840058;"> <b> A person dances to waltz </b> </tt>
  </div>
  <div style="display: inline-block; width: 30.95%; text-align: center;">
    <img src="/assets/images/projects/motionglot/hmc/warmup.gif" width="100%" alt="Warmup">
    <tt style="font-size: 14px; color: #840058;"> <b> A person is doing warm up stretches </b> </tt>
  </div>
</div>

<p style="margin-bottom:0.5cm;"> </p>


## Abstract 

<div style="display: flex; justify-content: space-between; width: 100%;">
    <div style="text-align: center ">

This paper introduces MotionGlot, a model that can generate motion across multiple embodiments with different action dimensions, such as quadruped robots and human bodies. By leveraging the well-established training procedures commonly used in large language models (LLMs), we introduce an instruction-tuning template specifically designed for motion- related tasks. Our approach demonstrates that the principles underlying LLM training can be successfully adapted to learn a wide range of motion generation tasks across multiple embodiments with different action dimensions. We demonstrate the various abilities of MotionGlot on a set of 6 tasks and report an average improvement of 35.3% across tasks. Additionally, we contribute two new datasets: (1) a dataset of expert-controlled
quadruped locomotion with approximately 48,000 trajectories paired with direction-based text annotations, and (2) a dataset of over 23,000 situational text prompts for human motion generation tasks. Finally, we conduct hardware experiments to validate the capabilities of our system in real-world applications.
    </div>
</div>

## Method Overview

<p style="margin-bottom:1cm;"> </p>
{% include gallery.html 
img="/assets/images/projects/motionglot/overview.svg" %}

<div style="display: flex; justify-content: space-between; width: 100%;">
    <div style="text-align: center ">
        MotionGlot is a GPT model which is capable of motion generation across multiple embodiments with different action spaces, the above figure depicts the overview of our approach. Our training procedure involves two steps, in the first stage (a) a VQ-VAE learns a discrete latent codebook that represents a motion vocabulary per embodiment. This process, known as motion tokenization, is similar to text tokenization.
        The motion vocabulary across embodiments are then appended to the existing vocabulary of GPT-2, creating a unified motion and text vocabulary. In the second step (b), our proposed instruction template is used to train the autoregressive GPT.
    </div>
</div>

## Dataset

<b> To be released Soon </b> 

### Citation

<b> To be included post arxiv release </b> 


### Acknowledgements

### Contact 

Sudarshan Harithas: sudarshan_harithas@brown.edu
