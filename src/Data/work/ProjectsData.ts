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
    text: `「UI・UX」でのユーザー目線に立つことを意識して自分のポートフォリオサイトをNextJSで作ってみました。
    「UI・UX」で意識したのは「有用性・使いやすさ・わかりやすさ・見た目の印象」です。 
    「有用性」としてはこのポートフォリオサイトを見に来てくれたユーザーが満足できる内容にするために[About,Work,Experience,Process,Contact]セクションを配置し、有用性の高い見たかった情報がしっかり入っているサイトにしました。
    「使いやすさ」としてはページの表示速度や問い合わせフォームの使い勝手、ユーザーが欲しい情報に早く辿り着けるかの導線などユーザーに余計な手間をかけさせない工夫を意識しました。
    ページの表示速度はNext JS特有の開発サーバの部分的な高速リロード、画像の最適化をしてくれるImgタグ、サーバーサイドレンダリング(SSR)/静的サイト生成(SSG)を用いてユーザ体験が良くなるようにしました。
    問い合わせフォームはemail jsを用いていてバリデーションチェックと、送信がちゃんとできた時には「送信に成功しました」、失敗した時には「送信に失敗しました」とアラートを出すようにしています。またわざわざ他のメールアプリケーションから送る手間をなくすために直接ページ内からメールを送れるようにしています。
    導線としてはこのポートフォリオサイトを見て来てくれる方は「僕がどんな人か」「どんな作品を作ってきたか」などが一番気になるんじゃないかと思い、トップページの下にAboutセクション、その下にポートフォリオを掲載しているWorkセクションを配置しました。またAboutセクションよりもポートフォリオを一番見たいという方もいらっしゃると思い、トップページにWorkセクションに遷移できるボタンを配置しました。
    「わかりやすさ」は前出の「使いやすさ」に似ていますが、どちらかというと「操作性」よりも見た目のわかりやすさ、「パッとみてすぐに理解できるか」というところにフォーカスした指標です。また僕自身が最近ハンバーガーメニューよりもツイッターのような下にセクションを移動できるナビゲーションの方が使い勝手が良いなと思っていることもあり、下にグローバルナビゲーションを配置しました。セクションの内容に見合うアイコンを用いてパッと見てわかりやすくしました。またセクション毎に同じレイアウトを使うのではなく、違ったレイアウトにすることによってセクション毎の差異が生まれ「セクション変わったな」「飽きないな」と思ってもらえるような効果を出しました。
    「見た目の印象」は今風のカッコ良いモダンな印象を与えたい、しかし動きは少なめで見やすいサイトにしたいという観点で制作しました。動きはホバーすると動きが出るぐらいで凝ったアニメーションは使わないようにしました。背景は単色の色を使うのではなく、少しデザインがある画像を用いることによって「かっこいいな」「凝っているな」と思ってもらえるように工夫しました。
    他の要素としてはトップページにダークモードとライトモードを切り替えることができるボタンを配置し、お好きなテーマで快適に見られることができるようにしました。
    Workセクションでは[all,web,app,design]ボタンを配置しクリックすると切り替えれるようにし、Moreボタンをクリックするとモーダルが開き制作物の詳細を見ることができるようにしました。
    またレスポンシブにも対応していてどのデバイスでも快適に見ることができるようになっています。
    このサイトを作る上で工夫し、試みた点は「UI・UX」を意識したデザイン/内容、githubへのgitmojiを使ったコミット、vercelへのデプロイ、コードのリファクタリング、TypeScriptの型指定、データフォルダを作りデータの管理を容易に、画像サイズの圧縮、フォルダを適切な位置に配置、「TypeScript」「Prettier」「ESLint」による構文エラーのチェックとコード整形です。`,
    // tool: ["Next JS", " TypeScript ", " Module CSS "],
    tool: `Next JS  
    TypeScript
    Module CSS`,
    images: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
  },
  {
    id: 2,
    image: Work2,
    title: "多田設計事務所（リメイク）",
    github: "https://github.com/t-riku/react__tada-home-redesign",
    demo: "https://www.arttada.com/",
    category: "Web",
    time: "2022.6",
    text: `前のサイトをリメイクすることとなった経緯としては僕が大学の課題で作成したデジタルハリウッド大学のweb専攻のWebページをリデザインしたサイトを両親に見せたところ、大変気に入って「うちのもこんなデザインにしてよ！」と言ってくれたので思い切ってリメイクしたものです。
    機能としては元のホームページに無かったコンタクトセクションを追加し、サイト内から直接メールを送れるようにしました。
    後は音楽をつけたり、建築関係のWebサイトにとべるセクションを追加しました。
    トップページは離脱率が減りそうなインパクトのあるものが良いということで、その時に完成間近だった南房総の家をドローンで撮影してもらいそれをトップページに載せました。
    またすぐに今まで作ってきたものを見てもらいたいしお客さんもそうだろうということで、トップページの下に作品集を配置しました。
    それ以外のところは写真、動画に黒いオーバーレイをかけてスタイリッシュなリッチに見えるような効果を出しました。
    デザインは前に作ったdhu webとONEOKROCK webを元に作り、様々な要素を加えました。
    公開してからこのWebサイトを見て来てくれて両親のお仕事に繋がったときはやりがいを覚えました。
    今後も細かいところを修正して管理していく予定です。`,
    tool: `React
      Javascript
      SASS
      Firebase
      Illustrator
      Photoshop`,

    images: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
  },
  {
    id: 3,
    image: Work3,
    title: "多田設計事務所",
    github: "https://github.com/t-riku/tada-home/tree/master",
    demo: "https://www.arttada.com/",
    category: "Web",
    time: "2022.3",
    text: `僕の両親が建築士で事務所を持っています。
    僕の兄もエンジニアでcmsでホームページを作ったのですが、細かいところがどうしても修正が効かなかったり、更新が大変で困っていました。
    そこでReactを丁度勉強していた僕は兄からReactに移行してみたらと言われ、確かにと思い勉強がてらに移行してみました。
    firebaseでサーバーは管理して更新も行えるようにしました。
    初めてのReactチュートリアル以降での制作物だったのでjsx記法、ルーター、コンポーネント、どのモジュールを使えばいいのか、Firebaseの扱い方など戸惑いましたがトライアンドエラーを繰り返しアウトプットしたことでReactの基礎が身につきました。`,
    tool: `React
      Javascript
      SASS
      Firebase
      Illustrator
      Photoshop`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 4,
    image: Work4,
    title: "山下法務事務所",
    github: "https://github.com/YamashitaOffice/homepage",
    demo: "https://yamashita-js-office.com/",
    category: "Web",
    time: "2021.4",
    text: `祖父母が司法書士、行政書士であり事務所をやっていてそのHPを作らせてもらいました。
    僕が大学2年生になる前の春休みに九州にいる祖父母の家に行って制作したHPです。
    つまづいた時に最初はうまい検索の仕方がわかりませんでしたが、徐々に検索力が身につきました。
    今思うとずっと手探り状態でやっていたなと思いましたがとても良い経験になりました。
    大学でWebの基礎を学んだ後初めて公の場に出しました。
    基本的にデザインは法務事務所らしくきっちりとした感じを出せるように作り、シンプルで情報量が多くならないように作りました。`,
    tool: `HTML
      CSS
      JavaScript
      Bootstrap
      Firebase
      Photoshop`,

    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 5,
    image: Work5,
    title: "ONE OK ROCK Website",
    github: "https://github.com/t-riku/oneokrock_web/tree/master",
    demo: "https://www.arttada.com/",
    category: "Web",
    time: "2022.5",
    text: `僕はロックバントのONEOKROCKが大好きなのですが、当時ONEOKROCKのWebサイトを見たところ（2022年5月）正直全然かっこよくないなって思いまして、自分だったらこう作るなというWebサイトを作ってみました(現在の公式サイトはリニューアルされてます)。
    まず僕のONEOKROCKの好きなところはLIVEのカッコ良さです。
    その良さを知ってもらうために最初のトップページはLIVE映像のMIXを表示し目を引くようにしました。
    そして、僕のONEOKROCKのイメージは赤と黒なのでそのカラーを基調に制作しました。
    全体的にスタイリッシュなデザインにして、リッチに見せるためにグラデーションを頻繁に使いました。
    どんな風にすればカッコよく思えてもらえるかを考えながら作ったので、ユーザー目線で見るという考えが身につきました。
    また初めてモーダルを導入したり初めて使うCSSの技術も多くてかなり勉強になりました。
    改めてコードをかなり読みづらくごちゃごちゃしていたので今後時間がある時に、リファクタリングやReactへの移行もしたいなと考えています。`,
    tool: `HTML
    SASS
    JavaScript
    Bootstrap,  
    Micromodal js`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 6,
    image: Work6,
    title: "DHU Web（リメイク）",
    github: "https://github.com/t-riku/dhu_redesign/tree/master",
    demo: "https://www.arttada.com/",
    category: "Web",
    time: "2022.6",
    text: `ターゲットは「新しく学校に入学しようかなと考えている受験生」を意識して作りました。
    これは大学の授業内の課題で僕が通っているデジタルハリウッド大学の公式サイトのweb専攻のページをリデザインしシングルページで作るという課題でした。
    元の公式サイトは白と黒を基調としていたデザインなのですが、スクロールしていて楽しいワクワクする気持ちになるように色を足してカラフルにし、かつカッコよくスタイリッシュで読みやすいようなデザインにしました。
    離脱率を下げ、惹きつけるためにトップページで動画を使用しました。
    またデジタルハリウッド大学はクリエイティブを謳っている大学なのでトップページのテキストは「クリエイティブな自分へ」と新しく入ってくるクリエイティブな事を学びたい学生が惹き付けられるようなテキストにしました。
    この課題に取り組む前にONEOKROCKのWebサイトも作っていて、目指すデザインが同じだったことからいくつか同じのを引っ張ってきてアレンジを加えました。
    このホームページを両親に見せた時にすごく反応が良くて、今の多田設計事務所のリメイクのデザインの元になっています。`,
    tool: `HTML
    SASS
    JavaScript
    Bootstrap`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 7,
    image: Work7,
    title: "Pokemon app",
    github: "https://github.com/t-riku/pokemon-app",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.12",
    text: ``,
    tool: `React
    CSS`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 8,
    image: Work8,
    title: "Img Search app",
    github: "https://github.com/t-riku/react__searchImg-app/tree/master",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.6",
    text: `Pixabay APIを使い簡単な画像を探せるアプリケーションを作成しました。
    inputボックスに検索したいテキストを打ち込みEnterを押すとPixabay APIからデータをとってきてそれをuseStateで管理し、テキストに即した画像データを表示させています。
    これを作ったことでReact Hooksの使い方(useState, useRef)、Fetch関数、formとHooksの結びつけ方、コンポーネントへのpropsの渡し方を学びました。`,
    tool: `React
    Tailwind CSS
    Pixabay API`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 9,
    image: Work9,
    title: "Memo app",
    github: "https://github.com/t-riku/react__memo-app/tree/master",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.10",
    text: `簡単なメモアプリケーションを作成しました。
    テキストを打ち込んで追加ボタンを押すと、下のメモ一覧に表示され、削除ボタンを押すとその項目が削除されます。
    Hook化、FC、useCallback関数、Typescriptの基本の型付け、voidの使い方、スプレット構文を学びました。`,
    tool: `React
    TypeScript
    Tailwind CSS`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 10,
    image: Work10,
    title: "Login Form Validation app",
    github: "https://github.com/t-riku/react__login-app/tree/master",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.11",
    text: `フォームを送信する際にバリデーションチェックをかけて正しく入力されていたらログインが通るフォームを作成しました。
    バリデーションチェックの仕方、if文の条件分岐、三項演算子を学びました。`,
    tool: `React
    CSS`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 11,
    image: Work11,
    title: "Cat Image app",
    github: "https://github.com/t-riku/next-catImg-app",
    demo: "https://www.arttada.com/",
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
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 12,
    image: Work12,
    title: "Weather app",
    github: "https://github.com/t-riku/react__weather-app",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.6",
    text: "OpenWeather APIを使って都市の天気の情報をとってきて表示するアプリケーションを作成しました。WeatherコンポーネントからAPI経由でOpenWeatherサービスから天気情報を取得して、6つの都市の天気情報をブラウザ上に表示させています。ReactとTailwind CSSフレームワークを使い天気のアプリケーション作成を通してTailwind CSSの設定方法・使い方、React Hooksの使い方(useState, useEffect)、Fetch関数、コンポーネントへのpropsの渡し方などのReactの基本的な使い方を学ぶことができました。",
    tool: `React
    Tailwind CSS
    OpenWeather API
    day js`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 13,
    image: Work13,
    title: "月夜のケダモノ",
    github: "https://github.com/t-riku/dhu_web_02",
    demo: "https://www.arttada.com/",
    category: "Web",
    time: "2021.12",
    text: `この音楽バーのホームページは大学のチーム課題で作りました。
    グループは4人いてリーダー、デザイン、コーダーの役割がありました。
    僕達のグループは人数が1人少なくてデザイン担当が2人だったので僕がコーダーの担当をやらせて貰えました。
    オンライン授業だったのでコミュニケーションはSlack、LINEでとり、タスク管理はBacklogで管理しました。
    初めて3人以上のチームでプロジェクトを行ったのですが、チームの力は凄いなと思いました。
    リーダーが終始まとめてくれたり、デザインの方がフレームワーク、デザインをAdobe XDで作ってくれました。
    僕は作ってくれたデザインを見てそのままコーディングするだけだったので普段1人でやっている時よりも予定通りに進み助かりました。
    サイトのコンセプトとしては音楽バーなので黒を基調としてオシャレな感じでデザインのイメージを決めました。`,
    tool: `HTML
    SASS
    Bootstrap
    JavaScript`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
  {
    id: 14,
    image: Work7,
    title: "Pokedex",
    github: "https://github.com/t-riku/pokedex-app",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.12",
    text: `test`,
    tool: `Next JS
    Typescript
    Module CSS
    Sass
    Poke API`,
    images: [
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
      {
        original: "",
        thumbnail: "",
      },
    ],
  },
];

export default projectsData;
