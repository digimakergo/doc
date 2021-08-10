---
layout: page
title: Templating
parent: Tutorial
permalink: /tutorial/templating
nav_order: 3
---


<details open markdown="block">
  <summary>
    Templating
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Templating is a typical way to writ website pages. Digiamker provides ways to implement multi sites, a powerful template override configuration, and template functions.

## Site setting

In configs/dm.yaml section sites you will see configuration below:
```yaml
sites:
  - identifier: dmdemo
    host: "localhost:9200"
    #path: "demo"
    root: 3
    default: 3
    template_folder:
      - "demo"  #first template folder will be used for base template(layout)
      - "test" # todo: idea to support package like "<packagename>, test"
```

host: the website visit host, including port if there is
path: path after the host if there is
root: root content of the site
default: default content of the site, for index page
template_folder: folder under template folder(by default it's under ``web/templates``)(can be changed in ``dm.yaml/general/template_folder``)


## Base template

Base template defines the layout, which is in base.html (eg. web/template/demo/base.html). 

Digimaker uses block in templating, meaning base.html defines block and real template fills in value. In example below, base.html defines ``content`` block and is filled in ``article/full.html``

base.html
```html
{% raw %}
        <div class="main">
            {%block content%}Default body{% endblock %}
        </div>
{% endraw %}
```

article/full.html
```html
{% raw %}

{% extends "../base.html" %}

{% block content%}
<div class="{{content.ContentType}} full">

    <h2>{{content.Name}}</h2>
    {%if content.Summary%}
    <div class="summary">
        {{content.Summary|safe}}
    </div>
    {%endif%}    

    {%if content.Body%}
    <div class="summary">
        {{content.Body|safe}}
    </div>
    {%endif%} 
</div>
{%endblock%}

{% endraw %}

```


Digimaker by default provides nice-url, so if you use ``<a href="{{dm.niceurl(content)}}">News</a>``, it will automically load the news content page.

For full template language, please vist [Pongo2's page](https://github.com/flosch/pongo2)

## Templating content page
When visiting a content page, Digimaker will try to find template of the content. Below is an template override example(under ``configs/template_override.yaml``) of visiting a folder, 
so for any folder content type, it will use <template folder>/folder/full.html.:

```yaml
- contenttype: folder
  viewmode: full
  to: folder/full.html
```

There are many possiblities in setting the override rule, eg. by content type, id, field value, author, etc. For more template override rules, see [references/template-override](../references/template-override)
  
Note: if there are several rules matching one content, the topest will be used. There is debug tool which can debug which template is used and the matching process.
  
 
   





