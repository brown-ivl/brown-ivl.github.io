---
layout: base
title: Research
permalink: /research
---

# Research

<div class="search-div">
  <input class="form-control form-control-md" type="text" id="searchInput" onkeyup="searchProjects()" placeholder="Search for a publication or report">
</div>

<div class="row research">
  {% for page in site.data.research %}
    <div class="research-item row">
      <div class="img-div-research col-sm-3">
          <a href="{{ page.projectPage }}" target="_blank">
            <img src="assets/{{ page.image }}" class="img-fluid" alt="{{page.title}}">
          </a>
      </div>
      <div class="content-div-research col-sm-9">
          <a href="{{ page.projectPage }}" target="_blank">
            <h5 class="card-title research-title"> {{page.title}}</h5>
          </a>
          <h6 class="research-authors">{{page.authors}}</h6>
          <h6 class="research-journal">{{page.journal}}</h6>
          <h6 class="research-year">{{page.year}}</h6>
      </div>
    </div>
  {% endfor %}
</div>
