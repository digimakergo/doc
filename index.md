---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
nav_order: 0
---

# Digimaker CMF Documentation
{: .fs-9 }

Digimaker CMF is a content management framework focusing on simplicity, flexibility and performance.

[Get started](#get-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View on GitHub](https://github.com/digimakergo/digimaker){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Get started 

### Installation
The simpliest way to install is to get sample code and run: [https://github.com/digimakergo/dmdemo](https://github.com/digimakergo/dmdemo) . The sample project readme has explained code structure and basic apis.


### Tutorials & articles
Digimaker CMF can be used to build web site, web application or being embeded to existing solution.

Normally you can just configure content model(a json file), then you are able to manage content.   

- If you want to develop website, you can start to [write template](tutorial/templating). 
- If you want to develop web application, you can check our [rest api](tutorial/rest)

More articles:
 - [Permission](tutorial/permission)
 - [Use client library(digimaker-ui)](tutorial/digimaker-ui)(tba)
 - [Extend server side](tutorial/server)(tba)
 - [Online log/debug tool](tutorial/debug)(tba)

Read [Digimaker concepts](tutorial/digimaker-concepts) to understand our design concepts.

### References
 - Content types: [contenttype.json](references/contenttype)
 - Permission: [policies.json](references/policies)
 - Template: [Templating API](references/template), [template_override.yaml](references/template-override)
 - Client/Rest API: [Rest API](references/rest), [Client library(digimaker-ui)](references/digimaker-ui)
 - Server side: [Go API](references/go)
 - Configuration: [dm.yaml](references/dm)

## Content Administration(editorial ui)
Below is a basic screenshot of eui, which is customizable in tools, display, columns, themes etc, and is extendable for more features.

<img src="https://raw.githubusercontent.com/digimakergo/eui/master/doc/eui-1.png" width="700px" />


## About
### License
Digimaker CMF is under MIT license

### Roadmap

We are evolving so check our [New feature ideas in github project](https://github.com/digimakergo/digimaker/projects) to know our next step.

### Thanks
Special thanks to template library [Pongo2](https://github.com/flosch/pongo2) and high perforance DB library [SQL Boiler](https://github.com/volatiletech/sqlboiler). 

