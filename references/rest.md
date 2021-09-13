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

## Common response

Digimaker CMF will always return a json format. For a successful page it will be like below, where "error" is always false. All the response data will be inside "data"

```json
{
  "error": false,
  "data": {
    "cid": 3,
    "version": 4,
    "published": 1628163956,
    "modified": 1628196214
  }
}

```

For error it will put error information into data and set "error" to true
```json
{
  "error": true,
  "data": {
    "code": "10001",
    "message": "Cann't get content type",
    "detail": ""
  }
}
```


## Fetch a content

**Format**
`content/get/<content type>/<id>`

**Result**
JSON of the content


Example: `content/get/article/1`


## Fetch a version
content/version

## Fetch a tree
content/treemenu

## Fetch content list

**Format**

`content/list/<content type>?<parameters...>`
  
**Parameters**
  
  | Parameter        |   Example | Description  |
| ------------- |-------------| -----|
|  parent    | 3 | parent id of a content. No need if it's non-location content |
|  level    | 1 | Level under the parent id, 1 means the direct children . No need if it's non-location content |
|  limit    | 10 | How many for record to fetch |
|  offset    | 0 | Which position to fetch records |
|  sortby    | priority desc,id desc | sort by. Support multi fields |
|  field.*    | field.title | filter by field |  
|  localtion.*       | location.priority | filter by location's attribute. eg. priority, publish. modified  |
  

**Result**

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

## Create a content  
**Format**

url: `content/create/<parent location id>/<content type>`, with a json as request body.  

Here is a body example, where title&body are field identifiers
  ```json
{
  "title":"Test", 
  "body":"Test body"
 }
  ```
**Return**


 
  

## Move a content
**Format:** content/move

## Update a content
  
**Format**
url: `content/update/<location id>` or `content/update/<content type>/<content id>`. Put json as request body.  
  
Here is a body example, where title&body are field identifiers
  ```json
{"title":"Test",
  "body":"Test body"}
 ```

## Delete a content

Format:
url: `content/delete?id=<location id>` or `content/delete?type=<content type>&id=<content id>`.
  
## Set priority
content/setpriority

## Login
**Format:** auth/auth
**Method:** POST

**Body:** 

```json
{"username":"<username or email>",
  "password":"<password>"}
 ```
 
**Response**:

Access token and refresh token, example like below.
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzE1MzgzNDcsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6IkFkbWluaXN0cmF0b3IgQWRtaW4ifQ.VV3yJW7q5oZ4PVMj8d-2m224MmOP7PG3QJCWPL3mv0w",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzE1NDYxNDcsImd1aWQiOiI4MWZjZjYzMC02ZWFhLTQwMjctOGI1Zi1kZjc2YjgwY2JjNDgiLCJ1c2VyX2lkIjoxfQ.DegXqhzWML1sgENCnZVjC_udW77_m_rkV0Us7-CcP-M"
}
```


## Logout
**Format** auth/token/revoke

## Renew refresh token
**Format**auth/token/renew-refreshtoken

## Renew access token
**Format**auth/token/renew-accesstoken


## Get current user's information
**Format** user/current

## Request reseting password
user/resetpassword

## Reset password
user/resetpassword-confirm

## Enable user
**Format** user/enable

## Get content type definition
**Format** contenttype/get

## Upload a file
**Format**util/uploadfile

## Upload an image
**Format** util/uploadimage

