---
layout: page
title: Content model explained
parent: Tutorial
permalink: /tutorial/content-model
nav_order: 1
---

<details open markdown="block">
  <summary>
    Template
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Content model concept


Digimaker has 2 types of content: 

1) content which has a location, eg. article, news, blog. Those contents may need location to identify where they are, a unique id(locaiton id), and may have multiple locations for one content(eg.article).

2) content which doesn't have a location, eg. image, video, customzied content like certificates. They don't need location to identify themself, and they are very close to a normal database table.


So digimaker provides build-in apis and features(in admin) to manage both types of content, eg. query, add, update, delete, set permissions.

You may ask, what's the different between content 2) and normal database entities? Well it's almost the same, you can use our api to manipulate those data, or use own api with own ORM, or both. The benefit of CMF is that it provided some features already so you don't need to do duplicated work on almost same feature on different entities. However, for customized features it will be more flexiable to have own api/ORM, eg. when there are lots of join in query, multiple tables update in business logic.
