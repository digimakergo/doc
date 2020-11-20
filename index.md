---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Welcome
nav_order: 0
---

## Welcome to Digimaker CMF documentation site.

Digimaker can be used to develop websites, web application, or just provide content service without specific client, or embed to another system to host content related feature.

We are evolving so check our [roadmap](/roadmap) or [community](#) to know our next step.

### Demo
Check with [demo](/demo) to have a basic look.


### Architecture & principles
[todo: graphic]


### Technologies
Some technologies used:
- [Golang](https://golang.org) - a language with high performance at same time simple to write
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - high performance library for database layer.
- [Pongo](https://github.com/flosch/pongo2) - a Django-template-like template library for website.
- [React](https://reactjs.org) for building client library and editorial ui.


### Installation

**Use Go module**

Start a project and import `github.com/digimakergo/digimaker/core`, digimaker including all the dependencies will be installed.

**Use GoPath**

Install digimaker CMF to GOPath

`go get -u github.com/digimakergo/digimaker`

### Start a project

The easiest way to start a project below
1) clone code from our demo project. Website demo project and rest demo project
2) import database data
3) run and check
4) install backend

Then enjoy coding :)

### Project structure

A project structure example which follows some recommandation from Go standard project layout: https://github.com/golang-standards/project-layout

```
Project A
│───cmd
│     └─main.go
│──configs    
│     │─dm.yaml
│     │─contenttype.yaml
│     │-policies.yaml
│     └ template_override.yaml
│──entity
│──handlers
│──api
│──web
│  └templates
│
└───var
```

Digimaker needs below file structure.
- cmd/main.go which is the starting point. It can be any nam&any structure as long as it can run as entry point.
- configs
   - dm.yaml: main configuration
   - contenttype.yaml: content model configuration
   - policies.yaml: policies configuration for permission related
   - [optional]temlate_override.yaml (only needed if you use templating)
- entity: generated ORM-like entities
- [optional]handlers: callback for events
- [optional]fieldtype: if you have custom fieldtype
- [optional]web/templates: only needed if you need templating for website
- [optional]rest/api: can be use for rest api
- [optional]var for generated web resources(eg. uploaded images): It doesn't need to be under this directory(configurable in dm.yaml) as long as it's visitable from web(for instance via nginx).

Note: all the .go related folders can be in any structure as long as they can be imported. The only required structure for Digimaker is the config files structure.


### Use digimaker
Digimaker consist of
- A server side written in golang
- [A editorial user interface(EUI)](/eui) for editors to manage content

### Develop in digimaker
For development you can use below api
- Template api for building website or mail output. [check web site example](#)
- Client library in React(digimaker-ui). [check web application example](#)
- Rest api. [check tutorial](#)

### Roadmap

Want to know our roadmap? Check [this](#/roadmap) out.
