---
layout: page
title: Research
permalink: /research
---

<div class="search-div">
  <input class="form-control form-control-md" type="text" id="searchInput" onkeyup="searchProjects()" placeholder="Search for a publication or report">
</div>

<div class="research">
  {% for page in site.data.research %}
    <div class="research-item row">
      <div class="img-div-research col-sm-2">
          <a href="{{ page.projectPage }}" target="_blank">
            <img src="assets/{{ page.image }}" class="img-fluid" alt="{{page.title}}">
          </a>
      </div>
      <div class="content-div-research col-sm-10">
          <div class="title-year">
            <div class="research-title-div">
              <a href="{{ page.projectPage }}" target="_blank">
                <h5 class="card-title research-title"> {{page.title}}</h5>
              </a>
            </div>
            <div class="research-year-div">
              <h6 class="research-year">{{page.year}}</h6>
            </div>
          </div>
          <h6 class="research-authors">{{page.authors}}</h6>
          <h6 class="research-journal">{{page.journal}}</h6>
          <div class="research-resources">
            {% if page.pdf %}
              <h6>[<a href="{{page.pdf}}">PDF</a>]</h6>
            {% endif %}
            {% if page.projectPage %}
              <h6>[<a href="{{page.projectPage}}">Project Page</a>]</h6>
            {% endif %}
          </div>
      </div>
    </div>
  {% endfor %}
</div>
