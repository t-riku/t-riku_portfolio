import Work1 from "public/assets/portfolio/t-riku__portfolio__fullsize.png";
import Work2 from "public/assets/portfolio/arttada__remake__fullsize.png";
import Work3 from "public/assets/portfolio/arttada__fullsize.png";
import Work4 from "public/assets/portfolio/yamashitaOffice__fullsize.png";
import Work5 from "public/assets/portfolio/oneokrock__fullsize.png";
import Work6 from "public/assets/portfolio/dhu_hp-redesign__fullsize.png";
import Work7 from "public/assets/portfolio/pokemon-app__fullsize.png";
import Work8 from "public/assets/portfolio/imgSearch-app__fullsize.png";
import Work9 from "public/assets/portfolio/memo-app__fullsize.png";
import Work10 from "public/assets/portfolio/loginValidation-app__fullsize.png";
import Work11 from "public/assets/portfolio/catImg-app__fullsize.png";
import Work12 from "public/assets/portfolio/weather-app__fullsize.png";
import Work13 from "public/assets/portfolio/dhu_bar-team__fullsize.png";
import Work14 from "public/assets/portfolio/pokedex-app__fullsize.png";
import Work15 from "public/assets/portfolio/hp_ssg__fullsize.png";
import Work16 from "public/assets/portfolio/blog_todos-app__fullsize.png";
import Work17 from "public/assets/portfolio/sns-app__fullsize.png";

// ========== PORTFOLIO DATA ==========

