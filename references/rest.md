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

## Rest API List
Below is a list of rest api

| Operation        | Description  | 
|:-------------|:------------------|
| **Content**|
| [content/get](#fetch-a-content)| Fetch a content |
| [content/tree](#fetch-a-tree)| Fetch a content tree |
| [content/list](#fetch-content-list)| Fetch content list |
| [content/create](#create-content)| Create content |
| [content/move](#move-content)| Move content |
| [content/update](#update-content)| Update content |
| [content/delete](#delete-content)| Delete content |
| [content/set-priority](#set-priority)| Set priority |
|**Authorization**|
| [auth/auth](#login)| Auth to get token to login |
| [auth/revoke](#logout)| Revoke token to logout |
| [auth/renew](#renew-access-token)| Renew access token |
|**User**|
| [user/current](#get-current-users-information)| 
| [user/reset-password](#request-reseting-password)| Request reseting password   |
| [user/resetpassword-confirm](#reset-password)| Confirm reset passwork link |
| [user/enable](#enabledisable-user)| Enable/Disable user |
|**Utility**|
|[util/uploadfile](#util/uploadfile)|Upload file|
|[util/uploadimage](#util/uploadimage)|Upload image|

## Common response

Digimaker CMF will always return a json format. For a successful page it will be like below, where "error" is always false. All th 'real' data will be inside "data"

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

## API details

### Fetch a content

**Format**
`content/get/<content type>/<id>`

**Result**
JSON of the content


Example: `content/get/article/1`


### Fetch a version
content/version

### Fetch a tree
content/treemenu

### Fetch content list
Fetch content list, with user's permission considered.

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
|  location.*       | location.priority | filter by location's attribute. eg. priority, publish. modified  |
  

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

### Create content  
**Format**

url: `content/create/<content type>/<parent location id>`, with a json as request body.  Note: non-location content doesn't need parent location id.

Here is a body example, where title&body are field identifiers
  ```json
{
  "title":"Test", 
  "body":"Test body"
 }
  ```
**Return**


 
  

### Move content
**Format:** content/move

### Update content
  
**Format**
url: `content/update/<location id>` or `content/update/<content type>/<content id>`. Put json as request body.  
  
Here is a body example, where title&body are field identifiers
  ```json
{ "title":"Test",
  "body":"Test body"}
 ```

### Delete content

Format:
url: `content/delete?id=<location id>` or `content/delete?type=<content type>&id=<content id>`.
  
### Set priority
content/setpriority

### Login
**Format:** auth/auth
**Method:** POST

**Body:** 

```json
{ "username":"<username or email>",
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


### Logout
**Format** auth/token/revoke

### Renew access token
**Format**auth/token/renew


### Get current user's information
**Format** user/current

### Request reseting password
user/resetpassword

### Reset password
user/resetpassword-confirm

### Enable/Disable user
**Format** user/enable

### Upload a file
**Format**util/uploadfile

### Upload an image
**Format** util/uploadimage

