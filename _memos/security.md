---
layout: static
title: Security
template: 3-columns
name: Security
category: Web
---

# Security

## アカウント作成

### メールアドレス

メールアドレスをユーザー登録の論理キーにする。  
入力されたメールアドレスは、小文字に変換して、データベースに登録し、一意にする。
ただし、ログイン字は、大文字小文字の違いを無視して、findする。

### パスワード

パスワードをデータベースに登録する場合、平文で登録してはいけない。  
データベースが外部からアクセスされた場合に、パスワードが悪用される。

Railsでは、`User`モデルに`has_secure_password`属性を付けると、  
自動的に、`password`と`password_confirmation`というフィールドと、  
`password_digest`というDBカラムへの登録機能を持つ。  
`password_digest`カラムには、ハッシュ化されたパスワードが登録される。

## ハッシュ化と暗号化

### ハッシュ化
- 復号：不可
- 用途：DBに保存するパスワード  
ユーザーアカウント作成時に、システム管理者は、ユーザーのパスワードの平文を知る必要はない。  
よって、DBにはパスワードのハッシュを登録する。そうすれば、外部に漏れてもあまり問題はない。
- アルゴリズム：MD5(脆弱),SHA-1(脆弱),SHA-2(推奨)

ハッシュ化の注意点  
ハッシュからは平文に復号できないが、可能性的には、例えば６文字の文字列の全パターンを、  
ハッシュ化した時の、平文とハッシュのリストがあれば、ハッシュから平文が逆引きできる。  
上記のリストをレインボーテーブルという。その対策として、平文にsaltという任意の文字列を  
付加してからハッシュ化すると、レインボーリストを作成することは難しくなる。  
saltを追加して26文字以上にすると、セキュアらしい。  
[参照](https://dev.classmethod.jp/security/rainbowtable/)

### 暗号化
- 復号：可能
- 用途：httpsセッションで通信するパスワード  
ユーザーログイン時に、ブラウザで入力したパスワードを暗号化して、サーバーに送信する。  
認証処理で、パスワードを平文に復号し、平文をハッシュ化することで、上記のDBのパスワードと  
一致比較することができる。
- アルゴリズム：RSA(推奨),DSA,DES


## アプリのSSL強制設定

Railsアプリでは、`config/environments/production.rb`に以下を追加する。  
```
Rails.application.configure do
  # Force all access to the app over SSL, use Strict-Transport-Security,
  # and use secure cookies.
  config.force_ssl = true
end
```

## Strong Parameters

Railsのコントローラーで、リクエストからのパラメータを使用する時に、  
指定したパラメータ以外は使用しない機能。　　
`admin='1'`等の不正なパラメータを使用しない。

```
def user_params
  params.require(:user).permit(:name, :email, :password,
                               :password_confirmation)
end
```

## Token
以下のアクションで、tokenを発行して一致するか確認する。
- ユーザーのアクティベート
- ログイン状態の保存
- パスワード変更

Tokenの有効期限を設定するとなお良い。

## Cookies


## セッションハイジャック


## クロスサイトスクリプティング(XSS)


## クロスサイトリクエストフォージェリ(CSRF)


## ブラウザ

信用できるブラウザのアドオンを入れた時に、  
後に、そのアドオンの権利を悪意のある人が手に入れて、  
悪用される可能性がある。
[参照](https://blog.clock-up.jp/entry/2016/11/03/http-headers-malware)
