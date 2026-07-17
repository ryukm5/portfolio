# ファーストビューの背景動画

ここに **PCキーボードをタイプする動画** を置いてください。Hero セクションが
自動でこのファイルを背景に再生します（濃紺の上に約15%の濃さで表示）。

## 置くファイル

- `keyboard.mp4` … 必須（メイン。H.264 推奨）
- `keyboard.webm` … 任意（あれば対応ブラウザで優先再生。無くても可）
- `keyboard-poster.jpg` … 任意（動画ロード前に表示する静止画。無くても可）

ファイル名は上記の通りにしてください（`src/components/sections/Hero.tsx` が参照）。

## 推奨のダウンロード元（商用可・帰属不要）

- Pixabay: https://pixabay.com/videos/search/keyboard%20typing/ （Pixabay License）
- Coverr:  https://coverr.co/stock-video-footage/typing  （帰属不要・商用可）
- Mixkit:  https://mixkit.co/free-stock-video/typing/       （Mixkit License）

ダウンロードした mp4 をこのフォルダに `keyboard.mp4` という名前で保存すれば完了です。

## メモ

- 容量が大きい場合（目安 10MB 超）は、軽量化（720p / 10秒程度のループ）を推奨。
- 動画が無い間は、濃紺の背景だけが表示されます（レイアウトは崩れません）。
