---
layout: page
title: REST
parent: References
permalink: /references/rest
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

## Basis

**Examples**

Get content by id:
Request: `/content/get/3`
Response:
```json
{
  "cid": 3,
  "version": 0,
  "published": 1560534450,
  "modified": 1615464230,
  "cuid": "bk1trcli6ekibbmo2cj0",
  "status": 1,
  "author": 1,
  "author_name": "Administrator Admin",
  "relations": {},
  "folder_type": "site",
  "summary": "<p>This is a demo site.</p>",
  "title": "Demo",
  "id": 3,
  ...
}
```
Get content list:
Request: `/content/list/folder?parent=3&level=1&sortby=priority%20desc%3Bmodified%20desc&limit=20&offset=0`
Response:
```json
{
  "list": [
    {
      "cid": 28,
      "version": 0,
      "published": 1614682043,
      "modified": 1614682043,
      "cuid": "c0v1feuvvhfup2usch5g",
      "status": 0,
      "author": 1,
      "author_name": "Administrator Admin",
      ...
    },
    {
      "cid": 27,
      "version": 0,
      "published": 1614682022,
      "modified": 1614682022,
      "cuid": "c0v1f9mvvhfup2usch4g",
      "status": 0,
      "author": 1,
      "author_name": "Administrator Admin",
      ...
    }
  ],
  "count": 2
}
```

## Content fetch

### content/get

Description: get content based on id

Format: `content/get/<content type>/<id>`

Result: JSON of the content


Example: `content/get/article/1`


### content/version

### content/treemenu

### content/list

#### Format
`content/list/<content type>?<parameters...>`

#### Description
Get content list
  
#### Parameters
  
  | Parameter        |   Example | Description  |
| ------------- |-------------| -----|
|  parent    | 3 | parent id of a content. No need if it's non-location content |
|  level    | 1 | Level under the parent id, 1 means the direct children . No need if it's non-location content |
|  limit    | 10 | How many for record to fetch |
|  offset    | 0 | Which position to fetch records |
|  sortby    | priority desc,id desc | sort by. Support multi fields |
|  field.*    | field.title | filter by field |  
|  localtion.*       | location.priority | filter by location's attribute. eg. priority, publish. modified  |
  

#### Result 
  List of the content like below
```json
{
  "list": 
     [{"title":"Test", 
       "body":"<p>Test body</p>"}
     ],   
   "count": 4
}  
```

## Content operation

### content/create

Create a content
  
#### Format
url: `content/create/<parent location id>/<content type>`, with a json as request body.  

Here is a body example, where title&body are field identifiers
  ```json
{
  "title":"Test", 
  "body":"Test body"
 }
  ```
#### Return

  
#### Description
Create a content. 
 
  

### content/move

### content/update
Update a content
  
#### Format
url: `content/update/<location id>` or `content/update/<content type>/<content id>`. Put json as request body.  
  
Here is a body example, where title&body are field identifiers
  ```json
{"title":"Test",
  "body":"Test body"}
 ```

### content/delete
Delete a content

Format:
url: `content/delete?id=<location id>` or `content/delete?type=<content type>&id=<content id>`.
  
### content/setpriority

## Authorization
### auth/auth

### auth/token/revoke

### auth/token/renew-refreshtoken

### auth/token/renew-accesstoken


## User
### user/current

### user/resetpassword

### user/resetpassword-confirm

### user/enable

## Content model
### contenttype/get

## Utility
### util/uploadfile

### util/uploadimage

