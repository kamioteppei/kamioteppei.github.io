---
layout: static
title: HTTP
template: 3-columns
name: HTTP
category: Web
---

# HTTP

HTTP protocolでは、  
- クライアント側のWebブラウザから、Webサーバに、リクエストを送信する。
- Webサーバーから、Webブラウザに、レスポンスを送信する。

## Stateless
HTTPプロトコルでは、状態を持たない。  
最初は静的なページのGETのみだったのでそれでよかった。  
だがamazonのような、商品を購入するようなサイトでは、  
状態を持たなければいけない。方法としては、Inputタグのhiddenで、  
状態を持てるが、今回の買い物以外のユーザー情報や、購入履歴も、  
ずっと保持しないといけない。ましてやブラウザを閉じたら、全て消えるので、  
不可能である。そこで、クライアント側で、Cookie、サーバー側でデータベースという  
記憶領域を使用する。

## Cookie

属性  
- Domain:example.com
- Path:/
- key:value  
 ex) SID:J9W8J0W3RK0WFK04FK0

Cookieはアクセスしたサイトからもらう。  
Domainのサイトにリクエストを送るときに、  
SID等の状態をサーバーに送信する。

## Session

## GET

## POST

## RESTful Web Service

レストフルとは、
- 状態を持たない
- 全てのアクションに対して、URLのリソースとして指定できる。
- リソースは名前を持つ
