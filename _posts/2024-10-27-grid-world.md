---
title: Grid World
date: 2024-10-26 20:08:20 +0800
categories: [reinforcement-learning]
tags: [grid-world]     # TAG names should always be lowercase
comments: true
grid_world: true
custom_css: /assets/css/grid-world.css
---

grid world test 111

This tutorial will guide you how to write a post in the _Chirpy_ template, and it's worth reading even if you've used Jekyll before, as many features require specific variables to be set.

## Naming and Path

Create a new file named `YYYY-MM-DD-TITLE.EXTENSION`{: .filepath} and put it in the `_posts`{: .filepath} of the root directory. Please note that the `EXTENSION`{: .filepath} must be one of `md`{: .filepath} and `markdown`{: .filepath}. If you want to save time of creating files, please consider using the plugin [`Jekyll-Compose`](https://github.com/jekyll/jekyll-compose) to accomplish this.

## Front Matter

Basically, you need to fill the [Front Matter](https://jekyllrb.com/docs/front-matter/) as below at the top of the post:

```yaml
---
title: TITLE
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [TOP_CATEGORIE, SUB_CATEGORIE]
tags: [TAG]     # TAG names should always be lowercase
---
```




<div class="container">
      <div class="input-container">
        <label for="k-value">Enter k value:</label>
        <input type="number" id="k-value" min="0" step="1" />
        <button id="submit-k">Submit</button>
      </div>
      <div class="grid" id="grid"></div>
</div>

<script>
  

</script>