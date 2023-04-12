---
layout: base
title: Teaching
permalink: /teaching
---

## Courses

<div class="row courses">
    {% for course in site.data.teaching.courses %}
        <div class="card teaching-card">
            <img src="assets/{{ course.image }}" class="card-img-top img-fluid" alt="{{course.title}}">
            <div class="card-body">
                <h5 class="card-title">{{course.title}}</h5>
            </div>
            <ul class="list-group list-group-flush">
                    {% for item in course.sems %}
                        <li class="list-group-item">
                            <a href="{{ item.page }}" target="_blank"> {{item.sem}} </a>
                            {% if item.subText %}
                                <p>(<a href="{{ item.subTextLink }}" target="_blank"> {{item.subText}} </a>)</p>
                            {% endif %}
                        </li> 
                    {% endfor %}
            </ul>
        </div>
    {% endfor %}
</div>

## Workshops & Tutorials

<div class="row workshops">
    {% for workshop in site.data.teaching.workshops %}
        <div class="card teaching-card">
            <div class="teaching-image">
                <img src="assets/{{ workshop.image }}" class="card-img-top teaching-image" alt="{{workshop.title}}">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{workshop.title}}</h5>
                <h6><a href="{{ workshop.page }}" target="_blank"> {{workshop.year}} </a></h6>
            </div>
        </div>
    {% endfor %}
</div>
