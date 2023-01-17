import Modal from "react-modal";
import { useState } from "react";
import classes from "src/components/modal/Modal.module.css";
import Image from "next/image";
import ME from "public/assets/me/IMG_1304.png";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

// スタイリング
const customStyles: any = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: "5001",
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "90vw",
    height: "90vh",
    padding: "4rem",
    transform: "translate(-50%, -50%)",
    zIndex: "10000",
    boxShadow: "0 5px 16px rgba(0, 0, 0, 0.9)",
    background: "#ebeaea",
    borderRadius: "1rem",
  },
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement("#__next");

const MeModal = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  // モーダルを開く処理
  const openModal = () => {
    setIsOpen(true);
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <a onClick={openModal} className="btn">
        More
      </a>

      <Modal
        closeTimeoutMS={200}
        contentLabel="modal"
        // isOpenがtrueならモダールが起動する
        isOpen={modalIsOpen}
        // モーダルを閉じる処理を定義
        onRequestClose={closeModal}
        // スタイリングを定義
        style={customStyles}
      >
        <div className={classes.modal}>
          <div className={classes.modal__content}>
            <div className={classes.modal__content__left}>
              <Image
                src={ME}
                width={413}
                height={413}
                alt="My Image"
                className={classes.modal__img}
              />
              <h2>Riku Tada / 多田　陸</h2>
              <div className={classes.modal__socials}>
                <a
                  href="https://www.facebook.com/dinga.riku"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/t.riku_1013/?hl=ja"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://twitter.com/Rikudinga1013"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IoLogoTwitter />
                </a>
                <a
                  href="https://github.com/t-riku"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>
              </div>
              <p className={classes.modal__sns__text}>
                SNSは大学生以降全く更新しておらず見る専門です。
              </p>
              <div className={classes.contact__options}>
                <article className={classes.contact__option}>
                  <MdOutlineEmail className={classes.contact__option_icon} />
                  <h4>Email</h4>
                  <h5>dingariku@icloud.com</h5>
                  <a
                    href="mailto:dingariku@icloud.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Send a message
                  </a>
                </article>
                <article className={classes.contact__option}>
                  <BsWhatsapp className={classes.contact__option_icon} />
                  <h4>Phone Number</h4>
                  <h5>080-9800-1264</h5>
                  <a
                    href="tel:080-9800-1264"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Telephone
                  </a>
                </article>
              </div>
            </div>

            <div className={classes.modal__content__right}>
              <ul className={classes.aboutMe}>
                <li>
                  <span>なぜフロントエンドエンジニアに：</span>
                  惹かれたのは 「ユーザーとの距離を近く感じられる」
                  「画面やデザインを作るのが好き」
                  「モダンな技術が使いたい」の3点がありました。
                  フロントエンドエンジニアは、ブラウザやUIなどユーザーが直接見て操作する部分を設計・構築するので、
                  ユーザーに最大限配慮した仕事が求められます。
                  そのため、他のエンジニアに比べて、よりユーザーとの距離を近く感じることができ、
                  自分の仕事が直接ユーザーに触れているように感じることができる所にとても惹かれました。人のために頑張ることが好きで相手目線で
                  物事を考えることが多い私は向いているなと思いました。
                  2つ目の理由としてはこれまでに色々なWebサイトを作ってみて、
                  自分の書いたコードがわかりやすく目に見え形になる事にやりがいを覚え、コードを書いていてとても楽しかったからです。
                  3つ目の理由としてはモダンな技術を使うことによってより多くの人によりいいサービスが届くと思うためです。
                  例えば新しい技術を導入することによってサイトのパフォーマンスが上がったり、落ちにくくなって安定性が上がったり、
                  そもそも新しい機能を追加できたりなどの利点があります。そうすることによってユーザーが伸びたりユーザー1人あたりの
                  売り上げが増加したり競合と差別化できたり、結果売上が上がるなどの良い点があると思います。トレンドの技術の移り変わりが速く、
                  新しいことに挑戦したい私はフロントエンドエンジニアに向いているなと思いました。
                </li>
                <li>
                  <span>キャリアビジョン：</span>
                  私は将来幅広い知識を身につけ、新しい技術やトレンドの技術に対応し第一線で活躍できるフロントエンドエンジニアになりたいです。
                  現場では多様性が求められる場面でも変化に対応できる人材が求められると思っていて、様々な方面でエンジニアが活躍できる領域が広がっていると思います。フロントエンドエンジニアへのニーズの変化に対応できるよう、自分の得意な分野、ひとつのスキルにこだわらず、常にアンテナを張って、流動的に新しい情報をキャッチアップし新しい技術に対応していきたいです。そうして実装開発を行うことでより良いサービスが開発できると思うためです。
                  フロントエンドエンジニアはさまざまな職種の人とコミュニケーションを取りながら仕事を進める必要があると聞きます。Webデザイナーやコーダー、Webディレクターやサーバーサイドエンジニアとやり取りをしながら制作に当たるときも、深い話ができるようにデザイン設計、SEO、アクセス解析の知識、バックエンド言語も習得したいと考えております。
                  ReactフレームワークのNext.jsと現場では必須になりつつあるTypescript、UI/UX設計を学んできたようにこの先も新しい技術を学びつつ、幅広いスキルを身につけたいと考えております。
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.modal__content__medium}>
            <ul className={classes.aboutMe}>
              <li>
                <span>誕生日 : </span>
                2000.10.13
              </li>
              <li>
                <span>現住 : </span>
                神奈川県藤沢市湘南台
              </li>
              <li>
                <span>趣味 : </span>
                音楽、旅行、料理、映画、古着巡り、テニス、スマブラ
              </li>
              <li>
                <span>好きな食べ物：</span>
                豆腐(湯豆腐、冷奴、卵豆腐、豆乳)
              </li>
              <li>
                <span>好きなもの : </span>
                ONE OK ROCK、古着、温泉、自然観光
              </li>
              <li>
                <span>好きな動物 : </span>
                シャチ
              </li>
              <li>
                <span>長所：</span>
                相手の立場に立って考えることが多い、諦めない心、傾聴力が高い、笑顔が多い、論理的に物事を考える
              </li>
              <li>
                <span>短所：</span>
                心配性、記憶力が悪い、ケチ、滑舌が悪い
              </li>
            </ul>
            <div className={classes.chronology}>
              <div className={classes.chronology__item}>
                <p>2000</p>
                <p>生まれる</p>
              </div>
              <div className={classes.chronology__item}>
                <p>2002</p>
                <p>湘南台保育園入園</p>
              </div>
              <div className={classes.chronology__item}>
                <p>2007</p>
                <p>湘南台小学校入学</p>
              </div>
              <div className={classes.chronology__item}>
                <p>2013</p>
                <p>湘南台中学入学</p>
              </div>
              <div className={classes.chronology__item}>
                <p>2016</p>
                <p>七里ガ浜高等学校入学</p>
              </div>
              <div className={classes.chronology__item}>
                <p>2020</p>
                <p>デジタルハリウッド大学入学</p>
              </div>
              <div className={classes.chronology__item}>
                <p>2024</p>
                <p>デジタルハリウッド大学卒業見込み</p>
              </div>
            </div>
          </div>

          <button
            onClick={closeModal}
            className={classes.modal__btn__close__bottom}
          >
            CLOSE
          </button>

          <button
            onClick={closeModal}
            className={classes.modal__btn__close}
          ></button>
        </div>
      </Modal>
    </>
  );
};

export default MeModal;
