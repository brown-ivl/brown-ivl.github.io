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


<b>Tl;dr:</b>  Techniques from Multi-lingual LLMs can be adpated to train a GPT for motion generation across embodiments with different output dimensions. MotionGlot is a single GPT model capable of performing  multiple motion related tasks across multiple embodiments. 

### Text to robot Motion
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

### Text to Human Motion

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

### Q & A with Human Motion

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

### Robot Goal reaching 

{% include gallery.html 
img="/assets/images/projects/motionglot/goal_reaching/goal1_1.png, 
/assets/images/projects/motionglot/goal_reaching/goal2_1.png,
/assets/images/projects/motionglot/goal_reaching/goal3_1.png"
img_width="30.95%" %}

<p style="margin-bottom:0.1cm;"> </p>


### Motion Captioning 

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

### Method Overview

<p style="margin-bottom:1cm;"> </p>
{% include gallery.html 
img="/assets/images/projects/motionglot/overview.svg" %}

### Dataset

To be released Soon 
### Contact 

Sudarshan Harithas: sudarshan_harithas@brown.edu
