---
layout: static
title: Android
template: 3-columns
name: Android
category: Native
---

# Android

## Kotlin

- Java互換のJVM言語
- Androidアプリの実装に使用される
- サーバーサイドの実装にも使用される
- Swiftと構文が似ている

- プレイグラウンドは[こちら](https://try.kotlinlang.org/#/Examples/Hello,%20world!/Simplest%20version/Simplest%20version.kt)
- 便利機能は[ここ](https://qiita.com/koher/items/cb91dbbff9b14575f498)を参照
- 注意点は[ここ](https://qiita.com/koher/items/d9411a00986f14683a3f)を参照

### HttpClient

- プラグインは、Retrofit2とRxJavaを使う  
使い方は[ここ](https://qiita.com/motomiya326/items/f59f0ddf400da4050fe8)を参照
- 外部のインターネットに接続する場合は、`AndroidManifest.xml`に設定を追加   

```
<uses-permission android:name="android.permission.INTERNET" />
```

- HTTP接続が許可されない場合(HTTPS通信でない場合)設定ファイルを追加   
詳細は[ここ](https://qiita.com/b_a_a_d_o/items/afa0d83bbffdb5d4f6be)を参照
