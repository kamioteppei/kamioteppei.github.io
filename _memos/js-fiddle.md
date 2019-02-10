---
layout: static
title: JS Fiddle
template: 3-columns
name: JS Fiddle
category: Tools
---

# JS Fiddle

JavaScriptのオンラインの実行環境

- [jsfiddle](https://jsfiddle.net)
- [jsbin](https://jsbin.com/?html,output)
- [codepen](https://codepen.io)

## GET

## POST

```
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://<API_URL>/<RESOUCE_NAME>/');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({age: 33, name: john}));
```
