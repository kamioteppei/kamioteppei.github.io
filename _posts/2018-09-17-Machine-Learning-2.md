---
layout: post
title: Machine Learning 2
---

機械学習の環境を作成する。(GPU使用)

前回セットアップした、PCは、NVIDIAのGPUが使えない。  
CentOSの入っているデスクトップPCにNVIDIAのグラボが入っているので、  
こちらをUbuntu + GPU + Docker + Tensorflowの環境にセットアップする。  

## バージョン情報

インストール後結果確認

Kernel
```
$ uname -a
```
> Linux desktopubuntu 4.15.0-34-generic

Ubuntu
```
$ cat /etc/os-release
```
> VERSION="Ubuntu 18.04.01 lts (Bionic Beaver)

または
```
$ cat /etc/lsb-release
```

gcc
```
$ gcc --version
```
> gcc (Ubuntu 7.3.0-16ubuntu3) 7.3.0

NVIDIA(GPU)
```
$ lspci | grep -t nvidia
```
> GeForce GTX 960

NVIDIA(ドライバ)
```
$ cat /proc/driver/nvidia/version
```
> NVIDIA UNIX x86_64 Kernel Module  390.87

Docker
```
docker --version
```
> Docker version 18.06.1-ce

## インストール

### gcc
NVIDIAドライバのインストールに必要。  

### NVIDIAドライバ

デフォルトのドライバのnouveauが競合して、インストールできないので無効にする。  
初めのインストールの失敗時に、設定ファイルを自動で作成してくれているので、  
再起動すればそれでよかったかもしれない。

gccをインストールする。  
32bitがどうだこうだいう警告は無視してインストールする。

GPUの動作確認
```
$ nvidia-smi
```
GPUの機種名(GeForce GTX 960)が表示されればOK

### Dockerコンテナ

nvidia-docker2を入れる。そうすれば、ホストに、  
CUDA,CUDA toolkit,cuDNNをインストールしなくても、  
Dockerに上記をインストール済みのコンテナを使用すれば良い。

## 何をやってもどこかが合わない

## 結局こうした

![local_environment_for_deep_learning.png](/assets/images/local_environment_for_deep_learning.png)
