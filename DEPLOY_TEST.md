# デプロイテスト手順

## ローカル環境でのテスト

1. 開発サーバーの起動
```bash
cd bbs-system
npm run dev
```

2. ブラウザで http://localhost:3000 にアクセスして以下を確認
   - スレッド一覧ページが正しく表示されるか
   - スレッド詳細ページが正しく表示されるか
   - 2ch風のUIデザインが適用されているか

3. ESLintとTypeScriptの型チェックの実行
```bash
npm run lint
npx tsc --noEmit
```

## 本番環境へのデプロイテスト

1. 環境変数の設定
   - `.env.local` ファイルを作成し、以下の内容を設定
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

2. ビルドテスト
```bash
npm run build
```

3. Vercelへのデプロイ
   - VERCEL_SETUP.mdの手順に従ってVercelとGitHubの連携を設定
   - GitHubリポジトリにプッシュしてGitHub Actionsが正常に実行されることを確認
   - Vercelのデプロイが成功することを確認
   - デプロイされたURLにアクセスして機能が正常に動作することを確認
