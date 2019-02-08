---
layout: static
title: Git
template: 3-columns
name: Git
category: Environment
---

# Git

## init
ローカルリポジトリを作成する。
```
git init
echo "# *.csv" >> .gitignore
echo "# MESSAGE" >> README.md
git add README.md
git commit -m "first commit"
```
## リモートリポジトリに追加する
```
git remote add origin git@github.com:<your-account>/<repository-name>.git
git push -u origin master
```

## clone
リモートリポジトリをローカルディレクトリにコピーする。  
ローカルリポジトリが作成される。

```
$ cd <クローンを作成するディレクトリ>
```
直下にクローンするプロジェクトのプロジェクト名のフォルダが作成される。

```
$ git clone <url>
```
urlはgithubでクローンしたいプロジェクトを開いて、  
クローンボタンを押すとurlが表示される(git@アカウント/プロジェクト名.git)

リモートリポジトリからローカルにダウンロードする。  
リモートリポジトリには以下がある。
- 自分のアカウント
- 自分のプロジェクトのアカウント
- それ以外のアカウント

それ以外のアカウントのプロジェクトをクローンしても、
そこにpushしてはいけない（権限でできない？）ので、　
自分のアカウントにfolkする。
その後は、ローカルにclone、修正、add、commit、push、
必要があれば、purllrequestを行う。

## add
ローカルで新規に作成下ファイルを、gitに認識させる。
```
$ git add .
```
なぜか*.rb等ではアドされなかった。

## commit
ローカルリポジトリにコミットする。  
```
$ git commit -m "commit messege."
```

Vagrant環境だと、ユーザー名とメールアドレスが
Vagrantになるので、設定を変更する
```
$ git config --global user.name "hoge fuga"
$ git config --global user.email foo@bar.com
```

## push
ローカルリポジトリの変更をリモートリポジトリに、反映する。
```
$ git push
```
または、アカウントとブランチを指定する。
```
$ git push origin master
```

## ブランチ
開発時には、マスター(タグ)からブランチ(タグ)を作成し、  
他のブランチとのリリースも考慮し、  
マスターにマージしてよければ、マージする。  
マージの方法には、ローカルでマージする方法と  
リモートにブランチをpushして、  
pull requestを送る方法がある。  
pull requestはgithubでマージする。

```
$ cd <クローンしたプロジェクトの中に移動>
$ git checkout -b <branch-name>
```
以下は同義である
```
$ git branch <branch-name>
$ git checkout <branch-name>
```

現在チェックアウトしているタグを  
確認する場合は以下のコマンドをたたく。
```
$ git branch
```
どのタグがチェックアウト中かわかる。

リモートにあるタグを確認する場合は、  
以下のコマンドをたたく。
```
$ git branch -r
```
どのタグがヘッダかわかる。
ローカルで作成したブランチタグは、
リモートにpushしないと、
リモートには存在しない。

### マージ方法１
(オープンソースプロジェクトの開発向け)  
開発したいプロジェクトのアカウントから
対象のプロジェクトのfolkボタンで、
自分のgithubのアカウントにフォーク
ローカルにクローン  
ブランチを作成  

ローカルでブランチタグを  
マスタータグにマージして、  
プッシュする場合  
ブランチタグをアドとコミットしてから  
```
$ git checkout master
$ git merge <branchname>
$ git push origin master
```

マスタータグにマージしたブランチタグは
不要なので削除する
```
$ git branch -d <branchname>
```

### マージ方法２
(社内プロジェクトチームの開発向け)
リモートにブランチタグを
プッシュして、purll requestを送信する場合は、
ブランチタグをアドとコミットしてから
```
$ git push origin <branchname>
```
githubの画面で上記のブランチに切り替える
プルリクエストを送信する
宛て先を確認すること
プルリクエストのマージボタンをクリック
確認ボタンをクリック
マージしたブランチの削除ボタンをクリック

ブランチタグは
不要なので削除する
```
$ git checkout master
$ git branch -D <branchname>
```
マージ方法１のように、ローカルでは
マージしていないので、オプションが-dだと
ブランチを削除できない。
よって-Dとする

この時点でローカルのマスタータグは
リモートのマスタータグにマージした
内容が反映されていないので、
リモートのマスタータグと同機をとる
```
$ git pull origin master
```

## ファイル削除
ファイルを削除する場合、SVNと同じで、   
シェルの削除コマンドでしてはいけない。　　
Gitコマンドを使用する
```
$ git rm foo/var/hoge.rb
```

ディレクトリを丸ごと削除する場合
```
$ git rm -r foo/var
```

## リモートの状態をローカルに置換

ローカルの削除方法を間違えた時に、`git pull`しても、  
正しくリモートの状態に変わらない  

以下でリモートを強制的に、ローカルに置換する
```
$ git reset --hard
```
