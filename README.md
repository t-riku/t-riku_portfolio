## この制作物について

「UI・UX」でのユーザー目線に立つということを意識して自分のポートフォリオサイトを NextJS で作ってみました。

「UI・UX」で意識したのは「有用性・使いやすさ・わかりやすさ・見た目の印象」です。

「有用性」としてはこのポートフォリオサイトを見に来てくれたユーザーが満足できる内容にするために[About,Work,Experience,Process,Contact]セクションを配置し、有用性の高い見たかった情報がしっかり入っているサイトにしました。

「使いやすさ」としてはページの表示速度や問い合わせフォームの使い勝手、ユーザーが欲しい情報に早く辿り着けるかの導線などユーザーに余計な手間をかけさせない工夫を意識しました。

ページの表示速度は Next JS 特有の開発サーバの部分的な高速リロード、画像の最適化をしてくれる Img タグ、サーバーサイドレンダリング(SSR)/静的サイト生成(SSG)を用いてユーザ体験が良くなるようにしました。

問い合わせフォームは email js を用いていてバリデーションチェックと、送信が成功した時には「送信に成功しました」、失敗した時には「送信に失敗しました」とアラートを出すようにしています。またわざわざ他のメールアプリケーションから送る手間をなくすために直接ページ内からメールを送れるようにしました。

導線はこのポートフォリオサイトを見て来てくれる方は「僕がどんな人か」「どんな作品を作ってきたか」などが一番気になるのではないかと思い、トップページの下に About セクション、その下にポートフォリオを掲載している Work セクションを配置しました。また About セクションよりもポートフォリオを一番見たいという方もいらっしゃると思い、トップページに Work セクションに遷移できるボタンを配置しました。

「わかりやすさ」は前出の「使いやすさ」に似ていますが、どちらかというと「操作性」よりも見た目のわかりやすさ、「パッとみてすぐに理解できるか」というところにフォーカスした指標です。僕自身が最近ハンバーガーメニューよりもツイッターのような下にセクションを移動できるナビゲーションの方が使い勝手が良いなと思っていることもあり、下にグローバルナビゲーションを配置しました。セクションの内容に見合うアイコンを用いてパッと見てわかりやすくしました。またセクション毎に同じレイアウトを使うのではなく、違ったレイアウトにすることによってセクション毎の差異が生まれ「セクション変わったな」「飽きないな」と思ってもらえるような工夫を施しました。

「見た目の印象」は今風のカッコ良いモダンな印象を与えたい、しかし動きは少なめで見やすいサイトにしたいという観点で制作しました。動きはホバーすると動きが出るぐらいで凝ったアニメーションは使わないようにしました。背景は単色の色を使うのではなく、少しデザインがある画像を用いることによって「かっこいいな」「凝っているな」と思ってもらえるような工夫をしました。

他の要素としてはトップページにダークモードとライトモードを切り替えることができるボタンを配置し、お好きなテーマで快適に見られることができるようにしました。

Work セクションでは[all,web,app,design]ボタンを配置しクリックすると切り替えれるようにし、More ボタンをクリックするとモーダルが開き制作物の詳細を見ることができるようにしました。

またレスポンシブにも対応していてどのデバイスでも快適に見ることができるようになっています。

このサイトを作る上で工夫し、試みた点は「UI・UX」を意識したデザイン/内容、github への gitmoji を使ったコミット、vercel へのデプロイ、コードのリファクタリング、TypeScript の型指定、データフォルダを作りデータの管理を容易に、画像サイズの圧縮、フォルダ・ファイルを適切な位置に配置、CSS データの整理、「TypeScript」「Prettier」「ESLint」による構文エラーのチェックとコード整形です。

## 使用した言語・ツールなど

Next JS

TypeScript

Module CSS

<br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
