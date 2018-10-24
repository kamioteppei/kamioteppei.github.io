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
bashとJupyter Notebookで実行環境が一致することを確認する。

### 注意
次章の記述では、condaの仮想環境を作成しているが、最終的には、仮想環境を作成しないことにした。

やりたかったこと  
- Jupyter Notebookを主に使用し、機械学習の学習を行う。
- また、機械学習の機能をAPI化しても良いように、Jupyterとbashの実行環境を一致させる。(参照先を`/opt/conda/bin`にした。)
- Dockerでコンテナ化する。

できなかったこと  
- venv,pyenv,condaを使用して仮想環境を作成する。

つまづく所  
- 仮想環境を作成すると、`conda install`だと`/opt/conda/bin`に、`pip install`だと、`/opt/conda/envs/env/bin`にインストールされて、統一されない。
- 上記理由で、Jupyter Notebookは、`/opt/conda/bin`の方にインストールされ、仮想環境(動かしたいバージョンのPython)では動かせない。
- tensorflow-gpuはPython3.4~3.6でサポートされるが、minicondaの最新をインストールしたらPython3.7になり、Jupyter Notebookでは、tensorflow-gpuを使用できない。

解決策  
- minicondaを使用するが、仮想環境は使用しない。  
  (Dockerコンテナ化されているので、環境の再現性はあるとする。)
- minicondaの最新をインストールするが、直後に、Pythonの3.6を再インストール(Pythonをダウングレード)する。

### conda/pipコマンド

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
`no-cache-dir`というオプションがあるのでメモ。
```
pip install --no-cache-dir -r /usr/src/app/requirements.txt
```

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

### 自作モジュールの使用

下記の階層の場合の、自作モジュールのimportの方法について

- 実行モジュール.py or .ipynb  
- my_modules(package)   
  - \__init__.py(packageを再帰的に読み込むためのダミーファイル)  
  - my_module.py(module)  
    - my_class(class)   
      - my_def(function)   

1.packageはimportできない
```
import my_modules
```
-> error

2.moduleはimportできる fromを使用してもよい
```
import my_modules.my_module
```
-> ok

```
from my_modules import my_module
```
-> ok

3.classはimportできるが、fromを使用しないといけない(.でパスを指定できない)
```
import my_modules.my_module.myclass
```
-> error

```
from my_modules.my_module import myclass
```
-> ok
