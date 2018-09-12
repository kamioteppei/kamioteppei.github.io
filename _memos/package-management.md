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
