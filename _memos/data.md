---
layout: static
title: Data
template: 3-columns
name: Data
category: Machine Learning
---

# Data

## Data Repository

### 線型(統計)

政府
- [e-Stat 政府統計の総合窓口](https://www.e-stat.go.jp)
- [統計ダッシュボード](https://dashboard.e-stat.go.jp)
- [税金はどこへ行った？](http://spending.jp)

ダッシュボードの語源   
ダッシュ=突進 -> 船の先頭の波除の板 -> 車の前面の板 -> 車、飛行機の計器板 -> 状況を一目で視覚的に表示する画面

株価
- [日経平均](https://indexes.nikkei.co.jp/nkave/index)
- [Yahoo Finance(US)](https://finance.yahoo.com/quote/^IXIC?p=^IXIC)
- [Yahoo Finance(JP)](https://stocks.finance.yahoo.co.jp)

企業/財務諸表
- [EDINET](http://disclosure.edinet-fsa.go.jp)

気象
- [気象庁](https://www.data.jma.go.jp/gmd/risk/obsdl/index.php)

不動産

電気消費
- [東京電力](http://www.tepco.co.jp/forecast/html/download-j.html)

小売

観光

時事
- [livedoor ニュースコーパス](https://www.rondhuit.com/download.html#ldcc)

その他
- [datamarket.com](https://datamarket.com/topic/list/countries/)
- [quandl.com](https://www.quandl.com)

### 画像

### 時系列

法律
- [日本の法律のPDFとXML](https://github.com/nikaido/law_xmls)

国会
- [国会議事録](http://kokkai.ndl.go.jp/api.html)

## Data Collection

### Webスクレイピング
- Beautiful Soup   
APIを使用して、Webサイトに連続でアクセスする場合は、負荷をかけすぎないように、
一秒程度間隔を空ける。

## Data Analitics

### カテゴリカル変数のEncoding

[参照](http://jotkn.ciao.jp/wp/2017/08/22/post-67/)

- Label Encoding -> カテゴリごとに、数値に変換
- Count Encoding -> カテゴリごとに、出現件数に変換
- Label Count Encoding -> カテゴリごとに、出現件数のランクに変換
- Target Encoding -> カテゴリごとに、ラベル=trueの確率に変換　または、カテゴリごとのラベルの平均値に変換
- One-hot Encoding -> カテゴリの数の0/1配列。1になるのは1箇所のみ。
- Feature Hashing -> One-hot Encodingの圧縮版
- Category Embedding -> One-hot Encodingの圧縮版

### 日付、連続データの処理
[参照](https://note.nkmk.me/python-pandas-time-series-multiindex/)

## Data Visualization

### ライブラリ
- Matplotlib
- Seaborn
- Plotly
  - デザインが良い
  - 3Dの作図も得意
  - 図の視点を変更できたり、インタラクティブなインターフェース   
   [参照](http://www.mathgram.xyz/entry/plotly#box)
