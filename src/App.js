import "./App.css"; 
import Bienfaits from "./components/bienfaits/Bienfaits";
import Comment from "./components/comment/Comment";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Pourquoi from "./components/pourquoi/Pourquoi";
import Quoi from "./components/Quoi/Quoi";
function App() {
  return (
    <div className="app"> 
        <Navbar  />
      
      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="quoi">
          <Quoi />
        </section>
        <section id="comment">
          <Comment />
        </section>
        <section id="pourquoi">
          <Pourquoi />
        </section>
        <section id="bienfaits">
          <Bienfaits />
        </section>
        <section id="tarif">
          <h1>fifth</h1>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </div>
  );
}

export default App;
