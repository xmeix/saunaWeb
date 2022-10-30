import "./Comment.css";
import materiel from "../../media/materiel.jpg";

import second from "../../media/secondS.jpg";
import stress from "../../media/stress.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper";

const Comment = () => {
  return (
    <div className="comment">
      <h1 className="what">Déroulement d’une séance</h1>

      <h3 className="what2">
        Définir un groupe de personnes par service ou à la demande
      </h3>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 30,
          shadowScale: 0.93,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCube, Pagination]}
        className="swiper"
      >
        <SwiperSlide className="element">
          <p>
            <b>Le Amma assis</b> se pratique sur une personne habillée, sur une
            chaise ergonomique adaptée aux entreprises.
          </p>
          <img src={materiel} className="image" alt="" />
        </SwiperSlide>
        <SwiperSlide className="element">
          <img src={second} className="image" alt="" />
          <p>
            on vous propose <b>Une séance</b>, de seulement <b>20 minutes</b>
            ,qui va vous permettre de ressentir un soulagement rapide des
            douleurs liées aux positions du poste et aux mouvements répétitifs
          </p>
        </SwiperSlide>
        <SwiperSlide className="element">
          <p>
            Cette technique <b>permet</b> d’agir de manière préventive, afin{" "}
            <b>d’éviter certains problèmes physiques</b> de s’installer
            (tendinites, maux de tête, maux de dos ou syndromes du canal
            carpien), ce qui s’appelle T.M.S. (Troubles MusculoSquelettiques)
          </p>
          <img src={stress} className="image" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Comment;
