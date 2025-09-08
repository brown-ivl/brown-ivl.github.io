---
layout: page
title: People
permalink: /people
---

## Principal Investigator

<div class="row people-category">
    {% for person in site.data.people %}
        {% if person.category == "Principal Investigator" %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="people-info">
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

<!--## Postdocs
<div class="row people-category">
    {% for person in site.data.people %}
        {% if (person.category == "Postdoc") %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="card-img-top img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="people-info">
                <h5 class="card-title">{{person.name}}</h5>
                <div class="card-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
                </div>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>-->

## PhD Students

<div class="row people-category">
    {% for person in site.data.people %}
        {% if (person.category == "PhD Students") %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="card-img-top img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="people-info">
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
            <div class="people-info">
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

<!-- ## Research Staff/Visitors -->

<div class="row people-category">
    {% for person in site.data.people %}
        {% if person.category == "Research Staff/Visitors" %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="card-img-top img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="people-info">
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
