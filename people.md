---
layout: base
title: People
permalink: /people
---

# People

## Principal Investigator

<div class="people-category">
    {% for person in site.data.people %}
        {% if person.category == "Principal Investigator" %}
        <div class="row pi-about">
            <div class="col-sm pi-image"> 
                <a href="{{person.link}}" target="_blank">
                    <img class="img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
                </a>
            </div>
            <div class="col-sm pi-body">
                <h3>{{person.name}}</h3>
                <h5>{{ person.years }} </h5>
                <h5 class="bio"> 
                    I am an assistant professor in the <a href="https://cs.brown.edu/">Department of Computer Science</a> at Brown University. My research is in <b>3D computer vision and machine learning</b>. Specifically, I am interested in 3D spatiotemporal visual understanding of human physical interactions. I build methods for <a href="https://vcai.mpi-inf.mpg.de/projects/VNect/"> human-centric</a>, <a href="https://geometry.stanford.edu/projects/NOCS_CVPR2019/"> object-centric</a>, and <a href="https://storage.googleapis.com/pirk.io/index.html"> interaction-centric </a> understanding of our world from videos and images.
                </h5>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

## PhD Students

<div class="row people-category">
    {% for person in site.data.people %}
        {% if person.category == "PhD Students" %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="card-img-top img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="card-body">
                <h5 class="card-title">{{person.name}}</h5>
                <div class="card-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
                </div>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

## Undergraduate/Master's Students

<div class="row people-category">
    {% for person in site.data.people %}
        {% if person.category == "Undergraduate/Master's Students" %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="card-img-top img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="card-body">
                <h5 class="card-title">{{person.name}}</h5>
                <div class="card-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
                </div>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

## Research Staff/Visitors

<div class="row people-category">
    {% for person in site.data.people %}
        {% if person.category == "Research Staff/Visitors" %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="card-img-top img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="card-body">
                <h5 class="card-title">{{person.name}}</h5>
                <div class="card-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
                </div>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

## Brown IVL Alumni

<ul>
    {% for person in site.data.people %} 
        {% if person.category == "Brown IVL Alumni" %}
        <li>
            {{ person.name }}
            ({{ person.years }}) 
            {{ person.status }}
        </li>
        {% endif %}
    {% endfor %}
</ul>

<!-- TODO: style items -->
