---
layout: page
title: Go api
parent: References
permalink: /references/go
nav_order: 20
---

Below is a overview Go API, the detail is in [Auto generated go documentation](https://pkg.go.dev/github.com/digimakergo/digimaker#section-documentation)

## Package core/query
See all on [Go doc](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#pkg-examples)

**Fetch one content**

| Function        | Description       
|:-------------|:---------------------|
| FetchByID       |  Fetch a content by id  |
| FetchByUID      |  Fetch a content by unique id  |
| FetchByCID      |  Fetch a content by content id  |
| FetchByCUID     |  Fetch a content by content unique id  |
| Fetch           |  Fetch a content by condition  |


**Fetch List**

| Function        | Description       
|:-------------|:---------------------|
| SubList       |  Fetch content list under a content, with permission considered  |
| ListWithUser  |  Fetch content list with permission considered |
| Children      |  Fetch children(direct children) with permission considered  |
| List     |  Fetch list by conditions(without permission considered)  |

**Fetch subtree**

| Function        | Description       
|:-------------|:---------------------|
| SubTree        |  Fetch sub tree of a content  |

## Package core/handler
See all on [Go doc](https://pkg.go.dev/github.com/digimakergo/digimaker/core/handler#pkg-examples)

**Manipuliate content**

| Function        | Description       
|:-------------|:---------------------|
| Create        |  Create content |
| Update        |  Update a content |
| DeleteByID        |  Delete a content |


**User**

| Function        | Description       
|:-------------|:---------------------|
| CanLogin        |  Check if a user can login or not |


## Package core/permission
See all on [Go doc](https://pkg.go.dev/github.com/digimakergo/digimaker/core/permission#pkg-examples)

| Function        | Description       
|:-------------|:---------------------|
| HasAccessTo        |  Check if a user can accces to a operation |
| CanRead        |  Check if a user can read a content |
| CanUpdate        |  Check if a user can update a content |
| CanDelete        |  Check if a user can delete a content |
| GetUserAccess        |  Get user access list|



## Package core/db

See all on [Go doc](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#pkg-examples)

**Query**

| Function        | Description       
|:-------------|:---------------------|
| BindContent        |  Bind content(s) with a condition |
| CountContent        |  Count content(s) with a condition |
| BindEntity        |  Bind entity(s) with a condition |
| Count        |   Count entity with a condition |
| BindContentWithQuery        |  Bind conentent(s) with a query|
| BindEntityWithQuery        |  Bind conentent(s) with a query|

**Data operation**

| Function        | Description       
|:-------------|:---------------------|
| Insert        |  Insert a record |
| Update        |  Update a record |
| Delete        |  Delete a record |


**Condition**

| Function        | Description       
|:-------------|:---------------------|
| Cond        |  Create a condition |
| And        |  Logic and |
| Or        |  Logic or |
| EmptyCond        |  Empty condition |
| TrueCond        |  Always true |
| FalseCond        |  Always false |
| Sort        |  Sort by |
| Limit        |  Limit |



## Package core/util

## Package core/log
