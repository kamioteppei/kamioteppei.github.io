---
layout: static
title: Data and Visualization
template: 3-columns
name: Data and Visualization
category: Machine Learning
---

# Data and Visualization

## Data

### 線型(統計)

政府
- [e-Stat 政府統計の総合窓口](https://www.e-stat.go.jp)

日経
- [日経平均](https://indexes.nikkei.co.jp/nkave/index)

企業/財務諸表
- [Yahoo Finance(US)](https://finance.yahoo.com/quote/^IXIC?p=^IXIC)
- [Yahoo Finance(JP)](https://stocks.finance.yahoo.co.jp)
- [EDINET](http://disclosure.edinet-fsa.go.jp)

気象

不動産

電気消費

小売

観光

その他
- [datamarket.com](https://datamarket.com/topic/list/countries/)
- [quandl.com](https://www.quandl.com)

### 画像

### 時系列

## Analitics

### カテゴリカル変数のEncoding

[参照](http://jotkn.ciao.jp/wp/2017/08/22/post-67/)

- Label Encoding -> カテゴリごとに、数値に変換
- Count Encoding -> カテゴリごとに、出現件数に変換
- Label Count Encoding -> カテゴリごとに、出現件数のランクに変換
- Target Encoding -> カテゴリごとに、ラベル=trueの確率に変換　または、カテゴリごとのラベルの平均値に変換
- One-hot Encoding -> カテゴリの数の0/1配列。1になるのは1箇所のみ。
- Feature Hashing -> One-hot Encodingの圧縮版
- Category Embedding -> One-hot Encodingの圧縮版

## Visualization

### Matplotlib

### Seaborn

### Plotly

- デザインが良い
- 3Dの作図も得意
- 図の視点を変更できたり、インタラクティブなインターフェース

[参照](http://www.mathgram.xyz/entry/plotly#box)

## Webスクレイピング

### Beautiful Soup
APIを使用して、Webサイトに連続で、アクセスする場合は、負荷をかけすぎないように、
一秒程度、間隔を空ける。
