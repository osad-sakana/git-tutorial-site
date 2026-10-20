export interface Chapter {
  slug: string
  /** ナビ・カード用の短い名前 */
  short: string
  title: string
  /** lucide-static のアイコン名 */
  icon: string
  /** アクセントカラー（CSS の色）。動的に使うため Tailwind クラスではなくインラインで渡す */
  accent: string
  summary: string
  minutes: number
  /** 章の冒頭に出す「この章のゴール」 */
  goals: string[]
  /** 章末に出す「ここまでのまとめ」 */
  takeaways: string[]
}

export const chapters: Chapter[] = [
  {
    slug: 'what-is-git',
    short: 'Git とは？',
    title: 'そもそも Git とは？',
    icon: 'book-open',
    accent: '#d97706',
    summary: 'バージョン管理の概念から Git の正体まで。学習の第一歩はここから。',
    minutes: 8,
    goals: [
      'バージョン管理がなぜ必要か説明できる',
      'リポジトリ・コミット・ブランチの意味がわかる',
      'Git と GitHub が別物であることを理解する',
    ],
    takeaways: [
      'Git は「変更履歴を記録するツール」で、自分のパソコンの中だけで動く。',
      'コミットは変更のスナップショット。あとから好きな時点に戻れる。',
      'Git を共有するための Web サービスが GitHub。両者は別物。',
    ],
  },
  {
    slug: 'basics',
    short: 'Git の基本',
    title: 'Git の基本コマンド',
    icon: 'git-commit-horizontal',
    accent: '#ea580c',
    summary: 'init・add・commit・log。変更履歴を記録する第一歩を学ぼう。',
    minutes: 12,
    goals: [
      '`git init` でリポジトリを作成できる',
      '`add` → `commit` の 2 段階で変更を記録できる',
      '`git log` で履歴を確認できる',
    ],
    takeaways: [
      '作業の流れは「編集 → add（ステージ）→ commit（記録）」の繰り返し。',
      '`git status` を頻繁に打つと、いま何が起きているか常に把握できる。',
      'コミットメッセージは「何をしたか」ではなく「なぜ変えたか」も意識して書く。',
    ],
  },
  {
    slug: 'undo',
    short: '取り消し',
    title: '変更の取り消し',
    icon: 'undo-2',
    accent: '#dc2626',
    summary: 'amend・reset・revert・stash でミスを安全にやり直す。',
    minutes: 12,
    goals: [
      '直前のコミットを `--amend` で修正できる',
      '`reset` の 3 つのモードの違いを説明できる',
      '共有済みの履歴には `revert` を使うべき理由がわかる',
    ],
    takeaways: [
      '自分だけの履歴は `reset` で巻き戻せるが、push 済みの履歴には `revert` を使う。',
      '`--hard` は作業内容まで消える。実行前に必ず `git status` で確認する。',
      '作業の途中で別の作業が入ったら `stash` で一時退避できる。',
    ],
  },
  {
    slug: 'branch',
    short: 'ブランチ',
    title: 'ブランチ',
    icon: 'git-branch',
    accent: '#16a34a',
    summary: '並行開発を可能にするブランチの作成・切り替え・マージを学ぼう。',
    minutes: 10,
    goals: [
      'ブランチを作成・切り替え・削除できる',
      '`merge` で変更を取り込める',
      'コンフリクトが起きたときに落ち着いて解消できる',
    ],
    takeaways: [
      'ブランチは「コミットを指す軽い付箋」。作るコストはほぼゼロ。',
      '新しい作業は必ずブランチを切ってから始める。',
      'コンフリクトは異常ではなく、人間が判断するための通常の手順。',
    ],
  },
  {
    slug: 'about-github',
    short: 'GitHub とは',
    title: 'GitHub とは？',
    icon: 'cloud',
    accent: '#7c3aed',
    summary: 'Git との違い・できること・アカウント作成・主要な用語を理解しよう。',
    minutes: 8,
    goals: [
      'Git と GitHub の役割の違いを説明できる',
      'GitHub の主要機能（Issue・PR・Actions など）を把握する',
      'アカウントを作成して準備を整える',
    ],
    takeaways: [
      'GitHub は「Git リポジトリのクラウド保管庫」＋「チーム開発の道具箱」。',
      'GitHub 以外にも GitLab や Bitbucket など同種のサービスがある。',
      'Issue・PR・Actions は、コードを書く以外の作業を支える主要機能。',
    ],
  },
  {
    slug: 'github',
    short: 'GitHub 基本',
    title: 'GitHub の基本操作',
    icon: 'cloud-upload',
    accent: '#4f46e5',
    summary: 'SSH 鍵の設定と、push・pull・clone でチームとコードを共有する。',
    minutes: 15,
    goals: [
      'SSH 鍵を作成して GitHub に登録できる',
      '`clone` / `push` / `pull` を使い分けられる',
      'ローカルとリモートの関係を図で説明できる',
    ],
    takeaways: [
      'push は「送る」、pull は「取り込む」、clone は「最初の複製」。',
      '作業を始める前に `git pull` で最新を取り込む習慣をつける。',
      'SSH 鍵の秘密鍵（拡張子なし）は絶対に他人へ渡さない。',
    ],
  },
  {
    slug: 'pullrequest',
    short: 'プルリクエスト',
    title: 'プルリクエスト（PR）',
    icon: 'git-pull-request',
    accent: '#2563eb',
    summary: '変更をチームに提案し、レビューを経てマージする仕組み。',
    minutes: 10,
    goals: [
      'PR が何のための仕組みか説明できる',
      'PR を作成し、レビューを受けてマージできる',
      '良い PR 説明文の書き方がわかる',
    ],
    takeaways: [
      'PR は「マージしてよいか」を相談する場。コードを書き終えてから出すとは限らない。',
      'PR は小さく保つほど、レビューが速く、不具合も見つけやすい。',
      'レビューは人を評価する場ではなく、コードを良くする共同作業。',
    ],
  },
  {
    slug: 'workflow',
    short: 'ワークフロー',
    title: '実践ワークフロー',
    icon: 'workflow',
    accent: '#db2777',
    summary: 'GitHub Flow・チートシート・.gitignore。現場の全体像をつかむ。',
    minutes: 10,
    goals: [
      'GitHub Flow の一連の手順を再現できる',
      '`.gitignore` で不要なファイルを管理対象から外せる',
      '困ったときに見返せるチートシートを手に入れる',
    ],
    takeaways: [
      'GitHub Flow は「main から枝を切る → 変更 → PR → レビュー → マージ」。',
      '`.gitignore` には node_modules や秘密情報（.env）を必ず書く。',
      'main ブランチは常に動く状態に保つ。',
    ],
  },
  {
    slug: 'issue-driven',
    short: 'Issue 駆動',
    title: 'Issue 駆動開発',
    icon: 'circle-dot',
    accent: '#0d9488',
    summary: 'Issue から作業を始める開発スタイルを、よくある事例で理解する。',
    minutes: 12,
    goals: [
      'Issue → ブランチ → PR → クローズの流れを説明できる',
      'PR から Issue を自動クローズさせる書き方を覚える',
      '実際の現場のパターンを 5 つ把握する',
    ],
    takeaways: [
      'すべての作業を Issue に残すと「なぜその変更をしたか」が履歴になる。',
      'PR の説明に `Closes #番号` と書くと、マージ時に Issue が自動で閉じる。',
      'ブランチ名に Issue 番号を入れると、後から追跡しやすい。',
    ],
  },
]

export const bySlug = (slug: string): Chapter => {
  const c = chapters.find((c) => c.slug === slug)
  if (!c) throw new Error(`unknown chapter: ${slug}`)
  return c
}

export const indexOfChapter = (slug: string): number => chapters.findIndex((c) => c.slug === slug)
