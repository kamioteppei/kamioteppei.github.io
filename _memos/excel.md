---
layout: static
title: Excel
template: 3-columns
name: Excel
category: Tools
---

# Excel

## Function

### SUMPRODUCT

Excelで3Dの棒グラフなどを作成する時に、
下記の図１ではなく、図２の表でないと、グラフ化できない。(と思う。)
そこで、ExcelのSUMPRODUCT関数を使用し、図１から図２の表に展開する。

[参照](http://www.excel.studio-kazu.jp/kw/20040118220428.html)

図１
```
    [A]   [B]   [C]
[1]   X     Y     Z
[2]   0     3     2
```

と取得したデータを
次の表に、展開したい。

図２
```
↓Ｙの値
　　[A]　 [B]　[C]    ←Ｘの値
[1]   -     0    1   ←Ｚの値
[2]   0     -    -   ←Ｚの値
[3]   1     -    -   ←Ｚの値
[4]   2     -    -   ←Ｚの値
[5]   3     2    -　　←Ｚの値
```

引用
>元の表をSheet1、展開する表をSheet2に作るとします。
 Sheet2のB2へ次の数式を入力し、表範囲へコピー張り付けしてください。
 =SUMPRODUCT((Sheet1!$A$2:$A$500=B$1)*(Sheet1!$B$2:$B$500=$A2)*Sheet1!$C$2:$C$500)

そして、この関数はCOUNTIFS関数の代用としても使える。  
[参照](https://www.relax-words.com/entry/2018/09/17/%E6%9C%80%E5%BC%B7%E3%81%AEExcel%E9%96%A2%E6%95%B0_%E3%80%90SUMPRODUCT%E9%96%A2%E6%95%B0%E3%80%91%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9%EF%BC%81%EF%BC%88%E5%88%9D%E5%BF%83%E8%80%85%EF%BD%9E%E4%B8%AD)
