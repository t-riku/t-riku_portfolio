import React from "react";
import classes from "src/components/process/Process.module.css";
import IMG1 from "public/assets/portfolio/1.jpg";
import IMG2 from "public/assets/portfolio/2.jpg";
import IMG3 from "public/assets/portfolio/3.jpg";
import IMG4 from "public/assets/portfolio/4.jpg";
import IMG5 from "public/assets/portfolio/5.jpg";
import IMG6 from "public/assets/portfolio/6.jpg";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: IMG1,
    time: "2014.11",
    title: "IT に興味を示す",
    text: "母親が2014年にiPhone6を買ってきた。当時テレビでiPhoneのニュースを見てもこんなちっちゃい物が何に役に立つのだろうって思っていたが、実際に見て触ってみると常識が覆された。当時BLEACHの主人公になりたいと思っていた僕が初めて将来こんなすごいものを作りたいと思った。",
    class: "",
  },
  {
    id: 2,
    image: IMG2,
    time: "2016.10",
    title: "初めてiPhoneを手にする",
    text: "母親が2014年にiPhone6を買ってきた。当時テレビでiPhoneのニュースを見てもこんなちっちゃい物が何に役に立つのだろうって思っていたが、実際に見て触ってみると常識が覆された。当時BLEACHの主人公になりたいと思っていた僕が初めて将来こんなすごいものを作りたいと思った。",
    // class:{classes.timeline__inverted},
  },
  {
    id: 3,
    image: IMG3,
    time: "2020.4",
    title: "Webを学び始める",
    text: "母親が2014年にiPhone6を買ってきた。当時テレビでiPhoneのニュースを見てもこんなちっちゃい物が何に役に立つのだろうって思っていたが、実際に見て触ってみると常識が覆された。当時BLEACHの主人公になりたいと思っていた僕が初めて将来こんなすごいものを作りたいと思った。",
  },
  {
    id: 4,
    image: IMG4,
    time: "2021.4",
    title: "フロントエンドの設計や構築が好きになる",
    text: "母親が2014年にiPhone6を買ってきた。当時テレビでiPhoneのニュースを見てもこんなちっちゃい物が何に役に立つのだろうって思っていたが、実際に見て触ってみると常識が覆された。当時BLEACHの主人公になりたいと思っていた僕が初めて将来こんなすごいものを作りたいと思った。",
  },
  {
    id: 5,
    image: IMG5,
    time: "2021.4",
    title: "Reactを使ったHPを制作する",
    text: "母親が2014年にiPhone6を買ってきた。当時テレビでiPhoneのニュースを見てもこんなちっちゃい物が何に役に立つのだろうって思っていたが、実際に見て触ってみると常識が覆された。当時BLEACHの主人公になりたいと思っていた僕が初めて将来こんなすごいものを作りたいと思った。",
  },
  {
    id: 6,
    image: IMG6,
    time: "2021.4~",
    title: "Webサイト制作経験を重ねる",
    text: "母親が2014年にiPhone6を買ってきた。当時テレビでiPhoneのニュースを見てもこんなちっちゃい物が何に役に立つのだろうって思っていたが、実際に見て触ってみると常識が覆された。当時BLEACHの主人公になりたいと思っていた僕が初めて将来こんなすごいものを作りたいと思った。",
  },
];

const Process = () => {
  return (
    <section id="process">
      <h5>Process</h5>
      <h2>My Process</h2>
      {/* <p className={classes.process__des}>
        僕が
        IT/Webに興味を持ち、実際にプロダクトを制作している現在までの過程です。
      </p> */}

      <div className={`container ${classes.contact__container}`}>
        <ul className={classes.timeline}>
          {data.map(({ id, image, time, title, text }, index) => {
            return (
              <li
                key={id}
                className={index % 2 === 0 ? "" : classes.timeline__inverted}
              >
                <div className={classes.timeline__image}>
                  <Image
                    className={`${classes.rounded__circle} ${classes.img__fluid}`}
                    src={image}
                    width={200}
                    height={200}
                    alt="process__image"
                  />
                </div>
                <div className={classes.timeline__panel}>
                  <div className={classes.timeline__heading}>
                    <h4>{time}</h4>
                    <h4 className={classes.subheading}>{title}</h4>
                  </div>
                  <div className={classes.timeline__body}>
                    <p className={classes.text__muted}>{text}</p>
                  </div>
                </div>
              </li>
            );
          })}
          <li className={classes.timeline__inverted}>
            <div className={classes.timeline__image}>
              <h4>
                Until
                <br />
                <br />
                now!!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process;
