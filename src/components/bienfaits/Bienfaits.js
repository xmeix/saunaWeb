import { useState } from "react";
import "./Bienfaits.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Bienfaits = () => {
  const Bienfaits = [
    {
      index: 0,
      text: "Prévient et réduit les troubles Musculo-Squelettiques",
    },
    {
      index: 1,
      text: "Réduit les effets du stress, la fatigue, les tensions",
    },
    {
      index: 2,
      text: "Procure une détente physico-mentale",
    },
    {
      index: 3,
      text: "Favorise le bien-être collectif et individuel",
    },
    {
      index: 4,
      text: "Améliore la relation employeur & collaborateurs",
    },

    {
      index: 5,
      text: "Pérennise la performance et le bien-être au travail",
    },
    {
      index: 6,
      text: "Dynamise, favorise l’échange, l’ouverture et la créativité",
    },
  ];

  const benefit = Bienfaits.map((elem, i) => (
    <SwiperSlide className="card" key={elem.index}>
      {elem.text}
    </SwiperSlide>
  ));

  return (
    <div className="bienfaits">
      <p className="quote">"L’énergie de chacun au service de l’entreprise"</p>
      <h4 className="title">Les Bienfaits du massage en entreprise</h4>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="cards"
      >
        {benefit}
      </Swiper>
    </div>
  );
};

/*
const Bienfaits = () => {
  const [index, setIndex] = useState(0);
  const Bienfaits = [
    {
      index: 0,
      text: "Prévient et réduit les troubles Musculo-Squelettiques",
    },
    {
      index: 1,
      text: "Réduit les effets du stress, la fatigue, les tensions",
    },
    {
      index: 2,
      text: "Procure une détente physico-mentale",
    },
    {
      index: 3,
      text: "Favorise le bien-être collectif et individuel",
    },
    {
      index: 4,
      text: "Améliore la relation employeur & collaborateurs",
    },

    {
      index: 5,
      text: "Pérennise la performance et le bien-être au travail",
    },
    {
      index: 6,
      text: "Dynamise, favorise l’échange, l’ouverture et la créativité",
    },
  ];

  const AddFunct = () => {
      if(index == 6 ) setIndex(0);
      else setIndex(index + 1);

      var div = document.getElementsByClassName("cardactive");
       
  };
  const SusFunct = () => {
    if(index == 0 ) setIndex(6);
    else setIndex(index - 1);
  };
  return (
    <div className="bienfaits">
      <button onClick={SusFunct}>previous</button>
      <div className="cards">
        <div className="cardprec hover" onClick={SusFunct}>{Bienfaits[index ].text}</div>
        <div className="cardactive hover">{Bienfaits[(index + 1)%7].text}</div>
        <div className="cardsuiv hover" onClick={AddFunct}>{Bienfaits[(index + 2)%7].text}</div>
      </div>
      <button onClick={AddFunct}>next</button>
    </div>
  );
};
*/
export default Bienfaits;
