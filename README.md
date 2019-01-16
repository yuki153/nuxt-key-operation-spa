# nuxt-key-operation-spa-page

## 概要

キー操作（←, →）によるフォーカス移動と Enter key での決定でページ遷移する  
Nuxt.js 使用したテスト SPA ページ。

## 開発環境の使用方法

``` bash
# 開発環境を構築するパッケージのインストール（最初の一回のみ）
$ yarn

# json サーバーの起動（yarn dev の前に起動しておく必要がある）
$ yarn json-serve

# 開発環境の起動
# http://localhost:3000/nuxt-key-operation/ でページヘアクセス
$ yarn dev

# ホスティングのための html ファイルなどを dist/ を生成し出力
$ yarn generate

# プロダクションモードでの起動
$ yarn build
$ yarn start
```

## 開発での留意点

SSRモードでは下記に注意する

* vue ライフサイクルメソッドの内 created() や beforeCreate() の中ではdocument や window といった node.js に存在しない独自の object は使用できない

* 非同期で取得するデータをコンポーネントにサーバー上でプリレンダリングしたい場合 asycnData() を使用する。asyncData() はコンポーネントがインスタンス化する前に呼び出されるため、this は使用不可能。プリレンダリングしたデータを Vuex ストアへセットする場合は [fetch()](https://ja.nuxtjs.org/api/pages-fetch/) を使用する。
