# vue-component-emit-trial
Vue.jsのemitを理解するための簡易アプリケーション。  
内容は数当てゲーム。正解の数値がランダム生成され、インプット欄に数値を入力して正解の数値を当てる。  
試行回数は10回。不正解ごとに正解の数値より「大きい」もしくは「小さい」のヒントが出る。  
10回までに正解できないとゲームオーバー。

## Dependency
package.jsonを参照。

## Setup
```
$ yarn install
```

## Usage
サーバ立ち上げ
```
$ yarn run start
```

build
```
$ yarn run build
```

## References
[Vue.jsコンポーネント入門 (4) $emitによるイベントの発行](https://www.hypertextcandy.com/vuejs-components-introduction-emit-events)
