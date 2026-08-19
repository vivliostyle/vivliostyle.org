# 生成AI利用に関する方針

この方針は、[Vivliostyle organization](https://github.com/vivliostyle) が管理するプロジェクトに適用する。
これらのプロジェクトの一部は NLnet Foundation の助成を受けて開発されており、NLnet の
[生成AI利用に関する方針](https://nlnet.nl/foundation/policies/generativeAI/)に従う。
この文書は、助成を受けたプロジェクトに求められる、生成AI利用についての公開の説明にあたる。

## 基本方針

私たちはプロジェクトの開発に生成AIツールを利用しており、その利用を公開の場で開示する。
AI は人間の開発者を助けるための道具であり、人間の判断や責任を代替するものではない。
マージされるすべての変更は、人間のメンテナーが設計・レビュー・検証する。
AI ツールを使ったかどうかに関わらず、提出物の正しさ、品質、ライセンス適合性についての責任は、コミットした人間が負う。

## 利用しているツール

- 生成AIコーディングアシスタント(「Claude Code」など、その他のAIコーディングエージェントを含む)：コードの執筆・改修、テストの作成、デバッグ、ドキュメント、翻訳に使う。使用した具体的なツールとモデルは、コミットごとに記録する(詳細は次節)。
- GitHub Copilot：コードレビューの提案と自動修正(Copilot Autofix)に使う。

利用するツールの構成はプロジェクトごとに異なり、時間とともに変わりうる。以下の開示ルールは、使用する生成AIツールの種類によらず適用する。
プロジェクトによっては、ローカライズに従来型の機械翻訳(Google Cloud Translation など)も使うことがある。これは生成AIではなく、公開前に人間が翻訳内容をレビューする。

## コミットごとの開示

AI が生成したコードを含むコミットには、使用したツールと具体的なモデルを記すトレーラーを付ける。
書式は、[Linux カーネルが採用している](https://www.kernel.org/doc/html/latest/process/coding-assistants.html) `Assisted-by:` トレーラーを標準とする。
このトレーラーには、エージェント名と具体的なモデルバージョンを記す。

```
Assisted-by: Claude Code:claude-fable-5
```

`Co-authored-by:` ではなくこの書式を選ぶのは、著作権とそれに伴う責任を人間のコミッターの側に残すためである。
AI はあくまで作業を助ける道具である。
`Co-authored-by: Copilot <copilot@github.com>` のようにツールが自動で付与するトレーラーも、開示として受け入れる。
コントリビューターは、自分の利用ツールの設定をこのために変更する必要はない。

プロンプトのやり取りをそのままコミットメッセージに残すことはしない。
代わりに、プルリクエストの本文で、AI に任せた作業と、人間の貢献者が設計・判断・レビュー・検証した内容を説明する。
このほうが、生のプロンプトログよりも、変更の背後にある人間の設計とレビューがよく伝わる。

プルリクエストの本文にも同じ `Assisted-by:` の行を含める。
分担の説明はしばしば長くなるため、本文が読みやすいままになるよう `<details>` ブロックで囲む。例：

```markdown
Fixes the print preview failing to load on Safari.

Assisted-by: Claude Code:claude-fable-5

<details>
<summary>How the AI was used</summary>

- The human author identified the bug from a user report, chose to fix it in
  the service worker rather than the viewer, and required that the response
  headers stay unchanged.
- The AI located the failing code path, drafted the fix, and wrote a
  regression test.
- The human author reviewed the diff, simplified the error handling, and
  verified the fix in Safari and Chrome before requesting review.

</details>
```

## 人間の責任

- AI が支援したすべての変更は、マージ前に人間のメンテナーがレビューする。
- AI の出力は、ビルド・型チェック・リント・テストによって、また該当する場合は実際に動かしての手動確認によって検証する。
- 仕上がりの良い出力は、理解の代わりにはならない。コミットする人間は、レビューの場ですべての変更を説明できなければならない。

## 著作権とライセンス

- 第三者の著作物をそのまま再現するような AI の出力を提出しない。既存のよく知られたコードに似通う可能性が高い出力には、特に注意する。
- 人間による実質的な関与のない、AI だけによる成果物は受け入れない。
- すべての貢献は、認知された自由・オープンソースライセンスの下で公開できるものでなければならない。

## 外部からの貢献

AI 支援の有無にかかわらず、貢献を歓迎する。

- 生成AIを実質的に利用した場合は、プルリクエストの説明にその旨を書く。使用したツールとモデル、何に使ったかを明記する。AI 支援によるコミットには、前節で説明したトレーラーを付ける。
- プルリクエストの説明や Issue の報告文は、自分自身の言葉で書く。LLM が書いた文章が含まれる場合は、その部分を明示する。
- 提出するコードについて理解しており、レビューの場で議論できる状態にしておく。

## この方針の見直し

NLnet が生成AIに関する方針を更新したとき、そして生成AIを取り巻く状況が変化したときに、この方針を見直す。
質問は各プロジェクトの Issue トラッカーで受け付ける。
