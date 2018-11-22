---
layout: static
title: Natural language processing
template: 3-columns
name: Natural language processing
category: Machine Learning
---

# 自然言語処理
Natural language processing

## 基本

用途
- 形態素解析
- 構文解析  
構文木作成
- ベクトル解析(Word2Vec)  
Wikipedia等から作成したモデルから類似語、反意語を取得する
- 文章要約
- 翻訳
- 検索  
判例検索
- 言語生成  
会話ボット
- 音声認識・発話  
VRアナウンサー
- [FAQの作成(qiita)](https://qiita.com/yukihon_lab/items/5f494d1a39849071f077)
- [感情の分類(qiita)](https://qiita.com/sugiyamath/items/7cabef39390c4a07e4d8)

## 構文解析

[参照](http://d.hatena.ne.jp/jetbead/20140110/1389287928)

- 表層格  
主格、目的格、格助詞による分類

- 深層格  
単語の意味による分類
  - 動作主格(AGENT)
  - 経験者格(EXPERIENCER)
  - 対象格(OBJECT)
  - 道具格(INSTRUMENT)
  - 源泉格(SOURCE)
  - 目標格(GOAL)
  - 場所格(LOCATION)
  - 時間格(TIME)

## ライブラリ
- MeCab  
C++製 処理速度早い
- Janome  
Python製
- Kuromoji  
Java製 Elasticsearchで使用できる
- gensim  
Word2Vecモデリング機能
- sickit-learn  
TfidfVectorizer

## サービス

- [Cloud Natural Language(Google)](https://cloud.google.com/natural-language/)
- [自動要約ツール(User Local)](https://text-summary.userlocal.jp)
- [COTOHA API](https://api.ce-cotoha.com/contents/)
- [日本語word2vecモデルの公開(白ヤギコーポレーション)](http://aial.shiroyagi.co.jp/2017/02/japanese-word2vec-model-builder/)

## モデル

### TF-IDF

#### TF (Term Frequency : 単語の出現頻度)  

文書内で、出現回数の多い単語を重要とみなす。  
文書(d)に存在するn個の単語(w)の出現回数をそれぞれ $$ w_k $$ とすると、任意の単語の出現頻度 $$ tf(w_i) $$ の計算式は以下となる。

$$ tf(w_i) = \frac{w_i}{\sum_{k=1}^{n} w_k } $$

文書内で、出現回数が多い単語程、1.0に近くなり、逆だと、0.0に近くなる

#### IDF (Inverse Document Frequency : 逆文書頻度)

tfのみで、重要性を判断すると、単に、I,Weなどの主語や、as,ofなどの前置詞、または、日本のニュースにおける、日本という単語等の、
重要性の低い(当たり前の)、頻出の単語が検出される。
そこで、idfという基準で、「ある文書のある単語が、どれだけ、他の文書で出現しないか」を２つ目の重要性として算出する。

m個の文書(d)に、n個の単語(w)が存在する場合に置いて、単語 $$ w_i $$ の出現文書数を $$ d_j $$ とした場合の、単語 $$ w_i $$ の逆文書頻度 $$ idf(w_i) $$ の計算式は以下となる。

$$ idf(w_i) = \log(\frac{m}{d_j + 1}) $$

単語の、出現文書数が少ない程、1.0に近くなり、逆だと、0.0に近くなる  
logは、値の幅を小さくする為。分のプラス1は0除算を回避する為

#### TF-IDF

上記の、tfとidfをかけ合わせると、文書 $$ d_j $$ における、単語 $$ w_i $$ の重要性が算出される。

$$ tfidf(w_i) = {tf(w_i)} \times {idf(w_i)} $$

tfとidfが大きい程、1.0に近くなり、逆だと、0.0に近くなる

よって、$$ d_j $$ において、頻繁に出現する単語で、かつ、他の文書での出現頻度が低いもの程、重要と判定される。
