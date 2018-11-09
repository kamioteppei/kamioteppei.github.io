---
layout: static
title: Docker
template: 3-columns
name: Docker
category: Environment
---

# Docker

## インストール

### Docker

[公式サイト](https://docs.docker.com/install/linux/docker-ce/ubuntu/)にしたがって、
Docker CE for Ubuntuをインストールする。

リポジトリからインストールする手順を実行する。

### Docker Compose

[公式サイト](https://docs.docker.com/compose/install/#install-compose)にしたがって、
docker-composeをインストールする。

## 初期設定

sudo無しでdockerコマンド使えるようにユーザをグループに追加。  
docker/docker-composeコマンドを実行して、エラーになった場合、権限の問題であれば、
sudoするか、この設定にすると、うまくいく。

```
sudo groupadd docker
sudo gpasswd -a $USER docker
sudo service docker restart
# sudo systemctl restart docker # １つ上の代替
sudo reboot
```
[参照](https://qiita.com/t2kmt/items/b3be56d4df5f80c555af#2-dockerインストール)

## dockerサービス

- サービス起動状態確認
```
$ sudo systemctl status docker
```
ctrl+cで確認画面から抜ける

- サービス起動/終了/再起動
```
$ sudo systemctl start docker
$ sudo systemctl stop docker
$ sudo systemctl restart docker
```

- サービス自動起動設定
```
$ sudo systemctl enable docker
```

## dockerコマンドのflow

下記サイトの図を参照  
[Dockerでよく使うコマンドまとめ](https://morizyun.github.io/docker/about-docker-command.html)

Dockerイメージの操作
- docker login  -> Docker Hubにログインする。
- docker search  -> Docker HubのDockerイメージを検索する。  
イメージの命名規則は、`組織名(個人名) / イメージ名 : タグ名(イメージのバージョンの説明)`
- docker pull  ->　 Docker HubのDockerイメージをローカルにダウンロードする。
- docker images  -> ローカルのDockerイメージのリストを表示する。
- docker tag  -> ローカルのDockerイメージにタグをつける。
- docker inspect  -> 指定したDockerイメージの設定の詳細を表示する。

  Dockerコンテナの操作
  - docker run -> DockerイメージからDockerコンテナを起動する。
  - docker ps  ->　タスクが起動中のDockerコンテナのリストを表示する。
  - docker ps -a  -> 全てのDockerコンテナのリストを表示する。
  - docker stats -a  -> 起動中のDockerコンテナのcpuやメモリの使用状況を表示する。
  - docker exec  -> 指定したDockerコンテナでコマンドを実行する。
  `docker exec -it コンテナID先頭3桁 bash`で、シェル操作できる。
  - docker attach  -> Dockerコンテナに起動しているPID=1のプロセスの標準入力(STDIN)と、標準出力(STDOUT)に接続する。
  - docker stop  -> 指定したDockerコンテナを停止する。
  - docker kill  -> 指定したDockerコンテナを強制終了する。
  - docker start  -> 指定したDockerコンテナを起動する。
  `-a`で、コンテナの起動と同時に、初期プロセスにattachする。
  - docker restart  -> 指定したDockerコンテナを再起動する。
  - docker rm  -> 指定したDockerコンテナを削除する。
  - docker cp \<container_id\>:\<guest_file_path\> \<host_file_path\> -> コンテナからホストにファイルをコピーする
  - docker cp \<host_file_path\> \<container_id\>:\<guest_file_path\> -> ホストからコンテナにファイルをコピーする

- docker commit -> DockerコンテナをDockerイメージに変換する。
- docker build -> DockerfileからDockerイメージを作成する。
- docker push -> ローカルのDockerイメージをDocker Hubにアップロードする。
- docker rmi  -> Dockerイメージの削除


## Dockerfile

dockerでは、linuxのスタートアップのような仕組みは使用しない。  
dockerは、基本的に1コンテナ1タスクで使用する。  
Dockerイメージを作成するときに、Dockerfileで`CMD`か`ENTRYPOINT`の属性で、  
コンテナ起動時に、実行するコマンドを指定する。

tensorflow-gpuのDocker Imageをrunすると、引数にcommandを渡さなくても、  
jupyter notebookが立ちあがる。docker runで作成されたコンテナのルートに、  
`run_jupyter.sh`があるので、それを呼んでいる。

DockerfileのCMDを確認する場合は、ホストで、以下のコマンドを実行する。
```
$ docker inspect [イメージのid先頭3桁]
```

もちろん、`docker run`するときに、実行するコマンドを渡せば、それが優先される。

[参照](https://qiita.com/hihihiroro/items/d7ceaadc9340a4dbeb8f)

## Docker Compose

以下を参照  
[docker-composeを使うと複数コンテナの管理が便利に](https://qiita.com/y_hokkey/items/d51e69c6ff4015e85fce)

### コマンド

- クラスタの起動  
`docker-compose.yml`ファイルを作成し、`docker-compose up`を実行する。  
`docker-compose up -d`で、dettach起動。

- クラスタの停止   
attach起動なら、ctrl+cで終了。  
dettach起動なら、`docker-compose stop`で終了。

- クラスタの削除   
`docker-compose rm`
