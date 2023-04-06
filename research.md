---
layout: base
title: Research
permalink: /research
---

# Research

<ul>
  {% for page in site.posts %}
    <li>
      <h2><a href="{{ page.url }}">{{ page.title }}</a></h2>
      {{ page.excerpt }}
    </li>
  {% endfor %}
</ul>
