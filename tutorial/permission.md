---
layout: page
title: Permission introduction
parent: Tutorial
permalink: /tutorial/permission
nav_order: 3
---

# Permisssion introduction
<details open markdown="block">
  <summary>
    Contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The permission system of digimaker is essential for data management. The principle is to have the power of access control, at same time make it easy for developers to develop, maintain.

Highlights:
- Define permission rules in json file(configs/policies.json)
- Content related permission like read/create/update/delete. Also customized permission&rules are supported
- Support attribute-level permission, eg. some user can only create/update some fields
- Support custom variables in role, which are role content fields
- Can debug permission

Main concepts:
- Role, which can be assigned to a user, and include policies
- Policy, which defined a set of accesses


## Policy example
Below is a policies example, under configs/policies.json. It means the user with this policy will be able to create and read article without other restrictions.
```json
  {
    "operation": ["content/read", "content/create"],
    "limited_to": {
      "contenttype": ["article"]
    }
  }
```

## Role variables
Since role is a content, it's fields can be extended. It's possible to use role's field value as 'variable' in policies. This is useful for example multi-site editors, members, temporary access, where the real context is better done in administration console instead of config file.

<img src="../assets/images/role_edit.png" width="700px" />

In screenshot above, we set a role's "under folder" to be "Demo" folder. In the poclies if we have policy like below, users assgned to the editor role will be limited to read content under "demo". 
```json
{
  "operation": ["content/read"],
  "limited_to": {
    "under":"{under_folder}"
  }
}
```

[See how to define and use role variable](../references/policies#role-variables)

## Typical permissions
Typical permission are like
 - fetching  based on content type, parent,etc
 - operations(eg. create content, update, delete) based on content type, parent, author(self)
 - updated fields when updating - attribute level permission
 - non-content operation like login, left menu of eui, etc


## Refererances
 [policies.json](https://digimaker.org/doc/references/policies)
