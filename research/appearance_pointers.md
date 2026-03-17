---
layout: project
title: "Appearance Pointers: MultiModal Region Control of Diffusion Transformers"
authors:
  - author:
      name: "Rahul Sajnani"
      affiliation: "1,2"
      link: "https://scholar.google.com/citations?hl=en&user=HAtfBjoAAAAJ&view_op=list_works&sortby=pubdate"
  - author:
      name: "Yulia Gryaditskaya"
      affiliation: 2
      link: 
  - author:
      name: "Radomír Měch"
      affiliation: 2
      link:
  - author:
      name: "Srinath Sridhar"
      affiliation: 1
      link: "https://cs.brown.edu/people/ssrinath/"
  - author: 
      name: "Matheus Gadelha"
      affiliation: 2
      link: 
affiliations:
  - "<sup>1</sup> Brown University"
  - "<sup>2</sup> Adobe Research"
journal: "ArXiv 2026"
redirect_from:
  - /projects/appearance_pointers
  - /projects/appearance_pointers/
---

{% include icons.html %}


<style>
    :root { --bg: #f8f9fa; --text: #333; --accent: #007bff; }
    /* body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; margin: 0; padding: 200px; padding-top: 100px; } */
    /* header { text-align: center; margin-bottom: 50px; } */
    h1 { font-weight: 300; letter-spacing: -1px; margin-bottom: 10px; }
    h2 { border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 60px;  font-weight: 400; scroll-margin-top: 150px; }

    img[alt="Dataset"] {
        background-color: white;
        border: 1px solid #eee; 
        /* display: block; Ensure no extra spacing below the image */
        /* max-width: 100%; Keep it responsive */
        height: auto;
    }

    /* Table of Contents Styling */
    .toc-container {
        position: sticky;
        top: 75px;
        background: rgba(248, 249, 250, 0.95);
        padding: 15px 0;
        margin-bottom: 40px;
        border-bottom: 1px solid #ddd;
        z-index: 1000;
        text-align: center;
    }
    .toc-links { display: flex; justify-content: center; gap: 25px; flex-wrap: wrap; }
    .toc-links a { 
        text-decoration: none; 
        color: #555; 
        font-size: 14px; 
        font-weight: 500;
        transition: color 0.2s;
    }
    .toc-links a:hover { color: var(--accent); }

    /* Base Grid System */
    .results-grid {
        display: grid;
        gap: 20px;
        max-width: 1200px; /* Increased width to accommodate 6 columns */
        margin: 0 auto 50px auto;
    }

    /* Specific Grid Variations */
    .grid-6 { grid-template-columns: repeat(6, 1fr); }
    .grid-4 { grid-template-columns: repeat(4, 1fr); }
    .grid-1 { grid-template-columns: 1fr; max-width: 900px; }
    

    /* Responsive Fallback: stacks on mobile */
    @media (max-width: 1000px) {
        .grid-6, .grid-4 { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
        .grid-6, .grid-4 { grid-template-columns: 1fr; }
    }

    /* Card Styling */
    .card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        display: flex;
        flex-direction: column;
    }

    /* Adjust media container height based on grid density */
    .grid-1 .media-container { height: auto; }
    .grid-4 .media-container { height: 250px; }
    .grid-6 .media-container { height: 180px; }
    object, embed, iframe {
        width: 100%;
        height: 100%;
        display: block;
    }

    .media-container {
        width: 100%;
        background: #eee;
        border-bottom: 1px solid #eee;
    }

    embed, img { width: 100%; height: 100%; object-fit: cover; border: none; }

    .info { padding: 12px; }
    .tag { font-size: 9px; text-transform: uppercase; color: var(--accent); font-weight: bold; letter-spacing: 1px; }
    h3 { margin: 2px 0; font-size: 14px; }
    p { margin: 0; line-height: 1.3; }
</style>
<script id="MathJax-script" async src="/assets/images/projects/appearance_pointers/latex.js"></script>



<nav class="toc-container">
    <div class="toc-links">
        <a href="#capabilities">Capabilities</a>
        <a href="#methodology">Methodology</a>
        <a href="#qualitative">Qualitative Results</a>
        <a href="#dataset">Dataset</a>
        <a href="#citation">Citation</a>
        <a href="#contact">Contact</a>

        </div>
</nav>

<h2 id="capabilities">Capabilities</h2>
<div class="results-grid grid-1">
    <div class="card">

        <div class="media-container"><img src="/assets/images/projects/appearance_pointers/Teaser_new.png" alt="Capabilities"></div>

        <!-- <div class="media-container" style="aspect-ratio: 1 / 1.2;">
            <object 
                data="/assets/images/projects/appearance_pointers/Teaser_new.pdf#view=Fit&toolbar=0&navpanes=0" 
                type="application/pdf"
                width="100%"
                height="100%">
            </object>
        </div> -->
    </div>
</div>

<h2 id="methodology">Appearance Pointers</h2>
<div class="results-grid grid-1">
    <div class="card">
        <div class="info">
            <h3> Overview </h3>
            <p><b>Appearance Pointers</b> is a method that performs region-conditioned image generation and editing by injecting regional tokens into a pre-trained FLUX Kontext Generation Model. The <b>Appearance Pointer tokens (\({}^{I}AP, {}^{T}AP\))</b> guide the generation process by linking regions to their respective conditions, enabling precise multi-modal region control over the generated content.</p>
        </div>
        <div class="media-container" style="padding: 0 10px; box-sizing: border-box; background: white;"><img src="/assets/images/projects/appearance_pointers/Overview.png" alt="Overview"></div>
    </div>

    <div class="card">
        <div class="info">
            <h3> Region Linking </h3>
            <p>Region Linking processes each region separately and fuses multi-modal signals from text, image, and mask to obtain region tokens for the image stream \({}^IM_i\) and text stream \({}^TM_i\) of the FLUX transformer for the \(i^{th}\) region.</p>
        </div>
        <div class="media-container" style="padding: 0 10px; box-sizing: border-box; background: white;"><img src="/assets/images/projects/appearance_pointers/Region_Linking.png" alt="Region Linking"></div>
    </div>

    <div class="card">
        <div class="info">
            <h3> Region Aggregation </h3>
            <p>Region Aggregation combines the region tokens from the image and text streams of all the regions to generate a unified representation for each region. The below image shows this aggregation process where the aggregation at each spatial patch independently. This preserves the spatial cues in Appearance Pointer tokens (\({}^{I}AP, {}^{T}AP\))</p>
        </div>
        <div class="media-container"><img src="/assets/images/projects/appearance_pointers/Region_Aggregation.png" alt="Region Aggregation"></div>
    </div>

    <div class="card">
        <div class="info">
            <h3> Attention Map for Appearance Pointer </h3>
            <p> Once trained, the Apperance Pointer points to the corresponding region condition as shown below. Here, the <b>Query is from the Appearance Pointer</b> token and the <b>Keys are from the Image Condition tokens</b>. The heat map displays the region corresponding to the query location highlighted by yellow point. </p>
        </div>
        <div class="media-container" style="padding: 0 10px; box-sizing: border-box; background: white;"><img src="/assets/images/projects/appearance_pointers/Attention_maps.png" alt="Appearance Pointer Attention Map"></div>
    </div>
</div>


<h2 id="qualitative">In The Wild Qualitative Results with Heterogeneous Region Conditions</h2>
<div class="results-grid grid-1">
    <div class="card">
        <div class="info">
            <p><b>Image Generation and Editing Gallery:</b> Appearance Pointers can perform regional edits and generation using heterogeneous conditions in the wild. Each region is accompanied by a number which relates the condition to the region.</p>
        </div>
        <div class="media-container"><img src="/assets/images/projects/appearance_pointers/Qual_Supp_2.png" alt="Results 1"></div>
    </div>
</div>
<div class="results-grid grid-1">
    <div class="card">
        <div class="info">
            <p><b>Image Generation and Editing Gallery:</b> Appearance Pointers can perform regional edits and generation using heterogeneous conditions in the wild. Each region is accompanied by a number which relates the condition to the region.</p>
        </div>
        <div class="media-container"><img src="/assets/images/projects/appearance_pointers/Qual_Supp_1.png" alt="Results 2"></div>
    </div>
</div>
<div class="results-grid grid-1">
    <div class="card">
        <div class="info">
            <p><b>Image Generation and Editing Gallery:</b> Appearance Pointers can perform regional edits and generation using heterogeneous conditions in the wild. Each region is accompanied by a number which relates the condition to the region.</p>
        </div>
        <div class="media-container"><img src="/assets/images/projects/appearance_pointers/Qual_Supp_3.png" alt="Results 3"></div>
    </div>
</div>

## Dataset {#dataset}
<div class="results-grid grid-1">
    <div class="card">
        <div class="info">
            <p><b>Dataset</b>: We provide an extensive region control dataset with the following sources of information for each image:</p>
            <ol>
                <li>Region Segments</li>
                <li>Region Captions</li>
                <li>Region Pose Variation Edits</li>
                <li>Region Texture on Sphere</li>
                <li>Score for Pose and Texture Consistency</li>
            </ol>

        </div>
        <div class="media-container"><img src="/assets/images/projects/appearance_pointers/dataset_regions_optimized.png" alt="Dataset"></div>
    </div>
</div>



## Citation

    @misc{sajnani2026AppearancePointers,
      title={Appearance Pointers: MultiModal Region Control of Diffusion Transformers}, 
      author={Rahul Sajnani and Yulia Gryaditskaya and Radomír Měch and Srinath Sridhar and Matheus Gadelha},
      year={2026},
      eprint={},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
    }

## Acknowledgements

Part of this work was done during Rahul's internship at Adobe.

## Contact

Rahul Sajnani rahul_sajnani@brown.edu
