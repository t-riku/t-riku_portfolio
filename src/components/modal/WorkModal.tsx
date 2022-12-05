import Modal from "react-modal";
import { useState } from "react";
import classes from "src/components/modal/Modal.module.css";
import projectsData from "../../Data/work/ProjectsData";

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

const WorkModal = () => {
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
          {projectsData.map((item) => {
            return (
              <div className={classes.modal__content} key={item.id}>
                <div className={classes.modal__content__left}>
                  <div className={classes.work__description}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className={classes.work__languages_tools}>
                    <h3>使用した言語・ツールなど</h3>
                    <ul>
                      <li>{item.tool}</li>
                    </ul>
                  </div>
                </div>
                <div className={classes.modal__content__right}>test2</div>
              </div>
            );
          })}

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

export default WorkModal;
