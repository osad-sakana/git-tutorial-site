# Git & GitHub 入門ガイド

初心者向けの Git / GitHub 学習サイトです。バージョン管理の基礎から、チームでの実践的なワークフローまでをステップ形式で解説します。

## 学習コンテンツ

| ページ | 内容 |
| :--- | :--- |
| Gitとは？ | バージョン管理の概念・Git の正体・基本用語 |
| Git の基本 | `init` / `add` / `commit` / `log` |
| 変更の取り消し | `amend` / `reset` / `revert` / `stash` |
| ブランチ | `switch` / `merge` / コンフリクト解消 |
| GitHub とは | Git との違い・主要機能・アカウント作成 |
| GitHub 基本操作 | SSH 鍵設定・`push` / `pull` / `clone` |
| プルリクエスト | PR の作成・コードレビュー・マージ |
| 実践ワークフロー | GitHub Flow・チートシート・`.gitignore` |
| Issue 駆動開発 | Issue からブランチ・PR・自動クローズの流れ |

## 技術スタック

- [Astro](https://astro.build/) — 静的サイトジェネレーター
- [Tailwind CSS](https://tailwindcss.com/) — スタイリング
- GitHub Pages — ホスティング（GitHub Actions で自動デプロイ）

## プロジェクト構成

```
src/
├── components/
│   └── Terminal.astro   # コピーボタン付きターミナルブロック
├── layouts/
│   └── Layout.astro     # 共通レイアウト（ナビ・OGP・フッター）
├── lib/
│   └── badge.ts         # バッジスタイル共有定数
├── pages/
│   ├── index.astro
│   ├── what-is-git.astro
│   ├── basics.astro
│   ├── undo.astro
│   ├── branch.astro
│   ├── about-github.astro
│   ├── github.astro
│   ├── pullrequest.astro
│   ├── workflow.astro
│   └── issue-driven.astro
└── styles/
    └── global.css
```

## ローカル開発

```sh
# 依存関係のインストール
pnpm install

# 開発サーバー起動（http://localhost:4321）
pnpm dev

# 本番ビルド
pnpm build

# ビルド結果のプレビュー
pnpm preview
```

## デプロイ

GitHub Actions を使って `main` ブランチへの push 時に自動ビルド・GitHub Pages へデプロイします。

ビルド時に環境変数でベース URL を指定します：

```sh
SITE=https://<username>.github.io  BASE=/<repo-name>  pnpm build
```
