# Video Slider Component - Usage Guide

The video slider component allows you to create an interactive video carousel on research pages with navigation controls and optional captions.

## Basic Usage

### 1. Define Videos in Page Front Matter

Add a `video_sliders` array to your research page's front matter:

```yaml
---
layout: project
title: "Your Project Title"
video_sliders:
  - videos:
      - video: "/assets/images/projects/your-project/video1.mp4"
        caption: "Optional caption for video 1"
      - video: "/assets/images/projects/your-project/video2.mp4"
        caption: "Another optional caption"
      - video: "/assets/images/projects/your-project/video3.mp4"
---
```

### 2. Include the Slider in Your Page

In your markdown content, add:

```liquid
{% include video_slider.html number=1 height=56.25 unit="%" %}
```

## Parameters

- **`number`** (required): The index of the video slider (1-based). If you have multiple sliders, use `number=1`, `number=2`, etc.
- **`height`** (required): The height of the slider container
- **`unit`** (required): The unit for height (typically `%` for aspect ratio or `px` for fixed height)
- **`muted`** (optional): Add this to mute videos by default
- **`autoplay`** (optional): Add this to autoplay videos (combine with `muted` for better browser support)
- **`duration`** (optional): Number of seconds before auto-advancing to next slide

## Examples

### Example 1: Basic Video Slider (16:9 aspect ratio)

```liquid
{% include video_slider.html number=1 height=56.25 unit="%" %}
```

### Example 2: Multiple Video Sliders on Same Page

**Front matter:**
```yaml
video_sliders:
  - videos:
      - video: "/assets/images/projects/example/comparison1.mp4"
      - video: "/assets/images/projects/example/comparison2.mp4"
  - videos:
      - video: "/assets/images/projects/example/result1.mp4"
        caption: "Result on Dataset A"
      - video: "/assets/images/projects/example/result2.mp4"
        caption: "Result on Dataset B"
```

**In page content:**
```markdown
## Comparison Videos
{% include video_slider.html number=1 height=56.25 unit="%" %}

## Results
{% include video_slider.html number=2 height=56.25 unit="%" %}
```

### Example 3: Auto-playing Muted Slider

```liquid
{% include video_slider.html number=1 height=56.25 unit="%" autoplay=true muted=true %}
```

### Example 4: Auto-advancing Slider (every 5 seconds)

```liquid
{% include video_slider.html number=1 height=56.25 unit="%" duration=5 %}
```

### Example 5: Fixed Height Slider

```liquid
{% include video_slider.html number=1 height=600 unit="px" %}
```

## Complete Example Page

```yaml
---
layout: project
title: "My Amazing Research"
authors:
  - author:
      name: "Your Name"
      affiliation: 1
      link: "https://yourwebsite.com"
affiliations:
  - "<sup>1</sup> Your Institution"
journal: Conference 2025
video_sliders:
  - videos:
      - video: "/assets/images/projects/my-project/method-overview.mp4"
        caption: "Our method processes the input in three stages"
      - video: "/assets/images/projects/my-project/comparison-baseline.mp4"
        caption: "Comparison with baseline method"
      - video: "/assets/images/projects/my-project/comparison-sota.mp4"
        caption: "Comparison with state-of-the-art"
      - video: "/assets/images/projects/my-project/ablation.mp4"
        caption: "Ablation study results"
---

{% include icons.html paper="https://arxiv.org/..." code="https://github.com/..." %}

## Overview

Brief description of your work...

## Method

{% include video_slider.html number=1 height=56.25 unit="%" %}

The videos above demonstrate our approach...
```

## Features

- **Navigation Controls**: Left/right arrows for manual navigation
- **Indicators**: Dots at the bottom show current slide and allow direct navigation
- **Responsive**: Adapts to different screen sizes
- **Video Controls**: Each video has standard controls (play, pause, volume, fullscreen)
- **Auto-pause**: Videos automatically pause when switching slides
- **Captions**: Optional captions overlay at the bottom of each video
- **Auto-advance**: Optional automatic slide progression

## Notes

- Videos should be in MP4 format for best browser compatibility
- The aspect ratio is typically 16:9 (height=56.25%)
- Use relative paths starting from the repository root
- Videos automatically pause when the user navigates to a different slide
- All videos in a slider should ideally have the same aspect ratio for best visual consistency
