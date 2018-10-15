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
$ docker --version
```
> Docker version 18.06.1-ce

## インストール

### gcc
NVIDIAドライバのインストールに必要。  

```
$ sudo apt-get install build-essential
```

### NVIDIAドライバ

[参照](http://nc30mtd.oops.jp/blog/2016/09/titan-xcuda.html)

gccは上記でインストール済み。    

デフォルトのドライバのnouveauが競合して、インストールできないので無効にする。  
nouveauの起動確認
```
$ lsmod | grep nouveau
```

ブラックリストに入れて立ち上がらないようにする  
```
$ sudo vi /etc/modprobe.d/blacklist-nouveau.conf
```

ファイルに書き込む内容は次の通り。
```
blacklist nouveau
blacklist lbm-nouveau
options nouveau modeset=0
alias nouveau off
alias lbm-nouveau off
```

もう１つファイルを作成する。
```
$ sudo vi /etc/modprobe.d/nouveau-kms.conf
```

ファイルに書き込む内容は次の通り。
```
options nouveau modeset=0
```

次のコマンドを実行して再起動する。
```
$ sudo update-initramfs -u
$ sudo reboot
```

nouveauが表示されないことを確認する。
```
$ lsmod | grep nouveau
```

NVIDIAドライバをインストールする。  
オプションは不要だが、ダメならつける。
```
$ sudo sh ./NVIDIA-Linux-x86_64-390.87.run -a --disable-nouveau
$ sudo reboot
```

上記とは別のconfigファイルを作成するか聞かれるが、多分不要。
32bitがどうだこうだいう警告は無視してインストールする。

GPUの動作確認
```
$ nvidia-smi
```
GPUの機種名(GeForce GTX 960)が表示されればOK

### Docker
[Dockerのまとめ](/memos/docker)にしたがって、インストール

### Nvidia Docker
nvidia-docker2を入れる。そうすれば、ホストに、  
CUDA,CUDA toolkit,cuDNNをインストールしなくても、  
Dockerに上記をインストール済みのコンテナを使用すれば良い。

[nvidia-dockerのGitHub](https://github.com/NVIDIA/nvidia-docker)にしたがって、インストール

```
# If you have nvidia-docker 1.0 installed: we need to remove it and all existing GPU containers
docker volume ls -q -f driver=nvidia-docker | xargs -r -I{} -n1 docker ps -q -a -f volume={} | xargs -r docker rm -f
sudo apt-get purge -y nvidia-docker

# Add the package repositories
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \
  sudo apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
  sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update

# Install nvidia-docker2 and reload the Docker daemon configuration
sudo apt-get install -y nvidia-docker2
sudo pkill -SIGHUP dockerd

# Test nvidia-smi with the latest official CUDA image
docker run --runtime=nvidia --rm nvidia/cuda:9.0-base nvidia-smi
```

## 何をやってもどこかが合わない
1週間ほど試行錯誤したが、ダメだった。  
tensorflowの公式サイトだったり、DockerHubに記載されている、docker pullコマンドのイメージは、
タグを省略していて、自分が使用したいものを、正しく指定できてないといけない。

- nvidia公式のimageは、cuDNNがインストールされていなかった。
- tensorflow公式のimageは、whlファイルにtensorflowが入っていたがよく分からなかった。
- fastaiのimageは、セットアップファイルや、ymlファイル等色々あるので、よく分からなかった。
- fastai1のdockerfileをbuildしても、途中でエラーになった。

## 結局こうした

![local_environment_for_deep_learning.png](/assets/images/local_environment_for_deep_learning.png)
