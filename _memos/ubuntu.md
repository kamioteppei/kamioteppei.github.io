---
layout: static
title: Ubuntu
template: 3-columns
name: Ubuntu
category: Environment
---

# Ubuntu

## Ubuntuをインストールしたらまずやることリスト

[参照](https://www.iandprogram.net/entry/2015/09/11/181208)
- ホームディレクトリのフォルダ名を英字に変更
- ターミナルのディレクトリ表示をカレントディレクトリのみにする

## viが何かおかしい

矢印キーで、ABCDが入力される。  
[参照](https://did2memo.net/2015/12/23/ubuntu-vim-install/)

vimを最新化すればOK
```
$ sudo apt-get install vim
```

## メモリが不足した。
メモリの増設可能な最大容量を調べる。
```
$ sudo dmidecode -t 16
```
- Maximum Capacity: 16 GB
- Number Of Devices: 2

8GBのメモリを2枚まで増設可能
