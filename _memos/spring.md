---
layout: static
title: Spring
template: 3-columns
name: Spring
category: Web
---

# Spring Framework

JavaのWebフレームワーク

## Spring Boot

Spring Frameworkベースのアプリケーションを手軽に作成することができるフレームワーク。
デフォルトで、Tomcatコンテナを含んでいる。

## 開発環境構築

- Intellij IDEA(Community Editionでも良い) / Eclipse
- jdk1.8以上
- Gradle / Maven

## RESTful API

- [公式サイト](https://spring.io/guides/gs/rest-service/)

- [DBアクセスの参考](https://qiita.com/yokobonbon/items/064504bc9dca3f0ec7d1)

- [認証周りの参考](https://qiita.com/nyasba/items/f9b1b6be5540743f8bac)  
[参考２](https://auth0.com/blog/implementing-jwt-authentication-on-spring-boot/)
[参考３](https://qiita.com/Hiro-mi/items/12b44e7c2ec4e2d13a86)

- APIのテストにchromeアドインの[Restlet Client](https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm)を使用する。

- Spring Boot内部にもテストツールが含まれる。
  - SwaggerConfig.javaを作成
  - build.gradleにspringfox-swagger、springfox-swagger-uiプラグインを追加
  - アプリケーション起動後に、[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)にアクセス。
  - [http://localhost:8080/v2/api-docs](http://localhost:8080/v2/api-docs)にapiの定義を出力。

## Lombok
getter/setterの自動生成機能

Intellijでうまく動作しない場合は、以下の順で確認する。

- build.gradleのdependencyにLombokの記述があるか？
- 「Intellij」にLombokのプラグインを入れているか？   
  -> IntellijのFile->settings->Plugins->lombokで検索してインストール
- アノテーションの動作を有効にしているか？   
  -> IntellijのFile->settings->Build,Execution...->Compiler->Annotation Proce...->Enable annotation proccessingにチェックする

## AWSにデプロイ

### RDSにデータベース作成

rootユーザーでmysqlに接続後、データベースとユーザーを作成し、ユーザーに権限を付与する。
```
mysql-> create database <db_name>;
mysql-> create user <usr_name>@'%' identified by '<longandcomplexpassword>';
mysql-> grant all on <db_name>.* to <user_name>@'%';
```

### EC2にjdkをインストール

```
$ sudo yum -y install java-1.8.0
$ sudo yum -y remove java-1.7.0-openjdk
```

### ローカルでjarファイルをビルド

gradleにpathを通しプロジェクトの直下(gradlewの階層)で、
```
$ gradle build
```

以下のコマンドで、プロジェクトのビルドと実行ができる。(ローカルの実行向けだと思う。)
```
$ gradle bootrun
```

プロパティファイルは、以下の２つがある状態でビルドし、jarの実行時にオプションで本番用を指定する。
- application.properties
- application-prod.properties

### EC2にjarファイルをデプロイ

ビルドしたjarをローカルからEC2にsftpでアップロードする
```
$ sftp -i <peg_name>.peg ec2-user@<ip>
```

```
sftp-> put <jar_name>.jar
```

### jarを実行

sshで再接続する
```
$ ssh -i <peg_name>.peg ec2-user@<ip>
```

```
$ java -jar -Dspring.profiles.active=prod <jar_name>.jar
```
※prodはプロパティファイルのファイル名のapplication-prod.propertiesのprod(任意に命名)の部分

### httpdからプロジェクトのjar内臓のtomcatにリダイレクトさせる設定

EC2の`/etc/httpd/conf/httpd.conf`に下記を追加

```
<VirtualHost *:80>
  ProxyRequests Off
  ProxyPass / http://localhost:8009/
  ProxyPassReverse / http://localhost:8009/
</VirtualHost>
```
又は、
```
<Location />
    ProxyPass ajp://localhost:8009/
</Location>
```

apacheとtomcatの連携についての今更なおさらい。
- apacheは、httpプロトコルのデフォルトポートの80番でリクエストを受け付ける。
- tomcatは、apacheを通さなくとも、内部のhttpサーバーのポートの8080番で外部からのリクエストを直接受け付けることができる。
- apacheの80番ポートで受け取ったリクエストをtomcatに連携する場合は、8080番ではなく、8009番に転送する。
この場合、`/etc/httpd/conf/httpd.conf`にProxyPassの設定を追加する。  
  ※8080番ポートは外部からtomcatに直接リクエストを送る為のポート

### CloudFrontのメソッド変更

POSTを許可するかの設定があるが、CloudFrontをキャッシュに使用しているので、
GETはキャッシュしても良いが、POSTをキャッシュするのはよくないはず。

### CloudFormationでデプロイ

CloudFormationで、S3からjarを持ってきて実行する方法がスマートのようだ。
[参照](https://dev.classmethod.jp/etc/jarfile-cloudformation-deploy-on-ec2/)

### jar起動のサービス化

[参考](https://zoltanaltfatter.com/2016/12/17/spring-boot-application-on-ec2/)

ただし、今回は、手作業で登録

- サービス登録

  `/etc/init.d/`にサービスのファイル(ファイル名=`MySpringApiBookingService`,ファイル名の拡張子なし)を下記内容で作成する。
他のサンプルでは、実行するjarにシンボリックリンクを張っているが、サービス起動で失敗したのでやめた。
その代わり、jar起動用のシェルの中では、jarのフルパスを指定する。なぜなら、カレントディレクトリは、jar起動用のシェルの場所ではなくて、このサービスファイルのある場所だから。
```
#!/bin/sh
# chkconfig: 2345 99 10
# description: start shell
case "$1" in
 start)
       su -l ec2-user -c "sh /home/ec2-user/SpringApiBookingService/bin/SpringApiBookingServiceStart.sh"
       ;;
 stop)
       ;;
  *) break ;;
esac
```
```
$ chkconfig --add MySpringApiBookingService
$ chkconfig MySpringApiBookingService on
```

- jar起動用のシェルファイル`BookingServiceStart.sh`を`/home/ec2-user/SpringApiBookingService/bin`に作成
```
java -jar -Dspring.profiles.active=prod /home/ec2-user/SpringApiBookingService/bin/spring-api-booking-0.1.0.jar --logging.path="../log"
```

- サービス起動
```
service httpd start
service MySpringApiBookingService start
```

- サービス起動設定
```
chkconfig httpd on
chkconfig MySpringApiBookingService on
```

### 今回つまづいた箇所

- application_userテーブルのパスワード桁    
javaでpasswordフィールドを30文字にしていた為、テーブルのカラムもvarchar(30)で作成された。
apiのパラメータのパスワードが数桁でも、テーブルに格納するときにハッシュ化するので、数十桁になっていた。
その為、オーバーフローが発生していた。

- Route53    
結論として、Route53のヘルスチェックが失敗していた為、Route53から、ロードバランサーにリクエストが進まなかった。
原因はtomcatに連携する前は、登録したドメイン名から、EC2のドキュメントルートのindex.phpを取得できていたが、
tomcatに連携した為、ドメイン名から何も取得できなかった為。

- 原因の切り分け方法    
外部からアクセスできるものを、直接アクセスしてみる。
  - EC2のtomcatを、EC2内部から、localhostとポート:8080でアクセスする
  - EC2のtomcatを、外部から、パブリックIPとポート:80でアクセスする
  - 外部から、ロードバランサーのDNS名でアクセスする
  - 外部から、Route53のDNS名でアクセスする
  - CloudFrontをdisableにしてみる
