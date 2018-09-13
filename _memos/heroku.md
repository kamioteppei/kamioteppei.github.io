---
layout: static
title: Heroku
template: 3-columns
name: Heroku
category: Environment
---

# Heroku

## ユーザー登録
ユーザー登録する
[公式サイト](https://signup.heroku.com)

## heroku CLI
herokuのコマンドラインツールをインストールする　　
[公式サイト](https://devcenter.heroku.com/articles/heroku-cli)

mac
```
$ brew install heroku/brew/heroku
```

ubuntu
```
$ sudo snap install --classic heroku
```

other linux
```
$ curl https://cli-assets.heroku.com/install.sh | sh
```

インストールの確認
```
$ heroku --version
```

## コマンド使用
```
$ heroku login
```

ユーザー登録した時の、メールアドレスとパスワードを入力する  
メールアドレスは２回目以降省略可能

## アカウント設定

SSHキーをherokuに登録する  
SSHキーの作成については、[リンク先](https://kamioteppei.github.io/memos/ssh)を参照
```
$ heroku keys:add
```
ローカルの公開鍵を見つけて、それで良いか聞かれるので、`Y`を入力する

SSHキーの登録確認をする
```
$ heroku keys
```

接続確認をする
```
$ ssh -v git@heroku.com
```
オプションの`-v`はverbose=冗長という意味で、debugログを出力してくれる

## アプリ登録
１つのアプリ登録時に、１つのDynoが作成される  
herokuでは、１つのアカウントで、550時間/月が無料となる。  
さらにクレジットカード情報を登録すると1000時間/月が無料となる。
複数のアプリを登録しても、個人の学習で使う場合は、550時間(17時間/日)も  
使用しないと思う。ただし、一定の時間、アクセスしないdynoはスリープ状態になるので、  
公開サービスのアプリは、起動待ちにならないように、定期的にアクセスするアドオンを  
入れているとのこと。

```
$ cd ~/myapp
$ heroku create
```
heroku createで１つのdynoが作成される

herokuのgitにアプリをpusuする
```
$ git push heroku master
```

アプリが自動でデプロイされるので、ブラウザで確認する
```
$ heroku open
```

herokuではDBは、sqliteをサポートしていないので、  
posgresqlを使用する   
rails tutorialでは、以下のコマンドでDBが作成された。
```
$ heroku run rake db:migrate
```

任意のDBを作成する場合は、以下のコマンドも使用できる
```
$ heroku addons:create heroku-postgresql:hobby-dev -a sample-app
```

コマンドラインからDBにアクセスできる
```
$ heroku pg:psql -a sample-app
```

rails consoleも使える。  
sandboxオプションも指定できる
```
$ heroku run rails console --sandbox
```

## Dyno設定
