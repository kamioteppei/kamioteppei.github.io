---
layout: post
title: Machine Learning
---

機械学習の環境を作成する。

DockerやTensorFlowを入れるのにUbuntuが必要らしい。  
Macの方には、Vagrant等で色々使っているので、  
Windowsマシンの方に、Ubuntu18.04を入れて、   
デュアルブーストする。

参考にしたサイトは[ここ](https://www.ttlglab.com/dualboot-ubuntu-windows/)です。

以下上記のサイトの補足事項です。

- 1章
  + 特になし
- 2章
  + 自分の場合は、Dドライブを半分に縮小した。
  ここでは、縮小した残りの部分を、未使用の領域のままにしておいて良い。
- 3章
  + 特になし
- 4章
  + 特になし
- 5章
  + isoファイルと、書き込み先のUSBドライブが正しく指定できていれば、
  他の設定はそのままで良い。
- 6章
  + 自分の場合(HP製ノート)は、F10で、BIOS起動した。
  + `UEFI Boot Order`メニューで`USB Disckette on Key〜`をF6で最優先にした。
- 7章
  + スワップ領域はPCのメモリの大きさに合わせる。
- 再起動
  + `UEFI Boot Order`メニューで`OS Boot Manager`をF6で最優先にした。
  + `UEFI Boot Order`メニューで`OS Boot Manager`をエンターすると、Ubuntuが選べるので最優先にする。
  + 上記設定にすると、起動後、UnbutuとWindowsを選べるメニュー画面が出てくる。
(EasyBCDはとりあえず不要とする。)
  + Windowsを最優先にしたままだと、Windowsが自動で立ちあがる。
