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

## 機械学習の問題解決プロセス
- 課題設定(課題発見)
- データ収集  
  + データセットダウンロード
  + WebAPIでダウンロード
  + Webスクレイピング
  + センサーで取得(Rasberry PiやArduinoなどのエッジコンピューター＋加速度、温度、湿度センサー、カメラ)
  + ラベリングの作業が大変
  + 画像は180度反転させたデータを作成するなどデータの増やし方がある。(その方が過学習を防げる)
- データクリーニング
  + 画像のデータサイズの統一化
  + Null値の補正
- データ相関確認
  + 正の相関
  + 負の相関
  + 相関のある項目がなかったら？
  + PCA(主成分分析)で、次元削減
- データ加工
  + 移動平均
  + ヒストグラム変換(同じ物体の画像ごとの位置のずれを無効化する為)
  + フーリエ変換(時系列データの周波数成分のヒストグラム作成で比較)
  + 特徴量をベクトルに変換
- モデル開発
  + 自前開発
  + 転移学習
- モデルチューニング
- データ可視化

## 機械学習の学習方法の分類
- 教師あり学習
- 教師なし学習
- 強化学習(報酬あり学習)

## 機械学習の問題解決方法の分類
- 回帰(Regression)  
  ある特徴量から、別の特徴量を求める。
  y = f(x) = 3x + 5 の場合、xからyを求める。
  y = f(t) = f(t-n) + 5 の場合、yからyを求める。(自己回帰。f(t-n)は、1つ前の周期の値)
- クラス分類(Classification)
  + パターン認識  
  データのクラスごとの集合を分ける境界線を引く。  
  境界線とクラスごとの集合までのマージンが最大になるようにする。
  + 文字認識  
  画像のピクセルの集合をベクトルに変換して、畳み込みにより抽象化する。
- グループ分け、クラスタリング(Clustering)  
   ラベルのないデータを、何らかの特徴で分類する。  
- 推薦(Recommendation)

## モデル

### 線形回帰
直線の式を求める。式に含む係数を割り出す。

### 非線形回帰
直線ではない式を求める。

### 回帰
- 単回帰 -> １つの変数と切片(bias)の１次関数、微分する。
- 多項式回帰 -> 1つの変数について、次数が複数ある。偏微分する。
- 重回帰 -> 変数が２つ以上、偏微分する。

