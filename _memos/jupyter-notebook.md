---
layout: static
title: Jupyter Notebook
template: 3-columns
name: Jupyter Notebbok
category: Machine Learning
---

# jupyter notebook

## インストール
アナコンダをインストール

## ローカルサーバーを起動する
```
$ cd <jupyter notebook>
$ jupyter notebook
```

## ローカルサーバーをシャットダウンする
```
$ (crtl + c)
```

## カーネル操作

セルで、bashを実行するには、コマンドの先頭に`!`を付ける
```
!pip install -q keras
```
からの
```
import keras
```

## 設定ファイルの作成
```
$ jupyter notebook --generate-config
```
`~/.jupyter/jupyter_notebook_config.py`が作成される。

## Pythonの実行環境設定

システム環境、miniconda、仮想環境の交通整理  
bashとnotebookで実行環境が一致することを確認する。

- bashでのインタラクティブモード起動
```
$ python
```

- Pythonの実行モジュール確認
```
$ which python
```

- Pythonの実行モジュールのバージョン確認
```
$ python --version
```

- pipのライブラリ一覧
```
$ pip list
```
or
```
$ pip freeze
```

- condaのライブラリ一覧
```
$ conda list
```

- pathの確認
```
import sys
sys.path
```

- pipでインストールしたライブラリの格納場所
```
$ pip show hoge
```
一度、`bin`階層にダウンロードして、`lib/python3.6/site-packages`にインストールしている。
自分で`clean`コマンドをしないとダウンロードしたファイルは消えないと思われる。

- インストールしたモジュールがimportできるか確認
```
import hoge
```

### ライブラリの一括適用

- ライブラリ一覧をExport
```
$ conda myenv export > myenv.yaml
```

- ライブラリーを一括Import
```
$ conda myenv create --file myenv.yaml
```

### Jupyter NotebookのKernelに仮想環境を追加

- 仮想環境を作成
```
$ conda create -n myenv python=3.6
```

- condaの仮想環境一覧
```
$ conda info -e
```
or
```
$ conda env list
```

- 仮想環境をActiate
```
$ source activate myenv
(myenv) $ conda install notebook ipykernel
(myenv) $ ipython kernel install --user --name myenv
(myenv) $ jupyter kernelspec list
```
notebookの右上のnewのところで、myenvを選択できるようになる。  
既存のnotebookのkernelのプルダウンでも、kernelを変更できるようになっている。
