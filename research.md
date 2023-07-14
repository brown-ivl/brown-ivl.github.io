---
layout: page
title: Publications
permalink: /research
---

<div class="search-div">
  <input class="form-control form-control-md" type="text" id="searchInput" onkeyup="searchProjects()" placeholder="Search for a publication or report">
</div>

<div class="research">
  {% for page in site.data.research %}
    <div class="research-item row">
      <div class="img-div-research col">
          <a href="{{ page.projectPage }}" target="_blank">
            <img src="assets/{{ page.image }}" class="img-fluid" alt="{{page.title}}">
          </a>
      </div>
      <div class="content-div-research col">
          <div class="top-content-div">
            <div class="title-div">
              <div class="research-title-div">
                <a href="{{ page.projectPage }}" target="_blank">
                  <h5 class="card-title research-title"> {{page.title}}</h5>
                </a>
              </div>
            </div>
            <h6 class="research-authors">{{page.authors}}</h6>
            <h6 class="research-journal">{{page.journal}}</h6>
          </div>
          <div class="research-resources">
            <div class="resource-icons">
              {% if page.pdf %}
                <a class="research-icon" href="{{page.pdf}}">
                  <img class="icon-svg" src="/assets/images/icons/material-ui/pdf-small.svg"/> PDF </a>
              {% endif %}
              {% if page.projectPage %}
                <a class="research-icon" href="{{page.projectPage}}">
                <img class="icon-svg" src="/assets/images/icons/material-ui/web-small.svg"/> Project Page</a>
              {% endif %}
            </div>
            <div class="research-year-div">
                <h6 class="research-year">{{page.year}}</h6>
            </div>
          </div>
      </div>
    </div>
  {% endfor %}
</div>

<!-- <div class="research">
  {% for page in site.data.research %}
    <div class="research-item row">
      <div class="img-div-research col">
          <a href="{{ page.projectPage }}" target="_blank">
            <img src="assets/{{ page.image }}" class="img-fluid" alt="{{page.title}}">
          </a>
      </div>
      <div class="content-div-research col">
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
              <a class="research-icon" href="{{page.pdf}}">
                <img class="icon-svg" src="/assets/images/icons/material-ui/pdf-small.svg"/> PDF </a>
            {% endif %}
            {% if page.projectPage %}
              <a class="research-icon" href="{{page.projectPage}}">
              <img class="icon-svg" src="/assets/images/icons/material-ui/web-small.svg"/> Project Page</a>
            {% endif %}
          </div>
      </div>
    </div>
  {% endfor %}
</div> -->
