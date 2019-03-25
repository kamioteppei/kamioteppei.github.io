---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Portfolio

## RestAPI(Java + Angular)

RestAPI(Java + Angular)のプロトタイプを作成しました。   
デモ画面は[こちら](http://angular-front-booking.kamioteppei-aws.ml)です。 ※(ブラウザはGoogle Chrome推奨です。)

- ホテルを日付で検索して、予約登録できます。
- ユーザーの認証、認可機能はJWTで実装しています。

- バックエンド

  - ソース：[GitHub](https://github.com/kamioteppei/spring-api-booking)
  - 技術：
    - 環境： AWS, Route53, CloudFront, Application Load Balancer, EC2, RDS
    - Web: Spring Boot, Java, Jpa, JWT
    - DB: Mysql
    - IDE: IntelliJ IDEA

- フロントエンド

  - ソース：[GitHub](https://github.com/kamioteppei/angular-front-booking)
  - 技術：
    - 環境： AWS S3
    - Web： Angular 4, TypeScript, Bootstrap, RxJS(ReactiveX / Reactive Extensions)
    - IDE:  Visual Studio Code

## Android(Kotlin)

上記RestAPIのネイティブクライアントをKotlinで実装しました。   
(ただし予約検索機能のみ。ログイン、登録機能の実装は保留。)

- ネイティブクライアント

  - ソース：[GitHub](https://github.com/kamioteppei/KotlinNativeBooking)
  - 技術：
    - 環境： なし
    - Native： Java, Kotlin, Retrofit2, RxJava, GSON(Google製Jsonライブラリ)
    - IDE:  Visual Studio Code
