---
layout: static
title: Rails
template: 3-columns
name: Rails
category: Web
---

# Ruby on Rails

## Rails Tutorial

Githubからチュートリアルのプロジェクトをダウンロードして、起動する

Githubからcloneする。

Ruby Gems をインストールする。
```
$ bundle install --without production
```

データベースへのマイグレーションを実行する。
```
$ rails db:migrate
```

テストを実行して動作確認する。
```
$ rails test
```

テストでエラーになった場合、
テスト環境向けのマイグレーションが
できていないので、やり直す。

```
$ rails db:migrate:reset
$ rails db:migrate RAILS_ENV=test
$ rails test
```

テストが無事に通ったら、Railsサーバーを立ち上げる。
```
$ rails server
```

Vagrantを使用している環境で、アクセスできない場合は こちら。
```
$ rails server -b 0.0.0.0
```

http://192.168.33.10:3000/　にアクセスする。


### rails console

Railsサーバーをターミナルで操作する場合は、
```
$ rails console
```

railsコンソールを終了するには
```
$ ctrl+d
```
または
```
$ exit
```

### rails db

RailsサーバーのDBをターミナルで操作する場合は、
```
$ rails db
```

db接続を終了するには
```
$ (ctrl+d)
```

### デバッグ

デバッグする場合は、ブレイクポイントに下記の１行を追加  
`debugger`

そうするとブレイクポイントを
通った時に、コンソールが
デバッグモードになっているので
変数の中身をコマンドで確認する。

変数の確認が終わったら、
ブレイクポイントの記述を
コメントアウトしないと
ずっとデバッグモードになっていると
思われるので、コメントアウトする  
`#debugger`

### gemの変更

Gemfileを修正する
```
$ bundle install
```

### スキーマ変更

schema.rbはマイグレーションの結果であって、
このファイルを直接修正しても意味はない

マイグレーションファイルを作成する
```
$ rails generate migration add_column_to_microposts
```

マイグレーションファイルを修正する
```
def change
   add_column :microposts, :ancestry, :string, index: true
end
```

マイグレーションを実行する
```
$ rails db:migrate
```

schema.rbの内容を確認する


### コントローラーを変更する
```
$ rails generate controller NAME [action action] [options]
$ rails generate controller AdminUsers index show
```
既に存在するファイルは対話モードで、上書きするか聞かれるので
スキップ等を選ぶ
ルート、ビュー、コントローラー、テスト等のファイルが作成される

### モデルを変更する
```
$ rails generate model NAME [field[:type][:index] field[:type][:index]] [options]
$ rails generate model AdminUser name:string mail:string
```
