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
            <div class="person-item">
                <div class="person-image">
                    <img class="img-fluid" src="assets/{{ person.imgPath }}">
                </div>
                <a href="{{ person.link }}" target="_blank"> {{person.name}} </a>
                <div class="person-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
                </div>
            </div>
        {% endif %}
    {% endfor %}
</div>

## PhD Students

<div class="people-category">
    {% for person in site.data.people %}
        {% if person.category == "PhD Students" %}
            <div class="person-item">
                <div class="person-image">
                    <img class="img-fluid" src="assets/{{ person.imgPath }}">
                </div>
                <a href="{{ person.link }}" target="_blank"> {{person.name}} </a>
                <div class="person-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
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
                <div class="person-image">
                    <img class="img-fluid" src="assets/{{ person.imgPath }}">
                </div>
                <a href="{{ person.link }}" target="_blank"> {{person.name}} </a>
                <div class="person-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
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
                <div class="person-image">
                    <img class="img-fluid" src="assets/{{ person.imgPath }}">
                </div>
                <a href="{{ person.link }}" target="_blank"> {{ person.name }} </a>
                <div class="person-text"> 
                    <h6>{{ person.years }} </h6>
                    <h6>{{ person.moreInfo }} </h6>
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
