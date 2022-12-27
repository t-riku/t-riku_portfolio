import Modal from "react-modal";
import { useState } from "react";
import classes from "src/components/modal/Modal.module.css";
import projectsData from "../../Data/work/ProjectsData";

// modalのスタイリングはWorkItems.tsxのcustomStyles

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement("#__next");

const WorkModal = () => {
  const [modalIsOpen, setIsOpen] = useState<number | boolean>(false);

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {projectsData.map((item, index) => {
        return (
          <Modal
            closeTimeoutMS={200}
            contentLabel="modal"
            // isOpenがtrueならモダールが起動する
            isOpen={modalIsOpen === index}
            // モーダルを閉じる処理を定義
            onRequestClose={() => closeModal()}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            key={index}
          >
            <div className={classes.modal}>
              <div
                className={`${classes.modal__content} ${classes.workModal__content}`}
                key={item.id}
              >
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
        );
      })}
    </>
  );
};

export default WorkModal;