const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "ポートフォリオサイト",
    github: "https://github.com/t-riku/t-riku_portfolio",
    demo: "https://t-riku-portfolio.vercel.app/",
    category: "Web",
    // webとdesignどっちもにしたい
    // category: "web" && "design",
    // category: "web" || "design",
    time: "2022.11",
    text: `多田設計事務所で「UI・UX」を意識して制作してみてより大事さを痛感したのでこちらのサイトでも「UI・UX」でのユーザー目線に立つということを意識して自分のポートフォリオサイトを NextJS で作ってみました。

    多田設計事務所と同じように「UI・UX」で意識したのは「有用性・使いやすさ・わかりやすさ・見た目の印象」です。
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

    他にもサイトを作る上で工夫し、試みた点やポイントは「UI・UX」を意識したデザイン・内容・構造、github への gitmoji を使ったコミット、vercel へのデプロイ、コードのリファクタリング、TypeScript の型指定、データフォルダを作りデータの管理を容易に、画像サイズの圧縮、フォルダ・ファイルを適切な位置に配置、CSS データの整理、「TypeScript」「Prettier」「ESLint」による構文エラーのチェックとコード整形です。`,
    tool: `Next JS  
    TypeScript
    Module CSS
    React Icons
    Photoshop`,
    // images: [
    //   {
    //     original: "/assets/portfolio__details/portfolio_site/portfolio01.png",
    //     thumbnail: "/assets/portfolio__details/portfolio_site/portfolio01.png",
    //   },
    //   {
    //     original: "/assets/portfolio__details/portfolio_site/portfolio02.png",
    //     thumbnail: "/assets/portfolio__details/portfolio_site/portfolio02.png",
    //   },
    //   {
    //     original: "/assets/portfolio__details/portfolio_site/portfolio03.png",
    //     thumbnail: "/assets/portfolio__details/portfolio_site/portfolio03.png",
    //   },
    //   {
    //     original: "/assets/portfolio__details/portfolio_site/portfolio04.png",
    //     thumbnail: "/assets/portfolio__details/portfolio_site/portfolio04.png",
    //   },
    // {
    //   original: "/assets/portfolio__details/portfolio_site/portfolio05.png",
    //   thumbnail: "/assets/portfolio__details/portfolio_site/portfolio05.png",
    // },
    // ],
  },
  {
    id: 2,
    image: Work2,
    title: "多田設計事務所（リメイク）",
    github: "https://github.com/t-riku/react__tada-home-redesign",
    demo: "https://www.arttada.com/",
    category: "Web",
    time: "2022.6",
    text: `主にReact×Firebaseで両親の建築事務所のHPをリメイクで一から制作しました。
    FirebaseはReactと連携しデータベース接続してデプロイまで行っています。
    
    前のサイトをリメイクすることとなった経緯としては僕が大学の課題で作成したデジタルハリウッド大学のweb専攻のWebページをリデザインしたサイトを両親に見せたところ、大変気に入って「うちのもこんなデザインにしてよ！」と言ってくれたので思い切ってリメイクしたものです。
    
    自身の複数のWeb制作経験、他の方の書籍・記事から「UI・UX」の大事さを知り「UI・UX」を意識し、できるだけお客さん目線に立って制作を行いました。
    
    特に「UI・UX」で意識した観点は「有用性・使いやすさ・わかりやすさ・見た目の印象」です。
    「有用性」としてはこのポートフォリオサイトを見に来てくれたユーザーが満足できる内容にするために「トップページ(Top)」「住宅事例(Works)」「ご挨拶(Message)」「レビューリンク(Review)」「コンタクト(Contact)」「理念(Philosophy)」「設計の流れ(Flow)」「事務所概要(Overview)」セクションを配置し、有用性の高い見たいであろう情報がしっかり入っているサイトにしました。またお客さんが一番見る「住宅事例(Works)」の情報を充実させたいと考え、下のMoreボタンを押すとその家の詳細が見れるモーダルが開くようになっていて、詳細な説明とその家の外観や内観の写真が見れるようにしました。
    
    「使いやすさ」としてはページの表示速度や問い合わせフォームの使い勝手、ユーザーが欲しい情報に早く辿り着けるかの導線などユーザーに余計な手間をかけさせない工夫を意識しました。ページの表示速度はReactを用いることによってWebページを更新する際、仮想DOM を用いることで全体ではなく、変更箇所だけを更新するため高速に動作するようにしています。また画像・動画サイズの圧縮でページの高速化をしました。問い合わせフォームは email js を用いていてバリデーションチェックと、送信が成功した時には「送信に成功しました」、失敗した時には「送信に失敗しました」とアラートを出すようにしています。またわざわざ他のメールアプリケーションから送る手間をなくすために直接ページ内からメールを送れるようにしました。導線はこのWebサイトを見て来てくれる方は「どんな住宅を手がけてきたのか」が一番気になるのではないかと思い、トップページの下に住宅事例を載せているWorksセクションを配置しました。またリメイク前のサイトで「理念(Philosophy)」「設計の流れ(Flow)」「事務所概要(Overview)」セクションをクリックしてとぶ方が少なかったことと、離脱率が他セクションよりも高かったことから、思い切って案内するナビゲーションを下の方に配置し、より見てもらいたい住宅事例を載せたWorksセクションと建築士を紹介しているMessageセクションを上部に配置しました。その効果もあってか、全体の離脱率が下がり前のサイトよりも集客数が向上しました。またレスポンシブにも対応していてどのデバイスでも快適に見ることができるようになっています。
    
    「わかりやすさ」は前出の「使いやすさ」に似ていますが、どちらかというと「操作性」よりも見た目のわかりやすさ、「パッとみてすぐに理解できるか」というところにフォーカスした指標です。例えばボタンをすべて同じレイアウトにすることでボタンとして認識したり、ボタンなどのクリックできる要素にhoverしたときに動きをつけることでクリックできる要素ということがわかりやすくなるようにするなど工夫を施しました。またWorkセクションでお客さんが一目で理解しやすいようにそれぞれのカードごとに画像を余白を確保しながら最大限大きく配置し、その下にその住宅の名前とテーマをつけることでどんな家なのかを簡単に紹介しています。
    
    「見た目の印象」は全体的に今風のカッコ良いモダンな印象を与えたいということで全体的に背景の写真、動画に黒いオーバーレイをかけてスタイリッシュなリッチに見えるような効果を出しました。しかし動きは少なめで見やすいシンプルなサイトにしたいということだったのでそのデザインで制作をしました。全体的なデザインのアイデアはdhu webとONEOKROCK webを元に出していて、他にも事務所概要のアコーディオンメニューや設計の流れの数字を左側に統一して見やすいようになど様々な要素を加えました。動きは見やすさ第一でホバーすると動きが出るぐらいで凝ったアニメーションは使わないようにしました。背景は単色の色を使うのではなく、グラデーションだったり、オーバーレイがかかっている動画や画像を用いることによって「かっこいいな」「凝っているな」「新しいな」と思ってもらえるような工夫をしました。トップページは離脱率が減りそうなインパクトのあるものが良いということで、その時に完成間近だった南房総の家をドローンで有名な方に頼んでドローンで撮影してもらいそれをトップページに動画で載せました。その動画も動画サイズを高画質のまま極限まで圧縮し、できるだけストレスなく高速に見れるようにしています。
    
    元のホームページに無かった要素としてコンタクトセクションを追加し、サイト内から直接メールを送れるようにし、訪問者のストレスをなくす工夫をしました。
    また多田設計事務所は建築関係のWebサイト（HOUZZ・SUVACO・SUMIKA）を登録していてそこからもお客さんの集客が見込めるのでそのサイトにとぶことができるレビューセクションを追加しました。
    音楽をつけたいという要望があったので音楽のトグルボタンを設置し音楽を流しながら見れるようにしました。
    
    改善点としてはPageSpeed Insightsを用いて高得点を出すように改善を繰り返していますが、トップページに動画を用いているのもあり、初期表示が遅くなってしまっていて、ユーザー補助、おすすめの方法、SEOは高得点を出しているのですが、携帯サイズでのパフォーマンスが悪いので今後改善していきたいと思っています。また時間があるときにNextjsへの移行を考えています。最初の描画速度が遅いのをNextjs特有のハイブリッドなレンダリング手法を用いることによってある程度改善できると思ったためです。
    
    公開してからこのWebサイトを見て来てくれて両親のお仕事に繋がったときはやりがいを覚え、「作った甲斐があったな」と嬉しくなりました。前のサイトとの集客率で差が出た一番大きなポイントはなんだろうと考えた時に「UI・UX」が一番大きかったなと思いました。この制作から「UI・UX」の意識だったり、バニラのJSではなかなかできない、Reactならではの仮想DOM、コンポーネントの考え方、高速稼働、様々なパッケージの利用などに惹かれてモダンな技術に興味を持ち学習、制作することになりました。
    
    前のReact移行時と今回の制作でFirebaseのデータベース利用方法、公式ドキュメントの調べ方、ホスティング機能でのデプロイの仕方などFirebaseの理解とReactのフックの基本的な使い方、jsx記法、コンポーネント指向、react-router-domでのルーティング方法、Not Foundページの制作方法、作りたいもの・機能に対してどのパッケージを用いるかの理解と使い方などReactとFirebase両面の理解が進みました。`,
    tool: `React
      Javascript
      SASS
      Firebase
      Illustrator
      Photoshop`,

    // images: [
    //   {
    //     original: "https://picsum.photos/id/1018/1000/600/",
    //     thumbnail: "https://picsum.photos/id/1018/250/150/",
    //   },
    //   {
    //     original: "https://picsum.photos/id/1015/1000/600/",
    //     thumbnail: "https://picsum.photos/id/1015/250/150/",
    //   },
    //   {
    //     original: "https://picsum.photos/id/1019/1000/600/",
    //     thumbnail: "https://picsum.photos/id/1019/250/150/",
    //   },
    // ],
  },
  {
    id: 3,
    image: Work17,
    title: "SNS app",
    github: "https://github.com/t-riku/sns-app",
    demo: "https://sns-app-beta.vercel.app/",
    category: "app",
    time: "2023.1",
    text: `MERN=MongoDB×Express×React(Next JS)×Node.jsのフルスタック技術を使った認証機能付きのTwitter,FacebookライクのSNSアプリケーションです。

    このアプリケーションを制作したいと思った経緯は、私の将来のエンジニア像がフロントもバックエンドもできるエンジニアで、バックエンドのAPIとフロントの繋げ方を理解したかったからです。
    また私の大学のゼミでの卒業制作で「おうち時間をより楽しめるようになるSNS」を開発する前にSNSの基本的な制作方法を学びたく、一から作りました。

    機能としては新規登録、ログイン、投稿、画像での投稿、いいねを実装しています。

    CSSはホームページ、LP、ブログなどSEO対策や高速レンダリングに最適なモダンReact フレームワークNext.jsと〇〇.module.cssが不要でclass名で悩む必要がなく、可読性が上がり、コードの記述量が減り、開発スピードが上がるTailwind CSSを使っています。

    このアプリケーションはUdemyの講座を元に制作したのですが、フルスタックプロジェクトの流れ、Reactの実践的な開発手法、自作WebAPIを構築して叩く方法、LinkによるClient-side-navigation、mongoDBとnodeJSの接続、Node.js×Expressの実践的な使い方、いいね・フォロー・フォロワー機能の作り方、MongoDBを使ったデータ管理手法、MongoDBにおけるデータスキーマ作成方法、postmanの役割、mongooseの使い方、Reduxの考え方、useReducer, useContext等の応用的なHooksの使い方、バックエンドでの自作WebAPIの作り方、multerライブラリを使ってローカルに画像を保存する手法、投稿を更新できる機能もついているpostmanを使ったAPIテスト手法、フォームバリデーション、ほぼ全てのアプリで必須のログインと新規登録の機能など様々な事を学ぶことができました。
    
    まだまだ制作中でブックマークやメッセージ、カラーモードの変更、検索、コメントなどの機能を追加していく予定です。`,
    tool: `React（Next JS）
    MongoDB
    Express
    Node.js
    Tailwind CSS
    React Icons
    Postman
    mongoose
    multer
    `,
  },
  {
    id: 4,
    image: Work14,
    title: "Pokedex app",
    github: "https://github.com/t-riku/pokedex-app",
    demo: "https://pokedex-app-azure.vercel.app/",
    category: "App",
    time: "2022.12",
    text: `このアプリケーションを制作する前に、「Pokemon app」を作りました。このアプリケーションはポケモンSVが発売されて初めてポケモンを本気でやろうと思い、種族値をインターネットで調べ、その時に見てたサイトのデザインがあまり好ましくないなと感じ、自分だったらこういう風なのが良いなと思ったのがきっかけで制作したものでした。
    しかし制作した後で何か自分の中で納得がいかず、もう一回作り直そうと検討しました。

    デザインはYoutubeにあったものを参考にし、公式のポケモン図鑑のような見た目にしました。また機能を複数追加してよりポケモン図鑑に近づけ、そしてNext JSで作り直そうと思いこのアプリケーション制作に至りました。

    なぜNext JSを使おうと思ったのかはいくつか理由があります。
    「Next JSをもっと理解したい」「Next JS特有のImageコンポーネントを用いて画像の最適化をしたい」「ハイブリッドなレンダリングで表示を高速化したい」「デプロイが簡単」という理由からReactではなく今回はNext JSを採用しました。

    デザインはまるで本物のポケモン図鑑を触っているのかのようなデザインにしたくて、本家のポケモン図鑑に寄せてみました。
    無限スクロールにすることでボタンを押さずとも次々とポケモンの情報を見れることができるようにしました。
    ポケモンを押すとさらに努力値や特性などの詳細な情報が見れるようになっています。

    まだ制作途中ですが、ソート機能、検索機能、お気に入り機能、並び替え機能をつけようと思っています。`,
    tool: `Next JS
    Typescript
    Module CSS
    Sass
    Poke API`,
    // images: [
    //   {
    //     original: "",
    //     thumbnail: "",
    //   },
    //   {
    //     original: "",
    //     thumbnail: "",
    //   },
    //   {
    //     original: "",
    //     thumbnail: "",
    //   },
    // ],
  },
  {
    id: 5,
    image: Work16,
    title: "Login + Blog + Todo app",
    github: "https://github.com/t-riku/next-blog-todos",
    demo: "https://next-blog-todos-six.vercel.app/",
    category: "app",
    time: "2023.1",
    text: `認証機能付き ブログ+Todos アプリケーションです。

    このアプリケーションはUdemyの講座から制作しました。

    なぜこのアプリケーションを制作したいと思った経緯は、私の将来のエンジニア像がフロントもバックエンドもできるエンジニアで、バックエンドのAPIとフロントの繋げ方を理解したかったからです。
    バックエンドとフロントの繋げ方の他にもNextjs固有の機能であるSSGやISRの適切な使い方やDynamic routingの使い方などとても理解が進みました。

    オリジナルREST APIと連携してIncremental Static Regeneration(ISR), Static Site Generation(SSG), SSG+ISR+Client Side Fetching(useSWR)を使ってSEO対策や高速レンダリングを実現し、リアルタイムデータ取得が可能です。
    ホームページ、LP、ブログなどSEO対策や高速レンダリングに最適なモダンReact フレームワークNext.jsと〇〇.module.cssが不要でclass名で悩む必要がなく、可読性が上がり、コードの記述量が減るTailwind CSSを使っています。

    このアプリケーション制作を通して、LinkによるClient-side-navigation、Layoutコンポーネントの活用、postmanを使ったAPIテスト手法、useRouter、Static Site Generation(SSG)、Incremental Static Regeneration(ISR)、Stale While Revalidation、useSWR、ログインと新規登録機能の実装方法、fallbackの理解、revalidateの理解、Dynamic routing、getStaticProps、getStaticPaths、useContext、JWT認証機能、universal-cookie、Django REST FrameworkによるREST API実装、REST APIのDeploy、REST APIとNextjsの連携 (node-fetch + client side fetch(useSWR)、SSG + ISR + CSR(useSWR)を組み合わせた、SEO対策+リアルタイムデータ取得手法など様々な事を学ぶことができました。`,
    tool: `Next JS
    Tailwind CSS
    Django
    REST API
    Anaconda Navigator
    PyCharm
    Node.js
    Postman
    Mod header(Google Chrome拡張機能)
    `,
  },

  {
    id: 6,
    image: Work4,
    title: "山下法務事務所",
    github: "https://github.com/YamashitaOffice/homepage",
    demo: "https://yamashita-js-office.com/",
    category: "Web",
    time: "2021.4",
    text: `制作する事になった経緯としては祖父母が司法書士、行政書士であり事務所をやっていてそのHPを作らせてもらいました。
    僕が大学2年生になる前の春休みに九州にいる祖父母の家に行って制作したHPです。

    つまづいた時に最初はうまい検索の仕方がわかりませんでしたが、徐々に検索力が身につきました。
    今思うとずっと手探り状態でやっていたなと思いましたがとても良い経験になりました。

    基本的にデザインは法務事務所らしく信頼感のあるきっちりとした感じを出せるように作り、シンプルで情報量が多くならないように作りました。またきっちりすぎると「この事務所の方はお堅い人なのかな」「相談しづらいな」という印象を与えてしまいかねないので淡い色を多用することでポップな感じを出せました。

    このサイトを公開した後、「お客さんがこのホームページを見て来てくれて仕事に繋がったよ！」と聞いたときはとても嬉しくて、僕がエンジニアになりたいと思うきっかけになったサイトであるのと、初めて公に出したサイトなのでとても印象に残っています。`,
    tool: `HTML
      CSS
      JavaScript
      Bootstrap
      Firebase
      Photoshop`,
  },
  {
    id: 7,
    image: Work7,
    title: "Pokemon app",
    github: "https://github.com/t-riku/pokemon-app",
    demo: "https://pokemon-app-bay.vercel.app/",
    category: "App",
    time: "2022.12",
    text: `このアプリケーションを制作した経緯としてはこの頃ポケモンSVが発売されて初めてポケモンを本気でやろうと思い、種族値をインターネットで調べました。その時にデザイン的にあまり好ましくないなと思い自分でも作ってみようと思い作りました。

    機能としては下の次へボタンを押すと次の20匹のポケモンをPoke Api経由で取得しカードで表示するというアプリです。前へボタンを押すと前の20匹のポケモンを再度取得してきます。
    カードの背景色はAPIからとってきたポケモンのタイプをとって（複数タイプの場合は最初に取ってきたタイプ）それに一致するbackgroundColorを当てるようにしています。
    そして1匹のポケモンのカードをクリックするとモーダルで種族値、タイプ、合計種族値などが見れるようなっています。
    APIから情報を取得している間はloadingでポケモンのアイコンが回るようにして、待ち時間の体感を減らす工夫をしました。

    modalでタイプのカラーを設定していないのと、エスケイプキーでしかモーダルが閉じれ無くなっている状態なので時間がある時に直します。

    このアプリケーションを作った事によって、ReactのHooksの理解が進んでAPIの取得と絡めて使えるようになりました。`,
    tool: `React
    CSS
    Poke API`,
  },
  {
    id: 8,
    image: Work5,
    title: "ONE OK ROCK Website",
    github: "https://github.com/t-riku/oneokrock_web/tree/master",
    demo: "https://t-riku.github.io/oneokrock_web/",
    category: "Web",
    time: "2022.5",
    text: `制作する事になった経緯としては僕はロックバントのONEOKROCKが大好きなのですが、当時ONEOKROCKのWebサイトを見たところ（2022年5月）正直全然かっこよくないなって思いまして、自分だったらこう作るなというWebサイトを作ってみました(現在の公式サイトはリニューアルされてます)。

    まず僕のONEOKROCKの好きなところはLIVEのカッコ良さです。
    その良さを知ってもらうために最初のトップページはLIVE映像のMIXを表示し目を引くようにしました。
    また元のサイトはトップページのインパクトがなくロックバンドのオラオラ感をいい意味で出したかったので思い切ってトップページは全画面で動画を用いてインパクトのあるものにしようという考えからこのデザインになりました。
    このトップページのインパクトのあるレイアウトが多田設計事務所（リメイク）とDHU Web（リデザイン）に活きました。
    そして、僕のONEOKROCKのイメージは赤と黒なのでそのカラーを基調に統一感のあるように制作しました。
    全体的にスタイリッシュなデザインにして、リッチに見せるためにグラデーションを頻繁に使いました。
    どんな風にすればカッコよく思えてもらえるかを考えながら作ったので、ユーザー目線で見るという考えが身につきました。
    ニュースとアルバムのセクションではモーダルを導入することで、多くの情報を1ページで見せ、詳細が知りたい方はボタンで詳細にとべるようにしました。
    また初めてモーダルを導入したり初めて使う便利なCSSの技術も多くてかなり勉強になりました。

    改めてコードをかなり読みづらくごちゃごちゃしていたので今後時間がある時に、新たに習得した技術や知識を使ってリファクタリングやReact、Next JSへの移行もしたいなと考えています。`,
    tool: `HTML
    SASS
    JavaScript
    Bootstrap,  
    Micromodal js`,
  },
  {
    id: 9,
    image: Work15,
    title: "ブログサイト",
    github: "https://github.com/t-riku/next-hp-ssg",
    demo: "https://next-hp-ssg.vercel.app/",
    category: "Web",
    time: "2023.1",
    text: `ホームページ、LP、ブログなどSEO対策や高速レンダリングに最適なモダンReact フレームワークNext.jsと〇〇.module.cssが不要でclass名で悩む必要がなく、可読性が上がり、コードの記述量が減るTailwind CSSを使っています。
    ブログページでは外部APIのブログ記事をビルド時に事前にデータベースにアクセスして、そのデータを使って静的なHTMLを事前に作っておくpre-renderingをすることによって、APIの取得をしていても高速にレンダリングされています。
    またブログページを押すと詳細な個別のブログページにとべるのですが、ダイナミックルートの機能を使って少ない記述量で機能しています。
    コンタクトページでは静的なページをSSGで生成しています。
    このブログサイトはUdemyの講座から制作したのですが、Udemyを見た後で一回制作し、自分で見ないで制作できるまで理解しました。
    このホームページ制作を通して、Next JSの基本的な機能、スタティックサイトジェネレーション、Dynamic routing、Layoutコンポーネントの活用、Static Site Generation(SSG)、getStaticProps、getStaticPathsを学ぶことができました。    `,
    tool: `Next JS
    Tailwind CSS`,
  },
  {
    id: 10,
    image: Work6,
    title: "DHU Web（リデザイン）",
    github: "https://github.com/t-riku/dhu_redesign/tree/master",
    demo: "https://t-riku.github.io/dhu_redesign/",
    category: "Web",
    time: "2022.6",
    text: `このWebサイトは大学の授業内の課題で僕が通っているデジタルハリウッド大学の公式サイトのweb専攻のページをリデザインしシングルページで作るという課題でした。

    ターゲットは「新しく学校に入学しようかなと考えている受験生」を意識して作りました。
    またデジタルハリウッド大学はクリエイティブを謳っている大学なのでトップページのテキストは「クリエイティブな自分へ」と新しく入ってくるクリエイティブな事を学びたい学生が惹き付けられるようなテキストにしました。
    元の公式サイトは白と黒を基調としていたデザインなのですが、若い人に楽しんでもらえるようにスクロールしていて楽しいワクワクする気持ちになるように色を足してカラフルにし、かつカッコよくスタイリッシュで読みやすいようなデザインにしました。
    離脱率を下げ、「なんだこれ！」惹きつけるためにトップページで動画を使用しました。

    この課題を授業内で発表したときは先生が「デザインのセンスあるね！」と言ってくれたり、同級生や先輩からも褒めてもらえて嬉しかったです。
    このホームページを両親に見せた時にすごく反応が良くて、今の多田設計事務所のリメイクのデザインの元になっています。`,
    tool: `HTML
    SASS
    JavaScript
    Bootstrap`,
  },
  {
    id: 11,
    image: Work3,
    title: "多田設計事務所",
    github: "https://github.com/t-riku/tada-home/tree/master",
    demo: "https://react-tada-home.vercel.app/",
    category: "Web",
    time: "2022.3",
    text: `制作する事になった経緯としては僕の両親が建築士で事務所を持っていて、僕の兄もエンジニアでcmsでホームページを作ったのですが、細かいところがどうしても修正が効かなかったり、更新が少し大変で困っていました。
    そこでReactを丁度勉強していた僕は兄からReactに移行してみたらと言われ、確かにと思い勉強がてら移行に挑戦してみました。

    デザインはほぼそのままで忠実に再現しました。Firebaseでサーバーは管理して新しく家を建てた時に住宅の欄に追加をするために更新も行えるようにしました。

    初めてのReactチュートリアル以降での制作物だったのでjsx記法、ルーター、コンポーネント、どのモジュールを使えばいいのか、Firebaseの扱い方など戸惑いましたがトライアンドエラーを繰り返しアウトプットしたことでReactの基礎が身につき、時間はかかりましたが最終的にきっちり移行することができました。`,
    tool: `React
      Javascript
      SASS
      Firebase
      Illustrator
      Photoshop`,
  },
  {
    id: 12,
    image: Work8,
    title: "Img Search app",
    github: "https://github.com/t-riku/react__searchImg-app/tree/master",
    demo: "https://react-search-img-app.vercel.app/",
    category: "App",
    time: "2022.6",
    text: `Pixabay APIを使い簡単な画像を探せるアプリケーションを作成しました。

    inputボックスに検索したいテキストを打ち込みEnterを押すとPixabay APIからデータをとってきてそれをuseStateで管理し、テキストに即した画像データを表示させています。

    これを作ったことでReact Hooksの使い方(useState, useRef)、Fetch関数、formとHooksの結びつけ方、コンポーネントへのpropsの渡し方を学びました。`,
    tool: `React
    Tailwind CSS
    Pixabay API`,
  },
  {
    id: 13,
    image: Work9,
    title: "Memo app",
    github: "https://github.com/t-riku/react__memo-app/tree/master",
    demo: "https://react-memo-app-two.vercel.app/",
    category: "App",
    time: "2022.10",
    text: `簡単なメモアプリケーションを作成しました。

    テキストを打ち込んで追加ボタンを押すと、下のメモ一覧に表示され、削除ボタンを押すとその項目が削除されます。

    Hook化、FC、useCallback関数、Typescriptの基本の型付け、voidの使い方、スプレット構文を学びました。`,
    tool: `React
    TypeScript
    Tailwind CSS`,
  },
  {
    id: 14,
    image: Work10,
    title: "Login Form Validation app",
    github: "https://github.com/t-riku/react__login-app/tree/master",
    demo: "https://react-login-app-nine.vercel.app/",
    category: "App",
    time: "2022.11",
    text: `フォームを送信する際にバリデーションチェックをかけて正しく入力されていたらログインが通るフォームを作成しました。

    バリデーションチェックの仕方、if文の条件分岐、三項演算子を学びました。`,
    tool: `React
    CSS`,
  },
  {
    id: 15,
    image: Work11,
    title: "Cat Image app",
    github: "https://github.com/t-riku/next-catImg-app",
    demo: "https://next-cat-img-app.vercel.app/",
    category: "App",
    time: "2022.11",
    text: `Next JSで猫の画像を表示するアプリケーションを作成しました。

    ボタンを押すとAPI経由で猫の画像を取ってくる簡単な機能に加えて、loading時にサーバーサイドレンダリングによってHOMEコンポーネントのマウント時に猫の画像を取ってきて表示できることによって、ユーザー体験が良いものになっています。

    このアプリケーションを作ったことによって、サーバーサイドレンダリング（SSR）、NextでのFeach関数の書き方、Module CSSの使い方を学びました。`,
    tool: `Next
      Typescript
      Module CSS
      semantic-ui
      The Cat API`,
  },
  {
    id: 16,
    image: Work12,
    title: "Weather app",
    github: "https://github.com/t-riku/react__weather-app",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.6",
    text: `OpenWeather APIを使って都市の天気の情報をとってきて表示するアプリケーションを作成しました。

    WeatherコンポーネントからAPI経由でOpenWeatherサービスから天気情報を取得して、6つの都市の天気情報をブラウザ上に表示させています。

    ReactとTailwind CSSフレームワークを使い天気のアプリケーション作成を通してTailwind CSSの設定方法・使い方、React Hooksの使い方(useState, useEffect)、Fetch関数、コンポーネントへのpropsの渡し方などのReactの基本的な使い方を学ぶことができました。`,
    tool: `React
    Tailwind CSS
    OpenWeather API
    day js`,
  },
  {
    id: 17,
    image: Work13,
    title: "月夜のケダモノ",
    github: "https://github.com/t-riku/dhu_web_02",
    demo: "https://t-riku.github.io/dhu_web_02/",
    category: "Web",
    time: "2021.12",
    text: `この音楽バーのホームページは大学のチーム課題で作りました。

    チームは 4 人でリーダー、コーダー、デザイン 2 人で私がコーダーの役割を引き受けました。
    チームとオンラインならではの困ったことがあり、オンライン授業でリーダーと僕しか喋らず最初はあまり会話が弾みませんでした。そこでデザインの 2 人に「どんなデザインが好きなの？」など積極的に質問したことでだんだんと話してくれるようになりました。授業以外の時でも定期的に ZOOM 会議をすることを促し、レイアウトの相談、進捗の確認や雑談をしたことでチーム全員がお互いにアドバイスや指摘を気軽にし合えるチームになれました。
    コミュニケーションは Slack、LINE でとり、タスク管理は Backlog で管理しました。

    サイトのコンセプトとしては音楽バーなので黒を基調としてオシャレな感じでデザインのイメージを決めました。
    リーダーが終始出た意見などをまとめてくれ、デザインの方がフレームワーク、デザインを Adobe XD で作ってくれました。
    僕は作ってくれたデザインを見てそのままコーディングするだけだったので普段 1 人でやっている時よりも順調にスピーディーに進み助かりました。
    
    初めてチームでプロジェクトを行ったのですが、チームで何かをするのは楽しく、やっている工程は少ないけども達成感が一人で開発するよりもあるなと感じました。`,
    tool: `HTML
    SASS
    Bootstrap
    JavaScript`,
  },
];

export default projectsData;
