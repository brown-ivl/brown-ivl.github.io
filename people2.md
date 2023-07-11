---
layout: page
title: People
permalink: /people2
---

## Current Members

<div class="row people-category">
    {% for person in site.data.people %}
        {% if person.category != "Brown IVL Alumni" %}
        <div class="person-item">
            <a href="{{person.link}}" target="_blank">
                <img class="img-fluid" src="assets/{{ person.imgPath }}" alt="{{person.name}}">
            </a>
            <div class="card-body">
                <h5 class="card-title">{{person.name}}</h5>
                <div class="card-text"> 
                    <h6>{{ person.category }} </h6>
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
