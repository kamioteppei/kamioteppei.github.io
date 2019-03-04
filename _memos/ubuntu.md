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

- 基本
```
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y dist-upgrade
```

- ホームディレクトリのフォルダ名を英字に変更  
  毎回切り替えするか聞かれないようにチェックボックスをONにする
```
$ LANG=C xdg-user-dirs-gtk-update
$ sudo reboot
```

- ターミナルのディレクトリ表示をカレントディレクトリのみにする
```
$ cd ~
$ vi .bashrc
```
下記の\wの部分を\Wに置き換えて(大文字にする)保存する。
```
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
```
```
$ source .bashrc
```

## viが何かおかしい

矢印キーで、ABCDが入力される。  
[参照](https://did2memo.net/2015/12/23/ubuntu-vim-install/)

vimを最新化すればOK
```
$ sudo apt-get install vim
```

## treeコマンド

`ls`コマンドの結果をtree形式で表示する。

インストール
```
$ sudo apt-get install tree
```

コマンド実行
```
$ tree -L 5 /usr/local
```
`/usr/local`ディレクトリを5階層まで表示する。

## pathの通し方

[参照](https://qiita.com/takanemu/items/6027291be8a2a6af9adc)

### 一時的にpathを通す
```
$ export PATH="$PATH:/opt/mono/3.10/bin"
```

### 起動時に自動的にpathを通す設定にする
```
$ vi ~/.profile
```

下記を追加(記述例)
```
PATH="$PATH:/opt/mono/3.10/bin"
```

### profileをコマンドで即時反映させる
```
$ source ~/.profile
```


## メモリが不足した。
メモリの増設可能な最大容量を調べる。
```
$ sudo dmidecode -t 16
```
- Maximum Capacity: 16 GB
- Number Of Devices: 2

8GBのメモリを2枚まで増設可能
