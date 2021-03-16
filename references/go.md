---
layout: page
title: Go api
parent: References
permalink: /references/go
nav_order: 20
---

Below is a overview Go API, the detail is in [Auto generated go documentation](https://pkg.go.dev/github.com/digimakergo/digimaker#section-documentation)

## Package core/query

Fetch one content

| Function        | Description       
|:-------------|:---------------------|
| FetchByID       |  Fetch a content by id  |
| FetchByUID      |  Fetch a content by unique id  |
| FetchByCID      |  Fetch a content by content id  |
| FetchByCUID     |  Fetch a content by content unique id  |
| Fetch           |  Fetch a content by condition  |


Fetch List

| Function        | Description       
|:-------------|:---------------------|
| SubList       |  Fetch content list under a content, with permission considered  |
| ListWithUser  |  Fetch content list with permission considered |
| Children      |  Fetch children(direct children) with permission considered  |
| List     |  Fetch list by conditions(without permission considered)  |

Fetch subtree

| Function        | Description       
|:-------------|:---------------------|
| SubTree        |  Fetch sub tree of a content  |

## Package core/handler

Manipuliate content

| Function        | Description       
|:-------------|:---------------------|
| Create        |  Create content |
| Update        |  Update a content |
| DeleteByID        |  Delete a content |


User

| Function        | Description       
|:-------------|:---------------------|
| CanLogin        |  Check if a user can login or not |


## Package core/permission

| Function        | Description       
|:-------------|:---------------------|
| HasAccessTo        |  Check if a user can accces to a operation |
| CanRead        |  Check if a user can read a content |
| CanUpdate        |  Check if a user can update a content |
| CanDelete        |  Check if a user can delete a content |
| GetUserAccess        |  Get user access list|

