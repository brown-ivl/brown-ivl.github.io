---
layout: generated_page
title: People
permalink: /people
---

## Principal Investigator

<!-- TODO: change link to be on click of card -->
<!-- TODO: figure out if there's a way to set formatting via layout based on md tag -->

<div class="people-category">
    {% for person in site.data.people %}
        {% if person.category == "Principal Investigator" %}
        <div class="card person-item">
            <img class="card-img-top person-image" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            <div class="card-body">
                <a href="{{person.link}}" target="_blank" class="card-title">{{person.name}}</a>
                <div class="card-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
                </div>
            </div>
        </div>
        {% endif %}
    {% endfor %}
</div>

## PhD Students

<div class="people-category">
    {% for person in site.data.people %}
        {% if person.category == "PhD Students" %}
        <div class="card person-item">
            <img class="card-img-top person-image" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            <div class="card-body">
                <a href="{{person.link}}" target="_blank" class="card-title">{{person.name}}</a>
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
        <div class="card person-item">
            <img class="card-img-top person-image" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            <div class="card-body">
                <a href="{{person.link}}" target="_blank" class="card-title">{{person.name}}</a>
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
        <div class="card person-item">
            <img class="card-img-top person-image" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            <div class="card-body">
                <a href="{{person.link}}" target="_blank" class="card-title">{{person.name}}</a>
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
