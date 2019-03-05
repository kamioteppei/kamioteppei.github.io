---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Portfolio

## RestAPI(Java + Angular)

RestAPI(Java + Angular)のプロトタイプを作成しました。   
デモ画面は[こちら](http://app-host-angular-front-booking.s3-website-ap-northeast-1.amazonaws.com)です。 ※(ブラウザはGoogle Chrome推奨です。)

- ホテルを日付で検索して、予約登録できます。
- ユーザーの認証、認可機能はJWTで実装しています。

- バックエンド

  - ソース：[GitHub](git@github.com:kamioteppei/spring-api-booking.git)
  - 技術：
    - 環境： AWS, Route53, CloudFront, Application Load Balancer, EC2, RDS
    - Web: Spring Boot, Java, Jpa, JWT
    - DB: Mysql

- フロントエンド

  - ソース：[GitHub](git@github.com:kamioteppei/angular-front-booking.git)
  - 技術：
    - 環境： AWS S3
    - Web： Angular 4, TypeScript, Bootstrap
