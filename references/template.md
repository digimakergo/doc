---
layout: page
title: Template functions
parent: References
permalink: /references/template
nav_order: 9
has_toc: true
---

<details open markdown="block">
  <summary>
    Template
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Template basis

We are using [Pongo2](https://github.com/flosch/pongo2) as template engine, which uses Python Django like style. Check their documentation to see examples:
 - Simple example: [https://github.com/flosch/pongo2#first-impression-of-a-template](https://github.com/flosch/pongo2#first-impression-of-a-template)
 - Examples as test cases: [https://github.com/flosch/pongo2/tree/master/template_tests](https://github.com/flosch/pongo2/tree/master/template_tests)

### Filters
Check here to see all their built in/add-on filters: [https://github.com/flosch/pongo2/blob/master/docs/filters.md](https://github.com/flosch/pongo2/blob/master/docs/filters.md)


## Content template variables

When visiting a content, these variables are provided

| Variable   | Type     | Description  | 
|:---------|:----|:------------------|
|root| contenttype.ContentTyper entity |the root content of this site|
|default| contenttype.ContentTyper entity |  default content type|
|viewmode| string| "full" when visiting|
|site| string|   site identifier|
|sitepath| string| site path which matches defined path in site settings(in dm.yaml). For example in example.com/en `en` is the sitepath|


## Functions in digimaker

### Contents

#### dm.fetch_byid
Parameter(int): id of the locaiton. 

Result(ContentTyper): content which has the location id
```
{% raw %}{% set content = dm.fetch_byid( 3 ) %}{% endraw %}
```


#### dm.parent
Parameter(ContentTyper)

Result(ContentTyper)

Description: return the parent of the content
```
{% raw %}{%set parent = dm.parent( content ) %}{% endraw %}
```

#### dm.children
Parameter: 

content ContentTyper

contentType string

sortBy string

***TBD***

Return: list of content or empty slice of ContentTyper if it has nothing


### MISC

#### dm.nice_url
Parameter: content ContentTyper

Return: string

Description: get nice url of a content, including site path/'prefix'

```
{% raw %}{{dm.nice_url( content ) }}{% endraw %}
```


#### dm.root
Parameter: string url

Return: string

Description: add site path as prefix to the url. If it's '/' the last / will be removed.

```
{% raw %}{{dm.root( 'mypage/profile' ) }}{% endraw %}
```


## Filters in digimaker

See [here](https://github.com/digimakergo/digimaker/blob/master/sitekit/filters/filters.go#L140) for all filters


## Macros in digimaker
Macro provides 'function' like operation in template. Here is an example of rendering field using macro:
```html
<div class="{{content.ContentType}} frontpage full"> 
    {{output_field( "summary", content )}}
</div>
```

Here is an example of rendering articles as blocks, without knowing details of how the article will be rendered:
```html
<div class="children">
    {% for child in dm.children(content, "article") %}
        {{output_content( child, "block" )}}
    {%endfor%}
</div>
```


By default we have 3 Macros:

### output_content(content, viewmode)
Output a content, where viewmode is a string, eg: "block"/"line"

### output_field(field, content)
Output a field, where field is the field identifier: eg: "summary". Note: the real outputting code might be defined in override, see [field under override rules](./template-override#field). 

### output_view: TBA



