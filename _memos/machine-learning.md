---
layout: static
title: Machine Learning
template: 3-columns
name: Machine Learning
category: Machine Learning
---

# 機械学習

## サービスの構成

以下を参照

[［37選］機械学習ライブラリやフレームワークは？ 国内AI活用サービスのアーキテクチャを大調査！](https://employment.en-japan.com/engineerhub/entry/2017/11/30/110000)

## 機械学習の学習方法の分類
- 教師あり学習
- 教師なし学習
- 強化学習

## 機械学習の問題解決方法の分類(Problem type)
- 回帰(Regression)  
  データの集合を関数で抽象化(微分)して、時系列データを予測する。  
  関数と集合の誤差が最小になるようにする。
- クラス分類(Classification)
  + パターン認識  
  データのクラスごとの集合を分ける境界線を引く。  
  境界線とクラスごとの集合までのマージンが最大になるようにする。
  + 文字認識  
  データの集合を関数で抽象化して、時系列データを予測する。
- グループ分け、クラスタリング(Clustering)
- 推薦(Recommendation)

## モデル

### SVM(Support Vector Machine)
データを分ける境界線を引く。  
境界線とデータまでのマージンが最大になるようにする。

### Random Forest, Randomized Trees
学習用データから多数の決定木を作成し、作成した決定木を元に、  
多数決で結果を決める。

### Neural Network
生物の脳の神経細胞をモデルとしたアルゴリズム。  
以下の層を持つ。
- S層(感覚層、入力層)
- A層(連合層、中間層、隠れ層)
- R層(反応層、出力層)

隠れ層が多いモデルを、Deep Learningと呼ぶ。  
以前は隠れ層は2,3層だったが、最近は数十層に及ぶ。  

入力層と出力層のみの2層からなる、単純パーセプトロン (Simple perceptron) は線形非分離な問題を解けなかった。  
パーセプトロンを多層にし、バックプロパゲーション（誤差逆伝播学習法）で学習させることで、線型分離不可能な問題が解けるように、
単純パーセプトロンの限界を克服した。

## Deep Learning
多層構造のニューラルネットワークを用いた機械学習のこと。
結果から、重みを自分で調節できることが一番重要だと思う。  

- Weight -> inputに対する調整値
- bias -> 次の中間層に対する調整値

TensorFlow公式の[ニューラルネットワークのデモ](http://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=xor&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=1&seed=0.60237&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false)を見るとなんとなくイメージがわく。

### CNN(Convolution Neural Network)
画像認識に用いられるニューラルネットワークモデル。  
隠れ層を「畳み込み層」と「プーリング層」で構成する。

### RNN(Recurrent Neural Network)
隠れ層に戻り値があるニューラルネットワークモデル。  
音声の波形、動画、文章などの時系列データを扱う。

## Flamework

### scikit-learn
以下のSVMを提供するパッケージ
- SVC(処理速度より正確性をとる場合)
- LinearSVC(正確性より処理速度をとる場合)

### TensorFlow
Google社製  
deeplearningできる。

### PyTorch
Facebook社製  
deeplearningできる。

## モデルの部品

### 活性化関数(Activation)
- Step(Formal neuron(形式ニューロン), Threshold Logic Unit )  
  + ヘヴィサイドの階段関数を使い、入出力の値は 0 または 1 の二値だけをとる。
  + 入力値の合計が閾値を超えた場合、1を返し、閾値未満の場合は、0を返す。それ以外は0.5を返す。
  + ヘヴィサイドの階段関数 -> `function H(x) = if x<0 then 0 else if x>0 then 1 else 1/2 `
  + AND回路 -> `function AND(x1,x2) = H(x1 + x2 - 1.5) `
  + OR回路 -> `function OR(x1,x2) = H(x1 + x2 - 0.5) `
  + NOT回路 -> `function NOT(x) = H(-x + 0.5) `
  + XOR回路 -> `function XOR(x1,x2) = H(x1 + x2 -2H(x1 + x2 -1.5) - 0.5) `
- Sigmoid
  + 入力値を、0から1の値に収束する。
  + ネイピア数 -> `constant e = 2.71828182845904...`
  + Sigmoid関数 -> `function Sigmoid(x) = 1 / (1 + e^-x )`
- tanh(Sigmoid関数を線形変換したもの)
- ReLU (Rectified Linear Unit,正規化線形関数) (推奨)  
  `function ReLU(x) = max(0,x)`-> `if x<=0 then return 0 else return x`
- Linear
- Softmax  
  + 入力値を、0から1の値に収束する。  
  + ディープラーニングの出力層で使用される。  
  + イメージ図[参照](https://qiita.com/rtok/items/b1affc619d826eea61fd)
>「softmax関数は多くの次元からなる入力のうち、自分の値が他の値たちに比べて一番目立っているならば、その値が1
に近づく関数である」といえます。

### 正則化(Regularization)
正則化はモデルのパラメータの学習に使われ、特に過学習を防ぎ、汎化能力を高めるために使われる。

- L1正則化(LASSO)
- L2正則化(Ridge)
- Elastic Net Regression

[参照](https://rindalog.blogspot.com/2017/07/regularizationridgelasso-elastic-net.html)
>相関関係にある独立変数がデータセットにあるとする。Elastic Net は相関関係にある変数のグループを作る。グループの変数の一つが強い予測子（依存変数と強い相関関係にある）の場合、グループの変数をモデルに含める。（Lasso のように）他の変数を除くのは、データの理解に必要な情報の欠落で、モデル性能を落とすことに繋がりかねない。

### 計算グラフによる誤差逆伝播法
- ニューラルネットの重みなどのパラメータ決定を勾配法で行う。
- 勾配法の計算の際に損失関数の微分を行う。
- 誤差逆伝播法は計算グラフを用いた自動微分を使用している。
- 誤差逆伝播法を用いると計算が順伝播に比べて、高速にできる。

- 計算グラフ = Computational graph
- 誤差逆伝播法 = Back propagation
- 自動微分 = Automatic differentiation

[参照](http://yusuke-ujitoko.hatenablog.com/entry/2016/12/31/230118)

- 偏微分   
複数の変数による関数があるとして、その中の1つの変数のみに関する微分のこと

## 検証(Validation)

### クロスバリデーション
学習データのサンプリングの偏りによる、  
過学習を防ぐために、学習データとテストデータを、   
ローテーションして学習する手法。

### グリッドサーチ
モデルに渡すパラメータを自動で、色々試す手法。


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

### matrix,matrices(行列)
2次元

`metrics`という単語が、ディープラーニングのモデルのパラメータに、  
出てくるが、 **評価基準** という意味で別物。


### tensor(テンソル)
行列の行列
