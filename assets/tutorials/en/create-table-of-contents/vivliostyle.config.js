import { defineConfig } from '@vivliostyle/cli';

export default defineConfig({
  title: 'mybook',
  author: 'John Doe <johndoe@example.com>',
  language: 'en',
  theme: 'themes/mytheme',
  entry: [
    {
      path: 'toc.md',
      rel: 'contents',
    },
    'preface.md',
    'body.md',
    'afterword.md',
  ],
  entryContext: './manuscripts',
});
