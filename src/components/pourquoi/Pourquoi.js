import "./Pourquoi.css";
import { useState } from "react";

const Pourquoi = () => {
  return (
    <div className="pourquoi">
      <h1>Pourquoi amma assis</h1>
      <p>
        Le mal-être Dans tous les secteurs d’activité, sous l’effet des
        mutations du monde du travail ({" "}
        <span>
          complexité des tâches, réduction des temps de repos, individualisation
          du travail, exigences accrues des clients, mutation technologique,
          taches répétitives
        </span>{" "}
        ,…) de plus en plus de salariés souffrent de symptômes liés à{" "}
        <b>des risques psychosociaux</b>. En plus de leurs effets sur la santé
        des individus, les risques psychosociaux ont un impact sur le
        fonctionnement des entreprises (absentéisme, turnover, ambiance de
        travail…).{" "}
        <div className="span2">
          Agir pour mieux les prévenir et en limiter leurs conséquences est
          aujourd’hui incontournable pour toute structure.
        </div>
      </p>
    </div>
  );
};

export default Pourquoi;
