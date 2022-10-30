import "./Tarif.css";
const Tarif = () => {
  const propositions = [
    {
      id: 0,
      title: "Proposition 1",
    },
  ];
  return (
    <div className="tarif">
      
      <div className="whynot">
        Pourquoi ne pas penser à vos collaborateurs, associés ou clients et
        invités en leur offrant un moment de bien-être pour un évènement de
        votre choix: séminaire, anniversaire et/ou Noël de l’entreprise, à
        l’occasion de portes ouvertes ou simplement lors de la semaine de la
        Qualité de Vie au Travail? Les occasions ne manquent pas pour prendre
        soin de ceux qui comptent pour vous!
      </div>
      <div className="proposition"></div>
    </div>
  );
};

export default Tarif;
