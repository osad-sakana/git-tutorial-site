# 引き継ぎ資料：画像素材の追加

別環境（外部ネットワークに出られる環境）で、サイトに使う画像を用意して組み込むための資料。

## 1. 背景

- 本サイトは Git / GitHub 初心者向けの学習サイト（Astro 6 + Tailwind CSS 4、GitHub Pages 配信）。
- デザイン全面刷新を `claude/brave-maxwell-gbvghb` ブランチで実施済み。
- 当初「フリー素材を活用した画像」を入れる予定だったが、作業環境が外部画像（Unsplash・Wikimedia・CDN）に接続できず、**写真・スクリーンショットは未導入**。現状の視覚要素は Lucide アイコンとオリジナル SVG のみ。
- この資料は、その未導入分を別環境で補うためのもの。

## 2. 前提知識（リポジトリ構成）

| パス | 役割 |
| :--- | :--- |
| `src/lib/pages.ts` | 章の定義（章の増減・順序・アクセント色はここが唯一の情報源） |
| `src/components/PageHeader.astro` | 章ヘッダー。`<slot />` にリード文を入れる |
| `src/components/Callout.astro` | 補足ボックス（`type="tip" \| "warn" \| "info" \| "danger"`） |
| `src/pages/*.astro` | 各章。本文は Tailwind クラスで直接記述 |
| `public/` | 静的ファイル置き場（現状は favicon のみ） |

注意点:
- 配信は `BASE` 付きのサブパス（例 `/git-tutorial-site/`）。**画像パスは必ず `import.meta.env.BASE_URL` 経由**で組み立てる。`/images/a.png` の直書きは本番で 404 になる（過去に Issue #1 で同種の不具合が発生）。
- 動的に組み立てた Tailwind クラス名（`` `text-${x}` ``）は生成されない。色などは完全な文字列で書くか、インライン style にする。
- スクロール連動アニメーションは `Layout.astro` が `main section` / `.grid > *` に自動付与する。画像側で特別な対応は不要。

## 3. 画像の種類と必要な箇所

優先度は「学習効果が高い順」。**A（スクリーンショット）は初心者の理解に直結するため最優先**。

### A. GitHub / Git の画面スクリーンショット（最優先）

| 章 | 見出し | 撮るもの |
| :--- | :--- | :--- |
| `about-github` | アカウントを作成する | サインアップ画面（個人情報は写さない） |
| `about-github` | GitHub の主要な画面・用語 | リポジトリトップ（Code / Issues / Pull requests / Actions タブが見える状態） |
| `github` | SSH 鍵で GitHub に接続する | Settings → SSH and GPG keys → New SSH key 画面（鍵本体は**必ず伏せる／ダミー**） |
| `github` | GitHub にリポジトリを作成する | New repository 画面 |
| `pullrequest` | PR を作成する | Compare & pull request ボタン／PR 作成フォーム |
| `pullrequest` | コードレビューでよく使うコメント | Files changed タブでのレビューコメント |
| `issue-driven` | 基本フロー | Issue 作成画面、PR 説明の `Closes #番号` とマージ後の自動クローズ表示 |

撮影ルール:
- 撮影対象は**自分で作ったデモ用リポジトリ／アカウント**にする。実在の他人のリポジトリ・アイコン・メールアドレスを写さない。
- 鍵・トークン・メールアドレス・個人名は写さない（写ったらモザイクではなく撮り直す）。
- GitHub の UI は頻繁に変わる。撮影日を `ALT` かキャプションに記録する。
- 表示言語は日本語 UI に統一（初心者向けのため）。ライトテーマで撮る。
- 幅 1200px 程度で撮影し、不要な余白はトリミング。

### B. 雰囲気づくりの写真（任意・フリー素材）

| 場所 | 用途 | 探す題材の例 |
| :--- | :--- | :--- |
| `index` ヒーロー下または「なぜ Git？」 | 開発の雰囲気 | ノート PC とコード、チームでの作業風景 |
| `PageHeader` 背景（章ごと） | 章の導入を印象づける | 章の主題に合わせる（例: ブランチ=分かれ道／枝、チーム開発=ミーティング） |

方針: 写真は**入れすぎない**。学習の妨げになる装飾写真は不要。A を優先し、B は章あたり 0〜1 枚まで。

