# 2ch風掲示板システム 開発ドキュメント

## プロジェクト概要
このプロジェクトは、2ch風の掲示板システムをNext.js、TypeScript、Tailwind CSSを使用して実装したものです。GPT-4oによる自動レス機能を搭載しており、GitHub ActionsとVercelを使用したCI/CDパイプラインも構築されています。

## 主な機能
- スレッド作成・投稿機能
- レス投稿（匿名、レス番付き）
- GPT-4oによる自動返信機能
- 2ch風UIデザイン
- GitHub ActionsによるCI
- Vercel連携での本番デプロイ

## 技術スタック
- フレームワーク: Next.js (App Router)
- 言語: TypeScript
- UI: Tailwind CSS（2ch風テーマ）
- デプロイ: GitHub + Vercel
- CI: GitHub Actions + ESLint/TypeScript
- AIレス: OpenAI GPT-4o

## ディレクトリ構造
```
bbs-system/
├── .github/
│   └── workflows/        # GitHub Actions用CI設定
│       └── deploy.yml
├── public/               # 静的ファイル（favicon、OG画像など）
├── src/
│   ├── components/       # UIコンポーネント
│   ├── pages/            # Next.jsのページ（掲示板スレッド等）
│   ├── styles/           # CSS（2ch風デザイン）
│   ├── utils/            # 共通関数（GPTレスポンスなど）
│   └── lib/              # APIラッパー
├── .eslintrc.json        # ESLint設定
├── tailwind.config.js    # Tailwind CSS設定
├── tsconfig.json         # TypeScript設定
├── vercel.json           # Vercel用設定
├── next.config.js        # Next.js設定
├── package.json
└── README.md
```

## 開発環境のセットアップ
1. リポジトリのクローン
```bash
git clone https://github.com/yourusername/2ch-bbs-clone.git
cd 2ch-bbs-clone
```

2. 依存関係のインストール
```bash
npm install
```

3. 環境変数の設定
`.env.local`ファイルを作成し、以下の環境変数を設定します：
```
OPENAI_API_KEY=your_openai_api_key
```

4. 開発サーバーの起動
```bash
npm run dev
```

5. ブラウザで http://localhost:3000 にアクセス

## デプロイ方法
詳細な手順は以下のファイルを参照してください：
- `VERCEL_SETUP.md` - Vercel連携の設定手順
- `DEPLOY_TEST.md` - デプロイテスト手順

## 実装の詳細
### UI実装
- 2ch風のデザインをTailwind CSSで実装
- スレッド一覧ページとスレッド詳細ページの実装
- 投稿フォームの実装

### 機能実装
- GPT-4oを用いた自動レス機能の構築
- OpenAI API連携の実装
- スレッド作成・投稿機能の実装
- レス投稿機能の実装

### 品質管理・デプロイ
- ESLintとTypeScriptの型チェック設定
- GitHub Actionsワークフローの設定
- Vercel連携の設定

## 今後の拡張候補
- データの永続化（データベース連携）
- ユーザー認証機能の追加
- モバイル対応のレスポンシブデザイン
- スパム対策の実装
- テストコードの追加
