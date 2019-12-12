---
layout: default
permalink: /:title
---


Blog with Github Page
=====================

I finally decided to move my blog from wordpress to Github Page after I read this [post](https://karpathy.github.io/2014/07/01/switching-to-jekyll/) and I'm just a little bit tired of using wp, which is still being censored in China, making it inconvenient to use.  

There are many tutorials on how to do this, here are some that I found particularly useful:  

- [Official introduction](https://pages.github.com/)    
- [How to deal with math notations?](http://csega.github.io/mypost/2017/03/28/how-to-set-up-mathjax-on-jekyll-and-github-properly.html)
- [How to preview my blog locally?](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
- [Where is my post and how to make its url shorter?](https://jekyllrb.com/docs/permalinks/)
- [How to show a list of my posts](https://jekyllrb.com/docs/posts/)

> **Tips:**
>
> 1. Github Page is now by default using [https](https://github.com/blog/2186-https-for-github-pages), so when you try to use MathJax, make sure you refer it with **https** too(in script tag).
>
> 2. It's better to run **bundler install** in [DevKit](http://rubyinstaller.org/add-ons/devkit/) environment, not in naive cmd if you're using windows, better chance to solve dependency problems.
>
> 3. I defined my premalink in [Front Matter](https://jekyllrb.com/docs/frontmatter/) since it didn't work somehow if I did it in [Configuration](https://jekyllrb.com/docs/configuration/) file

Also, I use [Pycharm](https://www.jetbrains.com/pycharm/) to work with Github and use [StackEdit](https://stackedit.io/) to write markdown files, but you can choose whatever you want as long as they are comfortable for you.
