import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>t-riku Portfolio site</title>
        <meta
          name="description"
          content="「UI・UX」でのユーザー目線に立つということを意識して自分のポートフォリオサイトを NextJS で作ってみました。
      「UI・UX」で意識したのは「有用性・使いやすさ・わかりやすさ・見た目の印象」です。
      試みた点やポイントは「UI・UX」を意識したデザイン・内容・構造、github への gitmoji を使ったコミット、vercel へのデプロイ、コードのリファクタリング、TypeScript の型指定、データフォルダを作りデータの管理を容易に、画像サイズの圧縮、フォルダ・ファイルを適切な位置に配置、CSS データの整理、「TypeScript」「Prettier」「ESLint」による構文エラーのチェックとコード整形です。"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
