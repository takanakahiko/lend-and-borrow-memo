# lend-and-borrow-memo

## これはなに

- 物の貸し借りをTwitterアカウントに紐づけたアプリケーションを作りたい
- CI含んだ環境としてのサンプル的な位置付けにしたい

## 開発の心得

### 前提

- npmを使える環境

### 準備の手順

#### 共通

以下のコマンドを実行

```bash
npm install -g yarn firebase-tools firebase-bolt
```

#### functions

`/functions`ディレクトリ内で以下のコマンドを実行

```
yarn install
```

#### hosting

`/hosting`ディレクトリ内で以下のコマンドを実行

```
yarn install
```

### 開発の手順

#### functions

1. `/functions`に移動する
2. ソースコードを書く
3. 以下を実行して挙動を確かめる

```
yarn start
```

4. 2に戻る

#### hosting

1. 以下コマンドを実行する

```
firebase serve
```

2. `/hosting`に移動する
3. 以下コマンドを実行する

```
yarn build:watch
```

4. ソースコードを書く
5. ブラウザにて`localhost:5000`にアクセスして挙動を確かめる
6. 4に戻る

