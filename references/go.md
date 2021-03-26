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

Note: in all queries, the condition syntax as below is used

```go
ids := []int{3, 4, 5, 7, 9, 10}
condition := db.Cond("id", ids).Cond("l.depth", 2).Cond("author", 1).Sortby("modified desc").Limit(0, 2)
```

**Fetch one content**

| Function        | Description       
|:-------------|:---------------------|
| [FetchByID](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#FetchByID)       |  Fetch a content by id  |
| [FetchByUID](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#FetchByUID)      |  Fetch a content by unique id  |
| [FetchByCID](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#FetchByCID)      |  Fetch a content by content id  |
| [FetchByCUID](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#FetchByCUID)     |  Fetch a content by content unique id  |
| [Fetch](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#Fetch)           |  Fetch a content by condition  |


**Fetch List**

| Function        | Description       
|:-------------|:---------------------|
| [SubList](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#SubList)       |  Fetch content list under a content, with permission considered  |
| [ListWithUser](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#ListWithUser)  |  Fetch content list with permission considered |
| [Children](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#Children)      |  Fetch children(direct children) with permission considered  |
| [List](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#List)     |  Fetch list by conditions(without permission considered)  |

**Fetch subtree**

| Function        | Description       
|:-------------|:---------------------|
| [SubTree](https://pkg.go.dev/github.com/digimakergo/digimaker/core/query#SubTree)        |  Fetch sub tree of a content  |

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


**Condition**

| Function        | Description       
|:-------------|:---------------------|
| [Cond](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Cond)        |  Create a condition |
| [And](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#And)       |  Logic and |
| [Or](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Or)         |  Logic or |
| [EmptyCond](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#EmptyCond)        |  Empty condition |
| [TrueCond](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#TrueCond)        |  Always true |
| [FalseCond](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#FalseCond)        |  Always false |
| [\<cond\>.Cond](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Condition.Cond)     |  Same as And&Cond combined |
| [\<cond\>.And](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Condition.And)   | Same as And with itself as first parameter |
| [\<cond\>.Or](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Condition.Or)    | Same as Or with itself as first parameter |
| [\<cond\>.Sortby](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Condition.Sortby)        |  Sort by |
| [\<cond\>.Limit](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Condition.Limit)        |  Limit |
| [\<cond\>.AlwaysCount](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Condition.AlwaysCount)   |  Always include count in result regarless limit |

**Query**

| Function        | Description       
|:-------------|:---------------------|
| [BindContent](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#BindContent)        |  Bind content(s) with a condition |
| [CountContent](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#CountContent)        |  Count content(s) with a condition |
| [BindEntity](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#BindEntity)        |  Bind entity(s) with a condition |
| [Count](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#Count)        |   Count entity with a condition |
| [BindContentWithQuery](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#BindContentWithQuery)        |  Bind conentent(s) with a query|
| [BindEntityWithQuery](https://pkg.go.dev/github.com/digimakergo/digimaker/core/db#BindEntityWithQuery)        |  Bind conentent(s) with a query|

**Data operation**

| Function        | Description       
|:-------------|:---------------------|
| Insert        |  Insert a record |
| Update        |  Update a record |
| Delete        |  Delete a record |




## Package core/util

## Package core/log
