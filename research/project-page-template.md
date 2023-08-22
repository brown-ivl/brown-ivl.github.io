---
layout: project
title: ""
authors:
  - author:
      name: "Author Name"
      affiliation: 1
      link:
  - author:
      name: "Author Name"
      affiliation: 1
      link:
  - author:
      name: "Author Name"
      affiliation: 2
      link:
affiliations:
  - "<sup>1</sup>[affiliation]"
  - "<sup>2</sup>[affiliation]"
journal: ""
redirect_from:
  - add redirect_path here
  - another path here
---

{% include icons.html paper="[add link here]" supplementary="[add link here]" code="[add link here]" dataset="[add link here]" %}

## Overview

You can add text and links as normal in Markdown. For example, [this](isalink.com). _This_ text is italicized and **this** text is bolded.

Fill in the frontmatter (the section above between the 3 dashes) with the appropriate content. The redirect_from item is optional. However, if you are switching from an old project url to a new one created via a Markdown page here, you may want to add redirect links so that people who access your old project url will be redirected to this new page. To do so, add the links you would like to redirect from to the redirect_from item in the frontmatter. Note that a trailing backslash will make a difference. You may want to add both the path with and without the trailing backslash in your redirect_from list. 

Below are ways to add different types of media:

### Image

{% include full_image.html path="/assets/images/projects/[project name]/[image name/path]" alt="[Alt Text]" %}

### YouTube Video

<div class="center">
    <iframe width="560" height="315" src="[link here]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Video File

{% include video.html path="/assets/images/projects/[project name]/[video name/path]" %}

### Notes on Media Content

Please make sure to add all of your resource files needed for the website to the folder at the following path: [assets/images/projects/[project name]](/assets/images/projects/)

You can also add content via HTML for additional customization if desired. If you have other formats for content you would like to display, please feel free to contact me (Iris Huang) on Slack!

## Methods

Methods here.

## Results

Results here. You can refer to the Overview section for ways to add different types of media. If there is a layout for media you would like to use that doesn't exist yet, you can add it using html content here directly or contact me directly to create a new layout format to use!

## Citations

    Add your bibtex citation here! Be sure to indent the citation by 4 spaces.

## Acknowledgements

## Contact

Contact Name ([contact email](contact_email@email.com))

Contact Name ([contact email](contact_email@email.com))
