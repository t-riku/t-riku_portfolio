import Work1 from "public/assets/portfolio/t-riku__portfolio__fullsize.png";
import Work2 from "public/assets/portfolio/arttada__remake__fullsize.png";
import Work3 from "public/assets/portfolio/arttada__fullsize.png";
import Work4 from "public/assets/portfolio/yamashitaOffice__fullsize.png";
import Work5 from "public/assets/portfolio/oneokrock__fullsize.png";
import Work6 from "public/assets/portfolio/dhu_hp-redesign__fullsize.png";
import Work7 from "public/assets/portfolio/weather-app__fullsize.png";
import Work8 from "public/assets/portfolio/imgSearch-app__fullsize.png";
import Work9 from "public/assets/portfolio/memo-app__fullsize.png";
import Work10 from "public/assets/portfolio/loginValidation-app__fullsize.png";
import Work11 from "public/assets/portfolio/catImg-app__fullsize.png";

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
    text: "test",
    tool: ["Next JS", " TypeScript ", " Module CSS "],
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
    text: "test",
    tool: [
      "React",
      " Javascript ",
      " SASS ",
      " Firebase ",
      " Illustrator ",
      " Photoshop ",
    ],
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
    text: "test",
    tool: [
      "React",
      " Javascript ",
      " SASS ",
      " Firebase ",
      " Illustrator ",
      " Photoshop ",
    ],
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
    text: "祖父母が司法書士、行政書士であり事務所をやっていてそのHPを作らせてもらいました。僕が大学2年生になる前の春休みに九州にいる祖父母の家に行って制作したHPです。つまづいた時に最初はうまい検索の仕方がわかりませんでしたが、徐々に検索力が身につきました。今思うとずっと手探り状態でやっていたなと思いましたがとても良い経験になりました。大学でWebの基礎を学んだ後初めて公の場に出しました。基本的にデザインは法務事務所らしくきっちりとした感じを出せるように作り、シンプルで情報量が多くならないように作りました。",
    tool: [
      "HTML",
      " CSS ",
      " JavaScript ",
      " Bootstrap ",
      " Firebase ",
      " Photoshop ",
    ],
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
    text: "test",
    tool: ["HTML", " SASS ", " JavaScript ", " Bootstrap ", " Micromodal.js "],
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
    text: "test",
    tool: ["HTML", " SASS ", " JavaScript ", " Bootstrap "],
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
    title: "Weather app",
    github: "https://github.com/t-riku/react__weather-app",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.6",
    text: "OpenWeather APIを使って都市の天気の情報をとってきて表示するアプリケーションを作成しました。WeatherコンポーネントからAPI経由でOpenWeatherサービスから天気情報を取得して、6つの都市の天気情報をブラウザ上に表示させています。ReactとTailwind CSSフレームワークを使い天気のアプリケーション作成を通してTailwind CSSの設定方法・使い方、React Hooksの使い方(useState, useEffect)、Fetch関数、コンポーネントへのpropsの渡し方などのReactの基本的な使い方を学ぶことができました。",
    tool: ["React", " Tailwind CSS ", " OpenWeather API ", " day.js "],
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
    text: "Pixabay APIを使い簡単な画像を探せるアプリケーションを作成しました。inputボックスに検索したいテキストを打ち込みEnterを押すとPixabay APIからデータをとってきてそれをuseStateで管理し、テキストに即した画像データを表示させています。これを作ったことでReact Hooksの使い方(useState, useRef)、Fetch関数、formとHooksの結びつけ方、コンポーネントへのpropsの渡し方を学びました。",
    tool: ["React", " Tailwind CSS ", " Pixabay API "],
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
    text: "簡単なメモアプリケーションを作成しました。テキストを打ち込んで追加ボタンを押すと、下のメモ一覧に表示され、削除ボタンを押すとその項目が削除されます。Hook化、FC、useCallback関数、Typescriptの基本の型付け、voidの使い方、スプレット構文を学びました。",
    tool: ["React", " TypeScript ", " Tailwind CSS "],
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
    text: "フォームを送信する際にバリデーションチェックをかけて正しく入力されていたらログインが通るフォームを作成しました。バリデーションチェックの仕方、if文の条件分岐、三項演算子を学びました。",
    tool: ["React", "CSS "],
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
    text: "Next JSで猫の画像を表示するアプリケーションを作成しました。ボタンを押すとAPI経由で猫の画像を取ってくる簡単な機能に加えて、loading時にサーバーサイドレンダリングによってHOMEコンポーネントのマウント時に猫の画像を取ってきて表示できることによって、ユーザー体験が良いものになっています。このアプリケーションを作ったことによって、サーバーサイドレンダリング（SSR）、NextでのFeach関数の書き方、Module CSSの使い方を学びました。",
    tool: [
      "Next",
      " Typescript ",
      " Module CSS ",
      " semantic-ui ",
      " The Cat API ",
    ],
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
    image: Work10,
    title: "Weather app React Native ver",
    github: "https://github.com/t-riku/react__login-app/tree/master",
    demo: "https://www.arttada.com/",
    category: "App",
    time: "2022.11",
    text: "フォームを送信する際にバリデーションチェックをかけて正しく入力されていたらログインが通るフォームを作成しました。バリデーションチェックの仕方、if文の条件分岐、三項演算子を学びました。",
    tool: ["Next", " Typescript ", " Module CSS "],
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
