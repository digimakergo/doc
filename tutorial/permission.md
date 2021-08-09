---
layout: page
title: Permission settings
parent: Tutorial
permalink: /tutorial/permission
nav_order: 5
---


## Permission settings

The permission policies are defined under [policies.json](configs/policies.json), and then connect to role and user in the content. policies.json defines permission like
 - fetching  based on content type, parent,etc
 - operations(eg. create content, update, delete) based on content type, parent, author(self)
 - updated fields when updating - attribute level permission
 - non-content operation like login, left menu of eui, etc

Example on policies.json:
```json
  {
    "operation": ["content/update", "content/read"],
    "limited_to": {
      "contenttype": ["article"],
      "author": "self"
    }
  },
  {
      "operation": ["content/create"],
      "limited_to": {
      "contenttype": ["image"],
      "under": [461]
   }
  }
```

Check docs to see policies configuration: [https://digimaker.org/doc/references/policies](https://digimaker.org/doc/references/policies)

(TBA)
