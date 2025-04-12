# 2ch風掲示板クローン with GPT自動レス

Next.js、TypeScript、Tailwind CSSを使用した2ch風掲示板システムです。GPT-4oによる自動レス機能を搭載しています。

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
- CI: GitHub Actions + Prelight
- AIレス: OpenAI GPT-4o

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/2ch-bbs-clone.git
cd 2ch-bbs-clone

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```
OPENAI_API_KEY=your_openai_api_key
```

## ライセンス

MIT
