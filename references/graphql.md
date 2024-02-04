---
layout: page
title: GraphQL
parent: References
permalink: /references/graphql
nav_order: 15
has_doc: true
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## GraphQL
Below is a list of GraphQL api

### Query

### Create
```
mutation{
       createArticle(createData:[{parent: 3,data:{ title:"Test" } }] ){
           location{id},
           id
       }
     }
```
### Update
```
mutation{
	updateArticle(updateData:[{id:18, data:{title:"Test2"}}]){
		id
	}
}
```
