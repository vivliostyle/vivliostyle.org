module.exports = {
  title: 'mybook',
  author: '山田太郎 <yamadataro@example.com>',
  language: 'ja',
  theme: 'themes/mytheme',
  entry: [
    {
      path: 'toc.md',
      rel: 'contents',
    },
    'maegaki.md',
    'honbun.md',
    'atogaki.md',
  ],
  entryContext: './manuscripts',
  toc: true,
  tocTitle: '目次',
}
