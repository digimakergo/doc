---
layout: page
title: Website & Templating
parent: Tutorial
permalink: /tutorial/templating
nav_order: 5
---
# Site & Templating
<details open markdown="block">
  <summary>
    Templating
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Templating is a typical way to write web pages. With digimaker sitekit, you can write templates smoothly. 

Digimaker's template can be used in not only website, but also in any html-generating context, eg. pdf generating from html, email sending.

The [template override](#template-override) provides condition-based rules for template files, so you can organize template files, template blocks, and reused templates better.

> *Note: Digimaker doesn't have session based authorization. So for displaying content needing login, we suggest to use rest api with client rendering - react/vue/angular or jquery.*

## Set up site
In configs/dm.yaml `sites` section you will see configuration below:
```yaml
sites:
  - identifier: dmdemo
    host: "localhost:9200"
    #path: "demo"
    root: 3
    default: 3
```

- host: the website visit host, including port if there is
- path: prefix of the site path if there is
- root: root content id of the site
- default: default content id of the site, for index page

## Templating

### Content template
When visiting content from a url, it will try to find template in `full` viewmode.(See `template override` below for more about override with viewmode).

An article's page may look like below(under article/full.html)
```html
{% raw %}{% extends "../base.html" %}

{%block content%}
<div class="{{content.ContentType}} full">
    <h2>{{content.Name}}</h2>
    <div class="article-author">created by {{content.AuthorName}}</div>
    {{output_field( "summary", content )}}
    {{output_field( "body", content )}}
</div>
{%endblock%}{% endraw %}
```

### Base template
Base template defines the layout, which is in base.html (eg. web/templates/demo/base.html). Content template is the entry template when visiting a content page and it uses `extends` to 'inherit' base template.

Digimaker uses block in templating, meaning base.html defines block and real template fills in value. In example below, base.html defines ``content`` block and is filled in ``article/full.html``

base.html
```html
{% raw %}<html>
  ...
<body>
<div class="main">
    {%block content%}Default body{% endblock %}
</div>
</body>
</html>{% endraw %}
```


### Template language

The template language is syntax and feature-compatible with [Django 1.7](https://django.readthedocs.io/en/1.7.x/topics/templates.html). For full template language grammar&features, please vist [Pongo2's page](https://github.com/flosch/pongo2#features)

## Template override
When visiting a content page, Digimaker will try to find template of the content. Below is an template override example(under ``configs/template_override.yaml``) of visiting a folder, 
so for any folder content type, it will use ``folder/full.html``:

```yaml
- contenttype: folder
  viewmode: full
  to: folder/full.html
```

There are many possiblities in setting the override rule, eg. by content type, id, field value, author, etc. For more template override rules, see [references/template-override](../references/template-override)
  
> *Note: if there are several rules matching one content, the topest will be used. There is debug tool which can debug which template is used and the matching process.*
  

Also you can use `include` to group override rules based on eg. `site`, `viewmode`, `"view section"`(content or field or others), see [Include other override files](../references/template-override#include-other-override-files).

## Nice url

Digimaker by default provides nice-url, so if you use ``<a href="{% raw %}{{dm.niceurl(content)}}{% endraw %}">News</a>``, it will link to the news content page.  
 
## Template functions & filters

For template function&filter refrences, visit [functions/filters](../references/template)   





