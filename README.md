# japan-travel-phrases

日本旅行中の外国人が、旅行中の場面と具体的な問題を選び、解決に必要な日本語フレーズをすぐ確認できるスマートフォン優先のサービスです。

一般的な日本語フレーズ集ではなく、「改札から出られない」などの困りごとを入口にして、必要な日本語、ローマ字、英訳、スタッフへ見せる大きな日本語表示を提供します。

> このサービスは、緊急通報・救命・災害対応を目的とする緊急サービスではありません。

## 現在の状態

現在は、次の5カテゴリそれぞれに5問題、合計25問題と75フレーズを用意しています。

1. Train & Station
2. Airport
3. Restaurant
4. Hotel
5. Shopping

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

- 5カテゴリ、25件の旅行トラブルから問題を選択
- 1問題につき3件の日本語フレーズを表示
- 日本語、ローマ字、英訳の確認
- 選択した日本語をスタッフへ見せるモーダル
- 375px前後を基準にしたスマートフォン優先UI

画面は次のルートで構成します。

| ルート | 画面 |
| --- | --- |
| `/` | トップページ |
| `/categories` | 場面選択 |
| `/categories/[categoryId]` | カテゴリ別問題一覧 |
| `/problems` | 電車・駅問題一覧への互換リダイレクト |
| `/problems/[slug]` | 問題詳細・フレーズ一覧 |

## MVPで扱わないもの

- バックエンドAPI、データベース
- 認証、課金、CMS
- AI会話、発音判定、ユーザー利用時のAI API呼び出し
- 実行時の音声生成
- 音声再生（後続候補）
- Docker、AWS

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

仕様にない機能を追加せず、Server Componentsを基本として、Client Componentsはモーダルなど操作が必要な最小範囲に限定します。
