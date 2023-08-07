# Brown IVL Website (README IN PROGRESS)

## General Instructions

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

    - index.md: https://ivl.cs.brown.edu/
    - research.md: https://ivl.cs.brown.edu/research.html
    - people.md: https://ivl.cs.brown.edu/people.html
    - teaching.md: https://ivl.cs.brown.edu/teaching.html
    - openings.md: https://ivl.cs.brown.edu/openings.html

## Creating New Project Pages

### Creating the Markdown Page

To build a new project page, create a .md file in the /research folder. Note that your filename will become the link to the page, i.e. ivl.cs.brown.edu/research/[filename].

Refer to [project-page-template.md](https://github.com/brown-ivl/brown-ivl.github.io/blob/main/research/project-page-template.md) for more information about formatting your Markdown project page.

### Updating the Research Page

In order to have a link to access your new project page, you will need to either update the existing link for the research item or add a new research item. You can do so by updating \_data/research.json to include the appropriate information.
