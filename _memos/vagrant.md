---
layout: static
title: Vagrant
template: 3-columns
name: Vagrant
category: Environment
---

# Vagrant

## インストール

Virtual Boxインストール  
centosなどのイメージを名前をつけてインストール  
ex:centos_vm  

仮想OSのハブ  
https://app.vagrantup.com/boxes/search

仮想OSをインストールする
```
$ mkdir foo/bar/centos_vm
$ cd foo/bar/centos_vm
$ vagrant init [name[url]]
```
Vagrantfileが作成される

インストールしたOSを立ち上げる
```
$ vagrant up
```

インストールしたOSをシャットダウンする
```
$ vagrant halt
```

インストールしたOSを再起動する
```
$ vagrant reload
```

仮想OSにSSHで接続する
```
$ vagrant ssh
```

user/passは    
vagrant/vagrant    
root/vagrant    

ssh接続を終了するには
```
$ ctrl+d
```
または
```
$ exit
```

ホストOSから、vagrant環境のRailsアプリを  
ブラウザで確認する場合は、  
Vagrantファイルの以下を修正する。  

```
# Create a private network, which allows host-only access to the machine
# using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"
```

Box管理と仮想マシン管理は別もの  

`vagrant destroy`で仮想マシンを削除してもBoxとVagrantfileは残る。  
`vagrant destroy` = 仮想マシン削除  
`vagrant box remove` = Box削除  
再度vagrant upを行うと初期状態(vagrant box add直後の状態)で起動することができるので、  
`vagrant up` → 作業 → `vagrant destroy`というサイクルで作業ができる。  
