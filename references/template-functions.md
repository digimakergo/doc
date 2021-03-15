---
layout: page
title: Template functions
parent: References
permalink: /references/template-functions
nav_order: 9
---


Template functions
--------------

## Content fetch

### dm.fetch_byid
Parameter(int): id of the locaiton. 

Result(ContentTyper): content which has the location id
```
{% set content = dm.fetch_byid( 3 ) %}
```


### dm.parent
Parameter(ContentTyper)

Result(ContentTyper)

Description: return the parent of the content
```
{% set parent = dm.parent( content ) %}
```

### dm.children
Parameter: 

content ContentTyper

contentType string

sortBy string

***TBD***

Return: list of content or empty slice of ContentTyper if it has nothing


## MISC


### dm.nice_url
Parameter: content ContentTyper

Return: string

Description: get nice url of a content, including site path/'prefix'

```
{{dm.nice_url( content ) }}
```


### dm.root
Parameter: string url

Return: string

Description: add site path as prefix to the url. If it's '/' the last / will be removed.

```
{{dm.root( 'mypage/profile' ) }}
```