[多項式回帰と重回帰](http://tkengo.github.io/blog/2016/06/02/yaruo-machine-learning3/)

### ロジスティック回帰
データを確率的に分類する。
- 2値分類 -> dog or cat
- 多値分類 -> mnist 0~9の画像を分類

### k近傍法
k=3とした場合、任意のテストデータに最も近いk個の教師データのラベルを抽出し、  
そのラベルの多数決や平均から、ラベルを判定する。

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
  画像を入力する場合、画像が28x28ビクセルなら、積の784個のニューロンを作成する。   
  入力値xは手書き文字の濃さによって0~255等の範囲をとる。また、演算効率を上げるため、入力値を255(最大値)で除算して0.00~1.00のfloat型に変換する(正規化)と良い。   
  カラーの画像だと、入力のベクトル因子が3つに増える。(RGBの3つ)
- A層(連合層、中間層、隠れ層)
- R層(反応層、出力層)   
  画像の分類を出力する場合、入力した画像のラベルが0~9なら、10個のニューロンを作成する。(出力値は各分類値の出現確率で、合計すると1になる。)
  出力層では、恒等関数を使用し、入力値をそのまま出力する。

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

- 畳み込み層   
例）  
チャンネル(C)が1(=モノクロ、カラーならC=3)、縦横(HxW)が32x32の画像を入力とし、その外縁を1周り0パティングする。
それに対して、縦横(HxW)5x5のフィルターを、1づつスライドさせると、
縦横(HxW)が30x30の畳み込み画像ができる。フィルターは、5x5の重みの行列とし、そのフィルターの数を10とする。
すると、10枚の畳み込みデータが作成される。フィルターの重み(画像の個々の特徴)は自動で抽出される。  
5x5のフィルターに、画像を判断する手がかり(特徴)が収まれば学習が進む。例えば、数字の4を読み込んだ時に、鋭角のフィルターを２つと、
十時のフィルターを抽出できれば、画像の判定時に、その3つのフィルターに当てはまる文字は4と判定できる。
フィルターのことをカーネルともいう。

- プーリング層   
例）  
縦横(HxW)が32x32の画像を16x16に圧縮する。
max poolingがよく使われる。実装としては、2x2の領域ごとに、最大値を抽出する。
それにより、細かい画像の特徴のブレ(振動)が補正される。

- 全結合層  
Fully Connected層(fc層)  
通常のLinearレイヤー。  
プーリング層の出力値を1次元の配列で受け取り、線形回帰する。
最後の出力層でソフトマックス関数で、クラス分類を行う。

[参照](https://products.sint.co.jp/aisia/blog/vol1-16#toc-1)

#### DCGAN
Deep Convolutional Generative Adversarial Networks   
(敵対生成ネットワーク)

- Generator(生成器)   
  Generatorが作成した画像をfake、inputデータの画像をrealと、Discriminator(識別器)が正しく判定する確率を最小化するように画像を生成する。
  逆にいうと、Discriminator(識別器)を誤らせる(騙す)確率を最大化する。
- Discriminator(識別器)   
  Generatorが作成した画像をfake、inputデータの画像をrealと、自分が正しく判定する確率を最大化する。

### RNN(Recurrent Neural Network)
隠れ層に戻り値があるニューラルネットワークモデル。  
音声の波形、動画、文章などの時系列データを扱う。

- Embedding層というトークン(単語)をベクトル化した層
- LSTM(Long Short Term Memory)という隠れ層を使用する。
  + Input Gate
  + Output Gate
  + Forget Gate

[参照1](https://qiita.com/KojiOhki/items/89cd7b69a8a6239d67ca)  
[参照2](https://qiita.com/t_Signull/items/21b82be280b46f467d1b)

CNNは、モデルで定義した通りの層の数だが、RNNは例えば、文章を入力すると、単語の数だけ、再帰的に、
層の数が増えるので、最も汎用性が高いと思われる。


### ResNet
学習対象（レイヤーごとの仮説関数）に入力の差（残差）を使うことで、勾配消失問題（層が深くなるにつれて、勾配が0に収束してしまう問題）を解消するディープラーニング。

### DQN（Deep Q-Network）
強化学習において、行動価値関数Q(s,a)（sの状態の時にaという行動をとる価値を）の値が高くなる様に学習する方法をQ学習といい、Q学習をパラメータを追加した近似関数とて表し、ディープラーニングで求める手法。

### ナイーブベイズ分類
スパムメールの判別に使用する。  
訓練データの文章が、スパムメールであれば、スパムメールの辞書に、単語と出現回数を登録する。
スパムメールでなければ、非スパムメールの辞書に、単語と出現回数を登録する。
テストでは、読み込んだ文章の単語ごとに、スパムメール辞書と非スパムメール辞書での出現確率を合計し、
確率の高い方を正と判定する。

### 自己回帰
- AR 自己回帰
- ARMA 自己回帰移動平均
- ARIMA 自己回帰和分移動平均
- SARIMA 季節自己回帰和分移動平均

## Framework

### scikit-learn
以下のSVMを提供するパッケージ
- SVC(処理速度より正確性をとる場合)
- LinearSVC(正確性より処理速度をとる場合)

### TensorFlow
Google社製  
deeplearningできる。

### keras
TensorFlowのラッパー  
記述を簡単にできる

### PyTorch
Facebook社製  
deeplearningできる。   
chainerからforkされた。

### Prophet
Facebook社製
時系列予測用
[参照1](https://www.atmarkit.co.jp/ait/articles/1906/07/news004.html)

### Chainer

### Optuna
Chainerのハイパーパラメーター探索機能
[参照1](https://qiita.com/yoshiyoshi0505/items/2e39ffdab305dba95164)
[参照2](https://optuna.readthedocs.io/en/stable/tutorial/first.html)

### AutoML
kerasなどのラッパーでかつ、   
ハイパーパラメータ探索、モデルの選定、アンサンプル機能などの  
いずれか、または、複数の機能をもつライブラリ
[参照1](https://www.hellocybernetics.tech/entry/2019/02/09/155618)

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
  + 入力値を、-1から1の値に収束する。
- ReLU (Rectified Linear Unit,正規化線形関数) (推奨)  
  `function ReLU(x) = max(0,x)`-> `if x<=0 then return 0 else return x`
- Linear
- Softmax  
  + 入力値を、0から1の値に収束する。  
  + ディープラーニングの出力層で使用される。  
  + イメージ図  
  [参照](https://qiita.com/rtok/items/b1affc619d826eea61fd)
>「softmax関数は多くの次元からなる入力のうち、自分の値が他の値たちに比べて一番目立っているならば、その値が1
に近づく関数である」といえます。

### 正則化(Regularization)
正則化はモデルのパラメータの学習に使われ、特に過学習を防ぎ、汎化能力を高めるために使われる。

- L1正則化(LASSO)   
  L1ノルム(記号：||x||1)・・・ベクトルの各要素の絶対値を合計したもの  
- L2正則化(Ridge)   
  L2ノルム(記号：||x||2)・・・ベクトルの各要素を２乗を合計したものの平方根
- Elastic Net Regression

[参照](https://rindalog.blogspot.com/2017/07/regularizationridgelasso-elastic-net.html)
>相関関係にある独立変数がデータセットにあるとする。Elastic Net は相関関係にある変数のグループを作る。グループの変数の一つが強い予測子（依存変数と強い相関関係にある）の場合、グループの変数をモデルに含める。（Lasso のように）他の変数を除くのは、データの理解に必要な情報の欠落で、モデル性能を落とすことに繋がりかねない。

### 誤差逆伝播法
- ニューラルネットの重みなどのパラメータ決定を勾配法で行う。
- 勾配法の計算の際に損失関数の微分を行う。
- 誤差逆伝播法を用いると計算が順伝播に比べて、高速にできる。
  + 順伝播  
  全レイヤーの重みとバイアスのニューロンの数が全部で10個だとすると、その10個をループして、
  $$ \frac{f(x_0 + \Delta x_0 , x_1 , ... , x_9) - f(x_0 , x_1 , ... , x_9)}{\Delta x_0}  $$ ,
  $$ \frac{f(x_0, x_1 + \Delta x_1 , ... , x_9) - f(x_0 , x_1 , ... , x_9)}{\Delta x_1}  $$ ... と   
  ニューラルネットワークの走査を10 * 2回も行わなくてはならない。  
  (10個のノードで、微分前後の出力値の差分を誤差として算出し、集計する。)
  + 逆伝播  
  後ろからニューロンの数だけ、計算すれば良いらしい。

単語
- 計算グラフ = Computational graph
- 誤差逆伝播法 = Back propagation
- 自動微分 = Automatic differentiation

[参照](http://yusuke-ujitoko.hatenablog.com/entry/2016/12/31/230118)

- 偏微分   
複数の変数による関数があるとして、その中の1つの変数のみに関する微分のこと

- forwardとbackward   
trainingの時は、誤差のbackward処理が必要だが、testの時は、不要となるので、設定を変更する。

### Dropout
全ての訓練データを使用すると、過学習する(局所解に捕まる)場合があるので、  
パラメータで指定した割合のデータをランダムでカットする。

確率的勾配降下法(Stochastic Gradient Descent, SGD)の実装は、Dropoutのことか、  
それとも、ミニバッチ方式のことなのか、要調査。

- Dropout  
  任意のレイヤーのノードに対する入力をマスクする確率を指定する。  
  疑問：２個のノードのある中間層に0.5を指定した場合どうなる？
  + 必ずどちらかのノードが無効になる
  + 各ノードが50%の確率で無効になる。2つとも同時に無効になることは？
  + 各ノードの入力が、50%カットされる。

答えは、１番だと思われる。デメリットとして、異なるネットワークの定義を使用している(=アンサンブル)ことになるので、
その分、収束に時間がかかる。

- Batch Normalization
  + 入力データのノイズを柔らげる
  + L2正則化の必要性が下がる
  + Dropoutの必要性が下がる

[参照1](https://qiita.com/cfiken/items/88427533ea9b501a6c10)   
[参照2](https://qiita.com/cfiken/items/b477c7878828ebdb0387)

### 損失関数/誤差関数
- 二乗誤差   
  線形回帰で使用する。

- 交差(クロス)エントロピー誤差  
  + 2クラス分類用の数式
  + 多クラス分類用の数式

[参照1](https://mathwords.net/kousaentropy)
[参照2](https://qiita.com/celaeno42/items/7efdbb1491406f4bde96)

式の先頭でマイナスをかけている理由は、確率が必ず1以下になるので、確率をlogで表した時に、
マイナスになるのを反転する為。

### アテンション
交差(クロス)エントロピー誤差を使用し、  
例えば、文章の翻訳時に、予想する単語が、  
文脈的に翻訳前のどの単語に注目すれば良いかを示唆する機構

## 検証(Validation)

### クロスバリデーション
学習データのサンプリングの偏りによる、  
過学習を防ぐために、学習データとテストデータを、   
ローテーションして学習する手法。

### グリッドサーチ
モデルに渡すパラメータを自動で、色々試す手法。
