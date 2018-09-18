---
layout: static
title: Docker
template: 3-columns
name: Docker
category: Environment
---

# Docker

## インストール

[公式サイト](https://docs.docker.com/install/linux/docker-ce/ubuntu/)にしたがって、
Docker CE for Ubuntuをインストールする。

リポジトリからインストールする手順を実行する。

## 初期設定

sudo無しでdockerコマンド使えるようにユーザをグループに追加。

```
sudo gpasswd -a $USER docker
sudo service docker restart
```
[参照](https://qiita.com/t2kmt/items/b3be56d4df5f80c555af#2-dockerインストール)

## docker-compse

以下を参照
[docker-composeを使うと複数コンテナの管理が便利に](https://qiita.com/y_hokkey/items/d51e69c6ff4015e85fce)
