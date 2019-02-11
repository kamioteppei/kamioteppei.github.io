---
layout: static
title: MySQL
template: 3-columns
name: MySQL
category: DataBase
---

# MySQL

## インストール

Ubuntu 18.04にインストール  
[参照](https://www.yokoweb.net/2018/05/13/ubuntu-18_04-server-mysql/)

## 管理者作業

システム管理者でログイン
```
$ sudo mysql -u root -p
```

データベース(スキーマ)作成
```
mysql-> create database <db_name>;
mysql-> show databases;
```

データベース(スキーマ)のユーザー作成
```
mysql-> create user '<user_name>'@'<host_name(ex:localhost)>' identified by '<password>'
```

データベース(スキーマ)に対するユーザーの権限を付加
```
mysql-> grant all privileges on <db_name>.* tp <user_name>@<host_name>;
```

## ユーザー作業

ターミナルからの接続確認
```
$ mysql -u <user_name> -h <host_name> -p <db_name>
```

データベース切り替え
```
mysql-> use <db_name>
```

テーブル一覧
```
mysql-> show tables;
```
