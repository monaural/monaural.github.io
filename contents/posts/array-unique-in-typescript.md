---
title: TypeScript で配列の重複を取り除く (unique化)
date: 2022/05/02
tags: [typescript, programming, javascript]
---

## TypeScript で配列を unique にしようとしたら

いつもの JavaScript の感じで書くとエラーになった

```
const array = [1, 2, 3, 1, 2, 4]
const foo = [...new Set(array)]
```

エラー内容は

```
Type error: Type 'Set<string>' is not an array type or a string type. Use compiler option '--downlevelIteration' to allow iterating of iterators.
```

## TypeScript では

`Array.from` を使ってこう書けばエラーになりませんでした

```
const array = [1, 2, 3, 1, 2, 4]
const foo = Array.from(new Set(array))
```

なるほどね、Set から Array を作りましょうと。
