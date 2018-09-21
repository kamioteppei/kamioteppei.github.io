---
layout: static
title: Package Manager
template: 3-columns
name: Package Manager
category: Environment
---

# Package Manager

## Package
- debian系(Ubuntu)のパッケージはdeb形式
- RedHat系(Fedora,CentOS)のパッケージはrpm形式

- Macの.appは、Windowsの.exeファイル
- Macの.pkgは、Windowsの.msiファイル
- Macの.dmgは、Windowsの.isoファイル  
(DiskImageMounter.appに関連づけられる)

## repository

### Ruby
[ruby-toolbox](https://www.ruby-toolbox.com)

### Python
[pypi](https://pypi.org)

## Package Manager

### apt
debian系のパッケージマネージャー  
dpkgを呼び出す

### dpkg
debian系のパッケージマネージャー  

### yum
RedHat系のパッケージマネージャー  
rpmを呼び出す。依存関係も解決する。  
基本はこちらを使用する。

### rpm
RedHat系のパッケージマネージャー  
yumでできないパッケージはこちらを使用する。

### homeblew
Macのパッケージマネージャー
```
blew install <package name>
```

### npm
Node.jsのパッケージマネージャー

### gem
Rubyのパッケージマネージャー

### pip
Pythonのパッケージマネージャー

### pear,pecl
PHPのパッケージマネージャー

## File Downlorder
パッケージマネージャーではない

### wget
サイトを再帰的にクロールできる。

### curl
HTTP、HTTPS、FTP、FTPS、SCP、SFTP、TFTP、DICT、TELNET、LDAP、FILEと、多くの拡張子に対応している上、プロキシ、ユーザー認証、FTPアップロード、HTTP POST、SSL接続などができてしまう優れものです。

[参照](http://d.hatena.ne.jp/ctrlshift/20080129/1201612626)

## command

[参照](http://xref.jp/package)

## x-env

同一PCで、例えばプロジェクトによって、Rubyのバージョンを変える場合、  
プロジェクトごとに、Vagrantを用意しても良いが、Vagrantを、  
立ち上げ直すのも時間がかかる。(常に複数立ち上げるのも非現実的)  
また、MacのプリインストールのRubyが古いから、最新版をインストールする  
という用途もある。

Node.js, Ruby, Pythonなどでは、自分のバージョンを切り替える、  
マネージャーがあるので、それを使っても良い。

- Node.js -> ndenv
- Ruby -> rbenv
- Python -> pyenv
  python3.3からvenvという標準機能があり推奨される。

それぞれのx-envでやってることは、`~/.bash_profile`に、  
指定したバージョンのパスを動的に読み込む記述を書き込む

なお、Node.js, Ruby, Python等のx-envを全てインストールのも、  
繁雑なので、`anyenv`というものもあるので、覚えておく。  
[参照](https://qiita.com/yutackall/items/6c48cf56317d8501f6df)
