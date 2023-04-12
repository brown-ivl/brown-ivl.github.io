---
layout: base
title: Research
---

# Research

<div class="row research">
  {% for page in site.data.research %}
    <div class="card research-item">
      <div class="image-div">
          <a href="{{ page.projectPage }}" target="_blank">
            <img src="assets/{{ page.image }}" class="card-img-left img-fluid" alt="{{page.title}}">
          </a>
      </div>
      <div class="card-body">
          <a href="{{ page.projectPage }}" target="_blank">
            <h5 class="card-title"> {{page.title}}</h5>
          </a>
          <h6>{{page.journal}}</h6>
          <h6 class="card-text">{{page.author}}</h6>
          <h6 class="card-text">{{page.year}}</h6>
      </div>
    </div>
  {% endfor %}
</div>
