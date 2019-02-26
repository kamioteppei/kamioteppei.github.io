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

### SSL接続を有効にする

[参照](https://qiita.com/toshiro3/items/b7f6842efe9fd97f8c56)

SpringやRailsで「SSL接続でないと危険です。」みたいな警告がでた場合は、
アプリ側の設定を見直す。

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

## ストレージエンジン

### InnoDB(デフォルト)
- ロックは行単位
- トランザクションのサポートあり
- 外部参照キーのサポートあり  
外部連携するシステムの場合は、外部データの優位性、リカバリ等を含めて、制約の必要性を考慮する。

### MyISAM
- ロックはテーブル単位
- トランザクションのサポートなし
- 外部参照キーのサポートなし
