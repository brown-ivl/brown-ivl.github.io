---
layout: base
title: Teaching
permalink: /teaching
---

# Courses

<div class="courses">
    {% for course in site.data.teaching.courses %}
        <div class="teaching-card">
            <div class="teaching-image">
                <img class="img-fluid" src="assets/{{ course.image }}">
            </div>
            <div class="teaching-text"> 
                <h6>{{ course.title }}</h6>
                <div class="teaching-date">
                    {% for item in course.sems %}
                        <a href="{{ item.page }}" target="_blank"> {{item.sem}} </a>
                    {% endfor %}
                </div>
            </div>
        </div>
    {% endfor %}
</div>

# Workshops & Tutorials

<div class="workshops">
    {% for workshop in site.data.teaching.workshops %}
        <div class="teaching-card">
            <div class="teaching-image">
                <img class="img-fluid" src="assets/{{ workshop.image }}">
            </div>
            <div class="teaching-text"> 
                <h6>{{ workshop.title }}</h6>
                <div class="teaching-date">
                    <a href="{{ workshop.page }}" target="_blank"> {{workshop.year}} </a>
                </div>
            </div>
        </div>
    {% endfor %}
</div>
