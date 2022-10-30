import homepic from "../../media/home.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="textcontainer">
        <h1>"Booster l’engagement de vos employés"</h1>
        <p className="definition">
          Vous voulez prendre soin de vos collaborateurs, réduire le stress,
          l’absentéisme et le présentéisme, améliorer le climat social et la
          productivité de votre entreprise? Le Amma assis est l’outil idéal.
        </p>
        <a classname="rendev" href="#contact">
          Schedule a massage.
        </a>
      </div>
      <img className="homebackground" src={homepic} alt="home" />
    </div>
  );
};

export default Home;
