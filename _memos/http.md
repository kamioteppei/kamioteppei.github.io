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
それに、状態を持たないので、サーバーの１つのスレッドは、  
あるユーザーの１つのリクエストに対して、レスポンスを返せば、  
別のユーザーのリクエストを処理できるので、処理効率が良いという長所もある。

だがamazonのような、商品を購入するようなサイトでは、  
状態を持たなければいけない。方法としては、Inputタグのhiddenで、  
状態を持てるが、今回の買い物以外のユーザー情報や、購入履歴も、  
ずっと保持しないといけない。ましてやブラウザを閉じたら、全て消えるので、  
不可能である。  

そこで、クライアント側で、Cookie、サーバー側でデータベースという  
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

RESTfulとは、
- 状態を持たない(Stateless)
- 全てのアクションに対して、URLのリソースとして指定できる。
- リソースは名前を持つ

RESTful Web Serviceが発明された理由は、スマートフォンの流行による、
ブラウザ、ローカルアプリ、各種画面サイズの違いを、抽象化する為。

## GraphQL

概念ではなく、Facebook社が開発した、クエリ言語である。  
リクエストの結果を、json形式で返す。  
[(参照)アプリ開発の流れを変える「GraphQL」はRESTとどう違うのか比較してみた](https://www.webprofessional.jp/rest-2-0-graphql/)

- RESTでは、階層のある情報を、Webページを進んで行くように、複数回アクセスしないといけない。
- GraphQLでは、複数の階層を1度のクエリで取得できる。また、取得する項目を指定できる。
- 上記により、通信量を減らすことができる。
- RESTでは、post,delete等のエントリポイントが複数あるが、GraphQLでは、1つにできる。
