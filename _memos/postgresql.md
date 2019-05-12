---
layout: static
title: PostgreSQL
template: 3-columns
name: PostgreSQL
category: DataBase
---

# PostgreSQL

Ubuntu 18.04にインストール  
[参照](http://matoto1980.livedoor.blog/archives/15780216.html)

```
$ sudo apt-get update
$ sudo apt-get install postgresql
```

## 管理者作業

Postgres管理者に切り替え
```
$ sudo -u postgres -i
```

posgresqlにログイン
```
$ psql
```

posgresqlにログアウト
```
postgres=# \q
```

ユーザー作成(Postgres管理者に切り替え)
```
$ createuser -d -U postgres -P <user_name>
```

ユーザー確認
```
postgres=# \du
```

データベース作成(Postgres管理者に切り替え)  
(スキーマは別途作成可能)
```
postgres-> createdb <db_name> --encoding=UTF-8 --lc-collate=C --lc-ctype=C --owner=<user_name> --template=template0
```
オプションについての説明は、[ここ](https://www.kakiro-web.com/postgresql/postgresql-create-database.html)を参照  
文字コードによる並び順の設定が関係する。

データベース確認
```
postgres=# \l
```

## ユーザー作業

ターミナルからの接続確認
```
$ psql -U <user_name> -h <host_name> -d <db_name>
```

テーブル一覧(view, sequenceを含む)
```
postgres=# \d
```
