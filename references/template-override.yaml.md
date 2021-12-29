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
  field_display_type: news
  to: folder/news.html
```
It means all folders in "full" view mode, and field "display_type" is "news" will use "folder/news.html" template

## Override conditions
Below are conditions for location content
| Condition      | Description |
| ----------- | ----------- |
| id      | location id of the content       |
| viewmode      | view mode, eg. full       |
| site   | site identifier        |
| under   | matches content which are under this value(id)        |
| level  | level under site root(1 is directly under) |
| contenttype | content type of the content |
| field_xxx   | matches fields value. Support fieldtypes: radion, checkbox, select       |

