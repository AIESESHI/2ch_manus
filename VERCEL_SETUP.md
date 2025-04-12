# Vercel連携の設定手順

## 1. Vercelアカウントの作成
- Vercelアカウントをまだお持ちでない場合は、[Vercel](https://vercel.com)にアクセスして新規アカウントを作成してください。
- GitHubアカウントでログインすることをお勧めします。

## 2. GitHubリポジトリとVercelの連携
1. Vercelダッシュボードで「New Project」をクリックします
2. GitHubリポジトリをインポートします（`2ch-bbs-clone`リポジトリを選択）
3. 以下の設定を行います：
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next

## 3. 環境変数の設定
Vercelプロジェクト設定で以下の環境変数を設定します：
- `OPENAI_API_KEY`: OpenAIのAPIキー

## 4. GitHub Actionsのシークレット設定
GitHubリポジトリの「Settings」→「Secrets and variables」→「Actions」で以下のシークレットを設定します：
- `VERCEL_TOKEN`: Vercelの個人アクセストークン（Vercelダッシュボードの「Settings」→「Tokens」で生成）
- `VERCEL_ORG_ID`: VercelのOrganization ID
- `VERCEL_PROJECT_ID`: VercelプロジェクトのプロジェクトID

## 5. デプロイの確認
- GitHubリポジトリにプッシュすると、GitHub Actionsが自動的に実行されます
- GitHub Actionsの実行結果とVercelのデプロイ状況を確認します
- デプロイが完了したら、Vercelが提供するURLにアクセスして動作確認を行います
