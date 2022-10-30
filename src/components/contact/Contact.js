import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import biocoop from "../../media/biocoop.png";
import sobio from "../../media/sobio.png";
import Adapei from "../../media/Adapei.png";
import interm from "../../media/interm.png";
import poleemploi from "../../media/poleemploi.png";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import "./Contact.css";
import moi from "../../media/Legrand.png";
const Contact = () => {
  const form = useRef();
  init("2BxKa-kSXW1-GcF1r");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v1281b9",
        "template_46o189v",
        form.current,
        "2BxKa-kSXW1-GcF1r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="first">
        <div className="intro">
          Grace à sa formule simple et pratique, le massage Amma assis a cet
          avantage de pouvoir aller à la rencontre des clients. Plus besoin de
          vous déplacer, le massage vient à vous en toutes circonstances et
          occasions
        </div>
        <div className="Qui">
          <h1>Qui-Suis-Je? </h1>
          <div className="figure">
            <img src={moi} alt="Rahima legrand" />
            <h4>Rahima LEGRAND</h4>
            <p className="Bio">
              Praticienne en massage Amma assis Diplôme d’État de l’école Xavier
              COURT Paris, Seule école reconnue en Europe par David Palmer le
              père du Amma Assis.
            </p>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="social">
          <h4>Je suis sociable 😉 </h4>
          <AlternateEmailRoundedIcon /> contact@ammadyn.fr
          <LocalPhoneRoundedIcon />
          06 99 58 01 47
        </div>
        <div className="contactform">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>

        <h1>ILS M’ONT FAIT CONFIANCE</h1>
        <div className="confiance">
          <img src={biocoop} alt="" />
          <img src={sobio} alt="" />
          <img src={Adapei} alt="" />
          <img src={interm} alt="" />
          <img src={poleemploi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
