---
layout: base
title: ShapeCrafter: A Recursive Text-Conditioned 3D Shape Generation Model
authors: Rao Fu, Xiao Zhan, Yiwen Chen, Daniel Ritchie, Srinath Sridhar
journal: NeurIPS 2022
bibtex: ADD A STRING HERE
---

# ShapeCrafter: A Recursive Text-Conditioned 3D Shape Generation Model

![ShapeCrafter Teaser](/assets/images/projects/shapecrafter/teaser.gif "ShapeCrafter")

## Overview

[comment]: video here

[comment]: paper, supplementary, github, dataset here

## Results

images here

[comment]: image here

## Abstract

We present ShapeCrafter, a neural network for recursive text-conditioned 3D shape generation. Existing methods to generate text-conditioned 3D shapes consume an entire text prompt to generate a 3D shape in a single step. However, humans tend to describe shapes recursively-we may start with an initial description and progressively add details based on intermediate results. To capture this recursive process, we introduce a method to generate a 3D shape distribution, conditioned on an initial phrase, that gradually evolves as more phrases are added. Since existing datasets are insufficient for training this approach, we present Text2Shape++, a large dataset of 369K shape-text pairs that supports recursive shape generation. To capture local details that are often used to refine shape descriptions, we build on top of vector-quantized deep implicit functions that generate a distribution of high-quality shapes. Results show that our method can generate shapes consistent with text descriptions, and shapes evolve gradually as more phrases are added. Our method supports shape editing, extrapolation, and can enable new applications in human-machine collaboration for creative design.

## Recursive Text-Conditioned 3D Shape Generation

Recursive generation starts with an initial description of an object, and progressively adds phrases to better describe it or modify it. The shapes can be generated from scratch as well as edited using text input.

[comment]: image here

ShapeCrafter is composed of three sub-models: a text feature extraction model, a feature concatenation model, and a shape feature refinement model.

[comment]: image here

## Text2Shape++ Dataset

Constituency parser decompose a sentence into phrases with meaningful semantic attributes. Text2Shape++ contains phrase sequences, and each phrase sequence corresponds to one or more shapes.

[comment]: image here

## Citation
