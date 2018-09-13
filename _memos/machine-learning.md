---
layout: static
title: Machine Learning
template: 3-columns
name: Machine Learning
category: Machine Learning
---

# 機械学習

## Tensor(テンソル)
以下全て、tensorの1種

### scalar(スカラー)
0次元
- 1
- 10.5
- -100

### vector(ベクター)
1次元

横ベクトル、行ベクトル、row vector
- [1,4,10]

縦ベクトル、列ベクトル、column vector
- [  
1,  
5,  
9  
]  

### metrics(行列)
2次元

### tensor(テンソル)
行列の行列

## 機械学習の分類
- 教師あり学習
- 教師なし学習
- 強化学習

## 機械学習の応用分野
- クラス分類(Classification)
  + 文字認識
- グループ分け、クラスタリング(Clustering)
- 推薦(Recommendation)
- 回帰(Regression)

## モデル

### SVM(Support Vector Machine)
データを分ける境界線を引く。  
境界線とデータまでのマージンが最大になるようにする。

### scikit-learn
以下のSVMを提供するパッケージ
- SVC(処理速度より正確性をとる場合)
- LinearSVC(正確性より処理速度をとる場合)

### Random Forest, Randomized Trees
学習用データから多数の決定木を作成し、作成した決定木を元に、  
多数決で結果を決める。

## 検証

### クロスバリデーション
学習データのサンプリングの偏りによる、  
過学習を防ぐために、学習データとテストデータを、   
ローテーションして学習する手法。

### グリッドサーチ
モデルに渡すパラメータを自動で、色々試す手法。

## Deep Learning
多層構造のニューラルネットワークを用いた機械学習のこと。
結果から、重みを自分で調節できることが一番重要だと思う。  
