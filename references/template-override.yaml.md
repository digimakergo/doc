---
layout: page
title: template-override.yaml
parent: References
permalink: /references/template-override
nav_order: 60
---

# Template override

## Example
This is a example of template override in dmdemo project:
```yaml
- contenttype: folder
  viewmode: full
  field/display_type: news
  to: folder/news.html
```
It means all folders in "full" view mode, and field "display_type" is "news" will use "folder/news.html" template


## content_view 

content_view is the override rule for rendering content. Below are conditions for finding template for location content

| Condition        | Description          | 
|:-------------|:------------------|
| id           | location id of the content |
| viewmode | view mode, eg. full    |
| site           | site identifier      |
| under           | matches content which are under this value(id) |
| level           | level under site root(1 is directly under) |
| contenttype | content type of the content |
| field/\<field identifier\>   | matches fields value. Support fieldtypes: radion, checkbox, select       |


## Include other override files
Include allowes you to include another template override file(mostly in yaml). Here is an example:
```yaml
include:
    - site: dmdemo
      template_folder: "sites/demo" 
      file: "override_sites/dmdemo" # don't include file format since it supports yaml, json
```
The example means for all site identifier `dmdemo` it will try to look up override rule under override_sites/dmdemo.yaml first. 

Note: `template_folder` means all the templates matched in the include file need to be under this folder, except the template path starting from `~/`, which will alway look for tempalte root folder(by default it's `web/templates`).

Then in `override_sites/dmdemo.yaml` it looks like this - no site needed because it's filtered our by the include rule.

```yaml
content_view:
  - contenttype: folder
    viewmode: full
    id: 3
    to: folder/frontpage.html
```

Other typical include conditions can be `viewmode`, `contenttype`, `under`, even `field/<field identifier>` - bacally all override conditions can be used as condition in `include`.

>*Note: The template engine will proceed `include` override files first(in the order of matched file order), then override_template.yaml's rules itself, regardless of where the `include` is placed.*

## Field
Below are condition for locating field rendering template:

| Condition        | Description          | 
|:-------------|:------------------|
| fieldtype           | field type, eg. "text" |
| field          | field identifier, eg. "summary" |
| contentype           | content type, eg. "article" |
| site           | site identifier, eg. "eng" |


>*Note: You can use variable in the "to" command to simplify rules.*

>*Note: Field override rules is applied only when output_field is invoked.*

### Example

```yaml
field:
- contenttype: "article"
  field: "title"
  to: fieldtype/article_title.html

- fieldtype: "text"
  to: fieldtype/text.html
  

- to: fieldtype/{fieldtype}.html
```

In the example, the first overrule sets all artille/title to use fieldtype/article_title.html, the second sets all text using fieldtype/text.html, the 3rd uses variable sets all fieldtype uses fieldtype/*.html where * is the field type.


