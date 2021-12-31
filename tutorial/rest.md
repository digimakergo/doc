---
layout: page
title: Use rest api
parent: Tutorial
permalink: /tutorial/rest
nav_order: 2
---

# Use rest api

<details open markdown="block">
  <summary>
    Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Using rest api needs authorization first to get access token, then in every rest api, the access token will be attched to the request header. Please see [references/rest](../references/rest) for full rest apis.

## Authorization
For consuming rest api, you need to have a authorization token first:``/api/auth/auth``

```json
{
  "username":"<user name>",
  "password":"<password>"
}
```


It will return like

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg1NDI3NjEsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6IkFkbWluaXN0cmF0b3IgQWRtaW4ifQ.6bTKFlf2E0I7hrSZ2sPqsTXurNwygKV3qmVHWdZd6Q0",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg1NTA1NjEsImd1aWQiOiJhMzA5NmVhNC0zZDhkLTQ1OTAtOGNlYS02MTY5YTgxYjBjYTIiLCJ1c2VyX2lkIjoxfQ.v23l_Ofi6-SRxa4agS7kRoOrhAxCpWk90NoOIq-bcGs"
}
```

Then you put access_token in every rest api's header, refresh_token can be stored in cookie(or local storage) to rewnew access token. The http request header's ``Authorization`` will look like

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg1NDI3NjEsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6IkFkbWluaXN0cmF0b3IgQWRtaW4ifQ.6bTKFlf2E0I7hrSZ2sPqsTXurNwygKV3qmVHWdZd6Q0
```

### Renew access token
If access expired it will return status code `440`, it's needed to reiew access token from refresh token.
```
/auth/token/access/renew?token=<refresh token>
```
It will return standard response format where `data` is the new access token.

## Common response body
All response will be in json, in a format like, regardless of returning error or not:
```json
{
  "error": true/false,
  "data": <data object>
}
```

A successful response can be like 
```json
{
  "error": false,
  "data": {
    "list": [
      {
        "cid": 2,
        "version": 48,
        "published": 1617742097,
        "modified": 1618044684,
        "cuid": "c1mci4evvhfo3q8vofcg",
        "status": 0,
        "author": 1,
        "related_articles": null,
        "summary": "",
        "title": "Test",
        "useful_resources": null,
        "id": 464,
        "parent_id": 454,
        "main_id": 464,
        "identifier_path": "content/demosite/news/test",
        "hierarchy": "1/3/454/464",
        "depth": 4,
        "content_type": "article",
        "content_id": 2,
        "language": "",
        "name": "Test",
        "is_hidden": false,
        "is_invisible": false,
        "priority": 0,
        "uid": "c1mci4evvhfo3q8vofd0",
        "section": "public",
        "p": ""
      }
    ],
    "count": 3
  }
}
```

A error response can be like 
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

## Example 1: get content 

### Request
url: ``/api/content/get/3``

header: 
```
Authorization: Bearer ...
```

### Response
```json
  {
  "cid": 3,
  "version": 0,
  "published": 1560534450,
  "modified": 1616239519,
  "cuid": "bk1trcli6ekibbmo2cj0",
  "status": 1,
  ...
  }
```


## Example 2: get content list:
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
