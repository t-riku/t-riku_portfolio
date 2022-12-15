import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript,
            }}
          ></script>
        </body>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()`;

function setInitialColorMode() {
  function getInitialColorMode() {
    //ストレージからthemeを取得する。
    const storedPreferenceMode = window.localStorage.getItem("theme");
    const hasStoredPreference = typeof storedPreferenceMode === "string";

    if (hasStoredPreference) {
      return storedPreferenceMode;
    }

    //現在のpreference状態を確認
    const preference = window.matchMedia("(prefers-color-scheme):light");
    const hasMedeaQueryPreference = typeof preference.matches === "boolean";

    if (hasMedeaQueryPreference) {
      return preference.matches ? "light" : "dark";
    }
    return "dark";
  }

  const currentColorMode = getInitialColorMode();
  console.log(currentColorMode);
  if (currentColorMode === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

export default MyDocument;
