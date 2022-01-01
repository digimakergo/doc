---
layout: page
title: Cli Tool
parent: Tutorial
permalink: /tutorial/templating
nav_order: 10
---

# Cli tool
dmcli is a command line from digimaker. It can be installed by running
```sh
 go install github.com/digimakergo/digimaker/dmcli@latest
```

## Generate entities
Run below under project folder, it will generate all entities(.go files) under `entity` folder

```sh
dmcli entity
```

## Generate table(s)
You can run below to generate sql to create database table.
```sh
dmcli db-table <content type>
```
If \<content type\> is ignored it will generate for all content types.