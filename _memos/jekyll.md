---
layout: static
title: Jekyll
template: 3-columns
name: Jekyll
category: Web
---

# Jekyll (ジキル)

rubyの静的webサイトジェネレーター  
morkdownファイルをhtmlに変換してくれる  
rubyが入っている環境で、railsの操作と似た感じで開発する

生成されるのは静的なサイトなので、掲示板は、問い合わせフォームを  
使用できない短所あり。

POSTできる？できない？

中小企業やイベントの告知サイトなど、頻繁には更新しないものは、
wordpress等よりも簡単に作成できると思われる。  
問い合わせは、メールやsnsのリンクなど、別のサービスを  
組み合わせるのが、ユーザー的にも、顧客的にも、満足度が高いかもしれない。

## クイックスタート

Gems をインストールします。
```
$ gem install bundler jekyll
```

jekyllプロジェクトを作成します
```
$ jekyll new <site_name>
```

プロジェクトの直下に移動
```
$ cd <site_name>
```

jekyllサーバーを立ち上げる  
同時にビルドもされるはず・・・  
`--watch`オプションで、ファイルの変更を監視して、ビルドしてくれる
```
$ jekyll server --watch
```

http://localhost:4000/　にアクセスします。


Vagrantを使用している環境で、アクセスできない場合は こちらです。

host側のvagrantファイルにport fowardの設定を追加する
```
# port forward for jekyll server
config.vm.network "forwarded_port", guest: 4000, host: 4000
```

ホスト側でvagrantを再起動する
```
$ vagrant reload
```

jekyllサーバーを立ち上げる  
```
$ jekyll server --host=0.0.0.0 --watch
```

http://192.168.33.10:4000/　にアクセスします。


jekyllサーバーを終了する場合は、
control + c を入力する


## Liquid

jekyllで使用可能なテンプレート言語。
htmlファイル内で、if分や、for分を記述できる、  

- [jekyll公式](https://jekyllrb.com/docs/liquid/)  
- [liquid公式](https://shopify.github.io/liquid/)

コレクションに対して、group byやsortもできるが、  
公式サイトはサンプル程度なので、実装は、googleで検索した方が良い。  
