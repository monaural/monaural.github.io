---
title: TypeScript で配列の重複を取り除く (unique化)
date: 2022/05/02
tags: [typescript, programming, javascript]
thumbnail: /images/programming.jpg
---

## TypeScript で配列を unique にしようとしたら

TypeScript で配列の内容をユニークにしたく、いつもの JavaScript の感じで書くとエラーになった

```
const array = [1, 2, 3, 1, 2, 4]
const foo = [...new Set(array)]
```

JSだと、この書き方で問題ない（はず）。スプレッド構文（ドット3つ）を使って、配列から重複を取り除いてくれる。結果は

```
[1, 2, 3, 4]
```

が返ってくる。

で、同じコードを TypeScript で実行した場合は、こんなエラーが発生した。

```
Type error: Type 'Set<string>' is not an array type or a string type. Use compiler option '--downlevelIteration' to allow iterating of iterators.
```

## TypeScript では

`Array.from` を使ってこう書けば、エラーは起きなかった

```
const array = [1, 2, 3, 1, 2, 4]
const foo = Array.from(new Set(array))
```

Set から Array を作りましょうよということですね。
