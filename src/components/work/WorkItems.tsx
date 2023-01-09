import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import classes from "src/components/work/Work.module.css";
import classess from "src/components/modal/Modal.module.css";
import { FaGithub } from "react-icons/fa";
// import WorkModal from "src/components/modal/WorkModal";
import projectsData from "../../Data/work/ProjectsData";
import Modal from "react-modal";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

// 型定義
export type ITEM = {
  id: number;
  image: StaticImageData;
  title: string;
  github: string;
  demo: string;
  category: string;
  // time: number | string;
  // text: string;
  // tool: string;
  // images?: [{ original: string; thumbnail: string }];
};

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
    width: "91vw",
    height: "90vh",
    padding: "3.5rem",
    transform: "translate(-50%, -50%)",
    zIndex: "10000",
    boxShadow: "0 5px 16px rgba(0, 0, 0, 0.9)",
    background: "#ebeaea",
    borderRadius: "1rem",
  },
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement("#__next");

const WorkItems = ({ item }: { item: ITEM }) => {
  // モーダルの表示状態と切り替える為にState(props)を準備
  // false = 非表示、数値 = 表示しているModalの番目とする
  const [modalIsOpen, setIsOpen] = useState<number | boolean>(false);

  //どのモーダルを表示するのか操作するために関数を準備
  const openModal = (num: number) => {
    setIsOpen(num);
  };
  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  };

  // shouldCloseOnEscやshouldCloseOnOverlayCliceを使う場合に設定が必要
  // モーダルを非表示の状態にするため、falseを指定する
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={classes.work__card} key={item.id}>
      <div className={classes.work__img}>
        <Image src={item.image.src} width={313} height={313} alt={item.title} />
      </div>

      <h3 className={classes.work__title}>{item.title}</h3>
      <div className={classes.work__cta}>
        {/* ========modalwindow========= */}
        {/* <WorkModal /> */}
        <a onClick={() => openModal(item.id - 1)} className="btn">
          More
        </a>
        {projectsData.map((item, index) => {
          return (
            <Modal
              closeTimeoutMS={200}
              contentLabel="modal"
              // isOpenがtrueならモダールが起動する
              isOpen={modalIsOpen === index}
              // モーダルが開いた後の処理を定義
              onAfterOpen={afterOpenModal}
              // モーダルを閉じる処理を定義
              onRequestClose={() => closeModal()}
              // スタイリングを定義
              style={customStyles}
              shouldCloseOnEsc={true}
              shouldCloseOnOverlayClick={true}
              key={item.id}
            >
              <div className={classess.modal}>
                <div
                  className={`${classess.modal__content} ${classess.workModal__content}`}
                >
                  <div className={classess.modal__content__left}>
                    <div className={classess.work__description}>
                      <h3>
                        <span>{item.title}</span>
                      </h3>
                      <div className={classess.work__category_time}>
                        <ul>
                          <li>{item.category}</li>
                          <li>
                            <small>/</small>
                          </li>
                          <li>{item.time}</li>
                        </ul>
                      </div>
                      <p>{item.text}</p>
                      <div className={classess.work__modal__btn}>
                        <a
                          href={item.demo}
                          className={`btn btn-primary ${classes.work__livedemo}`}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Live Demo
                        </a>
                        <a
                          href={item.github}
                          className={`btn ${classes.work__github}`}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <FaGithub />
                        </a>
                      </div>
                      <div className={classess.work__languages_tools}>
                        <h3>
                          <span>使用した言語・ツールなど</span>
                        </h3>
                        <ul>
                          <li>{item.tool}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <div className={classess.modal__content__right}>
                    <ImageGallery
                      items={item.images}
                      showNav={false}
                      showPlayButton={false}
                      thumbnailPosition="bottom"
                    />
                  </div> */}
                </div>

                <button
                  onClick={closeModal}
                  className={classess.modal__btn__close__bottom}
                >
                  CLOSE
                </button>

                <button
                  onClick={closeModal}
                  className={classess.modal__btn__close}
                ></button>
              </div>
            </Modal>
          );
        })}

        <a
          href={item.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          Live Demo
        </a>
        <a
          href={item.github}
          className={classes.work__github}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
