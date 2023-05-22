---
layout: base
title: Teaching
permalink: /teaching
---

# Courses

<div class="row courses">
    {% for course in site.data.teaching.courses %}
        <div class="teaching-card row">
            <div class="img-div-teaching col-sm-3">
                <a href="{{course.sems[0].page}}" target="_blank">
                    <img src="assets/{{ course.image }}" class="img-fluid" alt="{{course.title}}">
                </a>
            </div>
            <div class="content-div-teaching col-sm-9">
                <h4 class="card-title">{{course.title}}</h4>
                <div class="course-sems">
                    {% for item in course.sems %}
                        <h6 class="sem-item">
                            <a href="{{ item.page }}" target="_blank"> 
                            {{item.sem}} 
                            {% if item.subText %}
                                ({{item.subText}})
                            {% endif %}
                            </a>
                            
                        </h6> 
                    {% endfor %}
                </div>
            </div>
        </div>
    {% endfor %}
</div>

# Workshops & Tutorials

<div class="row workshops">
    {% for workshop in site.data.teaching.workshops %}
        <div class="teaching-card row">
            <div class="img-div-teaching col-sm-3">
                <a href="{{workshop.page}}" target="_blank"> <img src="assets/{{ workshop.image }}" class="card-img-top teaching-image" alt="{{workshop.title}}"></a>
            </div>
            <div class="content-div-teaching col-sm-9">
                <h5 class="card-title">{{workshop.title}}</h5>
                <h6><a href="{{ workshop.page }}" target="_blank"> {{workshop.year}} </a></h6>
            </div>
        </div>
    {% endfor %}
</div>
