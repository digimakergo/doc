---
layout: page
title: policies.json
parent: References
permalink: /references/policies
nav_order: 20
---

## policies.json
poclieis.json define policies, role identifiers and role variables.

Below are operations which can be set policies on

| Operation        | Description  | 
|:-------------|:------------------|
| content/read           | Read content |
| content/create           | Create content |
| content/update | Update content   |
| content/delete           | Delete content      |
| access/manage            | Manage permission 

### Role identifier
Also in policies.json it can define role identifier. Example:
```json
  "roles": {
    "anonymous":["anonymous"],
    "member": ["member"],
    "edit": ["member", "edit"],
    "admin": ["admin"]
  }
```
So `anonymous` role identifier consists of `anonymous` policy which is defined in `policies` section. 

A role identifier can have multiple policies. In example above, the `role` identifier has both `member` and `edit` policies so that an editor can login as member and use features of members.

## Role variables
In policies.json a role variables can be set in `role_variables` section. Example.
```json
  "role_variables": ["under_folder"]
```
Note: the role variable need to have same field identifier of contenttype role.

### Use role variable in policies
Variable can be used anywhere as value of policy condition, regardless of condition's value type.

In example below, `"{under_folder}"` will be replaced by role's field value `under_folder`, which is a int. 
```{
"under":"{under_folder}" 
```
Note: role variables can `NOT` be put inside array. It needs to be a whole condition value.


## Conditions of policy 

### content/create

| condition  | type  | Description  | 
|:-----------|:----|:------------------|
| contenttype    | string      | Content type to be created |
| parent_contenttype    | string    | Parent content's content type |
| under      | int     | Location id where content can be created under(directly or indirectly)  |
| parent_author     | string      | Parent content's author id(id as string, eg. "22"), support `self` |
| parent/\<field identifier\> | any | Parent content's field. support field types: `select`, `radio`, `checkbox`   |
| parent_id        | int    | parent location id      |
| fields          | object | when creating content, the fields the user can input, it should be a subset of content fields. only subset is upport now. eg. ```{"subset":["firstname", "lastname", "address", "postcode", "country"}```      |




### content/update

| condition   | type     | Description  | 
|:-----------|:----|:------------------|
| contenttype  | string           | Parent content's content type |
| id          | int   | id of the content |
| under       | int   | Location id where content can be updated under(directly or indirectly)  |
| author      | string       | Content's author id(as string), support `self` |
| fields       | object    | when updating content, the fields the user can input, it should be a subset of content fields. only subset is upport now. eg. ```{"subset":["firstname", "lastname", "address", "postcode", "country"}```      |
| user        | string   | only support `self`, meaning when it's a user the current user can update selv user |


### content/delete

| condition     | type     | Description  | 
|:----------|:------|:------------------|
| contenttype    | string       | Content type to be deleted |
| under         | int  | Location id where content can be deleted under(directly or indirectly)  |
| author        | string   | Parent content's author, support `self` |


