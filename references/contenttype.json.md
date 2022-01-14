---
layout: page
title: contenttype.json
parent: References
permalink: /references/contenttype
nav_order: 50
---
# contenttype.json

A content type example
```json
"article": {
    "name": "Article",
    "table_name": "dm_article",
    "has_version": true,
    "has_location": true,
    "name_pattern": "{title}",
    "fields": [{
        "identifier": "title",
        "type": "text",
        "name": "Title",
        "parameters": {
          "max_length": 300
        },
        "required": true
      },
      {
        "identifier": "editors",
        "type": "relationlist",
        "name": "Editors",
        "required": false,
        "parameters":{
          "type":"user"
        }
      },
```

## Content type definition

| key      | type  | Description       
|:---------|:----|:---------------------|
| \<identifier\>   | string     | content type indentifier. Need to be unique, lower case, with `_`, cannot end with `_test`(because go will ignore the generated entity to treat as test file), eg. `article`       |
| name     |string   | Name of the content type      |
| table_name |string       | table name on database      |
| has_version |bool       | If true it will store version automatically when creating/updating      |
| has_location |bool       | Whether the content has location or not. Read [here](../tutorial/digimaker-concepts#location-content-and-non-location-content) to judge if you need location|
| has_location_id   |bool     | For non-location content, true if you need to put content under some location content and use it as category&permission for instance.      |
| name_pattern    | string    | For location content, name can be generated from field's value , `{"<field identifer>"}` will be replaced with identifier's real value    |
| fields    | array\<field definition\>    |  fields with order  |


## Content type field definition

| key      | type  | Description       
|:---------|:----|:---------------------|
| identifier    | string    |  Identifier of the field  |
| type    | string    |  Field type  |
| name    | string    |  Name of the field, for viewing  |
| required    | bool    |  Whether the field is required  |
| parameters    | object    |  parameters of the field, see [field types](#field-types) for parameter detail. |
| is_output    | bool    |  If it's a output field. Useful for output like h2  |



## Built in field types

| key       | Description   | Parameters 
|:--------- |:---------------------|:----|
| int  |	Integer. default value is -1(not 0)| | 
| text  |	Plain text, support mulitline| "multiline": true/false , "max_length":250| 
| richtext |	Rich text with online editor |	“mode”:”compact/full”
| select |	Dropdown | "list", eg:{"list": [{“text”: "Apple", "value": "apple" }...]} |
| radio |	Radio, support 2 options ("1"/"0" - string value) for now. default "-1"(not selected) | "options":["Yes", "No"] |
| datetime |	Date time |	“dateonly”: true/false
| container| 	Container |  | 
| checkbox |	Checkbox, value is int 0/1  |	 | 
| password |	Password |	 | 
| file | File  |	max_size: <float, eg. 10.0>, max size of the file(mb)(default is 10 if not set). <br /> format:".docx,.pdf", supported file formats | 
| image | Image  | format:".jpg,.png", accepted format. If not set, use all support images | 
| relation |	Relation  | type: "<content type>" , value: "<field identifier>", editmode: "browse\|select" (by default it's browse if nothing is set)
| relationlist |
