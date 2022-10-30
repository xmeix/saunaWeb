import "./Quoi.css";
import quoi from "../../media/quoi.svg";
const Quoi = () => {
  return (
    <div className="quoi">
      <h1 className="wha">C'est quoi un massage amma assis ?!</h1>
      <div className="rep">
        <div className="info">Une Technique Codifiée sous forme d’<b>enchainements précis</b>.</div>
        <div className="info long">
          
          composés de <b>pressions</b>, d’<b>étirements</b> et de <b>percussions</b> qui stimule des
          points d’acupression au niveau de <b>la tête, des épaules, des bras, des
          mains, de la nuque, du dos</b> et <b>des hanches</b>.
        </div>
        <div className="info">Massage <b>professionnel sans danger</b>.</div>

        <div className="info">rapide et efficace.</div>
         
        <div className="info">
           <b>soulage</b>  les tensions
        </div>
        <div className="info">
           procure une profonde détente physico-mentale
        </div>
        <div className="info">
          procure une dynamisation du corps.
        </div>
        <div className="info colEnt">
          {" "}
          Le Amma assis se développe en entreprise (bureaux, administrations…).
        </div>
        <div className="info">
          {" "}
           il diminue l’anxiété 
        </div>
        <div className="info">
          {" "}
           soulage du stress pour faire place à état de bien-être général.
        </div>
        <a href="#comment" className="next">
           Déroulement d'une séance ➡ 
        </a>
      </div>
    </div>
  );
};

export default Quoi;
