# japan-travel-phrases

日本旅行中の外国人が、電車・駅で起きた具体的な問題を選び、解決に必要な日本語フレーズをすぐ確認できるスマートフォン優先のサービスです。

一般的な日本語フレーズ集ではなく、「改札から出られない」などの困りごとを入口にして、必要な日本語、ローマ字、英訳、音声、駅員へ見せる大きな日本語表示を提供します。

> このサービスは、緊急通報・救命・災害対応を目的とする緊急サービスではありません。

## 現在の状態

現在はMVPの実装準備段階です。仕様は `docs/` 配下にまとめられており、対象は電車・駅カテゴリの5問題に限定されています。

1. 改札から出られない
2. 間違った電車に乗った
3. 正しいホームが分からない
4. ICカードの残高が足りない
5. 電車に忘れ物をした

## 最初に行うこと

### 1. Bunを用意する

このプロジェクトでは、パッケージ管理とスクリプト実行にBunを使用します。使用バージョンは `package.json` の `packageManager` を確認してください。

```bash
bun --version
```

### 2. 依存パッケージをインストールする

リポジトリのルートで実行します。

```bash
bun install
```

`bunfig.toml` により、新しく解決されるパッケージには7日間の最低公開期間が適用されます。制限を無効化・短縮したり、別のパッケージマネージャーで回避したりしないでください。

### 3. 開発サーバーを起動する

```bash
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 利用できるコマンド

```bash
# 開発サーバー
bun dev

# lint
bun run lint

# production build
bun run build

# production server
bun run start
```

CIやVercelなど、既存の `bun.lock` を変更せずにインストールする環境では、次のいずれかを使用します。

```bash
bun install --frozen-lockfile
# または
bun ci
```

## MVPで提供する機能

- 5つの電車・駅トラブルから問題を選択
- 1問題につき3〜5件の日本語フレーズを表示
- 日本語、ローマ字、英訳の確認
- 事前生成したMP3音声の再生
- 選択した日本語を駅員へ見せる全画面モーダル
- 375px前後を基準にしたスマートフォン優先UI

画面は次の3ルートで構成します。

| ルート | 画面 |
| --- | --- |
| `/` | トップページ |
| `/problems` | 問題一覧 |
| `/problems/[slug]` | 問題詳細・フレーズ一覧 |

## MVPで扱わないもの

- バックエンドAPI、データベース
- 認証、課金、CMS
- AI会話、発音判定、ユーザー利用時のAI API呼び出し
- 実行時の音声生成
- Docker、AWS
- 電車・駅以外のカテゴリ

## 技術スタック

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- Bun
- TypeScriptによる静的データ
- 事前生成したMP3音声
- GitHub、Vercel

## 仕様書

実装前に、担当範囲に応じて次の文書を確認してください。

- [`AGENTS.md`](./AGENTS.md): 開発ルールと禁止事項
- [`docs/product-spec.md`](./docs/product-spec.md): プロダクトの目的とMVP範囲
- [`docs/screen-spec.md`](./docs/screen-spec.md): 画面、遷移、アクセシビリティ
- [`docs/content-spec.md`](./docs/content-spec.md): 問題・フレーズ・音声データの規則
- [`docs/implementation-plan.md`](./docs/implementation-plan.md): 実装フェーズと完了条件

仕様にない機能を追加せず、Server Componentsを基本として、Client Componentsは音声再生やモーダルなど操作が必要な最小範囲に限定します。
