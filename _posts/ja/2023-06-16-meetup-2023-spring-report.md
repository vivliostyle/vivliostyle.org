---
title: 「Vivliostyle ユーザーと開発者の集い 2023春」開催報告
lang: ja
image: /assets/posts/2023-06-16-meetup-2023-spring-report/fig-1.png
author: ogwata
tags:
  - リリース
---
<div style="float: right; margin: 0 0 1em 1em;"><img src="/assets/posts/2023-06-16-meetup-2023-spring-report/fig-1.png" alt="「Vivliostyle ユーザーと開発者の集い 2023春」開催報告" style="width: 500px;" /></div>

- [CSS組版 Vivliostyle ユーザーと開発者の集い 2023春](https://vivliostyle.connpass.com/event/280760/)

## 当日のプログラムと動画へのリンク

- **第1部 ユーザーからの報告**
    - 13:00-13:10（10分）（[小形克宏](https://twitter.com/ogwata)）：本日の趣旨説明[（movie）](https://youtu.be/LWGgx_-OuzM)
    - 13:10-13:40（30分）（[藤井大洋](https://twitter.com/t_trace)）：VS Codeで使うVivliostyle[（movie）](https://youtu.be/IZhWqs8klAA)
    - 13:40-14:10（30分）（[大津雄一郎](https://twitter.com/arinoth)）：『Vivliostyle CSS組版入門』刊行記念　もっと紙面であそぼう！（[slide](https://docs.google.com/presentation/d/e/2PACX-1vRe8ch25fqDcA0f-H8t6jXnKkuPmjvbX8w5N6c2Url7YnDX6RrxY5C5VTrNQArUwBkn-YO0YAwWxOX1/pub?start=false&loop=false&delayms=3000#slide=id.p), [movie](https://youtu.be/tsu54buPXs4)）
    - 14:10-14:15（5分）休憩
- **第2部 Vivliostyleからの報告**
    - 14:15-14:45（30分）（[小形克宏](https://twitter.com/ogwata)）：Vivliostyleで旅行エッセイを共同編集／オンデマンド印刷（[slide](https://github.com/ogwata/slide-2023-05-26-kaigainotabi1), [movie](https://youtu.be/BBlDnUngQMI)）
    - 14:45-15:15（30分）（[緑豆はるさめ](https://twitter.com/spring_raining)）：Vivliostyle CLIのアップデートと新しいVivliostyle Themes（[slide](https://paper.dropbox.com/doc/Vivliostyle-CLI-Update-2023-Spring--B6QH1glwYNzxswJS6ONA3TzsAQ-lsXkWP5og75hivqeNPNQ3), [movie](https://youtu.be/RiqLytcJfIE)）
    - 15:15-15:45（30分）（[村上真雄](https://twitter.com/MurakamiShinyu)）：Vivliostyle.jsの最新の進化（[slide](https://github.com/MurakamiShinyu/vivliostyle-dev2023spring), [movie](https://youtu.be/ofxFlBkaxzk)）
    - 15:45-15:50（5分）休憩
- **第3部 ディスカッション**
    - 15:50-16:30（40分）5月開発者会議[（movie）](https://youtu.be/WGZZQIJHna0)
     - 16:30-16:40（10分）クロージング（[村上真雄](https://twitter.com/MurakamiShinyu)）[（movie）](https://youtu.be/0j3zUsDkHAw)

## それぞれの発表の概要

- **VS Codeで使うVivliostyle（藤井大洋）**：藤井さんはSF作家であるだけでなく、VS Codeで小説を執筆する機能拡張[novel-writer](https://marketplace.visualstudio.com/items?itemName=TaiyoFujii.novel-writer)の作者でもあります。今回はその紹介に加え、Vivliostyleを使ってMarkdownからPandockを使ってEPUBとPDFを作る方法について、操作画面を交えて説明していただきました。
- **『Vivliostyle CSS組版入門』刊行記念　もっと紙面であそぼう！（大津雄一郎）**：絶賛発売中の[Vivliostyle解説本](https://amzn.asia/d/4LZ73WU)の著者が、「CSS 組版でこんなことができる」をテーマに、実際のCSSのコードや画面を見せながら紹介してくれました。
- **Vivliostyleで旅行エッセイを共同編集／オンデマンド印刷（小形克宏）**：プライベートな世界旅行を撮影したカラーアルバムをVivliostyleで書籍化し印刷しました。そこで浮かび上がったVivliostylejsの課題として、[OSにより出力結果が異なる問題](https://github.com/vivliostyle/vivliostyle.js/issues/1098)を説明しました（なお、後日の検証により[回避方法](https://github.com/vivliostyle/vivliostyle.js/issues/1098#issuecomment-1573302265)が報告され、現在は解決済みです）。　
- **Vivliostyle CLIのアップデートと新しいVivliostyle Themes（緑豆はるさめ）**：これまでVivliostyleの課題だったCSSのカスタマイズしにくさを解決するため、Vivliostyle CLIとThemesを大改造したコミッターが、自らその詳細な内容を解説しました。
- **Vivliostyle.jsの最新の進化（村上真雄）**：イベントの最後として村上代表が、ここまで報告された成果や課題を整理、これからVivliostyleはどういう方向に進むのか、その開発予定を報告しました。
- **5月開発者会議**：この日出された論点を材料に、今後のVivliostyleの課題について登壇者とコミッターが議論しました。