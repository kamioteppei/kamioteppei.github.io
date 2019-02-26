---
layout: static
title: Spring
template: 3-columns
name: Spring
category: Web
---

# Spring Framework

JavaのWebフレームワーク

## Spring Boot

Spring Frameworkベースのアプリケーションを手軽に作成することができるフレームワーク。
デフォルトで、Tomcatコンテナを含んでいる。

## 開発環境構築

- Intellij IDEA(Community Editionでも良い) / Eclipse
- jdk1.8以上
- Gradle / Maven

## RESTful API

- [公式サイト](https://spring.io/guides/gs/rest-service/)

- [DBアクセスの参考](https://qiita.com/yokobonbon/items/064504bc9dca3f0ec7d1)

- [認証周りの参考](https://qiita.com/nyasba/items/f9b1b6be5540743f8bac)  
[参考２](https://auth0.com/blog/implementing-jwt-authentication-on-spring-boot/)
[参考３](https://qiita.com/Hiro-mi/items/12b44e7c2ec4e2d13a86)

- APIのテストにchromeアドインの[Restlet Client](https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm)を使用する。

- Spring Boot内部にもテストツールが含まれる。
  - SwaggerConfig.javaを作成
  - build.gradleにspringfox-swagger、springfox-swagger-uiプラグインを追加
  - アプリケーション起動後に、[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)にアクセス。
  - [http://localhost:8080/v2/api-docs](http://localhost:8080/v2/api-docs)にapiの定義を出力。

## Lombok
getter/setterの自動生成機能

Intellijでうまく動作しない場合は、以下の順で確認する。

- build.gradleのdependencyにLombokの記述があるか？
- 「Intellij」にLombokのプラグインを入れているか？   
  -> IntellijのFile->settings->Plugins->lombokで検索してインストール
- アノテーションの動作を有効にしているか？   
  -> IntellijのFile->settings->Build,Execution...->Compiler->Annotation Proce...->Enable annotation proccessingにチェックする
