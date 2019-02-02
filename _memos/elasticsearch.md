---
layout: static
title: Elasticsearch
template: 3-columns
name: Elasticsearch
category: Environment
---

# Elasticsearch

## 基本

全文検索機能  
Github等で使用されている。

- Elasticsearch  
  本体
- Beats  
  logを流し込む
  - Filebeat
  - Metricbeat
  - Packetbeat
  - Winlogbeat
- Logstash     
  logを収集し、一元管理する  
  (基幹システムからDWHに、データを抽出、変換、格納するETLのようなもの)
- Kibana  
  GUIツール。データの可視化、分析を行う。  
- X-Pack  
  サブスクリプション型拡張機能
  - Security
  - Alerting
  - Monitoring
  - Reporting
  - Gragh
  - Machine Learning

用途
- 複数のサービスのログを１箇所にまとめて、監視する。
- ログの異常検知(機械学習による、異常検知もある。)
- 自然言語処理もやってくれるかも

## インストール

### Docker Compose
[Dockerのまとめ](/memos/docker)にしたがって、インストール

### Elasticsearch

[参照](https://qiita.com/motchi0214/items/a796437149d0d97bcf5b)
