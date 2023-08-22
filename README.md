# Brown IVL Website

## Creating Project Pages & Blog Posts

For most users, you will likely only need to create or modify a project page. This section will describe the steps required to create or update a project page or blog post.

1. Create a fork of the repository.

2. To create a new project page, add a .md file in the [`research`](/research/) folder. To create a new blog post, add a new .md file in the [`blogs`](/blogs/) folder. Note that your filename will become the link to the page, i.e. ivl.cs.brown.edu/research/[filename]. Refer to the [project-page-template.md](research/project-page-template.md) for more information about formatting your Markdown project page. To modify an existing page, you can find the corresponding Markdown file in the [`research`](/research/) or [`blogs`](/blogs/) folders.

3. Once you have made your desired changes to your page, open a pull request from your fork. Once you have created your pull request, it can then be approved by Srinath for your changes to be added to the website.

## Setup for Local Development

This section below contains instructions on how to setup Jekyll to build the site on a local server. Most users will **not** need to do so. If you are looking to create or modify a project page or blog post, please follow the instructions above on [creating project pages and blog posts](#creating-project-pages-&-blog-posts).

To clone the repository, navigate to your desired location in your directory via your terminal then use the following command:

`git clone https://github.com/brown-ivl/brown-ivl.github.io.git`

### Running the app locally

This website is built with Jekyll, a Ruby Gem. To run the app locally, you will need to ensure you have Ruby and Jekyll installed on your machine. You can follow the instructions [here](https://jekyllrb.com/docs/installation/) to do so.

**If you are unfamiliar with Jekyll, refer to [this step-by-step tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) to familiarize yourself with the basics of building a Jekyll website.**

To build the site and make it available on a local server, use the following command:

`bundle exec jekyll serve`

You can then view the website by navigating to [http://localhost:4000](http://localhost:4000) in your browser.

### Pushing/deploying changes to repo

To push changes from local to the remote repository:

`git add .`

`git commit -m "some message"`

`git push origin`

The website is currently deployed at [ivl.cs.brown.edu](ivl.cs.brown.edu). New changes will be automatically deployed after each push. You can view the deployment process on GitHub [here](https://github.com/brown-ivl/brown-ivl.github.io/actions).

## File Structure & Organization

This repository follows the [Jekyll file directory structure](https://jekyllrb.com/docs/structure/). Below are descriptions for the main folders and important files:

    -> _data: This directory contains the json and yml data files used to populate website content.
        - teaching/courses.json: used to populate the courses on the Teaching page
        - teaching/workshops.json: used to populate the workshops on the Teaching page
        - nagivation.yml: used to generate the navbar items. To add an item to the navbar, add the name and link of a new navbar item to this file.
        - people.json: used to populate people content on the People page
        - research.json: used to populate the research items on the Research/Publications page.

    -> _includes: This directory consists of reusable components that can be added to a markdown page via the `include` tag. Most of the components are used to generate formatted media content in project pages.

    -> _layouts: This directory contains layouts, which are page templates used to display different types of pages.
        -> page.html: This layout is used for the main website pages: index.md, research.md, people.md, teaching.md, openings.md.
        -> project.html: This layout is used for project pages. Markdown files for these pages can be found in the /research directory.

    -> _sass: This directory contains sass partials that can be impored into assets/css/styles.scss which will then be processed into a single stylesheet styles.css.

    -> assets
        -> css: This directory contains .scss files which will then be processed into .css files. These stylesheets can be imported to be used as stylesheets in a layout html file.
            - project.scss: used for the project.html and blog.html layouts
            - styles.scss: used for page.html
        -> images: This directory contains all images used on the website.
        -> js: this directory contains all javascript files used to build the website.

    -> research: The markdown files in the root of the repository correspond to their respective pages on the webpage. It is important to note that the file name and location of a markdown file in the repository will determine its url on the website.

    - _config.yml: This is the config file meant for settings that affect the entire webpage.

    - Gemfile: This file contains the Jekyll gems used on the website. It is similar in function to a requirements.txt file.

## Modifying Main Pages & Components

### Navbar

The code for the Navbar is located at [`_includes_/navbar.html`](/_includes/navbar.html). To add or remove pages from the Navbar, edit the file [`_data/navigation.yml`](/_data/navigation.yml). The file contains a list of pages that will be displayed in the Navbar.

### Home Page

To modify homepage content, edit the file [`index.md`](/index.md). This page uses an include tag to add a carousel component.

#### Carousel

The code for the Carousel is located at [`_includes_/carousel.html`](/_includes/carousel.html). Its functionality is to render the Carousel for the IVL homepage. Information is passed via the front matter in [`index.md`](/index.md).

To change/add carousel images:

- Add images to [`assets/images/carousel`](assets/images/carousel/)
- Add a new image item in carousels.images in the front matter of `index.md`.

### Research Page

To modify the Research page, edit the file [`research.md`](/research.md). To modify the research items displayed on the page, edit the file [`_data/research.json`](/_data/research.json).

#### Search Bar

The Javascript used for the search bar can be found in the `searchProjects()` function in [`/assets/js/main.js`](/assets/js/main.js).

### Teaching Page

To modify the Teaching page, edit the file [`teaching.md`](/teaching.md). To modify the courses displayed on the page, edit the file [`_data/teaching/courses.json`](/_data/teaching/courses.json). To modify the workshops displayed on the page, edit the file [`_data/teaching/workshops.json`](/_data/teaching/workshops.json).

### People Page

To modify the People page, edit the file [`teaching.md`](/people.md). To modify the people displayed on the page, edit the file [`_data/people.json`](/_data/people.json).

### Openings Page

To modify the Openings page, edit the file [`openings.md`](/openings.md).

## Creating and Modifying Project Pages

The Markdown files for project pages can be found at in the [`research`](/research/) folder.

### Creating a New Markdown Page

To build a new project page, create a .md file in the [`research`](/research/) folder. Note that your filename will become the link to the page, i.e. ivl.cs.brown.edu/research/[filename].

Refer to the [project-page-template.md](research/project-page-template.md) for more information about formatting your Markdown project page.

### Redirecting Your Page

1. Redirecting from ordinary URL paths:

If you are switching from an old project url to a new one created via a Markdown page here, you may want to add redirect links so that people who access your old project url will be redirected to this new page. To do so, add the following to your frontmatter (the section between the 3 dashes):

    redirect_from:
      - /redirect/link/here
      - /another/redirect/link/

Note that a trailing backslash will make a difference. You may want to add both the path with and without the trailing backslash in your redirect_from list.

2. Redirecting from hashed URL paths:

The old IVL website utilized a hash router rather than ordinary URL paths. The redirecting for these links is handled via Javascript. The Javascript used for rerouting hashlink pages to their new urls can be found in the function attached to `window.onload` in [`/assets/js/main.js`](/assets/js/main.js).

### Updating the Research Page

In order to have a link to access your new project page, you will need to either update the existing link for the research item or add a new research item. You can do so by updating [`_data/research.json`](/_data/research.json) to include the appropriate information.
