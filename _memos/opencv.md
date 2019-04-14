---
layout: static
title: OpenCV
template: 3-columns
name: OpenCV
category: Machine Learning
---

# OpenCV
Open Source Computer Vision  Library

## 基本

用途
- 画像処理
- 動画処理
- 物体検出

チュートリアルは[こちら](http://labs.eecs.tottori-u.ac.jp/sd/Member/oyamada/OpenCV/html/py_tutorials/py_tutorials.html)です。

## 顔の抽出

OpenCVだとサーバーに画像を送信し、処理しなければならない。  
そこで`tracking.js`を使用すると、クライアント側で顔認証処理を行える。  
[参考ページ](https://book.mynavi.jp/manatee/detail/id=99887)


## 色空間の変換

- OpenCVは150種類以上の色空間の変換を用意している。
- 一般的に使用されるのは、BGR↔︎Gray間の変換と、BGR↔︎HSV間の変換である。
- HSVとは、以下の成分のこと
  - Hue:色相、Saturation:彩度、Value(Lightness):明度

```
# BGR値からGray値に変換
cv2.cvtColor(input_image, cv2.COLOR_BGR2GRAY)

# BGR値からHSV値に変換
cv2.cvtColor(input_image, cv2.COLOR_BGR2HSV)
```

## 画像のグレイ、カラー、透過判定

[参考](https://qiita.com/derodero24/items/f22c22b22451609908ee)

```
def pil2cv(image):
    ''' PIL型 -> OpenCV型 '''
    new_image = np.array(image)
    if new_image.ndim == 2:  # モノクロ
        pass
    elif new_image.shape[2] == 3:  # カラー
        new_image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    elif new_image.shape[2] == 4:  # 透過
        new_image = cv2.cvtColor(image, cv2.COLOR_RGBA2BGRA)
    return new_image
```

## 座標系

[参考](https://kazunori-ohmori.blog.so-net.ne.jp/2014-02-04)

- OpenCVは左上が原点である。
- OpenCVを一般的な座標で考える場合は、(x,y,z) = (1,-1,-1)を掛ける。


## 物体(特徴)検出

### KeyPoint(特徴点オブジェクト)

[参照](https://qiita.com/hitomatagi/items/caac014b7ab246faf6b1)

|属性|内容|
---|---
|pt|ポイント(x,y)|
|size|特徴点の直径|
|angle|角度(0~360)|
|response|強度|
|octave|特徴点を検出したピラミッドレイヤー|
|class_id|特徴点が属するクラスID|

### ヒストグラム類似度

[参考](https://qiita.com/Zumwalt/items/979d450ca43b81b35424)

### AKAZE

[参考](https://m12watanabe1a.hatenablog.com/entry/2018/10/14/201503)

- SIFTをベースに処理速度改善した
- スケールの異なる画像や、回転している画像からも検出できる
- ガウシアンフィルタで特徴量を検出している
- ガウシアンフィルタでは、各ピクセルをその周囲のピクセルに重み付けをして足した値で更新する。  
よって輪郭部分の値が均(なら)される。   
更新前と更新後の各ピクセルの差分を取ることで、輪郭部分のみ値が取れる。
