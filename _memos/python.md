---
layout: static
title: Python
template: 3-columns
name: Python
category: Machine Learning
---

# Python

## ライブラリ

### Numba

- JIT(Just In time)コンパイラ
- Pythonソースにアノテーションを付けると、forループを事前にコンパイルして、
　実行速度を効率化してくれる。
- [参考サイト](https://myenigma.hatenablog.com/entry/2017/03/02/155433)によると、200倍以上高速になる。

## Tips

### 作業スクリプト

[参考](https://qiita.com/m_mizutani/items/c48f67f871d1d41ff4b9)

- main関数を作成する
- オプション引数を使用する
- 進捗を表示する
- ログを表示する

## クラス抽象化

- [PythonのABC - 抽象クラスとダック・タイピング](https://qiita.com/kaneshin/items/269bc5f156d86f8a91c4)   
  型チェックを`hasattr`や`isinstance`で行う。

## デザインパータン

[参照](https://qiita.com/kotetsu75/items/4b903023001f157554a4)

>デザインパターンの根底にある5つの考え
>
>- 変わるものを変わらないものから分離する
>- プログラムはインターフェイスに対して行う（実装に対して行わない）
>- 継承より集約
>- 委譲、委譲、委譲
>- 必要になるまで作るな（YAGNI）

### (最重要) 変わるものを変わらないものから分離する

*その目的は、変更に対する強さ=拡張性である。*

- マジックナンバーは定数化する(定数に分離する)
- 定数はファイルの先頭に記述する(ファイルヘッダに分離する)
- 定数を変更する場合は、コマンドラインから渡せるようにする(プログラムから分離する)
- 定数を変更する場合は、configファイルから渡せるようにする(プログラムから分離する)
- 変更する機能は、別クラス化する   
  大元のクラスは、サービスであり、部品の組み合わせと言うよりは、部品を内包している。   
  部品は機能を継承している場合が多い。
  - 各出力レベルのロガー
  - 各種ファイルの読み書き
  - Optimizer
  - Updater

### TemplateMethodパターン

[Pythonでデザインパターン　TemplateMethodパターン](https://qiita.com/kotetsu75/items/2900eac0fa24f09f775b)

>変わるもの（具象サブクラス）と変わらないもの（テンプレート）を分離して、変化に強い構造へ。

### Strategyパターン

[Pythonでデザインパターン　Strategyパターン](https://qiita.com/kotetsu75/items/186af7006b44703c0379)

>ストラテジは次の3つのオブジェクトによって構成されます。
コンテキスト(Context)：ストラテジの利用者
抽象戦略(Strategy)：同じ目的をもった一連のオブジェクトを抽象化したもの
具象戦略(ConcreteStrategy)：具体的なアルゴリズム
ストラテジのアイデアは、コンテキストが「委譲」によってアルゴリズムを交換できるようにすることです。委譲とは、ある機能をもつオブジェクトを生成してオブジェクトに処理を依頼することです。

### Observerパターン

[Pythonによるデザインパターン【Observer】-本日のニュースをお届けします-](https://qiita.com/kotetsu75/items/719a8fc2e4cc7789c1b4)

>変わるもの（オブザーバー）と変わらないもの（サブジェクト）を分離して、変化に強い構造へ



>