## 4. 素材のライセンス規則

- 利用可: **CC0 / Unsplash License / Pexels License / Pixabay Content License** 等、商用利用・改変・クレジット不要または明記で使えるもの。
- 利用不可: 出典不明、ライセンス条件を確認できないもの、人物が特定でき**モデルリリースが不明**なもの。
- クレジットが必要な素材、またはサービスがクレジットを推奨する素材は、フッター（`src/layouts/Layout.astro` の `Icons: ... Fonts: ...` の行）に追記する。
- 各画像について `docs/image-credits.md` に「ファイル名 / 取得元 URL / 作者 / ライセンス / 取得日」を記録する（**必須**）。
- GitHub のスクリーンショットは GitHub の UI であり、教材での引用は一般的だが、GitHub のロゴ・マスコット（Octocat）を単体で加工・再配布しない。

## 5. ファイル規約

- 置き場所: `src/assets/images/<章 slug>/` （Astro の画像最適化を使うため `public/` ではなく `src/assets/`）。
- 命名: `<slug>-<内容>.webp` の小文字ケバブケース（例: `github-new-ssh-key.webp`）。
- 形式・サイズ: WebP（または AVIF）、横幅 1200px 以下、1 枚 200KB 目安。写真は 1600px まで可。
- `alt` は必須。スクリーンショットは「何の画面か＋注目点」を日本語で書く。装飾目的の写真は `alt=""`。

## 6. 組み込み方（推奨実装）

1. `src/components/Figure.astro` を新規作成する。内容の目安:
   - props: `src`（`ImageMetadata`）, `alt`, `caption?`, `credit?`
   - Astro の `<Image>`（`astro:assets`）で表示。`loading="lazy"`、`width`/`height` 指定でレイアウトシフトを防ぐ。
   - 角丸 `rounded-xl`、枠線 `border border-gray-200`、影 `shadow-sm` で既存カードと揃える。
   - スクリーンショットにはブラウザ風の上部バー（`Terminal.astro` のドット表現を流用）を付けると既存デザインと馴染む。
2. 各ページで `import shot from '../assets/images/github/github-new-ssh-key.webp'` し、該当見出しの直後に `<Figure src={shot} alt="…" caption="…" />` を置く。
3. 背景写真（B）は `PageHeader.astro` にオプション props（例: `image?: ImageMetadata`）を足し、グロー背景の下層に低不透明度で敷く。**文字の可読性（コントラスト）を必ず確認**する。
4. `astro:assets` が `BASE` を自動処理するため、この方式なら `BASE_URL` の手動付与は不要。

## 7. 検証手順（コミット前に必ず実施）

```sh
pnpm install --frozen-lockfile
pnpm build
# サブパス配信での確認（本番相当）
SITE=https://osad-sakana.github.io BASE=/git-tutorial-site pnpm build
pnpm preview
```

確認項目:
- ビルドが警告・エラーなしで通る。
- サブパス配信でも全画像が表示される（404 なし）。
- スマホ幅（390px）で画像がはみ出さない。横スクロールが出ない。
- 全画像に `alt` がある。
- `docs/image-credits.md` が全画像分そろっている。
- スクリーンショットに個人情報・鍵・トークンが写っていない。

## 8. 完了条件

- A の 7 箇所すべてにスクリーンショットが入っている（撮影できない箇所があれば理由を記録）。
- B は任意。入れた場合は可読性とライセンスを確認済み。
- 上記検証をすべて満たす。
- 変更を `claude/brave-maxwell-gbvghb` から出した PR、または指示されたブランチに push する。

## 9. 既知の注意（引き継ぎ時点の状態）

- 本文の解説文は既存のまま（章ごとの「ゴール」「まとめ」のみ新規追記）。画像の位置合わせで文章を直す場合は、技術的な正確さを再確認すること。
- 既存の `<pre>` / `Terminal` の改行は `astro.config.mjs` の `compressHTML: false` で保たれている。**この設定を戻さない**（戻すとコード例が 1 行に潰れる）。
- ブランド色（`orange-*`）は `src/styles/global.css` の `@theme` で再定義済み。Tailwind 標準の橙色とは異なる。
