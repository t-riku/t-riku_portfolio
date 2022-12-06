import Modal from "react-modal";
import { useState } from "react";
import classes from "src/components/modal/Modal.module.css";
import Image from "next/image";
import ME from "public/assets/me/IMG_1304.png";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

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
    background: "var(--color-white)",
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

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
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
        // モーダルが開いた後の処理を定義
        onAfterOpen={afterOpenModal}
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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://inatagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://twitter.com"
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
              <p> SNSは大学生以降全く更新しておらず見る専門です。</p>
            </div>
            <div className={classes.modal__content__right}>
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
                  <span>好きな動物 : </span>
                  シャチ
                </li>
                <li>
                  <span>好きなもの : </span>
                  ONE OK ROCK
                </li>
                <li>
                  <span>趣味 : </span>
                  スマブラ、LIVEに行くこと
                </li>
                <li>
                  <span>好きな食べ物:</span>
                  豆腐(湯豆腐、冷奴、卵豆腐、豆乳)
                </li>
                <li>
                  <span>目標:</span>
                  将来はフロントエンドだけでなく幅広く活躍、仕事ができるエンジニアを目指しています。バックエンドの知識がまだ乏しいのでコードを書いたり、既存のWebsiteに導入したりしてバックエンドの専門性を高めたいと思っています。今はWebだけでなくアプリなどもReactなどを使って開発しています。
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
