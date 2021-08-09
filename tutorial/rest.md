---
layout: page
title: Consume Rest api
parent: Tutorial
permalink: /tutorial/rest
nav_order: 2
---

Consuming rest api
-------------

## Authorization
For consuming rest api, you need to have a authorization token first:``/api/auth/auth?username=<username>&password=<password>``

It will return like

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg1NDI3NjEsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6IkFkbWluaXN0cmF0b3IgQWRtaW4ifQ.6bTKFlf2E0I7hrSZ2sPqsTXurNwygKV3qmVHWdZd6Q0",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg1NTA1NjEsImd1aWQiOiJhMzA5NmVhNC0zZDhkLTQ1OTAtOGNlYS02MTY5YTgxYjBjYTIiLCJ1c2VyX2lkIjoxfQ.v23l_Ofi6-SRxa4agS7kRoOrhAxCpWk90NoOIq-bcGs"
}
```

Then you put access_token in every rest api's header, refresh_token can be stored in cookie to rewnew access token. The http request header's ``Authorization`` will look like

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg1NDI3NjEsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6IkFkbWluaXN0cmF0b3IgQWRtaW4ifQ.6bTKFlf2E0I7hrSZ2sPqsTXurNwygKV3qmVHWdZd6Q0
```


## Example: get content 

### Request
url: ``/api/content/get/3``

header: 
```
Authorization: Bearer ...
```

### Response
```{
  "cid": 3,
  "version": 0,
  "published": 1560534450,
  "modified": 1616239519,
  "cuid": "bk1trcli6ekibbmo2cj0",
  "status": 1,
  ...
```


