---
layout: static
title: Markdown
template: 3-columns
name: Markdown
category: Web
---

# Markdown記法

## 参照
本家 https://daringfireball.net/projects/markdown/basics  
ドットインストール https://dotinstall.com/lessons/basic_markdown_v2

---
## 基本
ファイルの拡張子は  
.md  
(markdown)

atomでのプレビュー方法  
mac  
control + shift + m

---
## 見出し

```
# h1 title
## h2 title
###### h6 title

h1 title
==================
(=3個以上)

h2 title
------------------
(-3個以上)
```
# h1 title
## h2 title
###### h6 title

h1 title
==================
(=3個以上)

h2 title
------------------
(-3個以上)

---
## 段落
```
空行を入れると

空行が分かれます。
```
改行を入れると

段落が分かれます。

---
## 改行
```
改行したい箇所に半角空白を   
2つ以上入力します。それでもダメなら
改行も入れてください。
```
改行したい箇所に半角空白を   
2つ以上入力します。それでもダメなら
改行も入れてください。

---
## 引用

```
本文でーーーーーーーーーす。
本文でーーーーーーーーーす。
本文でーーーーーーーーーす。
>引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
>>引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
```

本文でーーーーーーーーーす。
本文でーーーーーーーーーす。
本文でーーーーーーーーーす。
>引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
>>引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。
引用でーーーーーーーーーす。

---
## 区切り線
-か*を3つ以上並べる

```
---
***
- - -
```

---
***
- - -

---
## 強調表示
_　か　*　で挟むと斜体表示
__　か　**　で挟むと太字表示

```
あいうえお*かきくけこ*さしすせそ  
あいうえお**かきくけこ**さしすせそ
```

あいうえお*かきくけこ*さしすせそ  
あいうえお**かきくけこ**さしすせそ

---
## 箇条書き

```
- a
- b
- c

- a
+ bbbbbbb   
bbbbbbb
* c
```
- a
- b
- c

- a
+ bbbbbbb   
bbbbbbb
* c

---
## 連番付きリスト

```
1. a
2. b
3. c

1. a
1. bbbbb  
bbbbbbbbb
1. c  
(リストの変更があっても番号を振り直さなくて良い)
```

1. a
2. b
3. c

1. a
1. bbbbb  
bbbbbbbbb
1. c  
(リストの変更があっても番号を振り直さなくて良い)

---
## リンク

```
[本家](https://daringfireball.net/projects/markdown/basics)  
[ドットインストール](https://dotinstall.com/ "ドットインストール")
```

[本家](https://daringfireball.net/projects/markdown/basics)  
[ドットインストール](https://dotinstall.com/ "ドットインストール")

---
## コード
バッククオート3つでコードを挟みます。   
macではバッククオートの入力は`shift + @`

サンプルコードは以下です。

```
# this is comment
function x(){
  return x;
}
```

文中でコードをバッククオート1つで挟むと以下になります。   

ディレクトリ移動のコマンドは、`$ cd foo/var`です。

## 数式
ここを参照[Qiitaの数式チートシート](https://qiita.com/PlanetMeron/items/63ac58898541cbe81ada)

---
## 画像ソース

```
![logo image](https://hoge.com/img/logo_200x200.png)

画像にリンクを貼る  
[![logo image](https://hoge.com/img/logo_200x200.png "ドットインストール")](https://dotinstall.com)
```

![logo image](https://hoge.com/img/logo_200x200.png)

画像にリンクを貼る  
[![logo image](https://hoge.com/img/logo_200x200.png "ドットインストール")](https://dotinstall.com)

---
## テーブル
[参照](https://gist.github.com/mignonstyle/083c9e1651d7734f84c99b8cf49d57fa)

サンプル１

```
| TH1 | TH2 |
----|----
| TD1 | TD2 |
| TD3 | TD4 |
```

| TH1 | TH2 |
----|----
| TD1 | TD2 |
| TD3 | TD4 |


サンプル２

```
| 左寄せ | 中央寄せ | 右寄せ |
|:---|:---:|---:|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
```

| 左寄せ | 中央寄せ | 右寄せ |
|:---|:---:|---:|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
