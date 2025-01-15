# TypeScript FizzBuzz TDD Example

このリポジトリは、TypeScriptでFizzBuzzを実装しながらTDD(テスト駆動開発)を学ぶためのサンプルコードを提供します。
Zenn記事「[TypeScript/ハンズオン]テスト駆動開発(TDD)入門 第3回：FizzBuzzで学ぶTDDの実践」のサンプルコードです。

## 概要

FizzBuzzをTDDで実装しながら、以下の内容を学べます：

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

## テストカバレッジ目標

- Branches: 80%以上
- Functions: 80%以上
- Lines: 80%以上
- Statements: 80%以上

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

## 発展課題

1. シーケンス生成機能の追加
   - 1から指定された数までのFizzBuzz配列を生成

2. カスタムルールの追加
   - 7の倍数で"Whizz"を返すルール
   - 複合ルールの優先順位の検討

3. エラー処理の改善
   - 最大値の制限追加
   - エラーメッセージの改善

## ライセンス

MIT

## 貢献について

Issue、Pull Requestは大歓迎です。以下の点に気をつけてください

- テストカバレッジを維持すること
- コミットメッセージは具体的に
- プルリクエストには変更内容の説明を添えること

