# TypeScript FizzBuzz TDD Example

このリポジトリは、TypeScriptでFizzBuzzを実装しながらTDD(テスト駆動開発)を学ぶためのサンプルコードを提供します。
Zenn記事「[TypeScript/ハンズオン]テスト駆動開発(TDD)入門 第3回：FizzBuzzで学ぶTDDの実践」のサンプルコードです。

## 概要

FizzBuzzをTDDで実装しながら、以下の内容を整理しました

- テストの段階的な追加方法
- 実装のリファクタリング手法
- エラー処理の適切な実装
- インターフェースを活用した拡張性の高い設計

## 必要要件

- Node.js (v16以上)
- npm (v8以上)

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/MizukiMachine/typescript-fizzbuzz-tdd.git
cd fizzbuzz-tdd

# 依存パッケージのインストール
npm install
```

## 使い方

```bash
# テストの実行（監視モード）
npm test

# テストカバレッジの確認
npm run test:coverage

# テストをCI環境で実行
npm run test:ci

# TypeScriptのコンパイル
npm run build
```

## プロジェクト構造

```
src/
├── errors.ts
├── validators.ts
├── types.ts
├── rules.ts
├── fizzbuzz.ts
└── fizzbuzz.test.ts
```

## 学習ステップ

1. 基本的なFizzBuzz実装
   - 通常の数値の変換
   - 3の倍数の処理
   - 5の倍数の処理
   - 3と5の公倍数の処理

2. エラー処理の追加
   - バリデーションの実装
   - カスタムエラーの作成
   - エラーケースのテスト

3. リファクタリング
   - ルールベースの設計
   - インターフェースの活用
   - 拡張性の向上

## 関連記事

- [テスト駆動開発(TDD)入門 第3回：FizzBuzzで学ぶTDDの実践](https://zenn.dev/nezumizuki/articles/c24df235f7333d)

