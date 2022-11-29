import React, { ChangeEvent, useState } from "react";
import classes from "src/pages/components/contact/Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { send } from "emailjs-com";
// import { emailjsConfig } from "./Emailjs";
import { init } from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // ==============================
  const config = {
    userId: process.env.NEXT_PUBLIC_USER_ID,
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  };

  if (
    config.userId !== undefined &&
    config.serviceId !== undefined &&
    config.templateId !== undefined
  ) {
    init(config.userId);
  }

  const emailjsConfig = config;

  // =================================

  const sendMail = () => {
    if (
      emailjsConfig.serviceId !== undefined &&
      emailjsConfig.templateId !== undefined
    ) {
      const template_param = {
        to_name: name,
        from_email: email,
        message: message,
      };

      send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        template_param
      ).then(() => {
        window.alert("お問い合わせを送信致しました。");
        setName("");
        setEmail("");
        setMessage("");
      });
    }
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMail();
  };

  return (
    <section className={classes.contact} id="contact">
      <h5>contact</h5>
      <h2>お問い合わせ</h2>
      <p>
        最後までご覧いただきありがとうございました。
        <br />
        このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
        <br />
        もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
      </p>

      <div className={`container ${classes.contact__container}`}>
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
        {/* END OF CONTACT OPTIONS */}
        <form className={classes.form} onSubmit={onSubmit}>
          <input
            className={classes.input}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            required
          />
          <input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <textarea
            className={classes.textarea}
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
