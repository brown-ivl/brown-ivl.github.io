---
layout: project
title: "UniTac: Whole-Robot Touch Sensing Without Tactile Sensors"
authors:
  - author:
      name: "Wanjia Fu"
      affiliation: 1*
      link: https://wanjia-fu.com/
  - author:
      name: "Hongyu Li"
      affiliation: 1*
      link: https://lhy.xyz/
  - author:
      name: "Ivy He"
      affiliation: 1
      link: https://ivyyyy24381.github.io/home
  - author:
      name: "Stefanie Tellex"
      affiliation: 1
      link: https://cs.brown.edu/people/stellex/
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: https://cs.brown.edu/people/ssrinath/
affiliations:
  - "<sup>1</sup>[Brown University]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here


---
{% include icons.html paper="https://arxiv.org/abs/2507.07980" codecoming="#" %}

{% include full_image.html path="/assets/images/projects/unitac/tactile-teaser.jpg" alt="[Teaser Figure]" %}

---

# Abstract
Robots can better interact with humans and
unstructured environments through touch sensing. However,
most commercial robots are not equipped with tactile skins,
making it challenging to achieve even basic touch-sensing
functions, such as contact localization. We present **UniTac**,
a data-driven **whole-body touch-sensing approach** that uses
only proprioceptive joint sensors and **does not require the installation of additional sensors**. Our approach enables a robot
equipped solely with joint sensors to localize contacts. Our
goal is to democratize touch sensing and provide an off-the-
shelf tool for HRI researchers to provide their robots with
touch-sensing capabilities. We validate our approach on two
platforms: Franka robot arm and Spot quadruped. On Franka,
we can localize contact to within 8.0 centimeters, and on Spot,
we can localize to within 7.2 centimeters at around 2,000 Hz
on an RTX 3090 GPU without adding any additional sensors
to the robot. 

---

# Methodology
{% include full_image.html path="/assets/images/projects/unitac/tactile-network.jpg" alt="[Network Figure]" %}
**Design of UniTac-Net.** UniTac-Net is a four-layer
MLP with either a regression or a classification output head.
It takes proprioceptive feedback (joint torques and positions)
as input and predicts the contact (if any).

---

# Results
{% include video.html path="/assets/images/projects/unitac/qualitative.MP4" alt="[Spot Qualitative]" %}

**Live contact localization on Spots.** UniTac is able to detect continuous changes in contact location. 

{% include full_image.html path="/assets/images/projects/unitac/tactile-franka-sequence.jpg" alt="[Franka Qualitative]" %}
**Live contact localization on FR3 robot arm.** Top row: A human applies touch to the robot. Middle row: The system localizes the contact point on the robot's mesh. Bottom row: Normalized joint torque changes are displayed (different colors indicate distinct joint sensors). The torque plots show the unique signature look for each touch location, which we utilized to localize the contact. 

---

# Physical Human Robot Interactions

## pHRI deployment on Spot.
{% include video.html path="/assets/images/projects/unitac/posture_change.MP4" alt="[posture change]" %}
Posture change includes sitting and lying down.

{% include video.html path="/assets/images/projects/unitac/body_expression.MP4" alt="[body expression]" %}
Body expression includes wiggling and playing bow.

{% include video.html path="/assets/images/projects/unitac/motion_action.MP4" alt="[motion action]" %}
Motion action includes leg lifts, forehand/haunches shift/turn, and sidepass.

## pHRI deployment on Franka.
{% include video.html path="/assets/images/projects/unitac/pHRI_franka.MP4" alt="[Franka pHRI]" %}
Franka picks up a cube of a different color, based on where the touch is on its joint links.

<!-- ## Citations

    Add your bibtex citation here! Be sure to indent the citation by 4 spaces. -->

## Acknowledgements
This work is supported by the Office of Naval Research (ONR) grant #N00014-22-1-259. Wanjia was supported by a UTRA award and a Randy Pausch Fellowship.

## Contact

Wanjia Fu ([contact email](mailto:wanjia_fu@brown.edu))

Hongyu Li ([contact email](mailto:hli230@cs.brown.edu))
